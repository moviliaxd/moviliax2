import NewsletterForm from '@/components/NewsletterForm'
import Link from 'next/link'

export default function Home() {
  return (
    <main id="main-content"><div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        {/* Background Grid */}
        <div className="hero-grid" aria-hidden="true" />

        {/* Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cian-electrico/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violeta-tech/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <span className="inline-block px-4 py-2 bg-cian-electrico/10 border border-cian-electrico/30 rounded-full text-cian-electrico text-sm font-semibold mb-6">
            🚀 Plataforma #1 en Movilidad LATAM
          </span>

          <h1 className="text-5xl md:text-7xl font-exo font-bold mb-6 leading-tight">
            El Futuro de la Movilidad en{' '}
            <span className="text-gradient">Movimiento</span>
          </h1>

          <p className="text-xl md:text-2xl text-gris-metalico mb-10 max-w-3xl mx-auto leading-relaxed">
            Exploramos, analizamos y conectamos el ecosistema de movilidad en América Latina.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#newsletter"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Suscríbete Gratis
              <span>✨</span>
            </a>
            <Link
              href="/contenido"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              Explorar Contenido
              <span>📚</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contenido Section */}
      <section id="contenido" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-cian-electrico text-sm font-semibold mb-2 block">Contenido Premium</span>
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-4">Lo Que Ofrecemos</h2>
            <p className="text-gris-metalico text-lg max-w-2xl mx-auto">
              Análisis, reportajes y datos que importan para entender
              el presente y futuro de la movilidad en nuestra región.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="content-card group">
              <span className="text-4xl mb-4 block">📰</span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                Reportajes Especiales
              </h3>
              <p className="text-gris-metalico">
                Investigaciones sobre tendencias, empresas y tecnologías que están
                revolucionando la forma en que nos movemos.
              </p>
            </article>

            <article className="content-card group">
              <span className="text-4xl mb-4 block">📊</span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                Datos y Análisis
              </h3>
              <p className="text-gris-metalico">
                Números, gráficas y estudios que revelan las tendencias del mercado
                de movilidad latinoamericano.
              </p>
            </article>

            <article className="content-card group">
              <span className="text-4xl mb-4 block">🎤</span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                Entrevistas Exclusivas
              </h3>
              <p className="text-gris-metalico">
                Conversaciones con líderes, emprendedores y visionarios que están construyendo
                el futuro de la movilidad.
              </p>
            </article>

            <article className="content-card group">
              <span className="text-4xl mb-4 block">🎬</span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                Video Reportajes
              </h3>
              <p className="text-gris-metalico">
                Contenido audiovisual que lleva las historias más relevantes
                directamente a tu pantalla.
              </p>
            </article>

            <article className="content-card group">
              <span className="text-4xl mb-4 block">📖</span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                Recursos Educativos
              </h3>
              <p className="text-gris-metalico">
                Guías, glosarios y material didáctico para entender a fondo el ecosistema
                de movilidad y logística.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cian-electrico/5 to-violeta-tech/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">15K+</div>
              <div className="text-gris-metalico">Lectores Mensuales</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">50+</div>
              <div className="text-gris-metalico">Artículos Publicados</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">18</div>
              <div className="text-gris-metalico">Países Cubiertos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">$12.5B</div>
              <div className="text-gris-metalico">Inversión Tech 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcast" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-cian-electrico text-sm font-semibold mb-2 block">Podcast</span>
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-4">
              MOVILIA<span className="text-cian-electrico">X</span> TALKS
            </h2>
            <p className="text-gris-metalico text-lg max-w-2xl mx-auto">
              Conversaciones profundas con los visionarios que están construyendo el futuro de la movilidad.
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="comunidad" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-cian-electrico text-sm font-semibold mb-2 block">Comunidad</span>
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-4">Únete al Movimiento</h2>
            <p className="text-gris-metalico text-lg max-w-2xl mx-auto">
              Forma parte de la red profesional más activa de movilidad en América Latina.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="content-card">
              <span className="text-4xl mb-4 block">🤝</span>
              <h3 className="text-2xl font-bold mb-3">MOVILIAX Connect</h3>
              <p className="text-gris-metalico mb-4">
                Red profesional de +5,000 expertos en movilidad, startups y tomadores de decisión.
              </p>
              <Link
                href="/connect"
                className="inline-flex items-center gap-2 text-cian-electrico hover:underline"
              >
                Unirse ahora <span>→</span>
              </Link>
            </article>

            <article className="content-card">
              <span className="text-4xl mb-4 block">✍️</span>
              <h3 className="text-2xl font-bold mb-3">Colabora con Nosotros</h3>
              <p className="text-gris-metalico mb-4">
                Comparte tu expertise. Buscamos autores, investigadores y expertos del sector.
              </p>
              <Link
                href="/colaboradores"
                className="inline-flex items-center gap-2 text-cian-electrico hover:underline"
              >
                Ser colaborador <span>→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-cian-electrico/10 to-violeta-tech/10 border border-cian-electrico/30 rounded-2xl p-8 md:p-12 text-center">
            <span className="inline-block px-4 py-2 bg-cian-electrico/20 rounded-full text-cian-electrico text-sm font-semibold mb-4">
              ⚡ Gratuito & Mensual
            </span>

            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-4">
              RADAR<span className="text-cian-electrico">X</span>
            </h2>

            <p className="text-gris-metalico text-lg mb-8 max-w-2xl mx-auto">
              Tu dosis mensualde innovación en movilidad. Tendencias, análisis,
              datos y lo que está transformando el movimiento en América Latina.
            </p>

            <NewsletterForm />
          </div>
        </div>
      </section>
    </div></main>
  )
}


