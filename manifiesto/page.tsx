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
            <span className="text-cian-electrico text-sm font-medium">Nuestro Propósito</span>
          </div>
          
          <h1 className="font-['Exo'] text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cian-electrico via-violeta-tech to-magenta-futures bg-clip-text text-transparent">
              El Manifiesto
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Moviliax nace de la convicción de que América Latina está en el centro de la revolución logística y de movilidad del siglo XXI.
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
                    Creemos en una región donde la tecnología no es solo un catalizador económico, sino una herramienta de inclusión, sostenibilidad y progreso compartido. Donde cada kilómetro recorrido, cada paquete entregado y cada dato analizado contribuye a construir ciudades más humanas, eficientes y verdes.
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
                  title: 'LATAM First',
                  description: 'Ponemos a América Latina en el centro. Nuestro contenido, análisis y comunidad están pensados para resolver los desafíos y aprovechar las oportunidades de nuestra región.'
                },
                {
                  icon: '🎓',
                  title: 'Conocimiento Accesible',
                  description: 'Democratizamos el lenguaje técnico. Creemos que la innovación florece cuando el conocimiento es accesible para todos, desde emprendedores hasta tomadores de decisión.'
                },
                {
                  icon: '🤝',
                  title: 'Comunidad Colaborativa',
                  description: 'Construimos puentes, no silos. Conectamos a profesionales, empresas y gobiernos para crear un ecosistema colaborativo que impulse el progreso colectivo.'
                },
                {
                  icon: '🌱',
                  title: 'Sostenibilidad Integral',
                  description: 'No hay futuro sin responsabilidad. Promovemos soluciones que equilibren eficiencia operativa con impacto ambiental y social positivo.'
                },
                {
                  icon: '🚀',
                  title: 'Innovación Pragmática',
                  description: 'Celebramos la tecnología que resuelve problemas reales. Nos enfocamos en soluciones que generan valor tangible y transforman industrias.'
                },
                {
                  icon: '📊',
                  title: 'Transparencia y Rigor',
                  description: 'Basamos nuestro contenido en datos, análisis profundo y fuentes verificables. La credibilidad es nuestro activo más valioso.'
                }
              ].map((principio, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-violeta-tech/20 to-magenta-futures/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-violeta-tech/50 transition-all">
                    <div className="text-4xl mb-4">{principio.icon}</div>
                    <h3 className="font-['Exo'] text-xl font-bold text-white mb-3">{principio.title}</h3>
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
                  <h2 className="font-['Exo'] text-3xl font-bold text-white mb-4">Nuestro Compromiso</h2>
                  <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
                    <p>
                      <strong className="text-white">Seremos la voz autorizada</strong> que traduce la complejidad tecnológica en insights accionables para profesionales, empresarios y gobiernos de LATAM.
                    </p>
                    <p>
                      <strong className="text-white">Construiremos la comunidad más activa</strong> de movilidad y logística de la región, donde el intercambio de conocimiento acelere la transformación del sector.
                    </p>
                    <p>
                      <strong className="text-white">Impulsaremos el desarrollo sostenible</strong>, poniendo el foco en soluciones que mejoren la calidad de vida sin comprometer el futuro de las próximas generaciones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Llamado a la Acción */}
          <div className="text-center py-12">
            <h2 className="font-['Exo'] text-3xl font-bold text-white mb-6">
              Únete a la Revolución
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Moviliax es más que una plataforma de contenido. Es un movimiento que está redefiniendo cómo LATAM se mueve, conecta y crece.
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
            "El futuro de la movilidad y la logística en América Latina no se construye solo con tecnología, sino con visión compartida, colaboración y un compromiso inquebrantable con el progreso sostenible."
          </blockquote>
          <p className="text-cian-electrico font-semibold text-lg">
            — El equipo de Moviliax
          </p>
        </div>
      </section>

    </main>
  );
}