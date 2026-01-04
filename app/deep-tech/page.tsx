import Link from 'next/link'

export default function DeepTech() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-32 pb-20">
        <div className="hero-grid" aria-hidden="true" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cian-electrico/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-violeta-tech/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-cian-electrico/10 border border-cian-electrico/30 rounded-full text-cian-electrico text-sm font-semibold mb-6">
            🤖 Pilar 3
          </span>
          
          <h1 className="text-5xl md:text-6xl font-exo font-bold mb-6 leading-tight">
            Deep <span className="text-gradient">Tech</span>
          </h1>
          
          <p className="text-xl text-gris-metalico mb-8 max-w-2xl mx-auto">
            La capa transversal de tecnología. Las innovaciones que están redefiniendo la movilidad y la logística.
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
            <li className="text-blanco-puro">Deep Tech</li>
          </ol>
        </nav>
      </div>

      {/* Sub-categorías */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">Áreas de Enfoque</h2>
            <p className="text-gris-metalico text-lg max-w-2xl mx-auto">
              Las tecnologías exponenciales que cruzan todos los sectores de movilidad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* IA & Big Data */}
            <article className="content-card group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🧠</span>
                <h3 className="text-2xl font-bold group-hover:text-cian-electrico transition-colors">
                  IA & Big Data
                </h3>
              </div>
              
              <p className="text-gris-metalico mb-6">
                Optimización y analítica predictiva. Inteligencia artificial aplicada a movilidad y logística.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm text-gris-metalico">
                  <span className="text-cian-electrico mt-1">✓</span>
                  <span>Machine Learning predictivo</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gris-metalico">
                  <span className="text-cian-electrico mt-1">✓</span>
                  <span>Optimización de rutas y demanda</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gris-metalico">
                  <span className="text-cian-electrico mt-1">✓</span>
                  <span>Computer Vision</span>
                </div>
              </div>

              <Link 
                href="/deep-tech/ia-big-data" 
                className="inline-flex items-center gap-2 text-cian-electrico hover:underline font-semibold"
              >
                Ver artículos <span>→</span>
              </Link>
            </article>

            {/* Autonomía & Robótica */}
            <article className="content-card group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🚗</span>
                <h3 className="text-2xl font-bold group-hover:text-cian-electrico transition-colors">
                  Autonomía & Robótica
                </h3>
              </div>
              
              <p className="text-gris-metalico mb-6">
                Drones, AGVs y vehículos sin conductor. El futuro autónomo del transporte.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm text-gris-metalico">
                  <span className="text-cian-electrico mt-1">✓</span>
                  <span>Vehículos autónomos (SAE L0-L5)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gris-metalico">
                  <span className="text-cian-electrico mt-1">✓</span>
                  <span>Drones de entrega</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gris-metalico">
                  <span className="text-cian-electrico mt-1">✓</span>
                  <span>Robots de almacén (AGVs, AMRs)</span>
                </div>
              </div>

              <Link 
                href="/deep-tech/autonomia-robotica" 
                className="inline-flex items-center gap-2 text-cian-electrico hover:underline font-semibold"
              >
                Ver artículos <span>→</span>
              </Link>
            </article>

            {/* Blockchain & Trazabilidad */}
            <article className="content-card group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">⛓️</span>
                <h3 className="text-2xl font-bold group-hover:text-cian-electrico transition-colors">
                  Blockchain & Trazabilidad
                </h3>
              </div>
              
              <p className="text-gris-metalico mb-6">
                Seguridad y transparencia documental. Confianza distribuida en el supply chain.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm text-gris-metalico">
                  <span className="text-cian-electrico mt-1">✓</span>
                  <span>Trazabilidad end-to-end</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gris-metalico">
                  <span className="text-cian-electrico mt-1">✓</span>
                  <span>Smart contracts logísticos</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gris-metalico">
                  <span className="text-cian-electrico mt-1">✓</span>
                  <span>Documentación digital</span>
                </div>
              </div>

              <Link 
                href="/deep-tech/blockchain-trazabilidad" 
                className="inline-flex items-center gap-2 text-cian-electrico hover:underline font-semibold"
              >
                Ver artículos <span>→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Tech Trends Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cian-electrico/5 to-violeta-tech/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              Tendencias Tecnológicas 2025
            </h2>
            <p className="text-gris-metalico max-w-2xl mx-auto">
              Las innovaciones que marcarán el próximo año en movilidad y logística
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="content-card">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🔮</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Gemelos Digitales</h3>
                  <p className="text-gris-metalico text-sm">
                    Simulación virtual de flotas, almacenes y redes de distribución para optimización en tiempo real.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-card">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🌐</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">IoT & 5G</h3>
                  <p className="text-gris-metalico text-sm">
                    Conectividad ultra-rápida para vehículos conectados y sensórica avanzada en supply chain.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-card">
              <div className="flex items-start gap-4">
                <span className="text-3xl">⚡</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Edge Computing</h3>
                  <p className="text-gris-metalico text-sm">
                    Procesamiento de datos en el borde para decisiones instantáneas en vehículos autónomos.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-card">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🔐</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ciberseguridad</h3>
                  <p className="text-gris-metalico text-sm">
                    Protección crítica para infraestructura conectada y sistemas de control vehicular.
                  </p>
                </div>
              </div>
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
                Análisis técnicos sobre las tecnologías del futuro
              </p>
            </div>
            <Link 
              href="/articulos?categoria=deep-tech"
              className="hidden md:inline-flex items-center gap-2 text-cian-electrico hover:underline font-semibold"
            >
              Ver todos <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="content-card group hover:border-cian-electrico/50">
              <span className="inline-block px-3 py-1 bg-cian-electrico/10 text-cian-electrico text-xs font-semibold rounded-full mb-4">
                IA & Big Data
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors line-clamp-2">
                Machine Learning en Logística: Casos de Uso Reales en LATAM
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-3">
                Cómo empresas regionales están usando ML para optimizar rutas y predecir demanda.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>14 min lectura</span>
                <Link 
                  href="/articulos/ml-logistica-latam"
                  className="text-cian-electrico hover:underline"
                >
                  Leer más →
                </Link>
              </div>
            </article>

            <article className="content-card group hover:border-cian-electrico/50">
              <span className="inline-block px-3 py-1 bg-cian-electrico/10 text-cian-electrico text-xs font-semibold rounded-full mb-4">
                Autonomía
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors line-clamp-2">
                Vehículos Autónomos: ¿Cuándo Llegarán a América Latina?
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-3">
                Análisis realista sobre regulación, infraestructura y plazos de adopción en la región.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>16 min lectura</span>
                <Link 
                  href="/articulos/autonomos-latam"
                  className="text-cian-electrico hover:underline"
                >
                  Leer más →
                </Link>
              </div>
            </article>

            <article className="content-card group hover:border-cian-electrico/50">
              <span className="inline-block px-3 py-1 bg-cian-electrico/10 text-cian-electrico text-xs font-semibold rounded-full mb-4">
                Blockchain
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors line-clamp-2">
                Blockchain en Supply Chain: Más Allá del Hype
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-3">
                Casos de uso concretos donde blockchain realmente aporta valor en logística.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>11 min lectura</span>
                <Link 
                  href="/articulos/blockchain-supply-chain"
                  className="text-cian-electrico hover:underline"
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
          <div className="bg-gradient-to-br from-cian-electrico/10 to-violeta-tech/10 border border-cian-electrico/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              ¿Te apasiona la Deep Tech?
            </h2>
            <p className="text-gris-metalico text-lg mb-8 max-w-2xl mx-auto">
              Mantente al día con las últimas innovaciones en IA, autonomía y blockchain aplicadas a movilidad.
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
  );
}