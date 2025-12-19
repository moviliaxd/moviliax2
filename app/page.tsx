import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contenido - MOVILIAX',
  description: 'Artículos, reportajes y análisis sobre movilidad e innovación en América Latina',
}

export default function ContenidoPage() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00E0FF] text-sm font-semibold mb-2 block">
            Contenido Premium
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Artículos y Reportajes
          </h1>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Análisis profundos, reportajes exclusivos y datos sobre el futuro de la movilidad en América Latina.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <button className="px-6 py-2 bg-[#00E0FF] text-[#0A0F2C] rounded-full font-semibold">
            Todos
          </button>
          <button className="px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
            Vehículos Eléctricos
          </button>
          <button className="px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
            Ciudades Inteligentes
          </button>
          <button className="px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
            Logística
          </button>
          <button className="px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
            Startups
          </button>
        </div>

        {/* Mensaje de Próximamente */}
        <div className="text-center py-20">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-2xl font-bold mb-2">Próximamente</h3>
          <p className="text-[#9CA3AF]">
            Estamos trabajando en contenido increíble para ti.
            <br />
            Suscríbete al newsletter para ser el primero en leerlo.
          </p>
          <Link
            href="/#newsletter"
            className="inline-block mt-6 px-8 py-3 bg-[#00E0FF] text-[#0A0F2C] font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            Suscribirse al Newsletter
          </Link>
        </div>
      </div>
    </div>
  )
}