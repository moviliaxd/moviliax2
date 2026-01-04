export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

import { createClient } from '@supabase/supabase-js'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin - Leads | MOVILIAX',
  description: 'Dashboard administrativo de leads',
  robots: 'noindex, nofollow',
}

interface Lead {
  id: string
  nombre: string
  email: string
  empresa?: string
  asunto?: string
  mensaje: string
  score?: number
  priority?: 'high' | 'medium' | 'low'
  status: string
  created_at: string
}

export default async function LeadsPage() {
  try {
    // 🔐 Crear Supabase SOLO en runtime
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { data: leads, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching leads:', error)
      return (
        <div className="min-h-screen bg-azul-profundo p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-exo font-bold text-cian-electrico mb-8">
              ⚠️ Error
            </h1>
            <p className="text-gris-metalico">No se pudieron cargar los leads.</p>
          </div>
        </div>
      )
    }

    // Estadísticas
    const totalLeads = leads?.length || 0
    const highPriority = leads?.filter((l: Lead) => l.priority === 'high').length || 0
    const newLeads = leads?.filter((l: Lead) => l.status === 'new').length || 0

    const getPriorityColor = (priority?: string) => {
      switch (priority) {
        case 'high':
          return 'bg-red-500/10 text-red-400 border-red-500/30'
        case 'medium':
          return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
        case 'low':
          return 'bg-blue-500/10 text-blue-400 border-blue-500/30'
        default:
          return 'bg-gris-metalico/10 text-gris-metalico border-gris-metalico/30'
      }
    }

    const getStatusColor = (status: string) => {
      switch (status) {
        case 'new':
          return 'bg-cian-electrico/10 text-cian-electrico border-cian-electrico/30'
        case 'contacted':
          return 'bg-violeta-tech/10 text-violeta-tech border-violeta-tech/30'
        case 'qualified':
          return 'bg-green-500/10 text-green-400 border-green-500/30'
        case 'closed':
          return 'bg-gray-500/10 text-gray-400 border-gray-500/30'
        default:
          return 'bg-gris-metalico/10 text-gris-metalico border-gris-metalico/30'
      }
    }

    return (
      <div className="min-h-screen bg-azul-profundo p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-exo font-bold text-cian-electrico mb-2">
              Dashboard de Leads
            </h1>
            <p className="text-gris-metalico">
              Gestiona todos los contactos y consultas del sitio
            </p>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-azul-profundo/50 border border-cian-electrico/30 rounded-xl p-6">
              <p className="text-gris-metalico text-sm mb-2">Total Leads</p>
              <p className="text-3xl font-exo font-bold text-cian-electrico">
                {totalLeads}
              </p>
            </div>
            <div className="bg-azul-profundo/50 border border-violeta-tech/30 rounded-xl p-6">
              <p className="text-gris-metalico text-sm mb-2">Nuevos</p>
              <p className="text-3xl font-exo font-bold text-violeta-tech">
                {newLeads}
              </p>
            </div>
            <div className="bg-azul-profundo/50 border border-red-500/30 rounded-xl p-6">
              <p className="text-gris-metalico text-sm mb-2">Alta Prioridad</p>
              <p className="text-3xl font-exo font-bold text-red-400">
                {highPriority}
              </p>
            </div>
            <div className="bg-azul-profundo/50 border border-green-500/30 rounded-xl p-6">
              <p className="text-gris-metalico text-sm mb-2">Conversión</p>
              <p className="text-3xl font-exo font-bold text-green-400">
                {totalLeads > 0 ? Math.round(((leads?.filter((l: Lead) => l.status === 'qualified').length || 0) / totalLeads) * 100) : 0}%
              </p>
            </div>
          </div>

          {/* Tabla de Leads */}
          <div className="bg-azul-profundo/30 border border-cian-electrico/20 rounded-xl overflow-hidden">
            {leads && leads.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-azul-profundo/50 border-b border-cian-electrico/20">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-exo font-bold text-cian-electrico">
                        Nombre
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-exo font-bold text-cian-electrico">
                        Email
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-exo font-bold text-cian-electrico">
                        Empresa
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-exo font-bold text-cian-electrico">
                        Asunto
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-exo font-bold text-cian-electrico">
                        Prioridad
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-exo font-bold text-cian-electrico">
                        Estado
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-exo font-bold text-cian-electrico">
                        Fecha
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-cian-electrico/10">
                    {leads.map((lead: Lead, index: number) => (
                      <tr
                        key={lead.id}
                        className="hover:bg-azul-profundo/20 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-white">
                          {lead.nombre}
                        </td>
                        <td className="px-6 py-4 text-sm text-gris-metalico">
                          <a
                            href={`mailto:${lead.email}`}
                            className="text-cian-electrico hover:underline"
                          >
                            {lead.email}
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm text-gris-metalico">
                          {lead.empresa || '-'}
                        </td>
                        <td className="px-6 py-4 text-sm text-gris-metalico">
                          {lead.asunto || '-'}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(
                              lead.priority
                            )}`}
                          >
                            {lead.priority?.toUpperCase() || 'N/A'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                              lead.status
                            )}`}
                          >
                            {lead.status.charAt(0).toUpperCase() +
                              lead.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gris-metalico">
                          {new Date(lead.created_at).toLocaleDateString('es-MX')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-8 text-center">
                <p className="text-gris-metalico">No hay leads aún</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gris-metalico">
            <p>Última actualización: {new Date().toLocaleString('es-MX')}</p>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error loading leads page:', error)
    return (
      <div className="min-h-screen bg-azul-profundo p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-exo font-bold text-cian-electrico mb-8">
            ⚠️ Error
          </h1>
          <p className="text-gris-metalico">Ocurrió un error al cargar los leads.</p>
        </div>
      </div>
    )
  }
}