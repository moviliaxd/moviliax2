'use client'

import { useState } from 'react'
import Link from 'next/link'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const glosarioData = {
  A: [
    { 
      term: 'AGV (Automated Guided Vehicle)', 
      definition: 'Vehículo de transporte automatizado que sigue rutas predefinidas mediante guías magnéticas, láser o visión artificial. Usado principalmente en almacenes y fábricas.',
      category: 'Logística'
    },
    { 
      term: 'Autonomía (Vehículos)', 
      definition: 'Capacidad de un vehículo para operar sin intervención humana. Se clasifica en niveles del 0 al 5 según SAE.',
      category: 'Deep Tech'
    }
  ],
  B: [
    { 
      term: 'BEV (Battery Electric Vehicle)', 
      definition: 'Vehículo eléctrico puro que funciona únicamente con baterías recargables, sin motor de combustión.',
      category: 'Movilidad Humana'
    },
    { 
      term: 'Blockchain', 
      definition: 'Tecnología de registro distribuido que permite crear cadenas de bloques inmutables de datos. Fundamental para trazabilidad en supply chain.',
      category: 'Deep Tech'
    }
  ],
  C: [
    { 
      term: 'Cross-docking', 
      definition: 'Estrategia logística donde la mercancía se transfiere directamente del transporte de entrada al de salida, minimizando el almacenamiento.',
      category: 'Logística'
    }
  ],
  D: [
    { 
      term: 'Dark Store', 
      definition: 'Tienda física convertida en centro de distribución exclusivo para e-commerce, cerrada al público general.',
      category: 'Logística'
    }
  ],
  E: [
    { 
      term: 'E-scooter', 
      definition: 'Patineta eléctrica de movilidad compartida, típicamente operada mediante apps de micro-movilidad.',
      category: 'Movilidad Humana'
    }
  ],
  M: [
    { 
      term: 'MaaS (Mobility as a Service)', 
      definition: 'Plataforma digital que integra múltiples servicios de transporte (públicos y privados) permitiendo planificar, reservar y pagar viajes de manera unificada.',
      category: 'Movilidad Humana'
    }
  ],
  N: [
    { 
      term: 'Nearshoring', 
      definition: 'Estrategia de relocalización de operaciones a países cercanos geográficamente, reduciendo costos y tiempos vs. offshoring lejano.',
      category: 'Logística'
    }
  ]
}

