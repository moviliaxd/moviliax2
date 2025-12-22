import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowLeft, Users, Lock, Globe, MessageSquare } from 'lucide-react'

// Datos de grupos (same as in connect page)
const GROUPS = [
  { 
    name: 'C-Level en Movilidad', 
    slug: 'c-level-en-movilidad',
    members: '234', 
    tag: 'Ejecutivos', 
    badge: 'Privado',
    description: 'Grupo exclusivo para directores, CEO y líderes ejecutivos en la industria de movilidad.',
    longDescription: 'Espacio privado y seguro para que ejecutivos de C-Suite intercambien estrategias, discutan decisiones clave y construyan alianzas en el ecosistema de movilidad en LATAM. Acceso solo mediante invitación.',
    isPrivate: true,
    monthlyMeetups: 2,
    recentActivities: [
      'Keynote: Futuro de Movilidad en LATAM - Juan López (CEO)',
      'Roundtable: Inversión en Startups de Movilidad',
      'Networking Event: Top Executives del Sector'
    ]
  },
  { 
    name: 'Founders & Emprendedores', 
    slug: 'founders-emprendedores',
    members: '567', 
    tag: 'Startups', 
    badge: 'Público',
    description: 'Comunidad de emprendedores y cofundadores que están construyendo el futuro de la movilidad.',
    longDescription: 'Conecta con otros founders, accede a recursos de financiamiento, comparte desafíos comunes y celebra victorias. Discute modelos de negocio, levantamiento de capital, escalabilidad y crecimiento.',
    isPrivate: false,
    monthlyMeetups: 4,
    recentActivities: [
      'Taller: Pitch Deck Perfecto',
      'Panel: Serie A, B y C - VCs Activos',
      'Mentor Match: CEO experimentados con nuevos founders'
    ]
  },
  { 
    name: 'Ingenieros de Infraestructura', 
    slug: 'ingenieros-infraestructura',
    members: '423', 
    tag: 'Técnico', 
    badge: 'Público',
    description: 'Espacio técnico para ingenieros civiles, de sistemas y especialistas en infraestructura de movilidad.',
    longDescription: 'Grupo dedicado a soluciones técnicas, estándares de infraestructura, optimización de sistemas y compartir knowhow en proyectos de movilidad. Desde carga rápida hasta integración de sistemas inteligentes.',
    isPrivate: false,
    monthlyMeetups: 2,
    recentActivities: [
      'Webinar: Estándares de Infraestructura de Carga',
      'Technical Deep Dive: Integración de APIs de Movilidad',
      'Study Group: Sostenibilidad en Infraestructura'
    ]
  },
  { 
    name: 'Analistas de Mercado', 
    slug: 'analistas-mercado',
    members: '345', 
    tag: 'Datos', 
    badge: 'Público',
    description: 'Para analistas, data scientists y especialistas en inteligencia de mercado del sector.',
    longDescription: 'Comparte análisis, reportes, insights y discute tendencias del mercado de movilidad. Acceso a datasets públicos, metodologías y herramientas de análisis.',
    isPrivate: false,
    monthlyMeetups: 3,
    recentActivities: [
      'Data Workshop: Análisis de Movilidad con Python',
      'Report Release: Mercado EV en LATAM 2024',
      'Research Group: Micro-movilidad'
    ]
  },
  { 
    name: 'Políticas Públicas', 
    slug: 'politicas-publicas',
    members: '189', 
    tag: 'Gobierno', 
    badge: 'Verificado',
    description: 'Profesionales en política pública, regulación y advocacy en movilidad sostenible.',
    longDescription: 'Espacio para policy makers, académicos y profesionales en advocacy para discutir regulación, incidencia política y políticas públicas que faciliten la transición a una movilidad sostenible.',
    isPrivate: false,
    monthlyMeetups: 2,
    recentActivities: [
      'Foro: Regulación de Vehículos Autónomos',
      'Policy Paper Release: Incentivos para EVs',
      'Advocacy Workshop: Cómo influir en decisión pública'
    ]
  },
  { 
    name: 'Baterías & Almacenamiento', 
    slug: 'baterias-almacenamiento',
    members: '298', 
    tag: 'Tecnología', 
    badge: 'Público',
    description: 'Especialistas en tecnología de baterías, almacenamiento de energía y cadena de suministro.',
    longDescription: 'Comunidad técnica enfocada en innovación en baterías, química, reciclaje y almacenamiento de energía. Discute nuevas tecnologías, casos de estudio y cadena de suministro en LATAM.',
    isPrivate: false,
    monthlyMeetups: 2,
    recentActivities: [
      'Technical: Nuevas Químicas de Baterías',
      'Panel: Reciclaje y Circularidad en Baterías',
      'Supply Chain Discussion: Sourcing en LATAM'
    ]
  },
  { 
    name: 'Micro-movilidad', 
    slug: 'micro-movilidad',
    members: '456', 
    tag: 'Urbano', 
    badge: 'Público',
    description: 'Profesionales enfocados en micro-movilidad, scooters, bikes y micro-transportes urbanos.',
    longDescription: 'Comunidad dedicada a soluciones de micro-movilidad. Discute regulación, modelos de negocio, sostenibilidad y el rol de micro-transportes en ciudades inteligentes.',
    isPrivate: false,
    monthlyMeetups: 3,
    recentActivities: [
      'Panel: Regulación de Scooters en Ciudades',
      'Case Study: Bike Share de Santiago',
      'Market Analysis: Micro-movilidad en 2025'
    ]
  },
  { 
    name: 'Sostenibilidad Corporativa', 
    slug: 'sostenibilidad-corporativa',
    members: '512', 
    tag: 'ESG', 
    badge: 'Público',
    description: 'Profesionales de ESG, sostenibilidad y responsabilidad corporativa en movilidad.',
    longDescription: 'Espacio para discutir estrategias ESG, impacto ambiental, reportes de sostenibilidad y cómo integrar movilidad sostenible en objetivos corporativos.',
    isPrivate: false,
    monthlyMeetups: 2,
    recentActivities: [
      'Workshop: Net Zero 2050 en Movilidad',
      'ESG Report Review Session',
      'Carbon Accounting en Flotas'
    ]
  }
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const group = GROUPS.find(g => g.slug === params.slug)
  
  if (!group) {
    return {
      title: 'Grupo no encontrado | MOVILIAX Connect'
    }
  }

  return {
    title: `${group.name} | Grupo | MOVILIAX Connect`,
    description: group.longDescription
  }
}

