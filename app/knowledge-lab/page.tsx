'use client'

import { useState } from 'react'
import Link from 'next/link'

const resources = [
  {
    title: 'Guía Completa de Electromovilidad en LATAM 2025',
    type: 'White Paper',
    category: 'Movilidad Humana',
    pages: 45,
    downloads: 2500,
    date: 'Diciembre 2024',
    description: 'Análisis exhaustivo del estado de los vehículos eléctricos, infraestructura de carga y políticas públicas en América Latina.',
    premium: false
  },
  {
    title: 'El Estado del Nearshoring en México',
    type: 'Reporte',
    category: 'Logística',
    pages: 32,
    downloads: 1800,
    date: 'Noviembre 2024',
    description: 'Evaluación del impacto de la relocalización industrial en la infraestructura logística mexicana.',
    premium: true
  },
  {
    title: 'Blockchain en Supply Chain: Casos de Éxito',
    type: 'Case Study',
    category: 'Deep Tech',
    pages: 28,
    downloads: 1200,
    date: 'Octubre 2024',
    description: 'Análisis de implementaciones reales de blockchain en cadenas de suministro de la región.',
    premium: false
  },
  {
    title: 'Micro-movilidad Urbana: Regulación Comparada',
    type: 'Guía Legal',
    category: 'Movilidad Humana',
    pages: 38,
    downloads: 950,
    date: 'Septiembre 2024',
    description: 'Comparación de marcos regulatorios de scooters y bicicletas compartidas en 12 ciudades de LATAM.',
    premium: true
  },
  {
    title: 'Automatización de Almacenes: ROI Calculator',
    type: 'Herramienta',
    category: 'Logística',
    pages: 15,
    downloads: 3200,
    date: 'Agosto 2024',
    description: 'Template Excel para calcular el retorno de inversión en proyectos de automatización de warehouses.',
    premium: false
  },
  {
    title: 'Glosario Técnico Movilidad & Logística',
    type: 'Glosario',
    category: 'General',
    pages: 52,
    downloads: 4100,
    date: 'Actualizado Dic 2024',
    description: 'Diccionario completo de términos técnicos en español con más de 300 definiciones.',
    premium: false
  }
]

const categories = ['Todas', 'Movilidad Humana', 'Logística', 'Deep Tech', 'General']
const types = ['Todos', 'White Paper', 'Reporte', 'Case Study', 'Guía Legal', 'Herramienta', 'Glosario']

