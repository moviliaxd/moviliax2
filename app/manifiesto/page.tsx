import Link from 'next/link';

export default function ManifiestoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cian-electrico/10 border border-cian-electrico/20 mb-6">
            <span className="text-cian-electrico text-sm font-medium">Nuestro Manifiesto</span>
          </div>
          
          <h1 className="font-['Exo'] text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cian-electrico via-violeta-tech to-magenta-futures bg-clip-text text-transparent">
              El manifiesto de la nueva movilidad en LATAM
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Moviliax nace de una convicción clara: América Latina no solo participa en la revolución logística y de movilidad del siglo XXI, está llamada a liderarla desde su propia realidad.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Vision */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cian-electrico/20 to-violeta-tech/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cian-electrico to-violeta-tech flex items-center justify-center text-2xl">
                  🔭
                </div>
                <div>
                  <h2 className="font-['Exo'] text-3xl font-bold text-white mb-4">Nuestra Visión</h2>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Creemos en una región donde la tecnología sea mucho más que eficiencia: una palanca de inclusión, competitividad y progreso compartido.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed mt-4">
                    Cada kilómetro recorrido, cada paquete entregado y cada dato analizado debe contribuir a ciudades más humanas, operaciones más inteligentes y un futuro más sostenible para todas las personas que viven y trabajan en América Latina.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Principios */}
          <div>
            <h2 className="font-['Exo'] text-3xl font-bold text-white mb-8 text-center">
              Nuestros Principios
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: '🌎',
                  title: 'Primero Latino América (LATAM First)',
                  description:
                    'Ponemos a América Latina en el centro de todo lo que hacemos. Nuestro contenido, análisis y comunidad están diseñados para abordar los desafíos y activar las oportunidades específicas de la región.'
                },
                {
                  icon: '🎓',
                  title: 'Conocimiento Accesible',
                  description:
                    'La innovación no puede quedarse solo en unos cuantos. Traducimos el lenguaje técnico en ideas claras y accionables para emprendedores, operadores, tomadores de decisión e inversionistas.'
                },
                {
                  icon: '🤝',
                  title: 'Comunidad Colaborativa',
                  description:
                    'La movilidad y la logística se construyen en red. Conectamos a profesionales, empresas, startups y gobiernos para que compartan aprendizajes, alineen visiones y aceleren proyectos juntos.'
                },
                {
                  icon: '🌱',
                  title: 'Sostenibilidad Integral',
                  description:
                    'Impulsamos soluciones que equilibran eficiencia operativa con impacto ambiental y social positivo. Creemos en un crecimiento que mejore la calidad de vida hoy sin comprometer la de mañana.'
                },
                {
                  icon: '🚀',
                  title: 'Innovación Pragmática',
                  description:
                    'Nos enfocamos en la tecnología que resuelve problemas reales. Damos visibilidad a soluciones que ya están generando valor tangible y transformando industrias en el terreno, no solo en presentaciones.'
                },
                {
                  icon: '📊',
                  title: 'Transparencia y Rigor',
                  description:
                    'Construimos credibilidad a partir de datos, análisis profundo y fuentes verificables. Preferimos la evidencia sólida a la exageración, porque el sector necesita información confiable para tomar mejores decisiones.'
                }
              ].map((principio, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-violeta-tech/20 to-magenta-futures/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-violeta-tech/50 transition-all">
                    <div className="text-4xl mb-4">{principio.icon}</div>
                    <h3 className="font-['Exo'] text-xl font-bold text-white mb-3">
                      {principio.title}
                    </h3>
                    <p className="text-slate-400">{principio.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compromiso */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-magenta-futures/20 to-cian-electrico/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-magenta-futures to-cian-electrico flex items-center justify-center text-2xl">
                  ✊
                </div>
                <div>
                  <h2 className="font-['Exo'] text-3xl font-bold text-white mb-4">
                    Nuestro Compromiso con la Región
                  </h2>
                  <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
                    <p>
                      Ser una referencia confiable que traduzca la complejidad tecnológica en insights claros y aplicables para profesionales, empresas y gobiernos de América Latina.
                    </p>
                    <p>
                      Fomentar una comunidad activa de movilidad y logística, donde compartir experiencias, aprendizajes y oportunidades sea parte del día a día.
                    </p>
                    <p>
                      Acompañar e impulsar iniciativas que aceleren una movilidad y una logística más eficientes, humanas y sostenibles en toda la región.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Llamado a la Acción */}
          <div className="text-center py-12">
            <h2 className="font-['Exo'] text-3xl font-bold text-white mb-6">
              Más que contenido, una plataforma de acción
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Moviliax es el punto de encuentro para quienes están construyendo el futuro de cómo se mueve y se conecta América Latina.
            </p>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Si trabajas en ciudades, transporte, logística o tecnología, aquí encontrarás contexto, ideas y una comunidad para llevar tus proyectos más lejos.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/connect"
                className="group relative px-8 py-4 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cian-electrico to-violeta-tech transition-transform group-hover:scale-105" />
                <span className="relative text-white font-semibold flex items-center gap-2">
                  Únete a la Comunidad
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              
              <Link 
                href="/sobre/equipo"
                className="px-8 py-4 rounded-xl border border-slate-700 text-white font-semibold hover:border-cian-electrico/50 hover:bg-slate-900/50 transition-all"
              >
                Conoce al Equipo
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Footer Quote */}
      <section className="relative py-20 px-6 border-t border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-['Exo'] text-slate-300 italic mb-6">
            "El futuro de la movilidad y la logística en América Latina se construye combinando tecnología, conocimiento compartido y una visión común de progreso sostenible para la región."
          </blockquote>
          <p className="text-cian-electrico font-semibold text-lg">
            — El equipo de Moviliax
          </p>
        </div>
      </section>

    </main>
  );
}
