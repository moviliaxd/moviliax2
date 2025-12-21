import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MOVILIAX Connect | Red Profesional de Movilidad en LATAM',
  description: 'Únete a la red profesional más activa de movilidad en América Latina. Conecta con +5,000 expertos, participa en foros, eventos y grupos especializados.',
}

export default function ConnectPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20">
        <div className="hero-grid" aria-hidden="true" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cian-electrico/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violeta-tech/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <span className="inline-block px-4 py-2 bg-cian-electrico/10 border border-cian-electrico/30 rounded-full text-cian-electrico text-sm font-semibold mb-6">
            🌟 MOVILIAX Connect
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
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">5,000+</div>
              <div className="text-sm text-gris-metalico uppercase tracking-wide">Miembros Activos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">250+</div>
              <div className="text-sm text-gris-metalico uppercase tracking-wide">Empresas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">50+</div>
              <div className="text-sm text-gris-metalico uppercase tracking-wide">Eventos/Mes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">18</div>
              <div className="text-sm text-gris-metalico uppercase tracking-wide">Países</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary inline-flex items-center justify-center gap-2">
              🚀 Unirme Ahora
            </button>
            <button className="btn-secondary inline-flex items-center justify-center gap-2">
              ▶️ Ver Cómo Funciona
            </button>
          </div>
        </div>
      </section>

      {/* Foros Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-cian-electrico text-sm font-semibold mb-2 block">💬 Foros</span>
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-4">Discusiones que Importan</h2>
            <p className="text-gris-metalico text-lg max-w-2xl mx-auto">
              Participa en conversaciones sobre los temas más relevantes del ecosistema de movilidad en América Latina.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🔋',
                title: 'Vehículos Eléctricos',
                description: 'Modelos, infraestructura de carga, incentivos fiscales y el futuro de la movilidad eléctrica en LATAM.',
                topics: '1,245',
                members: '2,340'
              },
              {
                icon: '🏙️',
                title: 'Smart Cities & Movilidad Urbana',
                description: 'Transporte público, micro-movilidad, gestión inteligente de tráfico y casos de éxito.',
                topics: '890',
                members: '1,876'
              },
              {
                icon: '🚚',
                title: 'Logística & Last Mile',
                description: 'E-commerce, flotas eléctricas, optimización de rutas y nearshoring en la región.',
                topics: '765',
                members: '1,543'
              },
              {
                icon: '🤖',
                title: 'Vehículos Autónomos',
                description: 'Tecnología, regulación, pruebas piloto y el impacto de los AVs en América Latina.',
                topics: '432',
                members: '987'
              },
              {
                icon: '💼',
                title: 'Negocios & Emprendimiento',
                description: 'Startups de movilidad, financiamiento, modelos de negocio y oportunidades del sector.',
                topics: '623',
                members: '1,234'
              },
              {
                icon: '🌎',
                title: 'Foros por País',
                description: 'Discusiones específicas sobre México, Brasil, Colombia, Argentina, Chile y más países LATAM.',
                topics: '1,890',
                members: '3,456'
              }
            ].map((forum, i) => (
              <article key={i} className="content-card group cursor-pointer hover:scale-[1.02] transition-transform">
                <div className="text-5xl mb-4">{forum.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                  {forum.title}
                </h3>
                <p className="text-gris-metalico mb-4 text-sm leading-relaxed">
                  {forum.description}
                </p>
                <div className="flex gap-4 pt-4 border-t border-white/10 text-sm">
                  <span className="text-gris-metalico">💬 {forum.topics} temas</span>
                  <span className="text-gris-metalico">👥 {forum.members} miembros</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Grupos Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-violeta-tech/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-cian-electrico text-sm font-semibold mb-2 block">👥 Grupos</span>
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-4">Comunidades Especializadas</h2>
            <p className="text-gris-metalico text-lg max-w-2xl mx-auto">
              Únete a grupos por rol, industria o interés específico. Colabora con profesionales que comparten tus mismos desafíos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'C-Level en Movilidad', members: '234', tag: 'Ejecutivos', badge: 'Privado' },
              { name: 'Founders & Emprendedores', members: '567', tag: 'Startups', badge: 'Público' },
              { name: 'Ingenieros de Infraestructura', members: '423', tag: 'Técnico', badge: 'Público' },
              { name: 'Analistas de Mercado', members: '345', tag: 'Datos', badge: 'Público' },
              { name: 'Políticas Públicas', members: '189', tag: 'Gobierno', badge: 'Verificado' },
              { name: 'Baterías & Almacenamiento', members: '298', tag: 'Tecnología', badge: 'Público' },
              { name: 'Micro-movilidad', members: '456', tag: 'Urbano', badge: 'Público' },
              { name: 'Sostenibilidad Corporativa', members: '512', tag: 'ESG', badge: 'Público' }
            ].map((group, i) => (
              <div key={i} className="content-card hover:border-cian-electrico/50 transition-all cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cian-electrico to-violeta-tech flex items-center justify-center font-bold text-azul-profundo">
                    {group.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{group.name}</h3>
                    <p className="text-xs text-gris-metalico">👥 {group.members} miembros</p>
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

      {/* Eventos Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-cian-electrico text-sm font-semibold mb-2 block">📅 Eventos</span>
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-4">Próximos Eventos</h2>
            <p className="text-gris-metalico text-lg max-w-2xl mx-auto">
              Webinars, meetups, conferencias y workshops diseñados para conectar, aprender y colaborar.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                date: '15 de Enero, 2026',
                title: 'MOVILIAX Summit 2026',
                description: 'Conferencia virtual de día completo con keynotes, paneles y networking. Más de 20 speakers internacionales.',
                type: 'Virtual',
                time: '9:00 AM - 6:00 PM (MX)',
                attendees: '1,234 registrados'
              },
              {
                date: '20 de Enero, 2026',
                title: 'Coffee Talk: Nearshoring y Logística',
                description: 'Conversación informal sobre el impacto del nearshoring en la infraestructura logística mexicana.',
                type: 'Virtual',
                time: '9:00 AM (MX)',
                attendees: '456 registrados'
              },
              {
                date: '28 de Enero, 2026',
                title: 'Meetup CDMX: EVs y Infraestructura',
                description: 'Evento presencial en Ciudad de México. Networking, panel y visita a estación de carga Tesla.',
                type: 'Presencial - CDMX',
                time: '6:00 PM - 9:00 PM',
                attendees: '78/100 cupos'
              }
            ].map((event, i) => (
              <article key={i} className="content-card hover:border-cian-electrico/50 transition-all">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/4">
                    <span className="inline-block px-3 py-1 bg-cian-electrico/10 text-cian-electrico rounded-lg text-sm font-semibold">
                      📅 {event.date}
                    </span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gris-metalico mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gris-metalico">
                      <span>📍 {event.type}</span>
                      <span>🕐 {event.time}</span>
                      <span>👥 {event.attendees}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-cian-electrico/10 to-violeta-tech/10 border border-cian-electrico/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              ¿Listo para Unirte a la Red?
            </h2>
            <p className="text-gris-metalico text-lg mb-8 max-w-2xl mx-auto">
              Más de 5,000 profesionales ya están conectados. Participa en foros, eventos exclusivos 
              y colabora en proyectos que están transformando la movilidad en LATAM.
            </p>
            <button className="btn-primary inline-flex items-center justify-center gap-2">
              🚀 Crear Mi Cuenta Gratis
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}