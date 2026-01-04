'use client'

import { useState } from 'react'

interface ConnectFormProps {
  defaultPlan?: 'free' | 'pro' | 'enterprise'
}

export default function ConnectForm({ defaultPlan = 'free' }: ConnectFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    empresa: '',
    puesto: '',
    pais: '',
    telefono: '',
    linkedin_url: '',
    plan: defaultPlan,
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const response = await fetch('/api/connect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al registrarse')
      }

      setMessage({
        type: 'success',
        text: data.message || '¡Registro exitoso! Revisa tu email.',
      })

      // Limpiar formulario
      setFormData({
        email: '',
        nombre: '',
        empresa: '',
        puesto: '',
        pais: '',
        telefono: '',
        linkedin_url: '',
        plan: defaultPlan,
      })

      // Trackear en Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('event', 'connect_registration', {
          event_category: 'Connect',
          event_label: formData.plan,
          value: formData.plan === 'pro' ? 49 : 0,
        })
      }
    } catch (error: any) {
      setMessage({
        type: 'error',
        text: error.message || 'Error al registrarse. Por favor intenta de nuevo.',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
      {/* Mensaje de éxito/error */}
      {message && (
        <div
          className={`p-4 rounded-lg ${
            message.type === 'success'
              ? 'bg-green-500/20 border border-green-500/50 text-green-400'
              : 'bg-red-500/20 border border-red-500/50 text-red-400'
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Nombre completo - REQUERIDO */}
      <div>
        <label htmlFor="nombre" className="block text-sm font-semibold mb-2">
          Nombre Completo <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#00E0FF]"
          placeholder="Juan Pérez"
        />
      </div>

      {/* Email - REQUERIDO */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#00E0FF]"
          placeholder="tu@email.com"
        />
      </div>

      {/* Empresa */}
      <div>
        <label htmlFor="empresa" className="block text-sm font-semibold mb-2">
          Empresa
        </label>
        <input
          type="text"
          id="empresa"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#00E0FF]"
          placeholder="Tu empresa o startup"
        />
      </div>

      {/* Puesto */}
      <div>
        <label htmlFor="puesto" className="block text-sm font-semibold mb-2">
          Puesto / Rol
        </label>
        <input
          type="text"
          id="puesto"
          name="puesto"
          value={formData.puesto}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#00E0FF]"
          placeholder="CEO, CTO, Product Manager, etc."
        />
      </div>

      {/* País */}
      <div>
        <label htmlFor="pais" className="block text-sm font-semibold mb-2">
          País
        </label>
        <select
          id="pais"
          name="pais"
          value={formData.pais}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#00E0FF]"
        >
          <option value="">Selecciona tu país</option>
          <option value="MX">🇲🇽 México</option>
          <option value="CO">🇨🇴 Colombia</option>
          <option value="BR">🇧🇷 Brasil</option>
          <option value="AR">🇦🇷 Argentina</option>
          <option value="CL">🇨🇱 Chile</option>
          <option value="PE">🇵🇪 Perú</option>
          <option value="UY">🇺🇾 Uruguay</option>
          <option value="EC">🇪🇨 Ecuador</option>
          <option value="VE">🇻🇪 Venezuela</option>
          <option value="CR">🇨🇷 Costa Rica</option>
          <option value="PA">🇵🇦 Panamá</option>
          <option value="GT">🇬🇹 Guatemala</option>
          <option value="OTHER">🌎 Otro</option>
        </select>
      </div>

      {/* LinkedIn */}
      <div>
        <label htmlFor="linkedin_url" className="block text-sm font-semibold mb-2">
          LinkedIn (opcional)
        </label>
        <input
          type="url"
          id="linkedin_url"
          name="linkedin_url"
          value={formData.linkedin_url}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#00E0FF]"
          placeholder="https://linkedin.com/in/tu-perfil"
        />
      </div>

      {/* Plan (hidden si viene por defecto) */}
      <input type="hidden" name="plan" value={formData.plan} />

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full px-8 py-4 bg-[#00E0FF] text-[#0A0F2C] font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Registrando...' : 'Unirse a MOVILIAX Connect →'}
      </button>

      <p className="text-xs text-[#9CA3AF] text-center">
        Al unirte aceptas nuestros términos y política de privacidad
      </p>
    </form>
  )
}
