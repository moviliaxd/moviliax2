'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function GlosarioPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeLetter, setActiveLetter] = useState('A')

  // Datos del glosario organizados por letra
  const glossaryData: Record<string, Array<{ title: string; desc: string }>> = {
    A: [
      { title: 'AI (Artificial Intelligence)', desc: 'Simulación de inteligencia humana en máquinas programadas para pensar y aprender como humanos.' },
      { title: 'Autonomía', desc: 'Capacidad de un vehículo para operar sin intervención humana. Se mide en niveles del 0 al 5 según SAE.' },
      { title: 'ADAS', desc: 'Advanced Driver Assistance Systems. Sistemas avanzados de asistencia al conductor que mejoran la seguridad.' },
      { title: 'Amperio-hora (Ah)', desc: 'Unidad de medida de la capacidad de una batería. Indica cuánta energía puede almacenar.' }
    ],
    B: [
      { title: 'BEV (Battery Electric Vehicle)', desc: 'Vehículo eléctrico puro que funciona exclusivamente con baterías eléctricas.' },
      { title: 'Batería de Litio-Ion', desc: 'Tipo de batería recargable más común en vehículos eléctricos por su alta densidad energética.' },
      { title: 'BMS (Battery Management System)', desc: 'Sistema de gestión de batería que monitorea y optimiza el rendimiento de las celdas.' },
      { title: 'Bluetooth Low Energy', desc: 'Tecnología de comunicación inalámbrica de bajo consumo usada en vehículos conectados.' }
    ],
    C: [
      { title: 'Carga Rápida DC', desc: 'Método de carga de corriente directa que permite cargar un EV del 20% al 80% en 30-40 minutos.' },
      { title: 'CCS (Combined Charging System)', desc: 'Estándar de carga rápida que combina AC y DC en un solo conector.' },
      { title: 'Connected Car', desc: 'Vehículo equipado con acceso a internet y capacidad de compartir datos con otros dispositivos.' },
      { title: 'CHAdeMO', desc: 'Estándar japonés de carga rápida DC, competidor del CCS.' },
      { title: 'CO2', desc: 'Dióxido de carbono. Gas de efecto invernadero principal emitido por vehículos de combustión.' }
    ],
    D: [
      { title: 'Densidad Energética', desc: 'Cantidad de energía almacenada por unidad de peso o volumen de una batería (Wh/kg o Wh/L).' },
      { title: 'Degradación de Batería', desc: 'Pérdida gradual de capacidad de la batería con el tiempo y uso.' },
      { title: 'DTE (Distance to Empty)', desc: 'Distancia estimada que puede recorrer un vehículo con la energía restante.' },
      { title: 'Dual Motor', desc: 'Configuración con dos motores eléctricos, generalmente uno en cada eje para tracción 4WD.' }
    ],
    E: [
      { title: 'EV (Electric Vehicle)', desc: 'Vehículo que utiliza uno o más motores eléctricos para su propulsión.' },
      { title: 'EVSE (Electric Vehicle Supply Equipment)', desc: 'Equipo que suministra energía eléctrica para cargar vehículos eléctricos.' },
      { title: 'Eficiencia Energética', desc: 'Relación entre la energía utilizada y la distancia recorrida, medida en kWh/100km o MPGe.' },
      { title: 'E-mobility', desc: 'Concepto de movilidad basado en vehículos eléctricos y sostenibles.' }
    ],
    F: [
      { title: 'FCEV (Fuel Cell Electric Vehicle)', desc: 'Vehículo eléctrico que genera electricidad a partir de hidrógeno mediante una celda de combustible.' },
      { title: 'Frenado Regenerativo', desc: 'Sistema que recupera energía durante el frenado y la almacena en la batería.' },
      { title: 'Fast Charging', desc: 'Carga rápida con potencias superiores a 50 kW que reduce significativamente el tiempo de carga.' },
      { title: 'Fleet Management', desc: 'Gestión integral de flotas de vehículos incluyendo mantenimiento, rutas y eficiencia.' }
    ],
    G: [
      { title: 'Gigafactory', desc: 'Planta de producción masiva de baterías y vehículos eléctricos, término popularizado por Tesla.' },
      { title: 'GHG (Greenhouse Gas)', desc: 'Gases de efecto invernadero que contribuyen al calentamiento global.' },
      { title: 'GPS', desc: 'Sistema de posicionamiento global usado para navegación y gestión de flotas.' },
      { title: 'Grid', desc: 'Red eléctrica que distribuye electricidad. Los EVs pueden funcionar como almacenamiento distribuido (V2G).' }
    ],
    H: [
      { title: 'HEV (Hybrid Electric Vehicle)', desc: 'Vehículo híbrido que combina motor de combustión con motor eléctrico.' },
      { title: 'Hidrógeno Verde', desc: 'Hidrógeno producido mediante electrólisis usando energía renovable.' },
      { title: 'Home Charging', desc: 'Recarga de vehículos eléctricos en el hogar, generalmente durante la noche.' },
      { title: 'HVAC', desc: 'Sistema de calefacción, ventilación y aire acondicionado que afecta la autonomía del EV.' }
    ],
    I: [
      { title: 'IoT (Internet of Things)', desc: 'Red de dispositivos físicos conectados que recopilan e intercambian datos.' },
      { title: 'Incentivos Fiscales', desc: 'Beneficios gubernamentales (subsidios, exenciones) para promover la adopción de EVs.' },
      { title: 'Infraestructura de Carga', desc: 'Red de estaciones y puntos de recarga para vehículos eléctricos.' },
      { title: 'Inversor', desc: 'Dispositivo que convierte corriente continua (DC) de la batería en corriente alterna (AC) para el motor.' }
    ],
    K: [
      { title: 'kW (Kilowatt)', desc: 'Unidad de potencia. Indica la velocidad de carga o la potencia del motor.' },
      { title: 'kWh (Kilowatt-hora)', desc: 'Unidad de energía. Mide la capacidad de la batería de un EV.' },
      { title: 'Kinetic Energy', desc: 'Energía cinética recuperada durante el frenado regenerativo.' }
    ],
    L: [
      { title: 'LiDAR', desc: 'Tecnología de detección por láser usada en vehículos autónomos para mapear el entorno.' },
      { title: 'Last Mile', desc: 'Última milla. Tramo final de entrega de mercancías, clave en logística urbana.' },
      { title: 'Level 2 Charging', desc: 'Carga AC de nivel 2 (hasta 22 kW), típica en hogares y lugares de trabajo.' },
      { title: 'Logística Verde', desc: 'Prácticas logísticas que minimizan el impacto ambiental usando vehículos eléctricos.' }
    ],
    M: [
      { title: 'MaaS (Mobility as a Service)', desc: 'Integración de múltiples servicios de transporte en una sola plataforma accesible bajo demanda.' },
      { title: 'Micromovilidad', desc: 'Vehículos ligeros como scooters, bicicletas eléctricas para distancias cortas.' },
      { title: 'MPGe (Miles Per Gallon Equivalent)', desc: 'Medida de eficiencia energética equivalente a millas por galón para EVs.' },
      { title: 'Motor Eléctrico', desc: 'Dispositivo que convierte energía eléctrica en energía mecánica para propulsar el vehículo.' }
    ],
    N: [
      { title: 'NMC (Nickel Manganese Cobalt)', desc: 'Química de batería común en EVs que balancea energía, potencia y vida útil.' },
      { title: 'Nivel de Autonomía', desc: 'Clasificación SAE de 0-5 que indica el grado de automatización de un vehículo.' },
      { title: 'NOx (Óxidos de Nitrógeno)', desc: 'Contaminantes producidos por motores de combustión que los EVs no emiten.' }
    ],
    O: [
      { title: 'OBC (On-Board Charger)', desc: 'Cargador integrado en el vehículo que convierte AC de la red a DC para la batería.' },
      { title: 'OTA (Over-The-Air)', desc: 'Actualizaciones de software del vehículo entregadas de forma inalámbrica.' },
      { title: 'Optimización de Rutas', desc: 'Uso de algoritmos para encontrar las rutas más eficientes considerando carga y tráfico.' }
    ],
    P: [
      { title: 'PHEV (Plug-in Hybrid Electric Vehicle)', desc: 'Híbrido enchufable con batería recargable y motor de combustión.' },
      { title: 'Powertrain', desc: 'Sistema de propulsión completo: motor, transmisión y componentes de entrega de potencia.' },
      { title: 'Public Charging', desc: 'Estaciones de carga accesibles al público en lugares como centros comerciales y carreteras.' },
      { title: 'Peak Power', desc: 'Potencia máxima que puede entregar un motor eléctrico durante períodos cortos.' }
    ],
    R: [
      { title: 'Range Anxiety', desc: 'Preocupación del conductor por quedarse sin batería antes de llegar al destino.' },
      { title: 'Recuperación de Energía', desc: 'Proceso de capturar energía durante el frenado y desaceleración.' },
      { title: 'RV (Rated Voltage)', desc: 'Voltaje nominal de operación de la batería.' },
      { title: 'Roaming', desc: 'Capacidad de usar diferentes redes de carga con una sola tarjeta o app.' }
    ],
    S: [
      { title: 'Smart Grid', desc: 'Red eléctrica inteligente que optimiza la distribución de energía.' },
      { title: 'SOC (State of Charge)', desc: 'Estado de carga de la batería expresado como porcentaje.' },
      { title: 'SOH (State of Health)', desc: 'Estado de salud de la batería comparado con su capacidad nueva.' },
      { title: 'Supercharger', desc: 'Red de carga rápida exclusiva de Tesla con potencias de hasta 250 kW.' },
      { title: 'Smart City', desc: 'Ciudad que usa tecnología IoT para optimizar servicios y mejorar calidad de vida.' }
    ],
    T: [
      { title: 'Telemática', desc: 'Tecnología que combina telecomunicaciones e informática para monitorear vehículos.' },
      { title: 'Torque Instantáneo', desc: 'Característica de los motores eléctricos que entregan máxima fuerza desde velocidad cero.' },
      { title: 'TCO (Total Cost of Ownership)', desc: 'Costo total de propiedad incluyendo compra, mantenimiento, combustible y seguro.' },
      { title: 'Thermal Management', desc: 'Sistema de gestión térmica que mantiene la batería a temperatura óptima.' }
    ],
    V: [
      { title: 'V2G (Vehicle-to-Grid)', desc: 'Tecnología que permite a los EVs devolver energía a la red eléctrica.' },
      { title: 'V2H (Vehicle-to-Home)', desc: 'Uso del EV como fuente de energía de respaldo para el hogar.' },
      { title: 'VIN (Vehicle Identification Number)', desc: 'Número único de identificación de cada vehículo.' },
      { title: 'Voltaje', desc: 'Diferencia de potencial eléctrico. Los EVs modernos usan sistemas de 400V o 800V.' }
    ],
    Z: [
      { title: 'Zero Emission', desc: 'Vehículo de emisión cero que no produce gases contaminantes durante su operación.' },
      { title: 'ZEV (Zero Emission Vehicle)', desc: 'Categoría regulatoria para vehículos sin emisiones directas de escape.' }
    ]
  }

  const alphabet = Object.keys(glossaryData).sort()

  // Filtrar términos por búsqueda
  const getFilteredTerms = () => {
    if (!searchTerm) return glossaryData

    const filtered: typeof glossaryData = {}
    Object.entries(glossaryData).forEach(([letter, terms]) => {
      const matchingTerms = terms.filter(
        term =>
          term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          term.desc.toLowerCase().includes(searchTerm.toLowerCase())
      )
      if (matchingTerms.length > 0) {
        filtered[letter] = matchingTerms
      }
    })
    return filtered
  }

  const filteredData = getFilteredTerms()
  const filteredAlphabet = Object.keys(filteredData).sort()

  // Scroll to section
  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`)
    if (element) {
      const offset = 120
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setActiveLetter(letter)
  }

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = filteredAlphabet.map(letter => ({
        letter,
        element: document.getElementById(`letter-${letter}`)
      }))

      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveLetter(section.letter)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [filteredAlphabet])

  return (
    <div className="min-h-screen bg-azul-profundo text-blanco">
      {/* Hero */}
      <section className="relative px-6 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-azul-profundo/50 to-azul-profundo"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-exo text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blanco to-cian-electrico bg-clip-text text-transparent">
            Glosario Tech de Movilidad
          </h1>
          <p className="text-xl text-gris-metalico mb-8 leading-relaxed">
            Diccionario completo de términos técnicos sobre vehículos eléctricos, 
            movilidad sostenible y tecnologías emergentes en el sector.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar término (ej: batería, autonomía, carga...)"
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-cian-electrico/30 rounded-full text-blanco placeholder-gris-metalico focus:outline-none focus:border-cian-electrico transition-colors pl-14"
              />
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gris-metalico hover:text-blanco transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="font-exo text-3xl font-black text-cian-electrico">
                {Object.values(glossaryData).flat().length}+
              </div>
              <div className="text-sm text-gris-metalico">Términos</div>
            </div>
            <div className="text-center">
              <div className="font-exo text-3xl font-black text-cian-electrico">
                {alphabet.length}
              </div>
              <div className="text-sm text-gris-metalico">Categorías</div>
            </div>
            <div className="text-center">
              <div className="font-exo text-3xl font-black text-cian-electrico">
                100%
              </div>
              <div className="text-sm text-gris-metalico">Actualizado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Alphabet Navigation - Sticky */}
      <div className="sticky top-0 z-40 bg-azul-profundo/95 backdrop-blur-lg border-b border-cian-electrico/20 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {filteredAlphabet.map(letter => (
              <button
                key={letter}
                onClick={() => scrollToLetter(letter)}
                className={`w-10 h-10 rounded-lg font-exo font-bold transition-all ${
                  activeLetter === letter
                    ? 'bg-gradient-to-br from-cian-electrico to-violeta-tech text-azul-profundo scale-110'
                    : 'bg-white/10 text-gris-metalico hover:bg-white/20 hover:text-blanco'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Glossary Content */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        {filteredAlphabet.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-exo text-2xl font-bold mb-2">No se encontraron términos</h3>
            <p className="text-gris-metalico mb-6">
              Intenta con otra palabra clave o navega por el alfabeto
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="px-6 py-3 bg-gradient-to-r from-cian-electrico to-blue-400 text-azul-profundo font-bold rounded-full hover:scale-105 transition-transform"
            >
              Limpiar Búsqueda
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredAlphabet.map(letter => (
              <div key={letter} id={`letter-${letter}`} className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cian-electrico to-violeta-tech rounded-2xl flex items-center justify-center">
                    <span className="font-exo text-3xl font-black text-azul-profundo">
                      {letter}
                    </span>
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-cian-electrico/50 to-transparent"></div>
                </div>

                <div className="space-y-4">
                  {filteredData[letter].map((term, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-cian-electrico/20 rounded-2xl p-6 hover:border-cian-electrico hover:bg-white/10 transition-all duration-300 group"
                    >
                      <h3 className="font-exo text-xl font-bold mb-3 text-cian-electrico group-hover:text-white transition-colors">
                        {term.title}
                      </h3>
                      <p className="text-gris-metalico leading-relaxed">
                        {term.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-cian-electrico/10 to-violeta-tech/10 border border-cian-electrico/30 rounded-3xl p-12 text-center">
          <div className="text-6xl mb-6">📚</div>
          <h2 className="font-exo text-4xl font-bold mb-4">
            ¿Falta algún término?
          </h2>
          <p className="text-gris-metalico mb-8 text-lg max-w-2xl mx-auto">
            Este glosario se actualiza constantemente. Si crees que falta algún término 
            importante, háznoslo saber y lo agregaremos.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 bg-gradient-to-r from-cian-electrico to-blue-400 text-azul-profundo font-bold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-cian-electrico/40 transition-all text-lg"
          >
            Sugerir Término
          </Link>
        </div>
      </section>

      {/* Back to Top */}
      <div className="fixed bottom-8 right-8 z-30">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 bg-gradient-to-br from-cian-electrico to-violeta-tech rounded-full flex items-center justify-center text-azul-profundo font-bold text-xl shadow-xl hover:scale-110 transition-transform"
          title="Volver arriba"
        >
          ↑
        </button>
      </div>
    </div>
  )
}