export default function GroupPage({ params }: { params: { slug: string } }) {
  const group = GROUPS.find(g => g.slug === params.slug)

  if (!group) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-b from-transparent via-violeta-tech/5 to-transparent border-b border-white/10">
        <div className="container mx-auto max-w-5xl">
          <Link href="/connect#foros" className="inline-flex items-center gap-2 text-cian-electrico hover:text-cian-electrico/80 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Volver a Grupos
          </Link>
          
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cian-electrico to-violeta-tech flex items-center justify-center font-bold text-azul-profundo text-lg">
                  {group.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-exo font-bold">
                    {group.name}
                  </h1>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs px-2 py-1 bg-cian-electrico/10 text-cian-electrico rounded-full">
                      {group.tag}
                    </span>
                    <span className="text-xs px-2 py-1 bg-white/5 text-gris-metalico rounded-full flex items-center gap-1">
                      {group.isPrivate ? (
                        <>
                          <Lock className="w-3 h-3" />
                          {group.badge}
                        </>
                      ) : (
                        <>
                          <Globe className="w-3 h-3" />
                          {group.badge}
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gris-metalico text-lg mb-8 max-w-3xl">
            {group.longDescription}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-2xl md:text-3xl font-exo font-bold text-cian-electrico">
                {group.members}
              </div>
              <div className="text-sm text-gris-metalico">Miembros</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-exo font-bold text-cian-electrico">
                {group.monthlyMeetups}
              </div>
              <div className="text-sm text-gris-metalico">Eventos/Mes</div>
            </div>
            <div className="col-span-2 md:col-span-2">
              <p className="text-xs text-gris-metalico">Rol: {group.tag}</p>
              <p className="text-sm font-semibold mt-1">Grupo especializado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Actividades Recientes</h2>
              <div className="space-y-4">
                {group.recentActivities.map((activity, i) => (
                  <article key={i} className="content-card hover:border-cian-electrico/50 transition-all cursor-pointer group">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-cian-electrico transition-colors flex items-start gap-2">
                      <MessageSquare className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      {activity}
                    </h3>
                    <p className="text-sm text-gris-metalico">
                      Hace 5 días · Próximamente
                    </p>
                  </article>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <Link href="/auth/register" className="btn-primary inline-flex items-center justify-center gap-2">
                  <Users className="w-4 h-4" />
                  Unirme al Grupo
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="content-card sticky top-24">
                <h3 className="text-xl font-bold mb-4">Información del Grupo</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs text-gris-metalico uppercase tracking-wide mb-1">Acceso</p>
                    <p className="text-sm font-semibold flex items-center gap-2">
                      {group.isPrivate ? (
                        <>
                          <Lock className="w-4 h-4 text-cian-electrico" />
                          Privado - Solo Invitados
                        </>
                      ) : (
                        <>
                          <Globe className="w-4 h-4 text-cian-electrico" />
                          Público
                        </>
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gris-metalico uppercase tracking-wide mb-1">Miembros</p>
                    <p className="text-sm font-semibold">{group.members} profesionales activos</p>
                  </div>
                  <div>
                    <p className="text-xs text-gris-metalico uppercase tracking-wide mb-1">Frecuencia</p>
                    <p className="text-sm font-semibold">{group.monthlyMeetups} eventos/mes</p>
                  </div>
                  <div>
                    <p className="text-xs text-gris-metalico uppercase tracking-wide mb-1">Especialización</p>
                    <p className="text-sm font-semibold">{group.tag}</p>
                  </div>
                </div>

                <Link href="/auth/register" className="btn-primary w-full text-center block mb-3">
                  Unirme al Grupo
                </Link>
                <button className="w-full px-4 py-2 border border-white/20 rounded-lg text-sm font-semibold hover:border-cian-electrico/50 transition-colors">
                  Más Información
                </button>
              </div>

              {/* Moderadores */}
              <div className="content-card mt-6">
                <h3 className="text-lg font-bold mb-4">Moderadores</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cian-electrico to-violeta-tech" />
                    <div className="text-sm">
                      <p className="font-semibold">María López</p>
                      <p className="text-xs text-gris-metalico">Fundadora</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violeta-tech to-azul-profundo" />
                    <div className="text-sm">
                      <p className="font-semibold">Carlos García</p>
                      <p className="text-xs text-gris-metalico">Moderador</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
