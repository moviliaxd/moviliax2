import Link from 'next/link'

export default function SustainabilityWatch() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 pt-32 pb-16">
        <div className="hero-grid" aria-hidden="true" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-glow" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold mb-6">
            🌱 Impacto Ambiental
          </span>
          
          <h1 className="text-5xl md:text-6xl font-exo font-bold mb-6 leading-tight">
            Sustainability <span className="text-gradient">Watch</span>
          </h1>
          
          <p className="text-xl text-gris-metalico mb-8 max-w-2xl mx-auto">
            Seguimiento de metas Net-Zero, ESG y el camino hacia la movilidad sostenible en América Latina.
          </p>
        </div>
      </section>

      {/* Key Metrics Dashboard */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              Panel de Sostenibilidad LATAM
            </h2>
            <p className="text-gris-metalico">
              Métricas clave de impacto ambiental en el sector
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="content-card text-center">
              <div className="text-4xl mb-3">🌍</div>
              <div className="text-3xl font-exo font-bold text-green-400 mb-2">-18%</div>
              <div className="text-sm text-gris-metalico">Reducción CO₂ desde 2020</div>
            </div>

            <div className="content-card text-center">
              <div className="text-4xl mb-3">⚡</div>
              <div className="text-3xl font-exo font-bold text-green-400 mb-2">245K</div>
              <div className="text-sm text-gris-metalico">EVs en circulación</div>
            </div>

            <div className="content-card text-center">
              <div className="text-4xl mb-3">🔋</div>
              <div className="text-3xl font-exo font-bold text-green-400 mb-2">8,500</div>
              <div className="text-sm text-gris-metalico">Puntos de carga públicos</div>
            </div>

            <div className="content-card text-center">
              <div className="text-4xl mb-3">🌳</div>
              <div className="text-3xl font-exo font-bold text-green-400 mb-2">$12B</div>
              <div className="text-sm text-gris-metalico">Inversión ESG 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-500/5 to-cian-electrico/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">Áreas de Enfoque</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="content-card group">
              <span className="text-4xl mb-4 block">🎯</span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors">
                Net-Zero 2050
              </h3>
              <p className="text-gris-metalico mb-4">
                Seguimiento de compromisos gubernamentales y corporativos hacia la neutralidad de carbono.
              </p>
              <ul className="space-y-2 text-sm text-gris-metalico">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Roadmaps nacionales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Políticas de descarbonización</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Incentivos fiscales verdes</span>
                </li>
              </ul>
            </article>

            <article className="content-card group">
              <span className="text-4xl mb-4 block">📊</span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors">
                ESG en Movilidad
              </h3>
              <p className="text-gris-metalico mb-4">
                Análisis de desempeño ambiental, social y de gobernanza en empresas del sector.
              </p>
              <ul className="space-y-2 text-sm text-gris-metalico">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Rankings corporativos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Reportes de sostenibilidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Best practices regionales</span>
                </li>
              </ul>
            </article>

            <article className="content-card group">
              <span className="text-4xl mb-4 block">🔄</span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors">
                Economía Circular
              </h3>
              <p className="text-gris-metalico mb-4">
                Innovaciones en reciclaje de baterías, remanufactura y logística inversa.
              </p>
              <ul className="space-y-2 text-sm text-gris-metalico">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Reciclaje de baterías EV</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Segunda vida de vehículos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Empaques sostenibles</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Country Progress Tracker */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              Progreso por País
            </h2>
            <p className="text-gris-metalico">
              Avances hacia metas de sostenibilidad en la región
            </p>
          </div>

          <div className="space-y-6">
            {/* Chile */}
            <div className="content-card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🇨🇱</span>
                  <div>
                    <h3 className="font-bold text-lg">Chile</h3>
                    <p className="text-sm text-gris-metalico">Líder regional en electromovilidad</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                  Avanzado
                </span>
              </div>
              <div className="w-full bg-gris-oscuro/30 rounded-full h-3 mb-2">
                <div className="bg-green-400 h-3 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-sm text-gris-metalico">75% hacia meta Net-Zero 2050</p>
            </div>

            {/* Costa Rica */}
            <div className="content-card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🇨🇷</span>
                  <div>
                    <h3 className="font-bold text-lg">Costa Rica</h3>
                    <p className="text-sm text-gris-metalico">99% energía renovable</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                  Avanzado
                </span>
              </div>
              <div className="w-full bg-gris-oscuro/30 rounded-full h-3 mb-2">
                <div className="bg-green-400 h-3 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <p className="text-sm text-gris-metalico">80% hacia meta Net-Zero 2050</p>
            </div>

            {/* Colombia */}
            <div className="content-card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🇨🇴</span>
                  <div>
                    <h3 className="font-bold text-lg">Colombia</h3>
                    <p className="text-sm text-gris-metalico">Transición energética acelerada</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded-full border border-yellow-500/30">
                  En progreso
                </span>
              </div>
              <div className="w-full bg-gris-oscuro/30 rounded-full h-3 mb-2">
                <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '55%' }}></div>
              </div>
              <p className="text-sm text-gris-metalico">55% hacia meta Net-Zero 2050</p>
            </div>

            {/* México */}
            <div className="content-card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🇲🇽</span>
                  <div>
                    <h3 className="font-bold text-lg">México</h3>
                    <p className="text-sm text-gris-metalico">Desafíos en regulación ambiental</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded-full border border-yellow-500/30">
                  En progreso
                </span>
              </div>
              <div className="w-full bg-gris-oscuro/30 rounded-full h-3 mb-2">
                <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <p className="text-sm text-gris-metalico">45% hacia meta Net-Zero 2050</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Analysis */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-500/5 to-violeta-tech/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              Análisis Recientes
            </h2>
            <p className="text-gris-metalico">
              Investigaciones sobre sostenibilidad en movilidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="content-card group hover:border-green-400/50">
              <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-xs font-semibold rounded-full mb-4">
                Net-Zero
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                ¿Puede LATAM Alcanzar Net-Zero en Transporte para 2050?
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-3">
                Análisis realista de los desafíos y oportunidades para la descarbonización regional.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>20 min lectura</span>
                <Link href="/articulos/net-zero-2050" className="text-green-400 hover:underline">
                  Leer más →
                </Link>
              </div>
            </article>

            <article className="content-card group hover:border-green-400/50">
              <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-xs font-semibold rounded-full mb-4">
                ESG
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                Ranking ESG: Las Empresas de Movilidad Más Sostenibles
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-3">
                Evaluación de desempeño ambiental, social y de gobernanza en el sector.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>15 min lectura</span>
                <Link href="/articulos/ranking-esg" className="text-green-400 hover:underline">
                  Leer más →
                </Link>
              </div>
            </article>

            <article className="content-card group hover:border-green-400/50">
              <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-xs font-semibold rounded-full mb-4">
                Economía Circular
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                El Desafío del Reciclaje de Baterías en América Latina
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-3">
                Cómo la región está preparándose para la ola de baterías EV al final de su vida útil.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>18 min lectura</span>
                <Link href="/articulos/reciclaje-baterias" className="text-green-400 hover:underline">
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
          <div className="bg-gradient-to-br from-green-500/10 to-cian-electrico/10 border border-green-500/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              Sigue el Progreso Verde
            </h2>
            <p className="text-gris-metalico text-lg mb-8 max-w-2xl mx-auto">
              Recibe actualizaciones mensuales sobre sostenibilidad, ESG y el camino hacia Net-Zero en LATAM.
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