import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl mb-6">📭</div>
        <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
        <p className="text-[#9CA3AF] mb-8 text-lg">
          El artículo que buscas no existe o ha sido movido.
        </p>
        <Link
          href="/contenido"
          className="inline-block px-8 py-3 bg-[#00E0FF] text-[#0A0F2C] font-bold rounded-lg hover:opacity-90 transition-opacity"
        >
          ← Volver a Contenido
        </Link>
      </div>
    </div>
  )
}