'use client'

import { useState } from 'react'
import Link from 'next/link'

const countries = [
  { 
    name: 'México', 
    flag: '🇲🇽',
    status: 'hot',
    highlights: ['Nearshoring Boom', 'EVs en crecimiento', 'Infraestructura en expansión'],
    articles: 12
  },
  { 
    name: 'Brasil', 
    flag: '🇧🇷',
    status: 'hot',
    highlights: ['Líder en Logtech', 'Biocombustibles', 'E-commerce gigante'],
    articles: 18
  },
  { 
    name: 'Colombia', 
    flag: '🇨🇴',
    status: 'medium',
    highlights: ['Hub logístico regional', 'Micro-movilidad urbana', 'Regulación avanzada'],
    articles: 8
  },
  { 
    name: 'Chile', 
    flag: '🇨🇱',
    status: 'medium',
    highlights: ['Pionero en EVs', 'Transporte público eléctrico', 'Minería verde'],
    articles: 10
  },
  { 
    name: 'Argentina', 
    flag: '🇦🇷',
    status: 'medium',
    highlights: ['Manufactura automotriz', 'Logística agrícola', 'Desafíos económicos'],
    articles: 7
  },
  { 
    name: 'Perú', 
    flag: '🇵🇪',
    status: 'emerging',
    highlights: ['Corredores mineros', 'Last-mile challenges', 'Inversión en puertos'],
    articles: 5
  },
  { 
    name: 'Costa Rica', 
    flag: '🇨🇷',
    status: 'emerging',
    highlights: ['Sostenibilidad líder', 'Tech hub CA', 'Movilidad limpia'],
    articles: 4
  },
  { 
    name: 'Ecuador', 
    flag: '🇪🇨',
    status: 'emerging',
    highlights: ['Logística portuaria', 'Transporte público', 'Carga pesada'],
    articles: 3
  },
]

export default function RadarLatam() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'hot': return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'emerging': return 'bg-green-500/20 text-green-400 border-green-500/30'
      default: return 'bg-gris-oscuro/20'
    }
  }

  const getStatusText = (status: string) => {
    switch(status) {
      case 'hot': return '🔥 Alta Actividad'
      case 'medium': return '⚡ Actividad Media'
      case 'emerging': return '🌱 Emergente'
      default: return 'N/A'
    }
  }

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
            🗺️ Monitoreo Regional
          </span>
          
          <h1 className="text-5xl md:text-6xl font-exo font-bold mb-6 leading-tight">
            Radar <span className="text-gradient">LATAM</span>
          </h1>
          
          <p className="text-xl text-gris-metalico mb-8 max-w-2xl mx-auto">
            Seguimiento país por país del ecosistema de movilidad en América Latina. Tendencias, inversiones y regulaciones.
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Countries List */}
            <div>
              <h2 className="text-2xl font-exo font-bold mb-6">Países Monitoreados</h2>
              <div className="space-y-3">
                {countries.map((country) => (
                  <button
                    key={country.name}
                    onClick={() => setSelectedCountry(country)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selectedCountry.name === country.name
                        ? 'bg-cian-electrico/10 border-cian-electrico/50'
                        : 'bg-gris-oscuro/20 border-gris-oscuro/30 hover:border-gris-oscuro/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{country.flag}</span>
                        <div>
                          <h3 className="font-bold">{country.name}</h3>
                          <p className="text-sm text-gris-metalico">{country.articles} artículos</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(country.status)}`}>
                        {getStatusText(country.status)}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Country Detail */}
            <div className="content-card">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl">{selectedCountry.flag}</span>
                <div>
                  <h2 className="text-3xl font-exo font-bold mb-2">{selectedCountry.name}</h2>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(selectedCountry.status)}`}>
                    {getStatusText(selectedCountry.status)}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">🎯 Tendencias Destacadas</h3>
                <ul className="space-y-2">
                  {selectedCountry.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-gris-metalico">
                      <span className="text-cian-electrico mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gris-oscuro/30">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gris-metalico">Artículos publicados</span>
                  <span className="text-2xl font-exo font-bold text-cian-electrico">{selectedCountry.articles}</span>
                </div>
                <Link
                  href={`/articulos?pais=${selectedCountry.name.toLowerCase()}`}
                  className="btn-primary w-full justify-center"
                >
                  Ver todos los artículos →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Stats */}
      <section className="py-16 px-4 bg-gradient-to-r from-cian-electrico/5 to-violeta-tech/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              América Latina en Números
            </h2>
            <p className="text-gris-metalico max-w-2xl mx-auto">
              El panorama actual del ecosistema de movilidad en la región
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">18</div>
              <div className="text-gris-metalico text-sm">Países Monitoreados</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">$45B</div>
              <div className="text-gris-metalico text-sm">Inversión Tech 2024</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">850+</div>
              <div className="text-gris-metalico text-sm">Startups Activas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">650M</div>
              <div className="text-gris-metalico text-sm">Población Total</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Reports */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              Reportes Recientes por País
            </h2>
            <p className="text-gris-metalico">
              Las últimas actualizaciones del ecosistema regional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="content-card group hover:border-cian-electrico/50">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🇲🇽</span>
                <span className="text-xs font-semibold text-gris-metalico">México</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors line-clamp-2">
                Tesla Anuncia Inversión de $5B en Nuevo León
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-2">
                La Gigafactory México cambia el panorama automotriz del país.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>Hace 2 días</span>
                <Link href="/articulos/tesla-mexico" className="text-cian-electrico hover:underline">
                  Leer →
                </Link>
              </div>
            </article>

            <article className="content-card group hover:border-cian-electrico/50">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🇧🇷</span>
                <span className="text-xs font-semibold text-gris-metalico">Brasil</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors line-clamp-2">
                São Paulo Lanza Mayor Red de E-buses de LATAM
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-2">
                1,200 autobuses eléctricos transformarán el transporte público.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>Hace 5 días</span>
                <Link href="/articulos/ebuses-sao-paulo" className="text-cian-electrico hover:underline">
                  Leer →
                </Link>
              </div>
            </article>

            <article className="content-card group hover:border-cian-electrico/50">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🇨🇱</span>
                <span className="text-xs font-semibold text-gris-metalico">Chile</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors line-clamp-2">
                Chile Alcanza 15% de Penetración en Vehículos Eléctricos
              </h3>
              <p className="text-gris-metalico text-sm mb-4 line-clamp-2">
                Líder regional en adopción de EVs supera expectativas.
              </p>
              <div className="flex items-center justify-between text-sm text-gris-metalico">
                <span>Hace 1 semana</span>
                <Link href="/articulos/evs-chile" className="text-cian-electrico hover:underline">
                  Leer →
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
              Mantente Informado sobre LATAM
            </h2>
            <p className="text-gris-metalico text-lg mb-8 max-w-2xl mx-auto">
              Recibe actualizaciones semanales sobre tendencias, inversiones y regulaciones en toda la región.
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