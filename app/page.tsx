import NewsletterForm from '@/components/NewsletterForm'
import Link from 'next/link'

export default function Home() {
  return (
    <main id="main-content">
      <div className="min-h-screen">
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
              🚀 Plataforma #1 en Movilidad
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
                href="#pilares" 
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Explorar Contenido
                <span>📚</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Los 3 Pilares - Core Navigation */}
        <section id="pilares" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-cian-electrico text-sm font-semibold mb-2 block">Los Tres Pilares</span>
              <h2 className="text-4xl md:text-5xl font-exo font-bold mb-4">Nuestro Enfoque</h2>
              <p className="text-gris-metalico text-lg max-w-2xl mx-auto">
                Dividimos el ecosistema en tres grandes áreas que definen el futuro del sector.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Movilidad Humana */}
              <article className="content-card group hover:border-cian-electrico/50">
                <span className="text-5xl mb-4 block">⚡</span>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                  Movilidad Humana
                </h3>
                <p className="text-gris-metalico mb-6">
                  Enfoque en el usuario y la ciudad del futuro.
                </p>
                <ul className="space-y-2 text-gris-metalico mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-cian-electrico mt-1">•</span>
                    <span>Electromovilidad (EVs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cian-electrico mt-1">•</span>
                    <span>Micro-movilidad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cian-electrico mt-1">•</span>
                    <span>MaaS-Movilidad como servicio (Mobility as a Service)</span>
                  </li>
                </ul>
                <Link 
                  href="/movilidad-humana" 
                  className="inline-flex items-center gap-2 text-cian-electrico hover:underline font-semibold"
                >Explorar <span>→</span>
                </Link>
              </article>
              {/* Logística Inteligente */}
              <article className="content-card group hover:border-violeta-tech/50">
                <span className="text-5xl mb-4 block">📦</span>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-violeta-tech transition-colors">
                  Logística Inteligente
                </h3>
                <p className="text-gris-metalico mb-6">
                  El motor de la economía: Carga y cadena de suministro (supply chain).
                </p>
                <ul className="space-y-2 text-gris-metalico mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-violeta-tech mt-1">•</span>
                    <span>Última Milla</span>
                  </li> 
                  <li className="flex items-start gap-2">
                    <span className="text-violeta-tech mt-1">•</span>
                    <span>Almacenamiento Inteligente (Smart Warehousing)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violeta-tech mt-1">•</span>
                    <span>Acercamiento y Comercio (Nearshoring)</span>
                  </li>
                </ul>
                <Link 
                  href="/logistica-inteligente" 
                  className="inline-flex items-center gap-2 text-violeta-tech hover:underline font-semibold"
                >
                  Explorar <span>→</span>
                </Link>
              </article>

              {/* Deep Tech */}
              <article className="content-card group hover:border-cian-electrico/50">
                <span className="text-5xl mb-4 block">🤖</span>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                  Tecnología Profunda (Deep Tech)
                </h3>
                <p className="text-gris-metalico mb-6">
                  La capa transversal de tecnología.
                </p>
                <ul className="space-y-2 text-gris-metalico mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-cian-electrico mt-1">•</span>
                    <span>IA y Big Data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cian-electrico mt-1">•</span>
                    <span>Autonomía y Robótica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cian-electrico mt-1">•</span>
                    <span>Cadena de Bloques (blockchain) y Trazabilidad</span>
                  </li>
                </ul>
                <Link 
                  href="/deep-tech" 
                  className="inline-flex items-center gap-2 text-cian-electrico hover:underline font-semibold"
                >
                  Explorar <span>→</span>
                </Link>
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

        {/* Secciones de Valor Estratégico */}
        <section id="valor-estrategico" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-cian-electrico text-sm font-semibold mb-2 block">Diferenciadores</span>
              <h2 className="text-4xl md:text-5xl font-exo font-bold mb-4">Valor Estratégico</h2>
              <p className="text-gris-metalico text-lg max-w-2xl mx-auto">
                Herramientas y recursos exclusivos para profesionales del sector.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <article className="content-card group">
                <span className="text-4xl mb-4 block">📖</span>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                  Glosario Tecnológico (Glosario Tech)
                </h3>
                <p className="text-gris-metalico mb-4">
                  Democratizar el lenguaje técnico en español. Diccionario interactivo (A-Z).
                </p>
                <Link 
                  href="/glosario" 
                  className="inline-flex items-center gap-2 text-cian-electrico hover:underline"
                >
                  Explorar términos <span>→</span>
                </Link>
              </article>

              <article className="content-card group">
                <span className="text-4xl mb-4 block">🗺️</span>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                  Radar Latinoamericano
                </h3>
                <p className="text-gris-metalico mb-4">
                  Monitoreo país por país de la región. Mapa interactivo y reportes breves.
                </p>
                <Link 
                  href="/radar-latam" 
                  className="inline-flex items-center gap-2 text-cian-electrico hover:underline"
                >
                  Ver el mapa <span>→</span>
                </Link>
              </article>

              <article className="content-card group">
                <span className="text-4xl mb-4 block">🌱</span>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                  Monitor de Sostenibilidad(Sustainability Watch)
                </h3>
                <p className="text-gris-metalico mb-4">
                  Seguimiento de metas Net-Zero y ESG. Artículos de análisis de impacto.
                </p>
                <Link 
                  href="/sustainability" 
                  className="inline-flex items-center gap-2 text-cian-electrico hover:underline"
                >
                  Ver análisis <span>→</span>
                </Link>
              </article>

              <article className="content-card group">
                <span className="text-4xl mb-4 block">🚀</span>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                   Exhibición Logística (Logtech Showroom)
                </h3>
                <p className="text-gris-metalico mb-4">
                  Escaparate de Emprendimientos Disruptivos (Startups)              </p>
                <Link 
                  href="/logtech-showroom" 
                  className="inline-flex items-center gap-2 text-cian-electrico hover:underline"
                >
                  Ver startups <span>→</span>
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* Ecosistema de Conexión */}
        <section id="ecosistema" className="py-20 px-4 bg-gradient-to-br from-negro-profundo to-gris-oscuro">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-cian-electrico text-sm font-semibold mb-2 block">Comunidad</span>
              <h2 className="text-4xl md:text-5xl font-exo font-bold mb-4">Ecosistema de Conexión</h2>
              <p className="text-gris-metalico text-lg max-w-2xl mx-auto">
                Únete a la red más activa de profesionales de movilidad en América Latina.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <article className="content-card">
                <span className="text-4xl mb-4 block">🎙️</span>
                <h3 className="text-2xl font-bold mb-3">MOVILIAX Talks</h3>
                <p className="text-gris-metalico mb-4">
                  El podcast oficial con líderes de la industria. Conversaciones que inspiran.
                </p>
                <Link 
                  href="/podcast" 
                  className="inline-flex items-center gap-2 text-cian-electrico hover:underline"
                >
                  Escuchar ahora <span>→</span>
                </Link>
              </article>

              <article className="content-card">
                <span className="text-4xl mb-4 block">📩</span>
                <h3 className="text-2xl font-bold mb-3">RadarX Newsletter</h3>
                <p className="text-gris-metalico mb-4">
                  El resumen mensual de "lo que hay que saber" para empezar bien informado.
                </p>
                <a 
                  href="#newsletter" 
                  className="inline-flex items-center gap-2 text-cian-electrico hover:underline"
                >
                  Suscríbete gratis <span>→</span>
                </a>
              </article>

              <article className="content-card">
                <span className="text-4xl mb-4 block">🤝</span>
                <h3 className="text-2xl font-bold mb-3">MOVILIAX Connect</h3>
                <p className="text-gris-metalico mb-4">
                  Directorio de profesionales, bolsa de trabajo especializada y foros de discusión.
                </p>
                <Link 
                  href="/connect" 
                  className="inline-flex items-center gap-2 text-cian-electrico hover:underline"
                >
                  Unirse ahora <span>→</span>
                </Link>
              </article>

              <article className="content-card">
                <span className="text-4xl mb-4 block">📚</span>
                <h3 className="text-2xl font-bold mb-3">Laboratorio de Conocimiento (Knowledge Lab)</h3>
                <p className="text-gris-metalico mb-4">
                  Casos de éxito y guías técnicas.
                </p>
                <Link 
                  href="/knowledge-lab" 
                  className="inline-flex items-center gap-2 text-cian-electrico hover:underline"
                >
                  Acceder al Lab <span>→</span>
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
                ⚡ Gratuito y Mensual
              </span>
              
              <h2 className="text-4xl md:text-5xl font-exo font-bold mb-4">
                RADAR<span className="text-cian-electrico">X</span>
              </h2>
              
              <p className="text-gris-metalico text-lg mb-8 max-w-2xl mx-auto">
                Tu dosis mensual de innovación en movilidad. Tendencias, análisis exclusivos, 
                datos y lo que está transformando el movimiento en América Latina.
              </p>
              
              <NewsletterForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}