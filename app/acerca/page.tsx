import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acerca de MOVILIAX - Quiénes Somos',
  description: 'Conoce a MOVILIAX, la revista digital líder en movilidad, logística e innovación tecnológica en América Latina. Nuestra visión, misión y equipo.',
  keywords: ['MOVILIAX', 'equipo', 'visión', 'misión', 'movilidad', 'logística', 'innovación', 'LATAM'],
}

export default function AcercaPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-20">
        <div className="hero-grid" aria-hidden="true" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-exo font-bold mb-6 leading-tight">
            Conectando el Futuro de la <span className="text-gradient">Movilidad</span>
          </h1>
          <p className="text-xl md:text-2xl text-gris-metalico leading-relaxed">
            Somos el puente entre la innovación tecnológica y la movilidad humana en América Latina. 
            Nuestra misión es transformar la forma en que nos movemos a través del conocimiento y la tecnología.
          </p>
        </div>
      </section>

      {/* Visión y Misión */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <article className="content-card group">
              <div className="text-6xl mb-6">🎯</div>
              <h2 className="text-3xl font-exo font-bold mb-4 group-hover:text-cian-electrico transition-colors">
                Nuestra Visión
              </h2>
              <p className="text-gris-metalico text-lg leading-relaxed">
                Ser la revista digital líder en Latinoamérica sobre movilidad, logística e innovación tecnológica, 
                referente de información confiable y de vanguardia para profesionales, empresas y gobiernos.
              </p>
            </article>

            <article className="content-card group">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-3xl font-exo font-bold mb-4 group-hover:text-cian-electrico transition-colors">
                Nuestra Misión
              </h2>
              <p className="text-gris-metalico text-lg leading-relaxed">
                Difundir conocimiento, innovación y tendencias que impulsen el desarrollo sostenible y tecnológico 
                del sector transporte y logístico, conectando a los actores clave del ecosistema mediante contenido 
                digital de alto valor.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-cian-electrico/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-4">Nuestros Valores</h2>
            <p className="text-gris-metalico text-lg max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo diario y compromiso con la comunidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="content-card text-center group hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                Innovación
              </h3>
              <p className="text-gris-metalico">
                Exploramos constantemente las últimas tendencias y tecnologías que transforman la movilidad.
              </p>
            </div>

            <div className="content-card text-center group hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                Precisión
              </h3>
              <p className="text-gris-metalico">
                Verificamos cada dato y fuente para ofrecer información confiable y de calidad.
              </p>
            </div>

            <div className="content-card text-center group hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                Sostenibilidad
              </h3>
              <p className="text-gris-metalico">
                Promovemos soluciones de movilidad que respeten el medio ambiente y mejoren la calidad de vida.
              </p>
            </div>

            <div className="content-card text-center group hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cian-electrico transition-colors">
                Colaboración
              </h3>
              <p className="text-gris-metalico">
                Conectamos profesionales, empresas y gobiernos para crear un ecosistema de movilidad integrado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section id="team" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-gris-metalico text-lg max-w-2xl mx-auto">
              Expertos apasionados por transformar la movilidad en América Latina
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="content-card text-center group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cian-electrico to-violeta-tech flex items-center justify-center text-4xl">
                👨‍💼
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cian-electrico transition-colors">
                Manuel Lomelín
              </h3>
              <p className="text-cian-electrico text-sm font-semibold mb-3">Director Editorial</p>
              <p className="text-gris-metalico text-sm">
                15 años de experiencia en movilidad y logística. Apasionado por contar historias que transforman ciudades.
              </p>
            </div>

            <div className="content-card text-center group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cian-electrico to-violeta-tech flex items-center justify-center text-4xl">
                👨‍💻
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cian-electrico transition-colors">
                Carlos Rodríguez
              </h3>
              <p className="text-cian-electrico text-sm font-semibold mb-3">Editor de Tecnología</p>
              <p className="text-gris-metalico text-sm">
                Experto en IA y sistemas de transporte inteligente. Ingeniero convertido en periodista especializado.
              </p>
            </div>

            <div className="content-card text-center group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cian-electrico to-violeta-tech flex items-center justify-center text-4xl">
                👩‍🔬
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cian-electrico transition-colors">
                Laura Jiménez
              </h3>
              <p className="text-cian-electrico text-sm font-semibold mb-3">Analista de Movilidad</p>
              <p className="text-gris-metalico text-sm">
                Especialista en movilidad urbana sostenible con maestría en Smart Cities y desarrollo urbano.
              </p>
            </div>

            <div className="content-card text-center group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cian-electrico to-violeta-tech flex items-center justify-center text-4xl">
                👨‍🎨
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cian-electrico transition-colors">
                Miguel Torres
              </h3>
              <p className="text-cian-electrico text-sm font-semibold mb-3">Director Creativo</p>
              <p className="text-gris-metalico text-sm">
                Diseñador UX/UI enfocado en experiencias digitales que comunican conceptos complejos de forma simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-cian-electrico/10 to-violeta-tech/10 border border-cian-electrico/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              ¿Listo para Moverte con Nosotros?
            </h2>
            <p className="text-gris-metalico text-lg mb-8 max-w-2xl mx-auto">
              Únete a la comunidad MOVILIAX y mantente al día con las últimas tendencias en movilidad, 
              logística e innovación tecnológica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#newsletter" 
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Suscríbete al Newsletter
              </Link>
              <Link 
                href="/contacto" 
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}