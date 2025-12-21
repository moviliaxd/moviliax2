import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Colaboradores - MOVILIAX',
  description: 'Colabora con MOVILIAX - Únete a nuestra comunidad de escritores, expertos y creadores de contenido sobre movilidad sostenible',
}

export default function ColaboradoresPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-20">
        <div className="hero-grid" aria-hidden="true" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-cian-electrico/5 to-transparent animate-[scan_8s_linear_infinite]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-exo font-bold mb-6">
            <span className="text-gradient">Colabora con MOVILIAX</span>
          </h1>
          <p className="text-xl md:text-2xl text-gris-metalico mb-8 leading-relaxed">
            Únete a nuestra comunidad de expertos, escritores y creadores apasionados por el futuro 
            de la movilidad sostenible en América Latina
          </p>
          <a href="#tipos" className="btn-primary inline-flex items-center gap-2">
            Explorar Oportunidades
          </a>
        </div>
      </section>

      {/* Collaboration Types */}
      <section id="tipos" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico text-center mb-6">
            Formas de Colaborar
          </h2>
          <p className="text-gris-metalico text-lg text-center mb-16 max-w-3xl mx-auto">
            Múltiples maneras de contribuir tu experiencia y conocimiento a nuestra plataforma
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '✍️',
                title: 'Escritor Colaborador',
                desc: 'Escribe artículos, análisis y reportajes sobre movilidad sostenible, vehículos eléctricos, políticas públicas y tendencias del sector.',
                perks: [
                  'Publicación con tu nombre y bio',
                  'Alcance a 250K+ lectores mensuales',
                  'Compensación por artículo publicado',
                  'Portfolio y credibilidad profesional',
                  'Acceso a eventos exclusivos'
                ]
              },
              {
                icon: '🎥',
                title: 'Creador de Contenido',
                desc: 'Produce videos, podcasts, infografías o contenido multimedia sobre movilidad, EVs y tecnología de transporte.',
                perks: [
                  'Distribución multiplataforma',
                  'Soporte técnico y editorial',
                  'Monetización de contenido',
                  'Colaboraciones con marcas',
                  'Growth de tu audiencia personal'
                ]
              },
              {
                icon: '🔬',
                title: 'Experto/Analista',
                desc: 'Comparte tu expertise en entrevistas, webinars, estudios de caso y análisis técnicos especializados.',
                perks: [
                  'Posicionamiento como thought leader',
                  'Networking con industria',
                  'Participación en investigaciones',
                  'Honorarios por consultoría',
                  'Oportunidades de speaking'
                ]
              },
              {
                icon: '📸',
                title: 'Fotógrafo/Diseñador',
                desc: 'Crea contenido visual impactante: fotografías de EVs, eventos, infografías, ilustraciones y diseños.',
                perks: [
                  'Créditos y atribución visible',
                  'Licencias de uso flexibles',
                  'Pago por proyecto',
                  'Exposición de tu trabajo',
                  'Proyectos colaborativos'
                ]
              },
              {
                icon: '🌐',
                title: 'Traductor/Localizador',
                desc: 'Ayuda a adaptar nuestro contenido a diferentes mercados y idiomas de América Latina.',
                perks: [
                  'Trabajo remoto y flexible',
                  'Pago por palabra/proyecto',
                  'Proyectos continuos',
                  'Especialización en tu nicho',
                  'Equipo internacional'
                ]
              },
              {
                icon: '🎓',
                title: 'Educador/Facilitador',
                desc: 'Desarrolla y facilita cursos, talleres y programas educativos sobre movilidad sostenible.',
                perks: [
                  'Diseño de currícula personalizada',
                  'Plataforma de e-learning',
                  'Revenue sharing por curso',
                  'Comunidad de estudiantes activa',
                  'Certificaciones conjuntas'
                ]
              }
            ].map((collab, i) => (
              <article key={i} className="content-card group hover:scale-[1.02] transition-transform">
                <div className="text-5xl mb-4">{collab.icon}</div>
                <h3 className="text-2xl font-exo font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                  {collab.title}
                </h3>
                <p className="text-gris-metalico mb-6 leading-relaxed">{collab.desc}</p>
                <ul className="space-y-2 pt-6 border-t border-white/10">
                  {collab.perks.map((perk, j) => (
                    <li key={j} className="text-sm text-gris-metalico flex items-start gap-2">
                      <span className="text-cian-electrico font-bold mt-0.5">✓</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-cian-electrico/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico text-center mb-16">
            Lo Que Buscamos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '💡', title: 'Pasión por la Movilidad', desc: 'Genuino interés en la electromovilidad, transporte sostenible y el futuro de las ciudades' },
              { icon: '📚', title: 'Conocimiento Especializado', desc: 'Experiencia o formación en áreas relacionadas: ingeniería, periodismo, diseño, sostenibilidad' },
              { icon: '✨', title: 'Calidad y Originalidad', desc: 'Capacidad para crear contenido único, bien investigado y de alto valor para nuestra audiencia' },
              { icon: '🗣️', title: 'Comunicación Clara', desc: 'Habilidad para explicar conceptos complejos de manera accesible y engaging' },
              { icon: '🌎', title: 'Contexto Regional', desc: 'Entendimiento de las particularidades y desafíos de la movilidad en América Latina' },
              { icon: '⏰', title: 'Compromiso', desc: 'Responsabilidad con deadlines, comunicación proactiva y profesionalismo' }
            ].map((req, i) => (
              <div key={i} className="text-center p-8 bg-white/2 rounded-2xl border border-cian-electrico/20 hover:border-cian-electrico/50 hover:-translate-y-2 transition-all">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cian-electrico/10 to-violeta-tech/10 border-2 border-cian-electrico/30 rounded-full flex items-center justify-center text-4xl">
                  {req.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-cian-electrico">{req.title}</h3>
                <p className="text-gris-metalico text-sm leading-relaxed">{req.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collaborators */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico text-center mb-6">
            Colaboradores Destacados
          </h2>
          <p className="text-gris-metalico text-lg text-center mb-16 max-w-3xl mx-auto">
            Conoce a algunos de los profesionales que contribuyen regularmente a MOVILIAX
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { initials: 'RP', name: 'Roberto Paz', role: 'Analista de Mercado', bio: 'Economista especializado en mercados automotrices y tendencias de consumo en LATAM', articles: '24', reads: '50K' },
              { initials: 'ST', name: 'Sofía Torres', role: 'Ingeniera en EVs', bio: 'Experta en tecnologías de baterías y sistemas de propulsión eléctrica', articles: '18', reads: '35K' },
              { initials: 'FM', name: 'Felipe Moreno', role: 'Fotógrafo Automotriz', bio: 'Especialista en fotografía de vehículos y eventos de la industria', articles: '200+', reads: '15' },
              { initials: 'VL', name: 'Valentina López', role: 'Políticas Públicas', bio: 'Asesora en regulación y políticas de movilidad urbana sostenible', articles: '16', reads: '28K' }
            ].map((collab, i) => (
              <div key={i} className="content-card text-center group hover:-translate-y-2 transition-transform">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cian-electrico to-violeta-tech flex items-center justify-center text-3xl font-black text-azul-profundo border-4 border-cian-electrico/30">
                  {collab.initials}
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-cian-electrico transition-colors">{collab.name}</h3>
                <p className="text-cian-electrico text-xs font-semibold mb-3 uppercase tracking-wider">{collab.role}</p>
                <p className="text-gris-metalico text-sm mb-4 leading-relaxed">{collab.bio}</p>
                <div className="flex justify-center gap-6 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-black text-cian-electrico">{collab.articles}</div>
                    <div className="text-xs text-gris-metalico uppercase">Artículos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-cian-electrico">{collab.reads}</div>
                    <div className="text-xs text-gris-metalico uppercase">Lecturas</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-violeta-tech/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico text-center mb-6">
            Cómo Empezar
          </h2>
          <p className="text-gris-metalico text-lg text-center mb-16 max-w-3xl mx-auto">
            Proceso simple para convertirte en colaborador de MOVILIAX
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Aplicación', desc: 'Completa el formulario con tu información, experiencia y muestras de tu trabajo' },
              { num: '2', title: 'Evaluación', desc: 'Nuestro equipo editorial revisa tu perfil, portfolio y propuestas de contenido' },
              { num: '3', title: 'Entrevista', desc: 'Conversación virtual para conocernos mejor y alinear expectativas' },
              { num: '4', title: 'Prueba de Contenido', desc: 'Crea un artículo o contenido de prueba para evaluar fit y calidad' },
              { num: '5', title: 'Onboarding', desc: 'Acceso a herramientas, guías editoriales y bienvenida al equipo' },
              { num: '6', title: 'Colaboración', desc: 'Inicio de tu trabajo como colaborador regular de MOVILIAX' }
            ].map((step, i) => (
              <div key={i} className="content-card text-center relative pt-12 hover:-translate-y-2 transition-transform">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-cian-electrico to-violeta-tech rounded-full flex items-center justify-center text-2xl font-black text-azul-profundo border-4 border-azul-profundo">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gris-metalico text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto max-w-4xl px-4 py-20">
        <div className="bg-gradient-to-br from-cian-electrico/10 to-violeta-tech/10 border border-cian-electrico/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-exo font-bold mb-6">
            ¿Listo para Compartir tu Voz?
          </h2>
          <p className="text-gris-metalico text-xl mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de colaboradores y ayúdanos a transformar la movilidad en América Latina
          </p>
          <Link 
            href="/contacto" 
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            Aplicar Ahora
          </Link>
        </div>
      </section>
    </div>
  )
}