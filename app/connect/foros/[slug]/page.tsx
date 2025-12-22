import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowLeft, MessageSquare, Users, TrendingUp } from 'lucide-react'

// Datos de foros (same as in connect page)
const FORUMS = [
  {
    title: 'Vehículos Eléctricos',
    slug: 'vehiculos-electricos',
    description: 'Modelos, infraestructura de carga, incentivos fiscales y el futuro de la movilidad eléctrica en LATAM.',
    longDescription: 'Explora el ecosistema completo de vehículos eléctricos en América Latina. Desde los modelos más recientes hasta infraestructura de carga, pasando por incentivos fiscales y regulación. Conecta con ingenieros, ejecutivos y entusiastas de la electromovilidad.',
    topics: '1,245',
    members: '2,340',
    postsPerDay: '45',
    recentTopics: [
      'Comparativa Tesla Model Y vs. modelos locales',
      'Red de carga rápida en México: estado actual',
      'Subsidios para empresas que electrifican flotas'
    ]
  },
  {
    title: 'Smart Cities & Movilidad Urbana',
    slug: 'smart-cities-movilidad-urbana',
    description: 'Transporte público, micro-movilidad, gestión inteligente de tráfico y casos de éxito.',
    longDescription: 'Discute sobre el futuro de las ciudades inteligentes y la movilidad urbana. Desde sistemas de transporte público integrados hasta micro-movilidad, gestión de tráfico con IA y planificación urbana sostenible.',
    topics: '890',
    members: '1,876',
    postsPerDay: '32',
    recentTopics: [
      'Integración de apps de transporte en CDMX',
      'Scooters eléctricos: regulación y sostenibilidad',
      'Ciudades con mayor inversión en movilidad urbana'
    ]
  },
  {
    title: 'Logística & Last Mile',
    slug: 'logistica-last-mile',
    description: 'E-commerce, flotas eléctricas, optimización de rutas y nearshoring en la región.',
    longDescription: 'Especialízate en logística moderna y entrega última milla. Discute sobre flotas eléctricas, optimización de rutas, nearshoring, e-commerce y soluciones de entregas innovadoras.',
    topics: '765',
    members: '1,543',
    postsPerDay: '28',
    recentTopics: [
      'Costos de implementar flotas eléctricas en logística',
      'Nearshoring en México: oportunidades para proveedores',
      'Soluciones de last mile con drones'
    ]
  },
  {
    title: 'Vehículos Autónomos',
    slug: 'vehiculos-autonomos',
    description: 'Tecnología, regulación, pruebas piloto y el impacto de los AVs en América Latina.',
    longDescription: 'Explora el futuro de los vehículos autónomos en la región. Debate sobre tecnología, regulación, pruebas piloto en ciudades latinoamericanas e impacto social y económico.',
    topics: '432',
    members: '987',
    postsPerDay: '15',
    recentTopics: [
      'Regulación de vehículos autónomos en Brasil',
      'Casos de éxito en pruebas piloto de AVs',
      'Impacto laboral de la autonomía vehicular'
    ]
  },
  {
    title: 'Negocios & Emprendimiento',
    slug: 'negocios-emprendimiento',
    description: 'Startups de movilidad, financiamiento, modelos de negocio y oportunidades del sector.',
    longDescription: 'Conéctate con emprendedores y empresarios del sector de movilidad. Discute sobre financiamiento, modelos de negocio, escalabilidad y oportunidades de negocio en LATAM.',
    topics: '623',
    members: '1,234',
    postsPerDay: '38',
    recentTopics: [
      'Levantamiento de Serie A: experiencias de founders',
      'Validación de MVPs en movilidad',
      'Oportunidades de B2B en el sector'
    ]
  },
  {
    title: 'Foros por País',
    slug: 'foros-por-pais',
    description: 'Discusiones específicas sobre México, Brasil, Colombia, Argentina, Chile y más países LATAM.',
    longDescription: 'Foros dedicados a cada país de América Latina. Discute regulación local, oportunidades, desafíos y soluciones específicas de tu región.',
    topics: '1,890',
    members: '3,456',
    postsPerDay: '52',
    recentTopics: [
      'Regulación de scooters en Ciudad de México',
      'Incentivos para manufactura de EVs en Brasil',
      'Seguridad en transporte compartido en Colombia'
    ]
  }
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const forum = FORUMS.find(f => f.slug === params.slug)
  
  if (!forum) {
    return {
      title: 'Foro no encontrado | MOVILIAX Connect'
    }
  }

  return {
    title: `${forum.title} | Foro | MOVILIAX Connect`,
    description: forum.longDescription
  }
}

