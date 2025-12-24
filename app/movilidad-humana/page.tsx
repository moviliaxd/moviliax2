import Link from 'next/link';

export default function MovilidadHumanaPage() {
  const subcategories = [
    {
      slug: 'electromovilidad',
      icon: '⚡',
      title: 'Electromovilidad',
      description: 'La transición hacia vehículos eléctricos está transformando el transporte en LATAM.',
      stats: [
        { value: '2.3M', label: 'EVs en circulación LATAM' },
        { value: '45%', label: 'Crecimiento anual' }
      ],
      topics: ['Vehículos Eléctricos', 'Infraestructura de Carga', 'Transporte Público', 'Baterías'],
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      slug: 'micro-movilidad',
      icon: '🛴',
      title: 'Micro-movilidad',
      description: 'Scooters, bicicletas y soluciones de última milla para ciudades más eficientes.',
      stats: [
        { value: '150K', label: 'Vehículos desplegados' },
        { value: '35', label: 'Ciudades activas' }
      ],
      topics: ['Scooters Eléctricos', 'Bike Sharing', 'Regulación Urbana', 'Operaciones'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      slug: 'maas',
      icon: '📱',
      title: 'MaaS',
      description: 'Mobility as a Service: integrando múltiples modos de transporte en una sola plataforma.',
      stats: [
        { value: '25M', label: 'Usuarios activos' },
        { value: '12', label: 'Plataformas líderes' }
      ],
      topics: ['Apps de Movilidad', 'Integración Multimodal', 'Pagos Digitales', 'UX/UI'],
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  const keyTrends = [
    {
      icon: '🌱',
      title: 'Descarbonización Acelerada',
      description: 'Las ciudades LATAM están adoptando políticas agresivas para reducir emisiones del transporte.',
      impact: 'Alto'
    },
    {
      icon: '🏙️',
      title: 'Urbanización Inteligente',
      description: 'El 82% de la población LATAM vivirá en ciudades para 2030, demandando soluciones de movilidad escalables.',
      impact: 'Crítico'
    },
    {
      icon: '💰',
      title: 'Inversión en Infraestructura',
      description: 'USD $45B proyectados en infraestructura de movilidad eléctrica hasta 2030.',
      impact: 'Alto'
    },
    {
      icon: '📊',
      title: 'Data-Driven Mobility',
      description: 'El uso de Big Data e IA para optimizar rutas, reducir tiempos y mejorar la experiencia del usuario.',
      impact: 'Medio-Alto'
    }
  ];

  const featuredArticles = [
    {
      category: 'Electromovilidad',
      title: 'México Supera las 10,000 Estaciones de Carga Públicas',
      excerpt: 'El país alcanza un hito histórico en infraestructura de electromovilidad.',
      date: '20 Dic 2024',
      readTime: '5 min',
      image: '🔌',
      tag: 'Infraestructura'
    },
    {
      category: 'MaaS',
      title: 'Bogotá Lanza App Integrada de Transporte Multimodal',
      excerpt: 'La capital colombiana integra metro, TransMilenio y micro-movilidad en una sola plataforma.',
      date: '18 Dic 2024',
      readTime: '4 min',
      image: '🚇',
      tag: 'Smart Cities'
    },
    {
      category: 'Micro-movilidad',
      title: 'Regulación de Scooters: Lecciones de Buenos Aires y São Paulo',
      excerpt: 'Análisis comparativo de marcos regulatorios exitosos en LATAM.',
      date: '15 Dic 2024',
      readTime: '6 min',
      image: '📜',
      tag: 'Regulación'
    },
    {
      category: 'Electromovilidad',
      title: 'BYD y Volvo Expanden Producción de Buses Eléctricos en la Región',
      excerpt: 'Inversión de USD $800M en plantas de manufactura en México, Brasil y Chile.',
      date: '12 Dic 2024',
      readTime: '5 min',
      image: '🚌',
      tag: 'Industria'
    }
  ];

  const leaders = [
    { name: 'Cabify', type: 'Ride-hailing', country: '🇪🇸→LATAM' },
    { name: 'Grow Mobility', type: 'Micro-movilidad', country: '🇲🇽' },
    { name: 'Yellow', type: 'Micro-movilidad', country: '🇧🇷' },
    { name: 'Beat', type: 'MaaS Platform', country: '🇬🇷→LATAM' },
    { name: 'Lime', type: 'Scooters', country: '🇺🇸→LATAM' },
    { name: 'Moovit', type: 'Transit App', country: '🇮🇱→LATAM' }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link 
              href="/"
              className="text-slate-400 hover:text-cian-electrico transition-colors text-sm"
            >
              Inicio
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-cian-electrico text-sm font-medium">Movilidad Humana</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cian-electrico/10 border border-cian-electrico/20 mb-6">
                <span className="text-cian-electrico text-sm font-medium">Pilar 1</span>
              </div>
              
              <h1 className="font-['Exo'] text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cian-electrico via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Movilidad Humana
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                El futuro del transporte de personas en América Latina: desde vehículos eléctricos hasta plataformas integradas que están redefiniendo cómo nos movemos en las ciudades.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#categorias"
                  className="group relative px-6 py-3 rounded-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cian-electrico to-blue-500 transition-transform group-hover:scale-105" />
                  <span className="relative text-white font-semibold flex items-center gap-2">
                    Explorar Categorías
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
                
                <Link 
                  href="#tendencias"
                  className="px-6 py-3 rounded-xl border border-slate-700 text-white font-semibold hover:border-cian-electrico/50 hover:bg-slate-900/50 transition-all"
                >
                  Ver Tendencias
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '35%', label: 'Reducción de emisiones proyectada 2030' },
                { number: '50M+', label: 'Usuarios de apps de movilidad' },
                { number: 'USD $18B', label: 'Inversión en electromovilidad' },
                { number: '120+', label: 'Ciudades con micro-movilidad' }
              ].map((stat, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cian-electrico/20 to-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cian-electrico/50 transition-all">
                    <div className="font-['Exo'] text-3xl font-bold bg-gradient-to-r from-cian-electrico to-blue-400 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories */}
      <section id="categorias" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Exo'] text-4xl font-bold text-white mb-4">
              Explora las Categorías
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Tres pilares fundamentales que están transformando cómo nos movemos en las ciudades latinoamericanas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {subcategories.map((subcat, idx) => (
              <Link
                key={idx}
                href={`/movilidad-humana/${subcat.slug}`}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${subcat.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all`} />
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cian-electrico/50 transition-all h-full flex flex-col">
                  
                  <div className="text-6xl mb-6">{subcat.icon}</div>
                  
                  <h3 className="font-['Exo'] text-2xl font-bold text-white mb-3 group-hover:text-cian-electrico transition-colors">
                    {subcat.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 flex-grow">
                    {subcat.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-slate-800">
                    {subcat.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="font-['Exo'] text-2xl font-bold text-cian-electrico mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {subcat.topics.map((topic, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-950/50 border border-slate-700 rounded-full text-xs text-slate-400">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-cian-electrico font-medium group-hover:gap-3 transition-all">
                    Explorar {subcat.title}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Trends */}
      <section id="tendencias" className="relative py-20 px-6 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Exo'] text-4xl font-bold text-white mb-4">
              Tendencias Clave 2025
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Los movimientos que están definiendo el futuro de la movilidad humana en América Latina.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {keyTrends.map((trend, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cian-electrico/20 to-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-cian-electrico/50 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">{trend.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-['Exo'] text-xl font-bold text-white">
                          {trend.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          trend.impact === 'Crítico' ? 'bg-red-500/10 text-red-400 border border-red-500/30' :
                          trend.impact === 'Alto' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/30' :
                          'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          {trend.impact}
                        </span>
                      </div>
                      <p className="text-slate-400">{trend.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-['Exo'] text-4xl font-bold text-white mb-2">
                Artículos Destacados
              </h2>
              <p className="text-slate-400">
                Las últimas novedades en movilidad humana
              </p>
            </div>
            <Link 
              href="/articulos?categoria=movilidad-humana"
              className="text-cian-electrico hover:text-blue-400 font-medium transition-colors flex items-center gap-2"
            >
              Ver todos
              <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArticles.map((article, idx) => (
              <article key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cian-electrico/20 to-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cian-electrico/50 transition-all h-full flex flex-col">
                  
                  <div className="text-5xl mb-4">{article.image}</div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-cian-electrico/10 border border-cian-electrico/30 rounded text-xs text-cian-electrico">
                      {article.category}
                    </span>
                    <span className="px-2 py-1 bg-slate-950/50 rounded text-xs text-slate-500">
                      {article.tag}
                    </span>
                  </div>

                  <h3 className="font-['Exo'] text-lg font-bold text-white mb-3 group-hover:text-cian-electrico transition-colors flex-grow">
                    {article.title}
                  </h3>

                  <p className="text-sm text-slate-400 mb-4">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800">
                    <span>{article.date}</span>
                    <span>{article.readTime} lectura</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Key Players */}
      <section className="relative py-20 px-6 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Exo'] text-3xl font-bold text-white mb-4">
              Empresas Líderes en el Sector
            </h2>
            <p className="text-slate-400">
              Compañías que están marcando el rumbo de la movilidad humana en LATAM
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {leaders.map((leader, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cian-electrico/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-lg p-4 hover:border-cian-electrico/50 transition-all text-center">
                  <div className="font-['Exo'] text-lg font-bold text-white mb-1">
                    {leader.name}
                  </div>
                  <div className="text-xs text-slate-400 mb-2">{leader.type}</div>
                  <div className="text-xl">{leader.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cian-electrico/30 to-blue-500/30 rounded-2xl blur-2xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-12 text-center">
              <h2 className="font-['Exo'] text-3xl font-bold text-white mb-4">
                Recibe las Últimas Novedades
              </h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Suscríbete a <strong className="text-cian-electrico">RadarX Newsletter</strong> y recibe cada domingo el resumen de movilidad humana que necesitas para empezar la semana informado.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-6 py-3 bg-slate-950/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cian-electrico focus:outline-none focus:ring-2 focus:ring-cian-electrico/20"
                />
                <button className="group relative px-6 py-3 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cian-electrico to-blue-500 transition-transform group-hover:scale-105" />
                  <span className="relative text-white font-semibold">
                    Suscribirme
                  </span>
                </button>
              </form>
              
              <p className="text-xs text-slate-500 mt-4">
                Sin spam. Cancela cuando quieras.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}