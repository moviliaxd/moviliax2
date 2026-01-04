'use client'

import { useSession, signOut } from 'next-auth/react'
import { Loader2, User, Mail, Building2, MapPin, LogOut } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function DashboardPage() {
  const [isMounted, setIsMounted] = useState(false)
  
  // useSession necesita ser llamado en cliente
  const sessionResult = useSession({
    required: false,
  })

  useEffect(() => {
    setIsMounted(true)
    
    // Si no está autenticado, redirigir
    if (sessionResult.status === 'unauthenticated') {
      window.location.href = '/login?callbackUrl=/dashboard'
    }
  }, [sessionResult.status])

  const session = sessionResult?.data ?? null
  const status = sessionResult?.status ?? 'loading'

  // No renderizar nada hasta que esté montado (para evitar hidratación mismatch)
  if (!isMounted) {
    return null
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-[#00d4ff] animate-spin" />
      </div>
    )
  }

  if (!session) {
    return null
  }

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' })
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 font-['Exo']">
            Dashboard
          </h1>
        <p className="text-gray-400 text-lg">
  Bienvenido de vuelta, <span className="text-[#00d4ff]">{session.user?.nombre ?? "Usuario"}</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="md:col-span-1">
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20">
              <div className="w-20 h-20 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-white text-center mb-2 font-['Exo']">
                {session.user?.nombre ?? ''} {session.user?.apellido ?? ''}
              </h2>

              <div className="space-y-3 mt-6">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-[#00d4ff]" />
                  <span className="text-sm">{session.user?.email ?? ''}</span>
                </div>

                {session.user?.empresa && (
                  <div className="flex items-center gap-3 text-gray-400">
                    <Building2 className="w-5 h-5 text-[#00d4ff]" />
                    <span className="text-sm">{session.user.empresa}</span>
                  </div>
                )}

                {session.user?.pais && (
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-5 h-5 text-[#00d4ff]" />
                    <span className="text-sm">{session.user.pais}</span>
                  </div>
                )}
              </div>

              <div className="mt-6 space-y-3">
                <Link
                  href="/perfil"
                  className="block w-full py-3 bg-[#00d4ff]/10 text-[#00d4ff] font-semibold rounded-lg border border-[#00d4ff]/30 hover:bg-[#00d4ff]/20 transition-all text-center"
                >
                  Editar Perfil
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full py-3 bg-red-500/10 text-red-400 font-semibold rounded-lg border border-red-500/30 hover:bg-red-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <LogOut className="w-5 h-5" />
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Intereses */}
            {Array.isArray(session.user?.intereses) && session.user.intereses.length > 0 && (
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20">
                <h3 className="text-2xl font-bold text-white mb-4 font-['Exo']">
                  Tus Intereses
                </h3>
                <div className="flex flex-wrap gap-3">
                  {session.user.intereses.map((interes) => (
                    <span
                      key={interes}
                      className="px-4 py-2 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white rounded-full text-sm font-semibold"
                    >
                      {interes}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20">
              <h3 className="text-2xl font-bold text-white mb-6 font-['Exo']">
                Accesos Rápidos
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/contenido"
                  className="p-4 bg-[#0a0a0f] rounded-xl border border-[#00d4ff]/30 hover:border-[#00d4ff] transition-all"
                >
                  <h4 className="text-white font-bold mb-2">Contenido Exclusivo</h4>
                  <p className="text-gray-400 text-sm">Artículos y recursos premium</p>
                </Link>

                <Link
                  href="/eventos"
                  className="p-4 bg-[#0a0a0f] rounded-xl border border-[#00d4ff]/30 hover:border-[#00d4ff] transition-all"
                >
                  <h4 className="text-white font-bold mb-2">Próximos Eventos</h4>
                  <p className="text-gray-400 text-sm">Conferencias y networking</p>
                </Link>

                <Link
                  href="/connect"
                  className="p-4 bg-[#0a0a0f] rounded-xl border border-[#00d4ff]/30 hover:border-[#00d4ff] transition-all"
                >
                  <h4 className="text-white font-bold mb-2">Moviliax Connect</h4>
                  <p className="text-gray-400 text-sm">Red profesional</p>
                </Link>

                <Link
                  href="/knowledge-lab"
                  className="p-4 bg-[#0a0a0f] rounded-xl border border-[#00d4ff]/30 hover:border-[#00d4ff] transition-all"
                >
                  <h4 className="text-white font-bold mb-2">Knowledge Lab</h4>
                  <p className="text-gray-400 text-sm">White papers y casos de éxito</p>
                </Link>
              </div>
            </div>

            {/* Status Badge */}
            <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 p-6 rounded-2xl border border-green-500/30">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <div>
                  <p className="text-green-400 font-bold">Cuenta Activa</p>
                  <p className="text-green-400/80 text-sm">
                    {session.user?.emailVerificado ? 'Email verificado' : 'Verifica tu email para acceso completo'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
