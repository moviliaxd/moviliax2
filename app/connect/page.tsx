'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Battery, Building2, Truck, Bot, Briefcase, Globe, MessageSquare, Users, Calendar, MapPin, Clock, X, Search, Filter } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

// Datos
const STATS = [
  { value: '5,000+', label: 'Miembros Activos' },
  { value: '250+', label: 'Empresas' },
  { value: '50+', label: 'Eventos/Mes' },
  { value: '18', label: 'Países' }
]

const FORUMS = [
  {
    icon: Battery,
    title: 'Vehículos Eléctricos',
    description: 'Modelos, infraestructura de carga, incentivos fiscales y el futuro de la movilidad eléctrica en LATAM.',
    topics: '1,245',
    members: '2,340',
    category: 'tecnologia'
  },
  {
    icon: Building2,
    title: 'Smart Cities & Movilidad Urbana',
    description: 'Transporte público, micro-movilidad, gestión inteligente de tráfico y casos de éxito.',
    topics: '890',
    members: '1,876',
    category: 'urbano'
  },
  {
    icon: Truck,
    title: 'Logística & Last Mile',
    description: 'E-commerce, flotas eléctricas, optimización de rutas y nearshoring en la región.',
    topics: '765',
    members: '1,543',
    category: 'logistica'
  },
  {
    icon: Bot,
    title: 'Vehículos Autónomos',
    description: 'Tecnología, regulación, pruebas piloto y el impacto de los AVs en América Latina.',
    topics: '432',
    members: '987',
    category: 'tecnologia'
  },
  {
    icon: Briefcase,
    title: 'Negocios & Emprendimiento',
    description: 'Startups de movilidad, financiamiento, modelos de negocio y oportunidades del sector.',
    topics: '623',
    members: '1,234',
    category: 'negocios'
  },
  {
    icon: Globe,
    title: 'Foros por País',
    description: 'Discusiones específicas sobre México, Brasil, Colombia, Argentina, Chile y más países LATAM.',
    topics: '1,890',
    members: '3,456',
    category: 'regional'
  }
]

const GROUPS = [
  { name: 'C-Level en Movilidad', members: '234', tag: 'Ejecutivos', badge: 'Privado' },
  { name: 'Founders & Emprendedores', members: '567', tag: 'Startups', badge: 'Público' },
  { name: 'Ingenieros de Infraestructura', members: '423', tag: 'Técnico', badge: 'Público' },
  { name: 'Analistas de Mercado', members: '345', tag: 'Datos', badge: 'Público' },
  { name: 'Políticas Públicas', members: '189', tag: 'Gobierno', badge: 'Verificado' },
  { name: 'Baterías & Almacenamiento', members: '298', tag: 'Tecnología', badge: 'Público' },
  { name: 'Micro-movilidad', members: '456', tag: 'Urbano', badge: 'Público' },
  { name: 'Sostenibilidad Corporativa', members: '512', tag: 'ESG', badge: 'Público' }
]


