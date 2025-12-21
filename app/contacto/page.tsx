import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partners - MOVILIAX | Alianzas Estratégicas en Movilidad',
  description: 'Alianzas estratégicas para transformar la movilidad en América Latina. Conoce nuestros partners y oportunidades de colaboración.',
}

export default function PartnersPage() {
  const partnershipTypes = [
    {
      icon: '🏢',
      title: 'Partners Estratégicos',
      description: 'Organizaciones que comparten nuestra visión y trabajan con nosotros en iniciativas de largo plazo para transformar el ecosistema de movilidad.',
      features: [
        'Co-creación de contenido especializado',
        'Eventos y conferencias conjuntas',
        'Investigación y estudios de mercado',
        'Programas de educación y advocacy'
      ]
    },
    {
      icon: '🎓',
      title: 'Partners Académicos',
      description: 'Universidades e instituciones educativas que colaboran en investigación, formación y generación de conocimiento sobre movilidad sostenible.',
      features: [
        'Proyectos de investigación conjuntos',
        'Programas de prácticas y pasantías',
        'Webinars y seminarios educativos',
        'Publicación de estudios académicos'
      ]
    },
    {
      icon: '🔧',
      title: 'Partners Tecnológicos',
      description: 'Empresas tecnológicas que proporcionan soluciones innovadoras para mejorar nuestra plataforma y expandir nuestro alcance.',
      features: [
        'Integración de herramientas digitales',
        'Desarrollo de aplicaciones y servicios',
        'Analytics y data insights',
        'Optimización de experiencia de usuario'
      ]
    },
    {
      icon: '🌐',
      title: 'Partners de Medios',
      description: 'Medios de comunicación y plataformas digitales que amplifican nuestro mensaje y extienden nuestro alcance en toda América Latina.',
      features: [
        'Distribución de contenido multiplataforma',
        'Campañas de comunicación conjuntas',
        'Intercambio de audiencias',
        'Cobertura de eventos especiales'
      ]
    },
    {
      icon: '🏛️',
      title: 'Partners Institucionales',
      description: 'Gobiernos, organismos multilaterales y ONGs que trabajan en políticas públicas y regulación de movilidad sostenible.',
      features: [
        'Análisis de políticas públicas',
        'Apoyo en iniciativas regulatorias',
        'Foros de diálogo multisectorial',
        'Proyectos de impacto social'
      ]
    },
    {
      icon: '🚗',
      title: 'Partners de Industria',
      description: 'Fabricantes, distribuidores y proveedores de soluciones de movilidad que colaboran en probar y difundir nuevas tecnologías.',
      features: [
        'Pruebas y reviews de vehículos',
        'Lanzamientos de productos',
        'Test drives y experiencias',
        'Contenido técnico especializado'
      ]
    }
  ]

  const currentPartners = {
    strategic: [
      { logo: '🔋', name: 'Asociación LATAM EV', type: 'Asociación Industrial', description: 'Líder regional en promoción de vehículos eléctricos' },
      { logo: '🌿', name: 'Green Transport Alliance', type: 'ONG Ambiental', description: 'Advocacy por transporte sostenible en las Américas' },
      { logo: '🏙️', name: 'Smart Cities Network', type: 'Red de Innovación', description: 'Conectando ciudades inteligentes de la región' }
    ],
    academic: [
      { logo: '🎓', name: 'Instituto Tecnológico de Monterrey', type: 'Universidad', description: 'Investigación en movilidad y sostenibilidad' },
      { logo: '📚', name: 'Universidad de São Paulo', type: 'Centro de Investigación', description: 'Estudios sobre transporte urbano sostenible' },
      { logo: '🔬', name: 'Centro de Innovación UC', type: 'Laboratorio', description: 'Desarrollo de tecnologías de movilidad' }
    ],
    technology: [
      { logo: '📊', name: 'DataMobility', type: 'Analytics', description: 'Plataforma de datos de movilidad urbana' },
      { logo: '🗺️', name: 'ChargeMap', type: 'Mapeo Digital', description: 'Red de estaciones de carga en LATAM' },
      { logo: '💡', name: 'EV Connect', type: 'Software', description: 'Soluciones de gestión de flotas eléctricas' }
    ],
    media: [
      { logo: '📰', name: 'AutoNews LATAM', type: 'Medio Automotriz', description: 'Noticias sobre industria automotriz regional' },
      { logo: '🎙️', name: 'EcoTech Podcast', type: 'Podcast', description: 'Tecnología y sostenibilidad ambiental' },
      { logo: '📱', name: 'Digital Trends ES', type: 'Portal Digital', description: 'Tecnología e innovación en español' }
    ]
  }

  const benefits = [
    { icon: '🎯', title: 'Visibilidad Amplificada', description: 'Acceso a nuestra audiencia comprometida de más de 250K lectores mensuales especializados en movilidad' },
    { icon: '🤝', title: 'Co-creación de Valor', description: 'Desarrollo conjunto de proyectos, contenidos y soluciones innovadoras para el sector' },
    { icon: '🌐', title: 'Red Regional', description: 'Conexión con otros líderes y organizaciones clave del ecosistema de movilidad en 18 países' },
    { icon: '📈', title: 'Insights de Mercado', description: 'Acceso a investigaciones, tendencias y análisis exclusivos sobre el mercado latinoamericano' },
    { icon: '🎤', title: 'Thought Leadership', description: 'Plataforma para compartir tu experiencia y posicionarte como líder de opinión en el sector' },
    { icon: '🚀', title: 'Innovación Continua', description: 'Participación en hackathons, laboratorios de ideas y proyectos piloto de vanguardia' }
  ]

  const successStories = [
    {
      partner: 'Green Transport Alliance',
      tagline: 'Campaña de Concientización Regional',
      description: 'Colaboramos en una campaña multiplataforma para educar sobre los beneficios de la electromovilidad, alcanzando a más de 2 millones de personas en 12 países.',
      stats: [
        { value: '2M+', label: 'Impresiones' },
        { value: '45%', label: 'Engagement' }
      ]
    },
    {
      partner: 'Instituto Tecnológico',
      tagline: 'Estudio de Adopción de EVs',
      description: 'Proyecto de investigación conjunto sobre barreras y facilitadores para la adopción de vehículos eléctricos en México, generando insights clave para policy makers.',
      stats: [
        { value: '5K+', label: 'Encuestados' },
        { value: '15', label: 'Publicaciones' }
      ]
    },
    {
      partner: 'ChargeMap',
      tagline: 'Mapa Interactivo de Carga',
      description: 'Desarrollo e integración de un mapa interactivo de estaciones de carga en nuestra plataforma, mejorando la experiencia de conductores de EVs en la región.',
      stats: [
        { value: '3K+', label: 'Estaciones' },
        { value: '80K', label: 'Usuarios/mes' }
      ]
    }
  ]

  const processSteps = [
    { number: 1, title: 'Solicitud Inicial', description: 'Completa nuestro formulario con información sobre tu organización y el tipo de partnership que buscas.' },
    { number: 2, title: 'Evaluación', description: 'Nuestro equipo revisa tu propuesta y evalúa la alineación estratégica con nuestra misión y valores.' },
    { number: 3, title: 'Reunión Exploratoria', description: 'Conversación para entender mejor tus objetivos y explorar oportunidades de colaboración mutua.' },
    { number: 4, title: 'Propuesta de Valor', description: 'Desarrollamos conjuntamente un plan de partnership que beneficie a ambas partes.' },
    { number: 5, title: 'Formalización', description: 'Firma de acuerdo de partnership y definición de métricas de éxito y plan de trabajo.' },
    { number: 6, title: 'Lanzamiento', description: 'Inicio oficial del partnership con anuncio público y activación de primeras iniciativas conjuntas.' }
  ]

  return (
    <div className="min-h-screen bg-azul-profundo text-blanco">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-azul-profundo/50 to-azul-profundo"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cian-electrico/5 to-transparent animate-scan"></div>
        
        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="font-exo text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blanco to-cian-electrico bg-clip-text text-transparent">
            Nuestros Partners
          </h1>
          <p className="text-xl text-gris-metalico leading-relaxed">
            Alianzas estratégicas que impulsan la transformación de la movilidad sostenible en América Latina
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-exo text-4xl font-bold text-center text-cian-electrico mb-6">
          Tipos de Alianzas
        </h2>
        <p className="text-center text-gris-metalico max-w-3xl mx-auto mb-16 text-lg">
          Desarrollamos colaboraciones estratégicas que crean valor compartido y aceleran la adopción de movilidad sostenible
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnershipTypes.map((type, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-cian-electrico/20 rounded-3xl p-8 hover:border-cian-electrico hover:-translate-y-2 hover:shadow-2xl hover:shadow-cian-electrico/25 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cian-electrico to-violeta-tech scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <span className="text-5xl mb-6 block">{type.icon}</span>
              <h3 className="font-exo text-2xl font-bold mb-4">{type.title}</h3>
              <p className="text-gris-metalico mb-6 leading-relaxed text-sm">{type.description}</p>
              
              <ul className="space-y-2">
                {type.features.map((feature, idx) => (
                  <li key={idx} className="text-gris-metalico text-sm flex items-start">
                    <span className="text-cian-electrico mr-2 font-bold">→</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Current Partners */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-exo text-4xl font-bold text-center text-cian-electrico mb-6">
          Nuestros Partners Actuales
        </h2>
        <p className="text-center text-gris-metalico max-w-3xl mx-auto mb-16 text-lg">
          Organizaciones que confían en nosotros y colaboran activamente en nuestra misión
        </p>

        {/* Strategic Partners */}
        <div className="mb-12">
          <h3 className="font-exo text-3xl text-cian-electrico mb-8 pb-4 border-b-2 border-cian-electrico/20">
            Partners Estratégicos
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {currentPartners.strategic.map((partner, index) => (
              <div key={index} className="bg-white/5 border border-cian-electrico/15 rounded-2xl p-8 text-center hover:border-cian-electrico hover:-translate-y-2 hover:shadow-xl hover:shadow-cian-electrico/20 transition-all duration-300">
                <span className="text-4xl mb-4 block">{partner.logo}</span>
                <h4 className="font-exo text-xl font-bold mb-2">{partner.name}</h4>
                <p className="text-cian-electrico text-xs uppercase tracking-wider mb-3">{partner.type}</p>
                <p className="text-gris-metalico text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Partners */}
        <div className="mb-12">
          <h3 className="font-exo text-3xl text-cian-electrico mb-8 pb-4 border-b-2 border-cian-electrico/20">
            Partners Académicos
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {currentPartners.academic.map((partner, index) => (
              <div key={index} className="bg-white/5 border border-cian-electrico/15 rounded-2xl p-8 text-center hover:border-cian-electrico hover:-translate-y-2 hover:shadow-xl hover:shadow-cian-electrico/20 transition-all duration-300">
                <span className="text-4xl mb-4 block">{partner.logo}</span>
                <h4 className="font-exo text-xl font-bold mb-2">{partner.name}</h4>
                <p className="text-cian-electrico text-xs uppercase tracking-wider mb-3">{partner.type}</p>
                <p className="text-gris-metalico text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Partners */}
        <div className="mb-12">
          <h3 className="font-exo text-3xl text-cian-electrico mb-8 pb-4 border-b-2 border-cian-electrico/20">
            Partners Tecnológicos
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {currentPartners.technology.map((partner, index) => (
              <div key={index} className="bg-white/5 border border-cian-electrico/15 rounded-2xl p-8 text-center hover:border-cian-electrico hover:-translate-y-2 hover:shadow-xl hover:shadow-cian-electrico/20 transition-all duration-300">
                <span className="text-4xl mb-4 block">{partner.logo}</span>
                <h4 className="font-exo text-xl font-bold mb-2">{partner.name}</h4>
                <p className="text-cian-electrico text-xs uppercase tracking-wider mb-3">{partner.type}</p>
                <p className="text-gris-metalico text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Partners */}
        <div>
          <h3 className="font-exo text-3xl text-cian-electrico mb-8 pb-4 border-b-2 border-cian-electrico/20">
            Partners de Medios
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {currentPartners.media.map((partner, index) => (
              <div key={index} className="bg-white/5 border border-cian-electrico/15 rounded-2xl p-8 text-center hover:border-cian-electrico hover:-translate-y-2 hover:shadow-xl hover:shadow-cian-electrico/20 transition-all duration-300">
                <span className="text-4xl mb-4 block">{partner.logo}</span>
                <h4 className="font-exo text-xl font-bold mb-2">{partner.name}</h4>
                <p className="text-cian-electrico text-xs uppercase tracking-wider mb-3">{partner.type}</p>
                <p className="text-gris-metalico text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white/5 rounded-3xl p-12 md:p-16 border border-cian-electrico/10">
          <h2 className="font-exo text-4xl font-bold text-center text-cian-electrico mb-16">
            Beneficios de ser Partner
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cian-electrico/10 to-violeta-tech/10 border-2 border-cian-electrico/30 rounded-full flex items-center justify-center text-4xl hover:scale-110 hover:border-cian-electrico hover:shadow-lg hover:shadow-cian-electrico/30 transition-all duration-300">
                  {benefit.icon}
                </div>
                <h4 className="font-exo text-xl font-semibold mb-3">{benefit.title}</h4>
                <p className="text-gris-metalico text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-exo text-4xl font-bold text-center text-cian-electrico mb-6">
          Casos de Éxito
        </h2>
        <p className="text-center text-gris-metalico max-w-3xl mx-auto mb-16 text-lg">
          Resultados tangibles de nuestras alianzas estratégicas
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white/5 border border-cian-electrico/15 rounded-2xl overflow-hidden hover:border-cian-electrico hover:-translate-y-2 hover:shadow-xl hover:shadow-cian-electrico/20 transition-all duration-300">
              <div className="bg-gradient-to-br from-cian-electrico/10 to-violeta-tech/10 p-8 border-b border-cian-electrico/20">
                <h3 className="font-exo text-2xl font-bold text-cian-electrico mb-2">{story.partner}</h3>
                <p className="text-sm text-gris-metalico">{story.tagline}</p>
              </div>
              
              <div className="p-8">
                <p className="text-gris-metalico leading-relaxed mb-6">{story.description}</p>
                
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  {story.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <span className="font-exo text-3xl font-black text-cian-electrico block">{stat.value}</span>
                      <span className="text-xs text-gris-metalico uppercase tracking-wider">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Process */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-exo text-4xl font-bold text-center text-cian-electrico mb-6">
          Cómo Convertirse en Partner
        </h2>
        <p className="text-center text-gris-metalico max-w-3xl mx-auto mb-16 text-lg">
          Un proceso simple y transparente para iniciar nuestra colaboración
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <div key={step.number} className="bg-white/5 border border-cian-electrico/15 rounded-2xl p-8 text-center relative hover:border-cian-electrico hover:-translate-y-1 hover:shadow-lg hover:shadow-cian-electrico/20 transition-all duration-300">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-cian-electrico to-violeta-tech text-azul-profundo rounded-full flex items-center justify-center font-exo text-2xl font-black border-4 border-azul-profundo">
                {step.number}
              </div>
              
              <h4 className="font-exo text-xl font-semibold mt-4 mb-4">{step.title}</h4>
              <p className="text-gris-metalico text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-cian-electrico/10 to-violeta-tech/10 rounded-3xl p-12 md:p-16 text-center">
          <h2 className="font-exo text-4xl md:text-5xl font-black mb-6">
            ¿Listo para Construir Juntos el Futuro?
          </h2>
          <p className="text-lg text-gris-metalico mb-8">
            Conectemos y exploremos cómo podemos colaborar para transformar la movilidad en América Latina
          </p>
          <Link 
            href="/contacto"
            className="inline-block px-12 py-4 bg-gradient-to-r from-cian-electrico to-blue-400 text-azul-profundo font-bold rounded-full hover:-translate-y-1 hover:shadow-2xl hover:shadow-cian-electrico/40 transition-all duration-300 uppercase tracking-wide"
          >
            Solicitar Partnership
          </Link>
        </div>
      </section>
    </div>
  )
}