export default function ForumPage({ params }: { params: { slug: string } }) {
  const forum = FORUMS.find(f => f.slug === params.slug)

  if (!forum) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-b from-transparent via-violeta-tech/5 to-transparent border-b border-white/10">
        <div className="container mx-auto max-w-5xl">
          <Link href="/connect#foros" className="inline-flex items-center gap-2 text-cian-electrico hover:text-cian-electrico/80 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Volver a Foros
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-exo font-bold mb-4">
            {forum.title}
          </h1>
          <p className="text-gris-metalico text-lg mb-8">
            {forum.longDescription}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            <div>
              <div className="text-2xl md:text-3xl font-exo font-bold text-cian-electrico">
                {forum.members}
              </div>
              <div className="text-sm text-gris-metalico">Miembros Activos</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-exo font-bold text-cian-electrico">
                {forum.topics}
              </div>
              <div className="text-sm text-gris-metalico">Temas</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-exo font-bold text-cian-electrico">
                {forum.postsPerDay}
              </div>
              <div className="text-sm text-gris-metalico">Posts/día</div>
            </div>
            <div className="hidden md:block">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cian-electrico/10 text-cian-electrico rounded-lg text-xs font-semibold">
                <TrendingUp className="w-4 h-4" />
                Activo
              </div>
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
              <h2 className="text-2xl font-bold mb-6">Temas Recientes</h2>
              <div className="space-y-4">
                {forum.recentTopics.map((topic, i) => (
                  <article key={i} className="content-card hover:border-cian-electrico/50 transition-all cursor-pointer group">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-cian-electrico transition-colors">
                      {topic}
                    </h3>
                    <p className="text-sm text-gris-metalico mb-3">
                      Hace 2 horas · 12 respuestas · 89 vistas
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs px-2 py-1 bg-cian-electrico/10 text-cian-electrico rounded-full">
                        Discusión
                      </span>
                      <span className="text-xs px-2 py-1 bg-white/5 text-gris-metalico rounded-full">
                        Sin resolver
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <Link href="/auth/register" className="btn-primary inline-flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Crear un Tema
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="content-card sticky top-24">
                <h3 className="text-xl font-bold mb-4">Sobre este Foro</h3>
                <p className="text-sm text-gris-metalico mb-6">
                  {forum.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gris-metalico">Moderadores</span>
                    <span className="font-semibold">3 activos</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gris-metalico">Último post</span>
                    <span className="font-semibold">Hace 10 min</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gris-metalico">Creado el</span>
                    <span className="font-semibold">Ene 2024</span>
                  </div>
                </div>

                <Link href="/auth/register" className="btn-primary w-full text-center block">
                  Unirse al Foro
                </Link>
              </div>

              {/* Related Forums */}
              <div className="content-card mt-6">
                <h3 className="text-lg font-bold mb-4">Foros Relacionados</h3>
                <ul className="space-y-2">
                  {FORUMS.filter(f => f.slug !== forum.slug).slice(0, 3).map((relatedForum, i) => (
                    <li key={i}>
                      <Link 
                        href={`/connect/foros/${relatedForum.slug}`}
                        className="text-sm text-cian-electrico hover:text-cian-electrico/80 transition-colors"
                      >
                        → {relatedForum.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
