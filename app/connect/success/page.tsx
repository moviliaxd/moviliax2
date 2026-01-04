import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '¡Bienvenido a Connect Pro! - MOVILIAX',
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen pt-32 px-4 pb-20 text-center">
      <div className="container mx-auto max-w-2xl">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          ¡Bienvenido a Connect Pro!
        </h1>
        <p className="text-xl text-[#9CA3AF] mb-8">
          Tu suscripción está activa. Revisa tu email para los próximos pasos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/connect"
            className="px-8 py-4 bg-[#00E0FF] text-[#0A0F2C] font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            Ir a Connect
          </Link>
          <Link
            href="/"
            className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
