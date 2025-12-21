import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sponsors - MOVILIAX',
  description: 'Oportunidades de Patrocinio en MOVILIAX - Conecta con la audiencia líder en movilidad sostenible de América Latina',
}

export default function SponsorsPage() {
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
            <span className="text-gradient">Conviértete en Sponsor</span>
          </h1>
          <p className="text-xl md:text-2xl text-gris-metalico mb-12 leading-relaxed">
            Conecta con la audiencia más comprometida con la movilidad sostenible de América Latina
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-exo font-black text-cian-electrico mb-2">
                250K+
              </div>
              <div className="text-sm text-gris-metalico uppercase tracking-wider">
                Lectores Mensuales
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-exo font-black text-cian-electrico mb-2">
                85%
              </div>
              <div className="text-sm text-gris-metalico uppercase tracking-wider">
                Decisores de Compra
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-exo font-black text-cian-electrico mb-2">
                15+
              </div>
              <div className="text-sm text-gris-metalico uppercase tracking-wider">
                Países LATAM
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico text-center mb-6">
            ¿Por Qué Patrocinar MOVILIAX?
          </h2>
          <p className="text-gris-metalico text-lg text-center mb-16 max-w-3xl mx-auto">
            Llega a una audiencia altamente calificada comprometida con la movilidad del futuro
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: '🎯',
                title: 'Audiencia Calificada',
                desc: 'Accede a tomadores de decisión, early adopters y entusiastas de EVs con alto poder adquisitivo.'
              },
              {
                icon: '📊',
                title: 'Alcance Regional',
                desc: 'Presencia en más de 15 países de América Latina, concentración en mercados clave.'
              },
              {
                icon: '💡',
                title: 'Contenido Premium',
                desc: 'Asocia tu marca con contenido editorial de alta calidad y análisis experto del sector.'
              }
            ].map((benefit, i) => (
              <article key={i} className="content-card text-center group hover:scale-[1.05] transition-transform">
                <div className="text-6xl mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-exo font-bold mb-4 group-hover:text-cian-electrico transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gris-metalico leading-relaxed">{benefit.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-cian-electrico/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico text-center mb-6">
            Paquetes de Patrocinio
          </h2>
          <p className="text-gris-metalico text-lg text-center mb-16 max-w-3xl mx-auto">
            Soluciones flexibles adaptadas a tus objetivos
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Bronze Package */}
            <div className="content-card text-center hover:-translate-y-4 transition-transform">
              <h3 className="text-3xl font-exo font-black text-cian-electrico uppercase mb-6">
                Bronce
              </h3>
              <div className="mb-8">
                <div className="text-5xl font-exo font-black text-white mb-2">
                  $2,500
                  <span className="text-lg text-gris-metalico font-normal">/mes</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                {[
                  'Banner en homepage',
                  'Newsletter mensual',
                  '1 artículo patrocinado/mes',
                  'Logo en sponsors',
                  'Reporte mensual',
                  '100K impresiones/mes'
                ].map((feature, i) => (
                  <li key={i} className="text-sm text-gris-metalico border-b border-white/5 pb-3 flex items-start gap-2">
                    <span className="text-cian-electrico font-bold text-lg mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/contacto" 
                className="inline-block px-8 py-3 bg-gradient-to-r from-cian-electrico to-cian-electrico/80 text-azul-profundo font-bold rounded-full hover:scale-105 transition-transform"
              >
                Comenzar
              </Link>
            </div>

            {/* Silver Package - Featured */}
            <div className="content-card text-center relative border-2 border-cian-electrico bg-cian-electrico/5 scale-105 hover:scale-110 transition-transform">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-cian-electrico to-violeta-tech text-azul-profundo text-xs font-bold rounded-full uppercase">
                Más Popular
              </div>
              <h3 className="text-3xl font-exo font-black text-cian-electrico uppercase mb-6">
                Plata
              </h3>
              <div className="mb-8">
                <div className="text-5xl font-exo font-black text-white mb-2">
                  $5,000
                  <span className="text-lg text-gris-metalico font-normal">/mes</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                {[
                  'Banner premium',
                  'Newsletter semanal',
                  '2 artículos patrocinados/mes',
                  '1 video review',
                  'Redes sociales',
                  'Logo destacado',
                  'Reportes quincenales',
                  '250K impresiones/mes'
                ].map((feature, i) => (
                  <li key={i} className="text-sm text-gris-metalico border-b border-white/5 pb-3 flex items-start gap-2">
                    <span className="text-cian-electrico font-bold text-lg mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/contacto" 
                className="inline-block px-8 py-3 bg-gradient-to-r from-cian-electrico to-cian-electrico/80 text-azul-profundo font-bold rounded-full hover:scale-105 transition-transform"
              >
                Comenzar
              </Link>
            </div>

            {/* Gold Package */}
            <div className="content-card text-center hover:-translate-y-4 transition-transform">
              <h3 className="text-3xl font-exo font-black text-cian-electrico uppercase mb-6">
                Oro
              </h3>
              <div className="mb-8">
                <div className="text-5xl font-exo font-black text-white mb-2">
                  $10,000
                  <span className="text-lg text-gris-metalico font-normal">/mes</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                {[
                  'Todo Plata incluido',
                  'Exclusividad categoría',
                  '4 artículos/mes',
                  'Webinar mensual',
                  'Campaña redes',
                  'Email dedicado',
                  'Eventos MOVILIAX',
                  'Account manager',
                  'Impresiones ilimitadas'
                ].map((feature, i) => (
                  <li key={i} className="text-sm text-gris-metalico border-b border-white/5 pb-3 flex items-start gap-2">
                    <span className="text-cian-electrico font-bold text-lg mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/contacto" 
                className="inline-block px-8 py-3 bg-gradient-to-r from-cian-electrico to-cian-electrico/80 text-azul-profundo font-bold rounded-full hover:scale-105 transition-transform"
              >
                Comenzar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico text-center mb-16">
            Beneficios Adicionales
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Contenido Branded', desc: 'Artículos y videos diseñados específicamente para tu marca con distribución en nuestras plataformas' },
              { title: 'Eventos Exclusivos', desc: 'Participación prioritaria en lanzamientos de vehículos, test drives y eventos de la industria' },
              { title: 'Data & Analytics', desc: 'Reportes detallados de performance, demografía de audiencia y métricas de engagement' },
              { title: 'Branded Newsletters', desc: 'Envío de newsletters dedicados a tu marca con targeting específico' }
            ].map((benefit, i) => (
              <div key={i} className="content-card border-l-4 border-cian-electrico hover:border-l-8 hover:translate-x-2 transition-all">
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gris-metalico text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto max-w-5xl px-4 py-20">
        <div className="bg-gradient-to-br from-cian-electrico/15 to-violeta-tech/15 border border-cian-electrico/30 rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-exo font-bold mb-6">
            ¿Listo para Impulsar tu Marca?
          </h2>
          <p className="text-gris-metalico text-xl mb-10 max-w-2xl mx-auto">
            Únete a las marcas líderes que confían en MOVILIAX para conectar con la audiencia del futuro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contacto" 
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Solicitar Propuesta
            </Link>
            <Link 
              href="/acerca" 
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              Conocer Más
            </Link>
          </div>
        </div>
      </section>

      {/* Current Sponsors Placeholder */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-violeta-tech/5 to-transparent">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-6">
            Marcas que Confían en MOVILIAX
          </h2>
          <p className="text-gris-metalico text-lg mb-12">
            Sé el primero en unirte a nuestro programa de sponsors
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-white/5 border border-cian-electrico/20 rounded-xl flex items-center justify-center hover:border-cian-electrico/50 transition-colors">
                <span className="text-4xl">🚗</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}