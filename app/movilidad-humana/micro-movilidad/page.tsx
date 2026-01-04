import Link from 'next/link'

export default function MicroMovilidad() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 pt-32 pb-16">
        <div className="hero-grid" aria-hidden="true" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cian-electrico/10 rounded-full blur-3xl animate-pulse-glow" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-cian-electrico/10 border border-cian-electrico/30 rounded-full text-cian-electrico text-sm font-semibold mb-6">
            🛴 Movilidad Humana
          </span>
          
          <h1 className="text-5xl md:text-6xl font-exo font-bold mb-6 leading-tight">
            Micro<span className="text-gradient">-movilidad</span>
          </h1>
          
          <p className="text-xl text-gris-metalico mb-8 max-w-2xl mx-auto">
            Scooters, bicicletas y soluciones de proximidad para la última milla urbana en América Latina.
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
            <li className="text-blanco-puro">Micro-movilidad</li>
          </ol>
        </nav>
      </div>

      {/* Key Stats */}
      <section className="py-12 px-4 bg-gradient-to-r from-cian-electrico/5 to-violeta-tech/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">850K</div>
              <div className="text-gris-metalico text-sm">Vehículos en Circulación</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">45M</div>
              <div className="text-gris-metalico text-sm">Viajes Mensuales</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">120+</div>
              <div className="text-gris-metalico text-sm">Ciudades con Servicio</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">$2.5B</div>
              <div className="text-gris-metalico text-sm">Inversión Acumulada</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">Tipos de Vehículos</h2>
            <p className="text-gris-metalico text-lg max-w-2xl mx-auto">
              Las diferentes modalidades de micro-movilidad en la región
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="content-card group">
              <span className="text-4xl mb-4 block">🛴</span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                E-Scooters
              </h3>
              <p className="text-gris-metalico mb-4">
                Patinetas eléctricas compartidas, la modalidad más popular en LATAM.
              </p>
              <ul className="space-y-2 text-sm text-gris-metalico mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-cian-electrico mt-1">•</span>
                  <span>+500K unidades operando</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cian-electrico mt-1">•</span>
                  <span>Velocidad promedio: 20 km/h</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cian-electrico mt-1">•</span>
                  <span>Viaje promedio: 2.5 km</span>
                </li>
              </ul>
              <div className="text-xs text-gris-metalico">
                <strong>Principales operadores:</strong> Lime, Grin, Movo
              </div>
            </article>

            <article className="content-card group">
              <span className="text-4xl mb-4 block">🚲</span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                Bicicletas Compartidas
              </h3>
              <p className="text-gris-metalico mb-4">
                Sistemas de bicis públicas y privadas, con y sin estación.
              </p>
              <ul className="space-y-2 text-sm text-gris-metalico mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-cian-electrico mt-1">•</span>
                  <span>+250K bicicletas activas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cian-electrico mt-1">•</span>
                  <span>Dockless vs con estación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cian-electrico mt-1">•</span>
                  <span>Viaje promedio: 3.2 km</span>
                </li>
              </ul>
              <div className="text-xs text-gris-metalico">
                <strong>Principales operadores:</strong> Tembici, Mobike, EcoBici
              </div>
            </article>

            <article className="content-card group">
              <span className="text-4xl mb-4 block">⚡</span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                E-Bikes
              </h3>
              <p className="text-gris-metalico mb-4">
                Bicicletas eléctricas, el segmento de mayor crecimiento.
              </p>
              <ul className="space-y-2 text-sm text-gris-metalico mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-cian-electrico mt-1">•</span>
                  <span>+100K unidades compartidas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cian-electrico mt-1">•</span>
                  <span>Velocidad asistida: hasta 25 km/h</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cian-electrico mt-1">•</span>
                  <span>Ideal para distancias medias</span>
                </li>
              </ul>
              <div className="text-xs text-gris-metalico">
                <strong>Principales operadores:</strong> Grow, Bici Eléctrica
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Regulation Landscape */}
      <section className="py-16 px-4 bg-gradient-to-r from-cian-electrico/5 to-violeta-tech/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              Panorama Regulatorio
            </h2>
            <p className="text-gris-metalico">
              El estado de la regulación en principales ciudades de LATAM
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="content-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🇲🇽</span>
                <h3 className="font-bold text-lg">Ciudad de México</h3>
              </div>
              <div className="mb-3">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                  Regulación Avanzada
                </span>
              </div>
              <ul className="space-y-2 text-sm text-gris-metalico">
                <li>✓ Límite de velocidad: 15 km/h en banquetas</li>
                <li>✓ Áreas prohibidas definidas</li>
                <li>✓ Licencias para operadores</li>
                <li>✓ Infraestructura ciclista en expansión</li>
              </ul>
            </div>

            <div className="content-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🇨🇴</span>
                <h3 className="font-bold text-lg">Bogotá</h3>
              </div>
              <div className="mb-3">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                  Regulación Avanzada
                </span>
              </div>
              <ul className="space-y-2 text-sm text-gris-metalico">
                <li>✓ +500 km de ciclovías</li>
                <li>✓ Regulación de parqueo</li>
                <li>✓ Cupos limitados por operador</li>
                <li>✓ Cultura ciclista establecida</li>
              </ul>
            </div>

            <div className="content-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🇨🇱</span>
                <h3 className="font-bold text-lg">Santiago</h3>
              </div>
              <div className="mb-3">
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded-full border border-yellow-500/30">
                  En Desarrollo
                </span>
              </div>
              <ul className="space-y-2 text-sm text-gris-metalico">
                <li>○ Normativa en proceso</li>
                <li>✓ Infraestructura ciclista creciendo</li>
                <li>○ Debate sobre espacios públicos</li>
                <li>✓ Alta adopción ciudadana</li>
              </ul>
            </div>

            <div className="content-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🇦🇷</span>
                <h3 className="font-bold text-lg">Buenos Aires</h3>
              </div>
              <div className="mb-3">
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded-full border border-yellow-500/30">
                  En Desarrollo
                </span>
              </div>
              <ul className="space-y-2 text-sm text-gris-metalico">
                <li>✓ Sistema de bicis públicas EcoBici</li>
                <li>○ Regulación de scooters limitada</li>
                <li>✓ Red de ciclovías en expansión</li>
                <li>○ Conflictos con peatones</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Opportunities */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-exo font-bold mb-6">🚧 Desafíos</h2>
              <div className="space-y-4">
                <div className="content-card">
                  <h3 className="font-bold mb-2">Seguridad Vial</h3>
                  <p className="text-sm text-gris-metalico">
                    Falta de infraestructura segregada y altos índices de accidentes en vías compartidas.
                  </p>
                </div>
                <div className="content-card">
                  <h3 className="font-bold mb-2">Vandalismo</h3>
                  <p className="text-sm text-gris-metalico">
                    Daño y robo de unidades afecta la rentabilidad de operadores.
                  </p>
                </div>
                <div className="content-card">
                  <h3 className="font-bold mb-2">Regulación Fragmentada</h3>
                  <p className="text-sm text-gris-metalico">
                    Normativas diferentes por ciudad dificultan la expansión regional.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-exo font-bold mb-6">🌟 Oportunidades</h2>
              <div className="space-y-4">
                <div className="content-card">
                  <h3 className="font-bold mb-2">Congestión Urbana</h3>
                  <p className="text-sm text-gris-metalico">
                    Ciudades saturadas buscan alternativas al auto particular.
                  </p>
                </div>
                <div className="content-card">
                  <h3 className="font-bold mb-2">Sostenibilidad</h3>
                  <p className="text-sm text-gris-metalico">
                    Gobiernos impulsan movilidad cero emisiones con incentivos y políticas.
                  </p>
                </div>
                <div className="content-card">
                  <h3 className="font-bold mb-2">Primera/Última Milla</h3>
                  <p className="text-sm text-gris-metalico">
                    Complemento ideal para transporte público, resuelve el "último kilómetro".
                  </p>
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
                Análisis sobre micro-movilidad en la región
              </p>
            </div>
            <Link 
              href="/articulos?categoria=micro-movilidad"
              className="hidden md:inline-flex items-center gap-2 text-cian-electrico hover:underline font-semibold"
            >
              Ver todos <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="content-card group hover:border-cian-electrico/50">
              <span className="inline-block px-3 py-1 bg-cian-electrico/10 text-cian-electrico text-xs font-semibold rounded-full mb-4">
                Análisis
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors line-clamp-2">
                ¿Son Rentables los Scooters Compartidos en LATAM?
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-3">
                Análisis de unit economics y sostenibilidad financiera de los principales operadores.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>16 min lectura</span>
                <Link href="/articulos/rentabilidad-scooters" className="text-cian-electrico hover:underline">
                  Leer más →
                </Link>
              </div>
            </article>

            <article className="content-card group hover:border-cian-electrico/50">
              <span className="inline-block px-3 py-1 bg-cian-electrico/10 text-cian-electrico text-xs font-semibold rounded-full mb-4">
                Regulación
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors line-clamp-2">
                Guía Comparada: Regulación de Micro-movilidad en 10 Ciudades
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-3">
                Las mejores prácticas regulatorias y lo que podemos aprender de cada ciudad.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>22 min lectura</span>
                <Link href="/articulos/regulacion-micromovilidad" className="text-cian-electrico hover:underline">
                  Leer más →
                </Link>
              </div>
            </article>

            <article className="content-card group hover:border-cian-electrico/50">
              <span className="inline-block px-3 py-1 bg-cian-electrico/10 text-cian-electrico text-xs font-semibold rounded-full mb-4">
                Seguridad
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors line-clamp-2">
                Accidentes en E-Scooters: Datos y Soluciones
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-3">
                Estadísticas de siniestralidad y cómo ciudades líderes están reduciendo riesgos.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>14 min lectura</span>
                <Link href="/articulos/seguridad-escooters" className="text-cian-electrico hover:underline">
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
              Sigue la Evolución de la Micro-movilidad
            </h2>
            <p className="text-gris-metalico text-lg mb-8 max-w-2xl mx-auto">
              Análisis mensuales sobre scooters, bicicletas y regulación urbana en América Latina.
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