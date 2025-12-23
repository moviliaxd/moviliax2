import Link from 'next/link';

export default function ColaboradoresPage() {
  const contributors = [
    {
      name: 'Dra. Sofía Mendoza',
      role: 'Columnista Senior',
      specialty: 'Movilidad Urbana Sostenible',
      articles: 24,
      organization: 'Universidad de Buenos Aires',
      topics: ['Smart Cities', 'Transporte Público', 'Políticas Públicas']
    },
    {
      name: 'Ing. Ricardo Vargas',
      role: 'Colaborador Técnico',
      specialty: 'Automatización Logística',
      articles: 18,
      organization: 'Mercado Libre',
      topics: ['Robotics', 'WMS', 'Last Mile']
    },
    {
      name: 'Lic. Valentina Cruz',
      role: 'Analista de Mercado',
      specialty: 'Electromovilidad',
      articles: 15,
      organization: 'Bloomberg NEF',
      topics: ['EVs', 'Infraestructura', 'Baterías']
    },
    {
      name: 'Dr. Miguel Ángel Santos',
      role: 'Investigador Invitado',
      specialty: 'IA Aplicada a Logística',
      articles: 12,
      organization: 'MIT',
      topics: ['Machine Learning', 'Optimización', 'Forecasting']
    },
    {
      name: 'Ing. Camila Rojas',
      role: 'Columnista',
      specialty: 'Micro-movilidad',
      articles: 20,
      organization: 'Lime',
      topics: ['Scooters', 'Regulación', 'Operaciones']
    },
    {
      name: 'Lic. Fernando López',
      role: 'Analista Financiero',
      specialty: 'Inversión en Logtech',
      articles: 10,
      organization: 'ALLVP',
      topics: ['VC', 'Startups', 'Valuación']
    }
  ];

  const mediaPartners = [
    { name: 'TechCrunch LATAM', type: 'Medio Digital', focus: 'Tecnología' },
    { name: 'Supply Chain Quarterly', type: 'Revista Especializada', focus: 'Logística' },
    { name: 'Smart City World', type: 'Plataforma Global', focus: 'Ciudades Inteligentes' },
    { name: 'América Economía', type: 'Medio de Negocios', focus: 'Economía LATAM' }
  ];

  const institutions = [
    { name: 'BID - Banco Interamericano de Desarrollo', type: 'Organización Multilateral' },
    { name: 'CEPAL', type: 'Comisión Económica para América Latina' },
    { name: 'CAF - Banco de Desarrollo de América Latina', type: 'Institución Financiera' },
    { name: 'MIT Megacity Logistics Lab', type: 'Centro de Investigación' }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-magenta-futures/10 border border-magenta-futures/20 mb-6">
            <span className="text-magenta-futures text-sm font-medium">Red de Expertos</span>
          </div>
          
          <h1 className="font-['Exo'] text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cian-electrico via-violeta-tech to-magenta-futures bg-clip-text text-transparent">
              Colaboradores
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Una red de expertos, académicos y profesionales que enriquecen Moviliax con su conocimiento y experiencia en el sector.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '50+', label: 'Colaboradores Activos', icon: '✍️' },
              { number: '15', label: 'Países Representados', icon: '🌎' },
              { number: '200+', label: 'Artículos Publicados', icon: '📚' },
              { number: '30+', label: 'Organizaciones Aliadas', icon: '🤝' }
            ].map((stat, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-magenta-futures/20 to-cian-electrico/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center hover:border-magenta-futures/50 transition-all">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="font-['Exo'] text-3xl font-bold bg-gradient-to-r from-magenta-futures to-cian-electrico bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Contributors */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Exo'] text-3xl font-bold text-white mb-12 text-center">
            Colaboradores Destacados
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contributors.map((contributor, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cian-electrico/20 to-violeta-tech/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-violeta-tech/50 transition-all h-full flex flex-col">
                  
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cian-electrico to-violeta-tech mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
                    {contributor.name.split(' ')[0][0]}{contributor.name.split(' ')[1][0]}
                  </div>
                  
                  <h3 className="font-['Exo'] text-lg font-bold text-white text-center mb-1">
                    {contributor.name}
                  </h3>
                  
                  <p className="text-cian-electrico text-sm font-medium text-center mb-2">
                    {contributor.role}
                  </p>
                  
                  <p className="text-slate-400 text-sm text-center mb-3">
                    {contributor.organization}
                  </p>
                  
                  <div className="bg-slate-950/50 rounded-lg p-3 mb-4">
                    <p className="text-white text-sm font-medium mb-1">Especialidad:</p>
                    <p className="text-slate-300 text-xs">{contributor.specialty}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {contributor.topics.map((topic, i) => (
                      <span key={i} className="px-2 py-1 bg-violeta-tech/10 border border-violeta-tech/30 rounded-full text-xs text-violeta-tech">
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400 text-xs">
                      {contributor.articles} artículos
                    </span>
                    <a href="#" className="text-cian-electrico hover:text-violeta-tech transition-colors text-xs font-medium">
                      Ver perfil →
                    </a>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Partners */}
      <section className="relative py-20 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Exo'] text-3xl font-bold text-white mb-4 text-center">
            Aliados de Medios
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Colaboramos con medios líderes para amplificar el impacto de nuestro contenido
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaPartners.map((partner, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-magenta-futures/20 to-cian-electrico/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-magenta-futures/50 transition-all text-center">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-magenta-futures to-cian-electrico mx-auto mb-4 flex items-center justify-center text-2xl">
                    📰
                  </div>
                  <h3 className="font-['Exo'] text-base font-bold text-white mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-magenta-futures mb-1">{partner.type}</p>
                  <p className="text-xs text-slate-400">{partner.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Partners */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Exo'] text-3xl font-bold text-white mb-4 text-center">
            Aliados Institucionales
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Trabajamos con organizaciones líderes en el desarrollo de América Latina
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {institutions.map((institution, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cian-electrico/20 to-violeta-tech/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cian-electrico/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cian-electrico to-violeta-tech flex-shrink-0 flex items-center justify-center text-2xl">
                      🏛️
                    </div>
                    <div className="flex-1">
                      <h3 className="font-['Exo'] text-lg font-bold text-white mb-2">
                        {institution.name}
                      </h3>
                      <p className="text-sm text-slate-400">{institution.type}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Contributor */}
      <section className="relative py-20 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cian-electrico/20 to-violeta-tech/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-12 text-center">
              <h2 className="font-['Exo'] text-3xl font-bold text-white mb-4">
                ¿Quieres Colaborar con Nosotros?
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Si eres experto en movilidad, logística o tecnología y quieres compartir tu conocimiento con la comunidad LATAM, nos encantaría conocerte.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: '✍️', title: 'Escribe Artículos', desc: 'Comparte tu expertise' },
                  { icon: '🎙️', title: 'Participa en Podcast', desc: 'Sé parte de Moviliax Talks' },
                  { icon: '📊', title: 'Colabora en Research', desc: 'Aporta a nuestros estudios' }
                ].map((option, idx) => (
                  <div key={idx} className="bg-slate-950/50 rounded-xl p-6 border border-slate-800">
                    <div className="text-4xl mb-3">{option.icon}</div>
                    <h3 className="font-['Exo'] text-lg font-bold text-white mb-2">{option.title}</h3>
                    <p className="text-sm text-slate-400">{option.desc}</p>
                  </div>
                ))}
              </div>
              
              <Link 
                href="/sobre/contacto"
                className="group relative inline-flex px-8 py-4 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cian-electrico to-violeta-tech transition-transform group-hover:scale-105" />
                <span className="relative text-white font-semibold flex items-center gap-2">
                  Únete como Colaborador
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}