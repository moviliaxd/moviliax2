'use client'

import { useState } from 'react'
import Link from 'next/link'

const startups = [
  {
    name: 'Nowports',
    country: '🇲🇽',
    category: 'Freight Tech',
    description: 'Plataforma digital de freight forwarding que simplifica el comercio internacional.',
    funding: '$150M Series C',
    founded: 2018,
    impact: 'Mueve +$2B en mercancías anualmente',
    website: 'nowports.com'
  },
  {
    name: 'Loggi',
    country: '🇧🇷',
    category: 'Last Mile',
    description: 'Red logística urbana con tecnología propia para entregas same-day.',
    funding: '$200M+ Total',
    founded: 2013,
    impact: '+15M entregas mensuales',
    website: 'loggi.com'
  },
  {
    name: 'Chazki',
    country: '🇵🇪',
    category: 'Last Mile',
    description: 'Solución de última milla para e-commerce con presencia regional.',
    funding: '$30M Series B',
    founded: 2015,
    impact: 'Activo en 8 países LATAM',
    website: 'chazki.com'
  },
  {
    name: 'Mercado Livre Envios',
    country: '🇧🇷',
    category: 'Full Logistics',
    description: 'Brazo logístico del mayor marketplace de LATAM con fulfillment propio.',
    funding: 'Parte de MercadoLibre',
    founded: 2016,
    impact: '+1,000 centros de distribución',
    website: 'mercadolibre.com'
  },
  {
    name: 'Enviame',
    country: '🇨🇱',
    category: 'Shipping Tech',
    description: 'Plataforma SaaS de gestión multicarrier para e-commerce.',
    funding: '$10M Series A',
    founded: 2015,
    impact: '+10K tiendas conectadas',
    website: 'enviame.io'
  },
  {
    name: 'SimpliRoute',
    country: '🇨🇱',
    category: 'Route Optimization',
    description: 'Software de optimización de rutas con IA para flotas de última milla.',
    funding: '$20M Series B',
    founded: 2014,
    impact: 'Ahorra 30% en costos de entrega',
    website: 'simpliroute.com'
  }
]

const categories = ['Todas', 'Last Mile', 'Freight Tech', 'Full Logistics', 'Shipping Tech', 'Route Optimization']

export default function LogtechShowroom() {
  const [selectedCategory, setSelectedCategory] = useState('Todas')

  const filteredStartups = selectedCategory === 'Todas' 
    ? startups 
    : startups.filter(s => s.category === selectedCategory)

  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 pt-32 pb-16">
        <div className="hero-grid" aria-hidden="true" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-violeta-tech/10 rounded-full blur-3xl animate-pulse-glow" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-violeta-tech/10 border border-violeta-tech/30 rounded-full text-violeta-tech text-sm font-semibold mb-6">
            🚀 Startups Disruptivas
          </span>
          
          <h1 className="text-5xl md:text-6xl font-exo font-bold mb-6 leading-tight">
            Logtech <span className="text-gradient">Showroom</span>
          </h1>
          
          <p className="text-xl text-gris-metalico mb-8 max-w-2xl mx-auto">
            Escaparate de startups que están revolucionando la logística en América Latina. Entrevistas y reviews exclusivos.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-violeta-tech/5 to-cian-electrico/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-violeta-tech mb-2">350+</div>
              <div className="text-gris-metalico text-sm">Startups Logtech</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-violeta-tech mb-2">$8B</div>
              <div className="text-gris-metalico text-sm">Inversión Acumulada</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-violeta-tech mb-2">12</div>
              <div className="text-gris-metalico text-sm">Unicornios Logtech</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-violeta-tech mb-2">18</div>
              <div className="text-gris-metalico text-sm">Países Activos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-violeta-tech text-negro-profundo'
                    : 'bg-gris-oscuro/30 text-gris-metalico hover:bg-gris-oscuro/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Startups Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-2">
              Startups Destacadas
            </h2>
            <p className="text-gris-metalico">
              {filteredStartups.length} startup{filteredStartups.length !== 1 ? 's' : ''} en {selectedCategory}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStartups.map((startup, index) => (
              <article key={index} className="content-card group hover:border-violeta-tech/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{startup.country}</span>
                  <span className="px-3 py-1 bg-violeta-tech/10 text-violeta-tech text-xs font-semibold rounded-full">
                    {startup.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-violeta-tech transition-colors">
                  {startup.name}
                </h3>

                <p className="text-gris-metalico text-sm mb-4 line-clamp-2">
                  {startup.description}
                </p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gris-metalico">
                    <span>💰</span>
                    <span>{startup.funding}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gris-metalico">
                    <span>📅</span>
                    <span>Fundada en {startup.founded}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gris-metalico">
                    <span>📊</span>
                    <span>{startup.impact}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gris-oscuro/30 flex items-center justify-between">
                  <a 
                    href={`https://${startup.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-violeta-tech hover:underline"
                  >
                    {startup.website} ↗
                  </a>
                  <Link 
                    href={`/logtech-showroom/${startup.name.toLowerCase()}`}
                    className="text-sm text-cian-electrico hover:underline font-semibold"
                  >
                    Ver perfil →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-violeta-tech/5 to-cian-electrico/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              Spotlight del Mes
            </h2>
            <p className="text-gris-metalico">
              Entrevista exclusiva con fundadores
            </p>
          </div>

          <div className="content-card max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-violeta-tech/20 rounded-full flex items-center justify-center text-3xl">
                🚀
              </div>
              <div>
                <span className="text-xs font-semibold text-violeta-tech">ENTREVISTA EXCLUSIVA</span>
                <h3 className="text-2xl font-bold">Nowports: De México al Mundo</h3>
                <p className="text-sm text-gris-metalico">Conversación con Alfonso de los Ríos, Co-founder & CEO</p>
              </div>
            </div>

            <p className="text-gris-metalico mb-6 leading-relaxed">
              Nowports ha revolucionado el freight forwarding en LATAM digitalizando un proceso tradicionalmente manual. 
              En esta entrevista exclusiva, Alfonso comparte los desafíos de escalar una startup logística, 
              las lecciones aprendidas y su visión para democratizar el comercio internacional.
            </p>

            <div className="flex gap-4">
              <Link 
                href="/moviliax-talks/nowports-alfonso-de-los-rios"
                className="btn-primary"
              >
                Leer entrevista completa →
              </Link>
              <Link 
                href="/podcast/nowports"
                className="btn-secondary"
              >
                Escuchar podcast 🎙️
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Startup CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-violeta-tech/10 to-cian-electrico/10 border border-violeta-tech/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              ¿Tienes una Startup Logtech?
            </h2>
            <p className="text-gris-metalico text-lg mb-8 max-w-2xl mx-auto">
              Queremos conocer tu historia. Si estás construyendo el futuro de la logística en LATAM, 
              postula para aparecer en nuestro Showroom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/logtech-showroom/postular"
                className="btn-primary inline-flex items-center gap-2"
              >
                Postular mi Startup
                <span>🚀</span>
              </Link>
              <Link 
                href="/contacto?subject=partnership"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Ser Partner
                <span>🤝</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}