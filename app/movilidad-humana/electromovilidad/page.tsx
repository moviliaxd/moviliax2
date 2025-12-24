import Link from 'next/link'

export default function Electromovilidad() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 pt-32 pb-16">
        <div className="hero-grid" aria-hidden="true" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cian-electrico/10 rounded-full blur-3xl animate-pulse-glow" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-cian-electrico/10 border border-cian-electrico/30 rounded-full text-cian-electrico text-sm font-semibold mb-6">
            🔋 Movilidad Humana
          </span>
          
          <h1 className="text-5xl md:text-6xl font-exo font-bold mb-6 leading-tight">
            Electro<span className="text-gradient">movilidad</span>
          </h1>
          
          <p className="text-xl text-gris-metalico mb-8 max-w-2xl mx-auto">
            Vehículos eléctricos, infraestructura de carga y la transición hacia un transporte sin emisiones en América Latina.
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
            <li className="text-blanco-puro">Electromovilidad</li>
          </ol>
        </nav>
      </div>

      {/* Key Stats */}
      <section className="py-12 px-4 bg-gradient-to-r from-cian-electrico/5 to-violeta-tech/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">245K</div>
              <div className="text-gris-metalico text-sm">EVs en LATAM</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">8,500</div>
              <div className="text-gris-metalico text-sm">Puntos de Carga</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">350%</div>
              <div className="text-gris-metalico text-sm">Crecimiento 2020-2024</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">$8B</div>
              <div className="text-gris-metalico text-sm">Inversión Proyectada 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Topics */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">Áreas de Cobertura</h2>
            <p className="text-gris-metalico text-lg max-w-2xl mx-auto">
              Los temas más relevantes en electromovilidad para América Latina
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="content-card group">
              <span className="text-4xl mb-4 block">🚗</span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                Vehículos Eléctricos
              </h3>
              <p className="text-gris-metalico mb-4">
                BEV, PHEV, híbridos y la evolución del mercado de vehículos particulares.
              </p>
              <ul className="space-y-2 text-sm text-gris-metalico">
                <li className="flex items-start gap-2">
                  <span className="text-cian-electrico mt-1">•</span>
                  <span>Análisis de modelos disponibles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cian-electrico mt-1">•</span>
                  <span>TCO vs vehículos de combustión</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cian-electrico mt-1">•</span>
                  <span>Incentivos y subsidios por país</span>
                </li>
              </ul>
            </article>

            <article className="content-card group">
              <span className="text-4xl mb-4 block">🚌</span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                Transporte Público
              </h3>
              <p className="text-gris-metalico mb-4">
                Electrificación de flotas de autobuses y transporte masivo urbano.
              </p>
              <ul className="space-y-2 text-sm text-gris-metalico">
                <li className="flex items-start gap-2">
                  <span className="text-cian-electrico mt-1">•</span>
                  <span>E-buses en ciudades de LATAM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cian-electrico mt-1">•</span>
                  <span>Casos de éxito: Santiago, Bogotá</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cian-electrico mt-1">•</span>
                  <span>Financiamiento de flotas</span>
                </li>
              </ul>
            </article>

            <article className="content-card group">
              <span className="text-4xl mb-4 block">⚡</span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                Infraestructura de Carga
              </h3>
              <p className="text-gris-metalico mb-4">
                Redes de cargadores, tecnología y modelos de negocio.
              </p>
              <ul className="space-y-2 text-sm text-gris-metalico">
                <li className="flex items-start gap-2">
                  <span className="text-cian-electrico mt-1">•</span>
                  <span>Carga rápida vs lenta</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cian-electrico mt-1">•</span>
                  <span>Operadores y CPOs principales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cian-electrico mt-1">•</span>
                  <span>Estándares y conectores</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Country Spotlight */}
      <section className="py-16 px-4 bg-gradient-to-r from-cian-electrico/5 to-violeta-tech/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              Líderes Regionales
            </h2>
            <p className="text-gris-metalico">
              Países que están marcando el camino en electromovilidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="content-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🇨🇱</span>
                <div>
                  <h3 className="font-bold text-lg">Chile</h3>
                  <span className="text-xs text-cian-electrico">Líder Regional</span>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gris-metalico">
                <p>✓ 15% penetración de EVs</p>
                <p>✓ +2,000 puntos de carga</p>
                <p>✓ Flota de e-buses más grande</p>
              </div>
            </div>

            <div className="content-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🇨🇷</span>
                <div>
                  <h3 className="font-bold text-lg">Costa Rica</h3>
                  <span className="text-xs text-cian-electrico">Energía Limpia</span>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gris-metalico">
                <p>✓ 99% energía renovable</p>
                <p>✓ Incentivos fiscales fuertes</p>
                <p>✓ Meta: 70% EVs para 2035</p>
              </div>
            </div>

            <div className="content-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🇲🇽</span>
                <div>
                  <h3 className="font-bold text-lg">México</h3>
                  <span className="text-xs text-cian-electrico">Mayor Mercado</span>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gris-metalico">
                <p>✓ Gigafactory Tesla confirmada</p>
                <p>✓ +80K EVs en circulación</p>
                <p>✓ Hub manufacturero regional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-exo font-bold mb-2">
                Artículos Destacados
              </h2>
              <p className="text-gris-metalico">
                Análisis profundos sobre electromovilidad
              </p>
            </div>
            <Link 
              href="/articulos?categoria=electromovilidad"
              className="hidden md:inline-flex items-center gap-2 text-cian-electrico hover:underline font-semibold"
            >
              Ver todos <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="content-card group hover:border-cian-electrico/50">
              <span className="inline-block px-3 py-1 bg-cian-electrico/10 text-cian-electrico text-xs font-semibold rounded-full mb-4">
                Vehículos
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors line-clamp-2">
                ¿Son los EVs Realmente Más Baratos? TCO Real en LATAM
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-3">
                Análisis completo del costo total de propiedad comparando eléctricos vs combustión en 5 países.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>18 min lectura</span>
                <Link href="/articulos/tco-evs-latam" className="text-cian-electrico hover:underline">
                  Leer más →
                </Link>
              </div>
            </article>

            <article className="content-card group hover:border-cian-electrico/50">
              <span className="inline-block px-3 py-1 bg-cian-electrico/10 text-cian-electrico text-xs font-semibold rounded-full mb-4">
                Infraestructura
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors line-clamp-2">
                El Mapa de los Cargadores en América Latina
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-3">
                Dónde están, quién los opera y qué falta para una red verdaderamente funcional.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>15 min lectura</span>
                <Link href="/articulos/mapa-cargadores" className="text-cian-electrico hover:underline">
                  Leer más →
                </Link>
              </div>
            </article>

            <article className="content-card group hover:border-cian-electrico/50">
              <span className="inline-block px-3 py-1 bg-cian-electrico/10 text-cian-electrico text-xs font-semibold rounded-full mb-4">
                Transporte Público
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors line-clamp-2">
                Santiago: La Capital del E-bus en América Latina
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-3">
                Cómo Chile logró electrificar el 20% de su flota de transporte público.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>12 min lectura</span>
                <Link href="/articulos/santiago-ebus" className="text-cian-electrico hover:underline">
                  Leer más →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Key Players */}
      <section className="py-16 px-4 bg-gradient-to-r from-cian-electrico/5 to-violeta-tech/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              Actores Clave
            </h2>
            <p className="text-gris-metalico">
              Empresas liderando la transición eléctrica en la región
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="content-card">
              <h3 className="text-xl font-bold mb-3">🏭 Fabricantes</h3>
              <div className="space-y-2 text-sm text-gris-metalico">
                <p>• BYD - Líder en e-buses y vehículos</p>
                <p>• Tesla - Gigafactory México en camino</p>
                <p>• JAC Motors - Presencia en 8 países</p>
                <p>• Renault-Nissan - Apuesta por híbridos</p>
              </div>
            </div>

            <div className="content-card">
              <h3 className="text-xl font-bold mb-3">⚡ Operadores de Carga</h3>
              <div className="space-y-2 text-sm text-gris-metalico">
                <p>• Enel X Way - Red más grande LATAM</p>
                <p>• Electromaps - Agregador regional</p>
                <p>• Copec Voltex - Líder en Chile</p>
                <p>• CFE - Infraestructura pública México</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-cian-electrico/10 to-violeta-tech/10 border border-cian-electrico/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              Sigue la Revolución Eléctrica
            </h2>
            <p className="text-gris-metalico text-lg mb-8 max-w-2xl mx-auto">
              Recibe análisis mensuales sobre el avance de la electromovilidad en América Latina.
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