export default function KnowledgeLab() {
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [selectedType, setSelectedType] = useState('Todos')
  const [showPremiumOnly, setShowPremiumOnly] = useState(false)

  const filteredResources = resources.filter(resource => {
    if (selectedCategory !== 'Todas' && resource.category !== selectedCategory) return false
    if (selectedType !== 'Todos' && resource.type !== selectedType) return false
    if (showPremiumOnly && !resource.premium) return false
    return true
  })

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
            📚 Centro de Conocimiento
          </span>
          
          <h1 className="text-5xl md:text-6xl font-exo font-bold mb-6 leading-tight">
            Knowledge <span className="text-gradient">Lab</span>
          </h1>
          
          <p className="text-xl text-gris-metalico mb-8 max-w-2xl mx-auto">
            Biblioteca exclusiva de white papers, casos de éxito, guías técnicas y herramientas para profesionales del sector.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4 bg-gradient-to-r from-cian-electrico/5 to-violeta-tech/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">50+</div>
              <div className="text-gris-metalico text-sm">Recursos Disponibles</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">15K+</div>
              <div className="text-gris-metalico text-sm">Descargas Totales</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">100%</div>
              <div className="text-gris-metalico text-sm">En Español</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">Gratis</div>
              <div className="text-gris-metalico text-sm">Recursos Base</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-6">
            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-semibold text-gris-metalico mb-3">Filtrar por Categoría</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      selectedCategory === category
                        ? 'bg-cian-electrico text-negro-profundo'
                        : 'bg-gris-oscuro/30 text-gris-metalico hover:bg-gris-oscuro/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <h3 className="text-sm font-semibold text-gris-metalico mb-3">Filtrar por Tipo</h3>
              <div className="flex flex-wrap gap-3">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      selectedType === type
                        ? 'bg-violeta-tech text-negro-profundo'
                        : 'bg-gris-oscuro/30 text-gris-metalico hover:bg-gris-oscuro/50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Premium Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowPremiumOnly(!showPremiumOnly)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                  showPremiumOnly
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : 'bg-gris-oscuro/30 text-gris-metalico hover:bg-gris-oscuro/50'
                }`}
              >
                ⭐ Solo Premium
              </button>
              <span className="text-sm text-gris-metalico">
                {filteredResources.length} recurso{filteredResources.length !== 1 ? 's' : ''} encontrado{filteredResources.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <article key={index} className="content-card group hover:border-cian-electrico/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cian-electrico/10 text-cian-electrico text-xs font-semibold rounded-full">
                    {resource.type}
                  </span>
                  {resource.premium && (
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded-full border border-yellow-500/30">
                      ⭐ Premium
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors line-clamp-2">
                  {resource.title}
                </h3>

                <p className="text-gris-metalico text-sm mb-4 line-clamp-3">
                  {resource.description}
                </p>

                <div className="space-y-2 mb-4 text-sm text-gris-metalico">
                  <div className="flex items-center gap-2">
                    <span>📄</span>
                    <span>{resource.pages} páginas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📅</span>
                    <span>{resource.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📥</span>
                    <span>{resource.downloads.toLocaleString()} descargas</span>
                  </div>
                </div>

                <button className="w-full btn-primary justify-center">
                  {resource.premium ? 'Descargar Premium →' : 'Descargar Gratis →'}
                </button>
              </article>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <span className="text-6xl mb-4 block">📚</span>
              <p className="text-gris-metalico text-lg">
                No se encontraron recursos con estos filtros
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('Todas')
                  setSelectedType('Todos')
                  setShowPremiumOnly(false)
                }}
                className="mt-4 text-cian-electrico hover:underline"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Premium Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-500/5 to-cian-electrico/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              Acceso Premium
            </h2>
            <p className="text-gris-metalico max-w-2xl mx-auto">
              Desbloquea contenido exclusivo, herramientas avanzadas y análisis profundos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="content-card text-center">
              <span className="text-4xl mb-4 block">📊</span>
              <h3 className="text-xl font-bold mb-3">Reportes Exclusivos</h3>
              <p className="text-gris-metalico text-sm">
                Análisis profundos con datos propios y proyecciones de mercado
              </p>
            </div>

            <div className="content-card text-center">
              <span className="text-4xl mb-4 block">🛠️</span>
              <h3 className="text-xl font-bold mb-3">Herramientas Pro</h3>
              <p className="text-gris-metalico text-sm">
                Calculadoras, templates y frameworks para decisiones estratégicas
              </p>
            </div>

            <div className="content-card text-center">
              <span className="text-4xl mb-4 block">🎓</span>
              <h3 className="text-xl font-bold mb-3">Cursos Online</h3>
              <p className="text-gris-metalico text-sm">
                Formación especializada con certificación profesional
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/premium" className="btn-primary inline-flex items-center gap-2">
              Conocer Plan Premium
              <span>⭐</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-cian-electrico/10 to-violeta-tech/10 border border-cian-electrico/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              Recibe Nuevos Recursos Cada Mes
            </h2>
            <p className="text-gris-metalico text-lg mb-8 max-w-2xl mx-auto">
              Suscríbete a RadarX y sé el primero en acceder a nuestros white papers, guías y casos de estudio.
            </p>
            <Link 
              href="/#newsletter"
              className="btn-primary inline-flex items-center gap-2"
            >
              Suscríbete Gratis
              <span>✨</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}