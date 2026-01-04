import Link from 'next/link'

export default function LogisticaInteligente() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-32 pb-20">
        <div className="hero-grid" aria-hidden="true" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-violeta-tech/10 rounded-full blur-3xl animate-pulse-glow" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-violeta-tech/10 border border-violeta-tech/30 rounded-full text-violeta-tech text-sm font-semibold mb-6">
            📦 Pilar 2
          </span>
          
          <h1 className="text-5xl md:text-6xl font-exo font-bold mb-6 leading-tight">
            Logística <span className="text-gradient">Inteligente</span>
          </h1>
          
          <p className="text-xl text-gris-metalico mb-8 max-w-2xl mx-auto">
            El motor de la economía. Carga, supply chain y las tecnologías que están revolucionando el movimiento de mercancías.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto max-w-6xl px-4 py-4">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-gris-metalico">
            <li>
              <Link href="/" className="hover:text-violeta-tech transition-colors">
                Inicio
              </Link>
            </li>
            <li>/</li>
            <li className="text-blanco-puro">Logística Inteligente</li>
          </ol>
        </nav>
      </div>

      {/* Sub-categorías */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">Áreas de Enfoque</h2>
            <p className="text-gris-metalico text-lg max-w-2xl mx-auto">
              Las tecnologías y estrategias que están transformando el supply chain en LATAM.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Última Milla */}
            <article className="content-card group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🚚</span>
                <h3 className="text-2xl font-bold group-hover:text-violeta-tech transition-colors">
                  Última Milla
                </h3>
              </div>
              
              <p className="text-gris-metalico mb-6">
                Retos de entrega urbana y e-commerce. La frontera más crítica de la logística moderna.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm text-gris-metalico">
                  <span className="text-violeta-tech mt-1">✓</span>
                  <span>Delivery urbano y e-commerce</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gris-metalico">
                  <span className="text-violeta-tech mt-1">✓</span>
                  <span>Dark stores y micro-fulfillment</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gris-metalico">
                  <span className="text-violeta-tech mt-1">✓</span>
                  <span>Optimización de rutas</span>
                </div>
              </div>

              <Link 
                href="/logistica-inteligente/ultima-milla" 
                className="inline-flex items-center gap-2 text-violeta-tech hover:underline font-semibold"
              >
                Ver artículos <span>→</span>
              </Link>
            </article>

            {/* Smart Warehousing */}
            <article className="content-card group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🏭</span>
                <h3 className="text-2xl font-bold group-hover:text-violeta-tech transition-colors">
                  Smart Warehousing
                </h3>
              </div>
              
              <p className="text-gris-metalico mb-6">
                Automatización y gestión inteligente de almacenes para máxima eficiencia operativa.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm text-gris-metalico">
                  <span className="text-violeta-tech mt-1">✓</span>
                  <span>WMS y automatización</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gris-metalico">
                  <span className="text-violeta-tech mt-1">✓</span>
                  <span>Robótica y AGVs</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gris-metalico">
                  <span className="text-violeta-tech mt-1">✓</span>
                  <span>IoT y sensórica</span>
                </div>
              </div>

              <Link 
                href="/logistica-inteligente/smart-warehousing" 
                className="inline-flex items-center gap-2 text-violeta-tech hover:underline font-semibold"
              >
                Ver artículos <span>→</span>
              </Link>
            </article>

            {/* Nearshoring & Comercio */}
            <article className="content-card group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🌎</span>
                <h3 className="text-2xl font-bold group-hover:text-violeta-tech transition-colors">
                  Nearshoring & Comercio
                </h3>
              </div>
              
              <p className="text-gris-metalico mb-6">
                El impacto de la relocalización industrial en América Latina y su supply chain.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm text-gris-metalico">
                  <span className="text-violeta-tech mt-1">✓</span>
                  <span>Relocalización industrial</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gris-metalico">
                  <span className="text-violeta-tech mt-1">✓</span>
                  <span>Comercio transfronterizo</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gris-metalico">
                  <span className="text-violeta-tech mt-1">✓</span>
                  <span>Infraestructura y corredores</span>
                </div>
              </div>

              <Link 
                href="/logistica-inteligente/nearshoring" 
                className="inline-flex items-center gap-2 text-violeta-tech hover:underline font-semibold"
              >
                Ver artículos <span>→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-violeta-tech/5 to-cian-electrico/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-exo font-bold mb-2">Logística en Números</h2>
            <p className="text-gris-metalico">El impacto del sector en América Latina</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-violeta-tech mb-2">$180B</div>
              <div className="text-gris-metalico text-sm">Mercado Logtech LATAM</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-violeta-tech mb-2">45%</div>
              <div className="text-gris-metalico text-sm">Crecimiento E-commerce</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-violeta-tech mb-2">300+</div>
              <div className="text-gris-metalico text-sm">Startups Logtech</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-violeta-tech mb-2">15M</div>
              <div className="text-gris-metalico text-sm">Empleos Directos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Artículos Destacados */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-exo font-bold mb-2">
                Artículos Destacados
              </h2>
              <p className="text-gris-metalico">
                Análisis profundos sobre logística inteligente
              </p>
            </div>
            <Link 
              href="/articulos?categoria=logistica"
              className="hidden md:inline-flex items-center gap-2 text-violeta-tech hover:underline font-semibold"
            >
              Ver todos <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="content-card group hover:border-violeta-tech/50">
              <span className="inline-block px-3 py-1 bg-violeta-tech/10 text-violeta-tech text-xs font-semibold rounded-full mb-4">
                Última Milla
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-violeta-tech transition-colors line-clamp-2">
                Dark Stores: La Nueva Frontera del Retail en LATAM
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-3">
                Cómo las tiendas oscuras están revolucionando el quick commerce en la región.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>12 min lectura</span>
                <Link 
                  href="/articulos/dark-stores-latam"
                  className="text-violeta-tech hover:underline"
                >
                  Leer más →
                </Link>
              </div>
            </article>

            <article className="content-card group hover:border-violeta-tech/50">
              <span className="inline-block px-3 py-1 bg-violeta-tech/10 text-violeta-tech text-xs font-semibold rounded-full mb-4">
                Smart Warehousing
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-violeta-tech transition-colors line-clamp-2">
                Automatización de Almacenes: ROI Real vs. Expectativas
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-3">
                Análisis de casos de éxito y fracaso en la implementación de WMS y robótica.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>18 min lectura</span>
                <Link 
                  href="/articulos/automatizacion-almacenes"
                  className="text-violeta-tech hover:underline"
                >
                  Leer más →
                </Link>
              </div>
            </article>

            <article className="content-card group hover:border-violeta-tech/50">
              <span className="inline-block px-3 py-1 bg-violeta-tech/10 text-violeta-tech text-xs font-semibold rounded-full mb-4">
                Nearshoring
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-violeta-tech transition-colors line-clamp-2">
                México 2025: El Nuevo Hub Manufacturero de Norteamérica
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-3">
                Cómo el nearshoring está transformando la infraestructura logística mexicana.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>15 min lectura</span>
                <Link 
                  href="/articulos/nearshoring-mexico"
                  className="text-violeta-tech hover:underline"
                >
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
          <div className="bg-gradient-to-br from-violeta-tech/10 to-cian-electrico/10 border border-violeta-tech/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              ¿Te interesa la Logística Inteligente?
            </h2>
            <p className="text-gris-metalico text-lg mb-8 max-w-2xl mx-auto">
              Recibe análisis exclusivos sobre supply chain, warehousing y nearshoring en tu inbox.
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