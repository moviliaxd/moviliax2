import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contenido - MOVILIAX',
  description: 'Artículos sobre movilidad e innovación en América Latina',
}

export default function ContenidoPage() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-[#00E0FF] text-sm font-semibold mb-2 block">
            Contenido Premium
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Artículos y Reportajes
          </h1>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Análisis sobre movilidad e innovación en América Latina.
          </p>
        </div>

        <div className="text-center py-20">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-2xl font-bold mb-2">Sistema de Contenido Configurado</h3>
          <p className="text-[#9CA3AF] mb-6">
            El CMS está listo. Los artículos se mostrarán aquí próximamente.
          </p>
          <Link
            href="/#newsletter"
            className="inline-block px-8 py-3 bg-[#00E0FF] text-[#0A0F2C] font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            Suscribirse al Newsletter
          </Link>
        </div>
      </div>
    </div>
  )
}