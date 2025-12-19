import NewsletterForm from '@/components/NewsletterForm'

export default function Home() {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 hero-grid opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-azul-profundo/50 to-azul-profundo"></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="text-cian-electrico text-sm font-semibold tracking-wider uppercase animate-pulse-glow">
              El Futuro de la Movilidad en Movimiento
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            El punto de conexión entre la{' '}
            <span className="text-gradient">movilidad humana</span>
            {' '}y la{' '}
            <span className="text-gradient">inteligencia tecnológica</span>
          </h1>
          <p className="text-xl md:text-2xl text-gris-metalico mb-12 max-w-3xl mx-auto">
            Explorando el futuro del movimiento en América Latina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#newsletter" className="btn-primary">Suscribirse Gratis</a>
            <a href="#contenido" className="btn-secondary">Explorar Contenido</a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-cian-electrico text-sm font-semibold mb-2 block">NEWSLETTER SEMANAL</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">RADARX</h2>
          <p className="text-gris-metalico text-lg mb-12">
            Cada domingo, las tendencias más importantes de movilidad e innovación en tu inbox.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </main>
  )
}
