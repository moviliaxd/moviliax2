'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Mail, Lock, User, Building2, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react'

export default function RegistroPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: '',
    empresa: '',
    cargo: '',
    pais: '',
    intereses: [] as string[],
    aceptaTerminos: false,
    aceptaNewsletter: true
  })

  const interesesOptions = [
    'Electromovilidad',
    'Logística Inteligente',
    'Deep Tech',
    'Smart Cities',
    'Última Milla',
    'Supply Chain',
    'Movilidad Urbana',
    'Sostenibilidad'
  ]

  const paises = [
    'Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia',
    'Costa Rica', 'Ecuador', 'El Salvador', 'Guatemala',
    'Honduras', 'México', 'Nicaragua', 'Panamá',
    'Paraguay', 'Perú', 'República Dominicana', 'Uruguay', 'Venezuela'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleInteresesChange = (interes: string) => {
    setFormData(prev => ({
      ...prev,
      intereses: prev.intereses.includes(interes)
        ? prev.intereses.filter(i => i !== interes)
        : [...prev.intereses, interes]
    }))
  }

  const validateForm = () => {
    if (!formData.nombre.trim()) return 'El nombre es requerido'
    if (!formData.email.trim()) return 'El email es requerido'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Email inválido'
    if (formData.password.length < 8) return 'La contraseña debe tener al menos 8 caracteres'
    if (formData.password !== formData.confirmPassword) return 'Las contraseñas no coinciden'
    if (!formData.aceptaTerminos) return 'Debes aceptar los términos y condiciones'
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/auth/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: formData.nombre,
          apellido: formData.apellido,
          email: formData.email,
          password: formData.password,
          empresa: formData.empresa,
          cargo: formData.cargo,
          pais: formData.pais,
          intereses: formData.intereses,
          aceptaNewsletter: formData.aceptaNewsletter
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al crear la cuenta')
      }

      setSuccess(true)
      
      // Redirigir después de 3 segundos
      setTimeout(() => {
        router.push('/login?registered=true')
      }, 3000)

    } catch (err: any) {
      setError(err.message || 'Error al crear la cuenta. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 font-['Exo']">
            ¡Cuenta Creada!
          </h2>
          <p className="text-gray-400 mb-4">
            Tu cuenta ha sido creada exitosamente. Hemos enviado un email de confirmación a <strong className="text-white">{formData.email}</strong>
          </p>
          <p className="text-sm text-gray-500">
            Serás redirigido al login en unos segundos...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#00ffff] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver al Home
        </Link>

        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 md:p-12 rounded-2xl border border-[#00d4ff]/20">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Exo']">
              Únete a Moviliax
            </h1>
            <p className="text-gray-400 text-lg">
              Conecta con la comunidad líder de movilidad e innovación en LATAM
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Información Personal */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 font-['Exo']">
                Información Personal
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 mb-2 text-sm">Nombre *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-[#0a0a0f] border border-[#00d4ff]/30 rounded-xl text-white focus:border-[#00d4ff] focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 text-sm">Apellido</label>
                  <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#00d4ff]/30 rounded-xl text-white focus:border-[#00d4ff] focus:outline-none transition-colors"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>
            </div>

            {/* Credenciales */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 font-['Exo']">
                Credenciales
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 mb-2 text-sm">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-[#0a0a0f] border border-[#00d4ff]/30 rounded-xl text-white focus:border-[#00d4ff] focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Contraseña *</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        minLength={8}
                        className="w-full pl-12 pr-4 py-3 bg-[#0a0a0f] border border-[#00d4ff]/30 rounded-xl text-white focus:border-[#00d4ff] focus:outline-none transition-colors"
                        placeholder="Mínimo 8 caracteres"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Confirmar Contraseña *</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-[#0a0a0f] border border-[#00d4ff]/30 rounded-xl text-white focus:border-[#00d4ff] focus:outline-none transition-colors"
                        placeholder="Repite la contraseña"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Información Profesional */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 font-['Exo']">
                Información Profesional
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 mb-2 text-sm">Empresa</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-[#0a0a0f] border border-[#00d4ff]/30 rounded-xl text-white focus:border-[#00d4ff] focus:outline-none transition-colors"
                      placeholder="Tu empresa"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 text-sm">Cargo</label>
                  <input
                    type="text"
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#00d4ff]/30 rounded-xl text-white focus:border-[#00d4ff] focus:outline-none transition-colors"
                    placeholder="Tu cargo"
                  />
                </div>

                <div>
                  <label htmlFor="pais" className="block text-gray-400 mb-2 text-sm">País</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <select
                      id="pais"
                      name="pais"
                      value={formData.pais}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-[#0a0a0f] border border-[#00d4ff]/30 rounded-xl text-white focus:border-[#00d4ff] focus:outline-none transition-colors appearance-none"
                      aria-label="Selecciona tu país"
                    >
                      <option value="">Selecciona tu país</option>
                      {paises.map(pais => (
                        <option key={pais} value={pais}>{pais}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Intereses */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 font-['Exo']">
                Áreas de Interés
              </h3>
              <p className="text-gray-400 text-sm mb-4">Selecciona los temas que más te interesan</p>
              
              <div className="flex flex-wrap gap-3">
                {interesesOptions.map(interes => (
                  <button
                    key={interes}
                    type="button"
                    onClick={() => handleInteresesChange(interes)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      formData.intereses.includes(interes)
                        ? 'bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white'
                        : 'bg-[#0a0a0f] text-gray-400 border border-[#00d4ff]/30 hover:border-[#00d4ff]'
                    }`}
                  >
                    {interes}
                  </button>
                ))}
              </div>
            </div>

            {/* Términos y Newsletter */}
            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="aceptaTerminos"
                  checked={formData.aceptaTerminos}
                  onChange={handleChange}
                  required
                  className="mt-1 w-5 h-5 rounded border-[#00d4ff]/30 bg-[#0a0a0f] text-[#00d4ff] focus:ring-[#00d4ff] focus:ring-offset-0"
                />
                <span className="text-gray-400 text-sm">
                  Acepto los{' '}
                  <Link href="/terminos" className="text-[#00d4ff] hover:text-[#00ffff]">
                    términos y condiciones
                  </Link>
                  {' '}y la{' '}
                  <Link href="/privacidad" className="text-[#00d4ff] hover:text-[#00ffff]">
                    política de privacidad
                  </Link>
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="aceptaNewsletter"
                  checked={formData.aceptaNewsletter}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 rounded border-[#00d4ff]/30 bg-[#0a0a0f] text-[#00d4ff] focus:ring-[#00d4ff] focus:ring-offset-0"
                />
                <span className="text-gray-400 text-sm">
                  Quiero recibir el newsletter semanal RadarX y novedades de Moviliax
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creando cuenta...
                </>
              ) : (
                'Crear Cuenta'
              )}
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-400 text-sm">
              ¿Ya tienes cuenta?{' '}
              <Link href="/login" className="text-[#00d4ff] hover:text-[#00ffff] font-semibold">
                Inicia sesión aquí
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}