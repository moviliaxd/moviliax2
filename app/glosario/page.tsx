'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Datos del glosario organizados por letra
const glossaryData = {
  A: [
    { title: 'AI (Artificial Intelligence)', desc: 'Simulación de inteligencia humana en máquinas programadas para pensar y aprender como humanos.' },
    { title: 'API (Application Programming Interface)', desc: 'Conjunto de reglas y protocolos que permite a diferentes aplicaciones de software comunicarse entre sí.' },
    { title: 'Autonomous Vehicle', desc: 'Vehículo capaz de detectar su entorno y operar sin intervención humana usando sensores, cámaras y AI.' },
    { title: 'ADAS (Advanced Driver Assistance Systems)', desc: 'Tecnologías de seguridad vehicular que alertan al conductor sobre peligros potenciales o toman acciones correctivas.' }
  ],
  B: [
    { title: 'Battery Electric Vehicle (BEV)', desc: 'Vehículo totalmente eléctrico impulsado únicamente por baterías recargables, sin motor de combustión.' },
    { title: 'Blockchain', desc: 'Tecnología de registro distribuido que mantiene lista segura y descentralizada de registros (bloques) vinculados mediante criptografía.' },
    { title: 'Big Data', desc: 'Conjuntos de datos extremadamente grandes que pueden ser analizados para revelar patrones, tendencias y asociaciones.' },
    { title: 'B2B (Business-to-Business)', desc: 'Transacciones o comunicación entre empresas, en lugar de entre empresa y consumidor individual.' }
  ],
  C: [
    { title: 'Cloud Computing', desc: 'Entrega de servicios informáticos (servidores, almacenamiento, bases de datos) por internet bajo demanda.' },
    { title: 'Connected Vehicle', desc: 'Vehículo equipado con acceso a internet y red inalámbrica LAN que puede compartir datos con dispositivos externos.' },
    { title: 'Cross-Docking', desc: 'Práctica logística donde productos se descargan de vehículos entrantes y cargan directamente en salientes con almacenamiento mínimo.' },
    { title: 'Charging Infrastructure', desc: 'Red de estaciones y puntos de carga para vehículos eléctricos en ubicaciones públicas y privadas.' }
  ],
  // Agrego solo algunos términos más como ejemplo, en producción incluirías todos
  D: [
    { title: 'Digital Twin', desc: 'Réplica virtual de objeto físico, proceso o sistema usado para simulación, análisis y optimización.' },
    { title: 'Delivery Management System', desc: 'Software que optimiza proceso de entrega planificando rutas, rastreando envíos y gestionando comunicación con clientes.' }
  ],
  E: [
    { title: 'Electric Vehicle (EV)', desc: 'Vehículo que funciona con uno o más motores eléctricos usando energía de baterías recargables.' },
    { title: 'Edge Computing', desc: 'Computación distribuida que acerca cálculo y almacenamiento de datos a ubicación donde se necesita.' }
  ]
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function GlosarioPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeSection, setActiveSection] = useState('A')
  const [filteredData, setFilteredData] = useState(glossaryData)

  useEffect(() => {
    if (searchTerm) {
      const filtered = { A: [], B: [], C: [], D: [], E: [] } as typeof glossaryData
      Object.entries(glossaryData).forEach(([letter, terms]) => {
        const matchingTerms = terms.filter(term => 
          term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          term.desc.toLowerCase().includes(searchTerm.toLowerCase())
        )
        if (matchingTerms.length > 0) {
          filtered[letter as keyof typeof glossaryData] = matchingTerms
        }
      })
      setFilteredData(filtered)
    } else {
      setFilteredData(glossaryData)
    }
  }, [searchTerm])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.letter-section')
      let current = 'A'
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 200) {
          current = section.getAttribute('id') || 'A'
        }
      })
      
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(letter)
    if (element) {
      const headerHeight = 80
      const alphabetNavHeight = 80
      const offset = headerHeight + alphabetNavHeight + 20
      const elementPosition = element.offsetTop - offset
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20">
        <div className="hero-grid" aria-hidden="true" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cian-electrico/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violeta-tech/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-exo font-bold mb-6 leading-tight">
            <span className="text-gradient">Glosario Tech</span>
          </h1>
          <p className="text-xl md:text-2xl text-gris-metalico leading-relaxed">
            Tu referencia completa de términos de tecnología, movilidad y logística. 
            Explora conceptos clave que están transformando el futuro del transporte.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="sticky top-20 z-40 bg-azul-profundo/95 backdrop-blur-md border-b border-cian-electrico/20 py-6 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar término o concepto..."
              className="w-full px-6 py-4 pr-14 bg-white/5 border-2 border-cian-electrico/30 rounded-full text-white placeholder-gris-metalico focus:outline-none focus:border-cian-electrico focus:bg-white/8 transition-all"
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
          </div>
        </div>
      </section>

      {/* Alphabet Navigation */}
      <nav className="sticky top-[calc(80px+80px)] z-30 bg-azul-profundo/98 backdrop-blur-md border-b border-cian-electrico/20 py-4 px-4 overflow-x-auto">
        <div className="flex gap-3 justify-center flex-wrap max-w-7xl mx-auto">
          {alphabet.map(letter => (
            <button
              key={letter}
              onClick={() => scrollToLetter(letter)}
              className={`px-4 py-2 rounded-lg font-exo font-bold text-sm transition-all ${
                activeSection === letter
                  ? 'bg-cian-electrico/20 text-cian-electrico border border-cian-electrico'
                  : 'text-gris-metalico hover:text-cian-electrico hover:bg-cian-electrico/10'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </nav>

      {/* Glossary Content */}
      <div className="container mx-auto max-w-7xl px-4 py-20">
        {Object.keys(filteredData).length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No se encontraron resultados</h3>
            <p className="text-gris-metalico">Intenta con otro término</p>
          </div>
        ) : (
          Object.entries(filteredData).map(([letter, terms]) => (
            <div key={letter} id={letter} className="letter-section mb-24">
              <h2 className="text-6xl md:text-7xl font-exo font-black text-cian-electrico mb-12 pb-4 border-b-4 border-cian-electrico/30 relative">
                {letter}
                <span className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-cian-electrico to-transparent" />
              </h2>
              
              <div className="space-y-4">
                {terms.map((term, index) => (
                  <article
                    key={index}
                    className="content-card border-l-4 border-cian-electrico hover:border-l-[6px] hover:translate-x-2 transition-all group"
                  >
                    <h3 className="text-xl md:text-2xl font-exo font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                      {term.title}
                    </h3>
                    <p className="text-gris-metalico leading-relaxed">
                      {term.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* CTA Section */}
      <section className="container mx-auto max-w-4xl px-4 pb-20">
        <div className="bg-gradient-to-br from-cian-electrico/10 to-violeta-tech/10 border border-cian-electrico/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
            ¿Falta algún término?
          </h2>
          <p className="text-gris-metalico text-lg mb-8">
            Ayúdanos a mejorar nuestro glosario. Sugiere nuevos términos o correcciones.
          </p>
          <Link 
            href="/contacto" 
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            Sugerir Término
          </Link>
        </div>
      </section>
    </div>
  )
}