export default function ConnectPage() {
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showFilters, setShowFilters] = useState(false)
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([])

  // Filtrar foros
  const filteredForums = FORUMS.filter(forum => {
    const matchesSearch = forum.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         forum.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || forum.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Animaciones de scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.observe-me').forEach(el => observer.observe(el))
    
    return () => observer.disconnect()
  }, [])

  const handleRegister = () => {
    setShowRegisterModal(true)
    trackEvent('Connect - Open Register Modal')
  }

  const handleJoinForum = (forumTitle: string) => {
    trackEvent(`join_forum - ${forumTitle}`)
    alert(`¡Te has unido al foro "${forumTitle}"! En producción esto abriría el foro.`)
  }

  const handleJoinGroup = (groupName: string) => {
    trackEvent(`join_group - ${groupName}`)
    alert(`¡Solicitud enviada para unirte a "${groupName}"!`)
  }

  const handleRegisterEvent = (eventTitle: string) => {
    if (registeredEvents.includes(eventTitle)) {
      setRegisteredEvents(registeredEvents.filter(e => e !== eventTitle))
      trackEvent(`unregister_event - ${eventTitle}`)
      alert(`Te has dado de baja de "${eventTitle}"`)
    } else {
      setRegisteredEvents([...registeredEvents, eventTitle])
      trackEvent(`register_event - ${eventTitle}`)
      alert(`¡Registrado en "${eventTitle}"! Te enviaremos confirmación por email.`)
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20">
        <div className="hero-grid" aria-hidden="true" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cian-electrico/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violeta-tech/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto observe-me">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-cian-electrico/10 border border-cian-electrico/30 rounded-full text-cian-electrico text-sm font-semibold mb-6">
            <Users className="w-4 h-4" />
            MOVILIAX Connect
          </span>
          
          <h1 className="text-4xl md:text-6xl font-exo font-bold mb-6 leading-tight">
            La Red Profesional de <span className="text-gradient">Movilidad en LATAM</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gris-metalico mb-10 max-w-3xl mx-auto leading-relaxed">
            Conecta con más de 5,000 expertos, participa en foros especializados, asiste a eventos exclusivos 
            y colabora en proyectos que están transformando la movilidad en América Latina.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center observe-me" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gris-metalico uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleRegister}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Unirme Ahora
            </button>
            <a 
              href="#como-funciona" 
              className="btn-secondary inline-flex items-center justify-center gap-2"
              onClick={() => trackEvent('Connect - Ver Como Funciona')}
            >
              Ver Cómo Funciona
            </a>
          </div>
        </div>
      </section>

      {/* Foros Section */}
      <section id="foros" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 observe-me">
            <span className="inline-flex items-center gap-2 text-cian-electrico text-sm font-semibold mb-2">
              <MessageSquare className="w-4 h-4" />
              Foros
            </span>
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-4">
              Discusiones que Importan
            </h2>
            <p className="text-gris-metalico text-lg max-w-2xl mx-auto">
              Participa en conversaciones sobre los temas más relevantes del ecosistema de movilidad.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gris-metalico" />
                <input
                  type="text"
                  placeholder="Buscar foros..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-cian-electrico/30 rounded-lg text-white placeholder-gris-metalico focus:outline-none focus:border-cian-electrico transition-colors"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-6 py-3 bg-white/5 border border-cian-electrico/30 rounded-lg hover:border-cian-electrico transition-colors inline-flex items-center gap-2"
              >
                <Filter className="w-5 h-5" />
                Filtros
              </button>
            </div>

            {showFilters && (
              <div className="flex flex-wrap gap-3 p-4 bg-white/5 border border-cian-electrico/20 rounded-lg">
                {['all', 'tecnologia', 'urbano', 'logistica', 'negocios', 'regional'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      selectedCategory === cat
                        ? 'bg-cian-electrico text-azul-profundo'
                        : 'bg-white/5 text-gris-metalico hover:text-cian-electrico'
                    }`}
                  >
                    {cat === 'all' ? 'Todos' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Forums Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredForums.length > 0 ? (
              filteredForums.map((forum, i) => {
                const IconComponent = forum.icon
                return (
                  <article 
                    key={i} 
                    className="content-card group cursor-pointer hover:scale-[1.02] transition-transform observe-me"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <IconComponent className="w-12 h-12 text-cian-electrico mb-4" />
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                      {forum.title}
                    </h3>
                    <p className="text-gris-metalico mb-4 text-sm leading-relaxed">
                      {forum.description}
                    </p>
                    <div className="flex gap-4 pt-4 mb-4 border-t border-white/10 text-sm">
                      <span className="inline-flex items-center gap-1 text-gris-metalico">
                        <MessageSquare className="w-4 h-4" />
                        {forum.topics} temas
                      </span>
                      <span className="inline-flex items-center gap-1 text-gris-metalico">
                        <Users className="w-4 h-4" />
                        {forum.members} miembros
                      </span>
                    </div>
                    <button
                      onClick={() => handleJoinForum(forum.title)}
                      className="w-full py-2 bg-cian-electrico/10 border border-cian-electrico/30 rounded-lg text-cian-electrico font-semibold hover:bg-cian-electrico hover:text-azul-profundo transition-all"
                    >
                      Unirme al Foro
                    </button>
                  </article>
                )
              })
            ) : (
              <div className="col-span-full text-center py-12">
                <MessageSquare className="w-16 h-16 text-gris-metalico mx-auto mb-4" />
                <p className="text-gris-metalico text-lg">
                  No se encontraron foros con ese criterio
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Grupos Section */}
      <section id="grupos" className="py-20 px-4 bg-gradient-to-b from-transparent via-violeta-tech/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 observe-me">
            <span className="inline-flex items-center gap-2 text-cian-electrico text-sm font-semibold mb-2">
              <Users className="w-4 h-4" />
              Grupos
            </span>
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-4">
              Comunidades Especializadas
            </h2>
            <p className="text-gris-metalico text-lg max-w-2xl mx-auto">
              Únete a grupos por rol, industria o interés específico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {GROUPS.map((group, i) => (
              <div 
                key={i} 
                className="content-card hover:border-cian-electrico/50 transition-all cursor-pointer observe-me"
                style={{ animationDelay: `${i * 0.05}s` }}
                onClick={() => handleJoinGroup(group.name)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cian-electrico to-violeta-tech flex items-center justify-center font-bold text-azul-profundo text-sm">
                    {group.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{group.name}</h3>
                    <p className="inline-flex items-center gap-1 text-xs text-gris-metalico">
                      <Users className="w-3 h-3" />
                      {group.members} miembros
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-cian-electrico/10 text-cian-electrico rounded-full">
                    {group.tag}
                  </span>
                  <span className="text-xs px-2 py-1 bg-white/5 text-gris-metalico rounded-full">
                    {group.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Final */}
      <section id="como-funciona" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-cian-electrico/10 to-violeta-tech/10 border border-cian-electrico/30 rounded-2xl p-8 md:p-12 text-center observe-me">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              ¿Listo para Unirte a la Red?
            </h2>
            <p className="text-gris-metalico text-lg mb-8 max-w-2xl mx-auto">
              Más de 5,000 profesionales ya están conectados. Participa en foros, eventos exclusivos 
              y colabora en proyectos que están transformando la movilidad en LATAM.
            </p>
            <button 
              onClick={handleRegister}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Crear Mi Cuenta Gratis
            </button>
          </div>
        </div>
      </section>

      {/* Modal de Registro */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-azul-profundo border border-cian-electrico/30 rounded-2xl p-8 max-w-md w-full relative animate-fade-in-up">
            <button
              onClick={() => setShowRegisterModal(false)}
              className="absolute top-4 right-4 text-gris-metalico hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-exo font-bold mb-2">Únete a MOVILIAX Connect</h3>
            <p className="text-gris-metalico mb-6">Crea tu cuenta gratis y empieza a conectar</p>

            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault()
              alert('Funcionalidad de registro en desarrollo. Por ahora te redirigiremos al newsletter.')
              setShowRegisterModal(false)
              window.location.hash = '#newsletter'
            }}>
              <input
                type="text"
                placeholder="Nombre completo"
                required
                className="w-full px-4 py-3 bg-white/5 border border-cian-electrico/30 rounded-lg text-white placeholder-gris-metalico focus:outline-none focus:border-cian-electrico transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 bg-white/5 border border-cian-electrico/30 rounded-lg text-white placeholder-gris-metalico focus:outline-none focus:border-cian-electrico transition-colors"
              />
              <input
                type="password"
                placeholder="Contraseña"
                required
                className="w-full px-4 py-3 bg-white/5 border border-cian-electrico/30 rounded-lg text-white placeholder-gris-metalico focus:outline-none focus:border-cian-electrico transition-colors"
              />
              <select
                required
                className="w-full px-4 py-3 bg-white/5 border border-cian-electrico/30 rounded-lg text-white focus:outline-none focus:border-cian-electrico transition-colors"
              >
                <option value="">Selecciona tu rol</option>
                <option value="ejecutivo">Ejecutivo</option>
                <option value="emprendedor">Emprendedor</option>
                <option value="ingeniero">Ingeniero</option>
                <option value="analista">Analista</option>
                <option value="estudiante">Estudiante</option>
                <option value="otro">Otro</option>
              </select>
              <button type="submit" className="w-full btn-primary">
                Crear Cuenta
              </button>
            </form>

            <p className="text-xs text-gris-metalico text-center mt-4">
              Al registrarte aceptas nuestros{' '}
              <Link href="/terminos" className="text-cian-electrico hover:underline">
                Términos
              </Link>
              {' '}y{' '}
              <Link href="/privacidad" className="text-cian-electrico hover:underline">
                Privacidad
              </Link>
            </p>
          </div>
        </div>
      )}

      {/* CSS para animaciones */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .observe-me {
          opacity: 0;
        }
      `}</style>
    </div>
  )
}