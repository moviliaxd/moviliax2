import Link from 'next/link'

export default function Page() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 pt-32 pb-16">
        <div className="hero-grid" aria-hidden="true" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cian-electrico/10 rounded-full blur-3xl animate-pulse-glow" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-cian-electrico/10 border border-cian-electrico/30 rounded-full text-cian-electrico text-sm font-semibold mb-6">
            📱 Movilidad Humana
          </span>
          
          <h1 className="text-5xl md:text-6xl font-exo font-bold mb-6 leading-tight">
            Mobility as a <span className="text-gradient">Service</span>
          </h1>
          
          <p className="text-xl text-gris-metalico mb-8 max-w-2xl mx-auto">
            Plataformas digitales que integran múltiples servicios de transporte en una experiencia unificada.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto max-w-6xl px-4 py-4">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-gris-metalico">
            <li>
              <Link href="/" className="hover:text-cian-electrico transition-colors">
                Inicio
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/movilidad-humana" className="hover:text-cian-electrico transition-colors">
                Movilidad Humana
              </Link>
            </li>
            <li>/</li>
            <li className="text-blanco-puro">MaaS</li>
          </ol>
        </nav>
      </div>

      {/* Key Stats */}
      <section className="py-12 px-4 bg-gradient-to-r from-cian-electrico/5 to-violeta-tech/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">180M</div>
              <div className="text-gris-metalico text-sm">Usuarios de Apps LATAM</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">$15B</div>
              <div className="text-gris-metalico text-sm">GMV Anual 2024</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">25+</div>
              <div className="text-gris-metalico text-sm">Plataformas Activas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">3.2M</div>
              <div className="text-gris-metalico text-sm">Viajes Diarios</div>
            </div>
          </div>
        </div>
      </section>

      {/* MaaS Concept */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">¿Qué es MaaS?</h2>
            <p className="text-gris-metalico text-lg max-w-3xl mx-auto">
              Mobility as a Service es la integración de múltiples formas de transporte en un solo servicio digital accesible bajo demanda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="content-card text-center group">
              <span className="text-4xl mb-4 block">🔍</span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                Planificación
              </h3>
              <p className="text-gris-metalico text-sm">
                Búsqueda y comparación de rutas multimodales considerando tiempo, costo y preferencias.
              </p>
            </article>

            <article className="content-card text-center group">
              <span className="text-4xl mb-4 block">📱</span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                Reserva Unificada
              </h3>
              <p className="text-gris-metalico text-sm">
                Booking de diferentes modos de transporte desde una sola plataforma.
              </p>
            </article>

            <article className="content-card text-center group">
              <span className="text-4xl mb-4 block">💳</span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                Pago Integrado
              </h3>
              <p className="text-gris-metalico text-sm">
                Sistema único de pago para todos los servicios de movilidad incluidos.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 bg-gradient-to-r from-cian-electrico/5 to-violeta-tech/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              Categorías de Servicio
            </h2>
            <p className="text-gris-metalico">
              Los principales modelos de negocio en el ecosistema MaaS
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="content-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🚗</span>
                <h3 className="text-2xl font-bold">Ride-Hailing</h3>
              </div>
              <p className="text-gris-metalico mb-4">
                Servicios de transporte privado bajo demanda con conductores profesionales o particulares.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gris-metalico">Uber</span>
                  <span className="text-xs bg-cian-electrico/10 text-cian-electrico px-2 py-1 rounded">Líder Regional</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gris-metalico">Didi</span>
                  <span className="text-xs bg-gris-oscuro/30 text-gris-metalico px-2 py-1 rounded">México, Brasil</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gris-metalico">Cabify</span>
                  <span className="text-xs bg-gris-oscuro/30 text-gris-metalico px-2 py-1 rounded">Premium</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gris-metalico">99 (Didi)</span>
                  <span className="text-xs bg-gris-oscuro/30 text-gris-metalico px-2 py-1 rounded">Brasil</span>
                </div>
              </div>
            </article>

            <article className="content-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🚌</span>
                <h3 className="text-2xl font-bold">Transporte Público Digital</h3>
              </div>
              <p className="text-gris-metalico mb-4">
                Apps que integran información y pago de sistemas de transporte masivo.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gris-metalico">Moovit</span>
                  <span className="text-xs bg-cian-electrico/10 text-cian-electrico px-2 py-1 rounded">Global</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gris-metalico">Citymapper</span>
                  <span className="text-xs bg-gris-oscuro/30 text-gris-metalico px-2 py-1 rounded">Ciudades Select</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gris-metalico">Transit</span>
                  <span className="text-xs bg-gris-oscuro/30 text-gris-metalico px-2 py-1 rounded">Norteamérica</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gris-metalico">Apps Locales</span>
                  <span className="text-xs bg-gris-oscuro/30 text-gris-metalico px-2 py-1 rounded">Por Ciudad</span>
                </div>
              </div>
            </article>

            <article className="content-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🚕</span>
                <h3 className="text-2xl font-bold">Car-Sharing</h3>
              </div>
              <p className="text-gris-metalico mb-4">
                Alquiler de vehículos por horas o minutos, modelo peer-to-peer o B2C.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gris-metalico">Turo</span>
                  <span className="text-xs bg-cian-electrico/10 text-cian-electrico px-2 py-1 rounded">P2P</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gris-metalico">Zipcar</span>
                  <span className="text-xs bg-gris-oscuro/30 text-gris-metalico px-2 py-1 rounded">México</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gris-metalico">Awto</span>
                  <span className="text-xs bg-gris-oscuro/30 text-gris-metalico px-2 py-1 rounded">Chile</span>
                </div>
              </div>
            </article>

            <article className="content-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🛣️</span>
                <h3 className="text-2xl font-bold">Carpooling</h3>
              </div>
              <p className="text-gris-metalico mb-4">
                Viajes compartidos entre usuarios con rutas similares, reduce costos y emisiones.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gris-metalico">BlaBlaCar</span>
                  <span className="text-xs bg-cian-electrico/10 text-cian-electrico px-2 py-1 rounded">Larga Distancia</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gris-metalico">Waze Carpool</span>
                  <span className="text-xs bg-gris-oscuro/30 text-gris-metalico px-2 py-1 rounded">Descontinuado</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gris-metalico">Jetty</span>
                  <span className="text-xs bg-gris-oscuro/30 text-gris-metalico px-2 py-1 rounded">México</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Integration Levels */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              Niveles de Integración MaaS
            </h2>
            <p className="text-gris-metalico">
              No todas las plataformas ofrecen el mismo grado de integración
            </p>
          </div>

          <div className="space-y-6">
            <div className="content-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cian-electrico/20 rounded-full flex items-center justify-center flex-shrink-0 font-exo font-bold text-cian-electrico">
                  0
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">Sin Integración</h3>
                  <p className="text-gris-metalico text-sm">
                    Servicios separados sin conexión. El usuario debe gestionar cada modo independientemente.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cian-electrico/20 rounded-full flex items-center justify-center flex-shrink-0 font-exo font-bold text-cian-electrico">
                  1
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">Integración de Información</h3>
                  <p className="text-gris-metalico text-sm mb-2">
                    Plataforma que muestra opciones de múltiples operadores pero cada servicio se contrata por separado.
                  </p>
                  <span className="text-xs bg-gris-oscuro/30 text-gris-metalico px-2 py-1 rounded">Ej: Moovit, Citymapper</span>
                </div>
              </div>
            </div>

            <div className="content-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cian-electrico/20 rounded-full flex items-center justify-center flex-shrink-0 font-exo font-bold text-cian-electrico">
                  2
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">Integración de Reserva</h3>
                  <p className="text-gris-metalico text-sm mb-2">
                    Planificación y booking desde una app, pero pago aún separado por servicio.
                  </p>
                  <span className="text-xs bg-gris-oscuro/30 text-gris-metalico px-2 py-1 rounded">Ej: Apps de aerolíneas con taxis</span>
                </div>
              </div>
            </div>

            <div className="content-card border-cian-electrico/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cian-electrico rounded-full flex items-center justify-center flex-shrink-0 font-exo font-bold text-negro-profundo">
                  3
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">Integración de Pago</h3>
                  <p className="text-gris-metalico text-sm mb-2">
                    Planificación, reserva y pago unificado. Sistema de cuenta única para todos los servicios.
                  </p>
                  <span className="text-xs bg-cian-electrico/20 text-cian-electrico px-2 py-1 rounded">Objetivo MaaS - Aún raro en LATAM</span>
                </div>
              </div>
            </div>

            <div className="content-card border-cian-electrico/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cian-electrico to-violeta-tech rounded-full flex items-center justify-center flex-shrink-0 font-exo font-bold text-negro-profundo">
                  4
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">Integración Societal</h3>
                  <p className="text-gris-metalico text-sm mb-2">
                    MaaS como servicio público integrado con políticas urbanas, objetivos ambientales y planificación de ciudad.
                  </p>
                  <span className="text-xs bg-violeta-tech/20 text-violeta-tech px-2 py-1 rounded">Futuro - Helsinki como referencia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4 bg-gradient-to-r from-cian-electrico/5 to-violeta-tech/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-exo font-bold mb-2">
                Artículos Destacados
              </h2>
              <p className="text-gris-metalico">
                Análisis del ecosistema MaaS en América Latina
              </p>
            </div>
            <Link 
              href="/articulos?categoria=maas"
              className="hidden md:inline-flex items-center gap-2 text-cian-electrico hover:underline font-semibold"
            >
              Ver todos <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="content-card group hover:border-cian-electrico/50">
              <span className="inline-block px-3 py-1 bg-cian-electrico/10 text-cian-electrico text-xs font-semibold rounded-full mb-4">
                Análisis de Mercado
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors line-clamp-2">
                La Guerra de las Apps: Uber vs Didi en América Latina
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-3">
                Comparación de estrategias, cuota de mercado y modelos de negocio de los gigantes del ride-hailing.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>20 min lectura</span>
                <Link href="/articulos/uber-vs-didi" className="text-cian-electrico hover:underline">
                  Leer más →
                </Link>
              </div>
            </article>

            <article className="content-card group hover:border-cian-electrico/50">
              <span className="inline-block px-3 py-1 bg-cian-electrico/10 text-cian-electrico text-xs font-semibold rounded-full mb-4">
                Tendencias
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors line-clamp-2">
                ¿Está LATAM Lista para el Verdadero MaaS?
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-3">
                Los desafíos de integración de pago, interoperabilidad y colaboración entre operadores.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>16 min lectura</span>
                <Link href="/articulos/latam-maas-ready" className="text-cian-electrico hover:underline">
                  Leer más →
                </Link>
              </div>
            </article>

            <article className="content-card group hover:border-cian-electrico/50">
              <span className="inline-block px-3 py-1 bg-cian-electrico/10 text-cian-electrico text-xs font-semibold rounded-full mb-4">
                Caso de Éxito
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors line-clamp-2">
                Cómo Moovit Conquistó América Latina
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-3">
                La estrategia de la app de transporte público para convertirse en líder regional.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>14 min lectura</span>
                <Link href="/articulos/moovit-latam" className="text-cian-electrico hover:underline">
                  Leer más →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-cian-electrico/10 to-violeta-tech/10 border border-cian-electrico/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              Mantente al Día con MaaS
            </h2>
            <p className="text-gris-metalico text-lg mb-8 max-w-2xl mx-auto">
              Análisis mensuales sobre plataformas digitales, integración multimodal y el futuro del transporte como servicio.
            </p>
            <Link 
              href="/#newsletter"
              className="btn-primary inline-flex items-center gap-2"
            >
              Suscríbete a RadarX
              <span>✨</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}