export default function GlosarioPage() {
  const [selectedLetter, setSelectedLetter] = useState<string>('A')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTerms = glosarioData[selectedLetter as keyof typeof glosarioData] || []
  
  const searchResults = searchTerm.length > 0 
    ? Object.values(glosarioData).flat().filter(item => 
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : []

  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 pt-32 pb-16">
        <div className="hero-grid" aria-hidden="true" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violeta-tech/10 rounded-full blur-3xl animate-pulse-glow" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-violeta-tech/10 border border-violeta-tech/30 rounded-full text-violeta-tech text-sm font-semibold mb-6">
            📖 Valor Estratégico
          </span>
          
          <h1 className="text-5xl md:text-6xl font-exo font-bold mb-6 leading-tight">
            Glosario <span className="text-gradient">Tech</span>
          </h1>
          
          <p className="text-xl text-gris-metalico mb-8 max-w-2xl mx-auto">
            Tu diccionario interactivo de términos técnicos en español. Democratizando el lenguaje de la movilidad y logística.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="px-4 pb-8">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar término o concepto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 bg-gris-oscuro/30 border border-gris-oscuro/50 rounded-xl text-blanco-puro placeholder-gris-metalico focus:outline-none focus:border-cian-electrico/50 transition-colors"
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gris-metalico text-xl">
              🔍
            </span>
          </div>
        </div>
      </section>

      {/* Alphabet Navigation */}
      {!searchTerm && (
        <section className="px-4 pb-8">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-center gap-2">
              {alphabet.map((letter) => {
                const hasTerms = glosarioData[letter as keyof typeof glosarioData]
                return (
                  <button
                    key={letter}
                    onClick={() => hasTerms && setSelectedLetter(letter)}
                    disabled={!hasTerms}
                    className={`w-10 h-10 rounded-lg font-exo font-bold transition-all ${
                      selectedLetter === letter
                        ? 'bg-cian-electrico text-negro-profundo'
                        : hasTerms
                        ? 'bg-gris-oscuro/30 text-blanco-puro hover:bg-gris-oscuro/50'
                        : 'bg-gris-oscuro/10 text-gris-oscuro cursor-not-allowed'
                    }`}
                  >
                    {letter}
                  </button>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Terms List */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          {searchTerm ? (
            // Search Results
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-exo font-bold mb-2">
                  Resultados de búsqueda
                </h2>
                <p className="text-gris-metalico">
                  {searchResults.length} término{searchResults.length !== 1 ? 's' : ''} encontrado{searchResults.length !== 1 ? 's' : ''}
                </p>
              </div>

              {searchResults.length > 0 ? (
                <div className="space-y-6">
                  {searchResults.map((item, index) => (
                    <article key={index} className="content-card">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-2xl font-bold text-cian-electrico">
                          {item.term}
                        </h3>
                        <span className="px-3 py-1 bg-violeta-tech/10 text-violeta-tech text-xs font-semibold rounded-full whitespace-nowrap">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-gris-metalico leading-relaxed">
                        {item.definition}
                      </p>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <span className="text-6xl mb-4 block">🔍</span>
                  <p className="text-gris-metalico text-lg">
                    No encontramos resultados para "{searchTerm}"
                  </p>
                  <p className="text-gris-metalico mt-2">
                    Intenta con otro término o navega por el alfabeto
                  </p>
                </div>
              )}
            </div>
          ) : (
            // Letter Terms
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-exo font-bold mb-2">
                  Letra <span className="text-cian-electrico">{selectedLetter}</span>
                </h2>
                <p className="text-gris-metalico">
                  {filteredTerms.length} término{filteredTerms.length !== 1 ? 's' : ''} en esta letra
                </p>
              </div>

              <div className="space-y-6">
                {filteredTerms.map((item, index) => (
                  <article key={index} className="content-card group hover:border-cian-electrico/50">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-2xl font-bold group-hover:text-cian-electrico transition-colors">
                        {item.term}
                      </h3>
                      <span className="px-3 py-1 bg-violeta-tech/10 text-violeta-tech text-xs font-semibold rounded-full whitespace-nowrap">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-gris-metalico leading-relaxed">
                      {item.definition}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Categories Legend */}
      <section className="px-4 py-16 bg-gradient-to-r from-cian-electrico/5 to-violeta-tech/5">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-2xl font-exo font-bold mb-6 text-center">Categorías</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <span className="text-4xl mb-2 block">⚡</span>
              <h4 className="font-bold mb-2">Movilidad Humana</h4>
              <p className="text-gris-metalico text-sm">
                EVs, micro-movilidad, MaaS
              </p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-2 block">📦</span>
              <h4 className="font-bold mb-2">Logística Inteligente</h4>
              <p className="text-gris-metalico text-sm">
                Supply chain, warehousing, última milla
              </p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-2 block">🤖</span>
              <h4 className="font-bold mb-2">Deep Tech</h4>
              <p className="text-gris-metalico text-sm">
                IA, blockchain, autonomía
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-cian-electrico/10 to-violeta-tech/10 border border-cian-electrico/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              ¿Falta algún término?
            </h2>
            <p className="text-gris-metalico text-lg mb-8 max-w-2xl mx-auto">
              Ayúdanos a construir el glosario más completo de movilidad y logística en español.
            </p>
            <Link 
              href="/contacto?subject=sugerir-termino"
              className="btn-primary inline-flex items-center gap-2"
            >
              Sugerir un Término
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}