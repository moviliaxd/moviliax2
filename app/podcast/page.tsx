import Link from 'next/link'

const episodes = [
  {
    number: 12,
    title: 'El Futuro de la Electromovilidad en México',
    guest: 'Carlos Slim III',
    role: 'Director de Energía, Grupo Carso',
    duration: '45 min',
    date: 'Dic 15, 2024',
    description: 'Conversamos sobre la estrategia de infraestructura de carga de Grupo Carso y el papel del sector privado en la transición eléctrica.',
    topics: ['Electromovilidad', 'Infraestructura', 'Inversión Privada']
  },
  {
    number: 11,
    title: 'Logística de Última Milla en Brasil',
    guest: 'Fabien Mendez',
    role: 'Co-founder & CEO, Loggi',
    duration: '52 min',
    date: 'Dic 1, 2024',
    description: 'La historia de cómo Loggi se convirtió en líder de last-mile delivery en Brasil y los desafíos de escalar en LATAM.',
    topics: ['Last Mile', 'E-commerce', 'Scale-up']
  },
  {
    number: 10,
    title: 'IA Aplicada a Supply Chain',
    guest: 'Dra. Ana Martínez',
    role: 'Head of AI, Mercado Libre',
    duration: '48 min',
    date: 'Nov 18, 2024',
    description: 'Cómo el machine learning está optimizando la predicción de demanda y rutas en el mayor e-commerce de la región.',
    topics: ['Inteligencia Artificial', 'Logística', 'Big Data']
  },
  {
    number: 9,
    title: 'Nearshoring: La Gran Oportunidad',
    guest: 'Roberto Velasco',
    role: 'Ex-Subsecretario de Relaciones Exteriores, México',
    duration: '55 min',
    date: 'Nov 5, 2024',
    description: 'Análisis político y económico del nearshoring y su impacto en la infraestructura logística mexicana.',
    topics: ['Nearshoring', 'Política Pública', 'Comercio Internacional']
  },
  {
    number: 8,
    title: 'Micro-movilidad y Regulación Urbana',
    guest: 'Claudia López',
    role: 'Ex-Alcaldesa de Bogotá',
    duration: '42 min',
    date: 'Oct 20, 2024',
    description: 'Los retos de regular scooters y bicicletas compartidas mientras se fomenta la movilidad sostenible.',
    topics: ['Micro-movilidad', 'Regulación', 'Smart Cities']
  },
  {
    number: 7,
    title: 'Blockchain en Logística: ¿Realidad o Hype?',
    guest: 'Pedro Silva',
    role: 'CTO, Maersk Latin America',
    duration: '38 min',
    date: 'Oct 5, 2024',
    description: 'Implementación real de blockchain para trazabilidad en shipping internacional y lecciones aprendidas.',
    topics: ['Blockchain', 'Trazabilidad', 'Freight']
  }
]

export default function PodcastPage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-32 pb-20">
        <div className="hero-grid" aria-hidden="true" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cian-electrico/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-violeta-tech/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-cian-electrico/10 border border-cian-electrico/30 rounded-full text-cian-electrico text-sm font-semibold mb-6">
            🎙️ Podcast Original
          </span>
          
          <h1 className="text-5xl md:text-6xl font-exo font-bold mb-6 leading-tight">
            MOVILIA<span className="text-gradient">X</span> TALKS
          </h1>
          
          <p className="text-xl text-gris-metalico mb-8 max-w-2xl mx-auto">
            Conversaciones con los visionarios que están construyendo el futuro de la movilidad en América Latina.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://open.spotify.com/show/moviliax" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>🎵</span>
              Spotify
            </a>
            <a 
              href="https://podcasts.apple.com/podcast/moviliax" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <span>🎧</span>
              Apple Podcasts
            </a>
            <a 
              href="https://youtube.com/@moviliax" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <span>▶️</span>
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4 bg-gradient-to-r from-cian-electrico/5 to-violeta-tech/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">12</div>
              <div className="text-gris-metalico text-sm">Episodios</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">50K+</div>
              <div className="text-gris-metalico text-sm">Escuchas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">45min</div>
              <div className="text-gris-metalico text-sm">Promedio</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-exo font-bold text-cian-electrico mb-2">Quincenal</div>
              <div className="text-gris-metalico text-sm">Frecuencia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episode Highlight */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="content-card bg-gradient-to-br from-cian-electrico/5 to-violeta-tech/5 border-cian-electrico/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded-full border border-red-500/30 animate-pulse">
                🔴 NUEVO
              </span>
              <span className="text-sm text-gris-metalico">Episodio #{episodes[0].number}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              {episodes[0].title}
            </h2>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cian-electrico/20 rounded-full flex items-center justify-center text-2xl">
                🎙️
              </div>
              <div>
                <p className="font-bold text-lg">{episodes[0].guest}</p>
                <p className="text-sm text-gris-metalico">{episodes[0].role}</p>
              </div>
            </div>

            <p className="text-gris-metalico mb-6 leading-relaxed">
              {episodes[0].description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {episodes[0].topics.map((topic, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gris-oscuro/30 text-gris-metalico text-xs rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <button className="btn-primary">
                Escuchar Ahora ▶️
              </button>
              <span className="text-sm text-gris-metalico">⏱️ {episodes[0].duration}</span>
              <span className="text-sm text-gris-metalico">📅 {episodes[0].date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* All Episodes */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              Todos los Episodios
            </h2>
            <p className="text-gris-metalico">
              Conversaciones que están transformando la industria
            </p>
          </div>

          <div className="space-y-6">
            {episodes.slice(1).map((episode, index) => (
              <article key={index} className="content-card group hover:border-cian-electrico/50">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-24 flex-shrink-0">
                    <div className="w-24 h-24 bg-cian-electrico/20 rounded-xl flex items-center justify-center">
                      <span className="text-3xl font-exo font-bold text-cian-electrico">
                        #{episode.number}
                      </span>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-cian-electrico transition-colors">
                      {episode.title}
                    </h3>
                    
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-semibold">{episode.guest}</span>
                      <span className="text-sm text-gris-metalico">•</span>
                      <span className="text-sm text-gris-metalico">{episode.role}</span>
                    </div>

                    <p className="text-gris-metalico mb-4">
                      {episode.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {episode.topics.map((topic, topicIndex) => (
                        <span 
                          key={topicIndex}
                          className="px-3 py-1 bg-gris-oscuro/30 text-gris-metalico text-xs rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 items-center text-sm text-gris-metalico">
                      <button className="text-cian-electrico hover:underline font-semibold">
                        Escuchar ▶️
                      </button>
                      <span>⏱️ {episode.duration}</span>
                      <span>📅 {episode.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Host Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cian-electrico/5 to-violeta-tech/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              Sobre el Podcast
            </h2>
          </div>

          <div className="content-card max-w-3xl mx-auto text-center">
            <div className="w-32 h-32 bg-cian-electrico/20 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl">
              🎙️
            </div>
            <h3 className="text-2xl font-bold mb-3">Moviliax Talks</h3>
            <p className="text-gris-metalico leading-relaxed mb-6">
              Cada dos semanas, conversamos con líderes, emprendedores y visionarios que están construyendo 
              el futuro de la movilidad en América Latina. Sin guiones, sin edición excesiva, solo conversaciones 
              honestas sobre los desafíos reales de transformar la forma en que nos movemos.
            </p>
            <p className="text-sm text-gris-metalico mb-6">
              Conducido por el equipo editorial de Moviliax
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://open.spotify.com/show/moviliax" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-cian-electrico hover:underline"
              >
                Seguir en Spotify →
              </a>
              <a 
                href="https://podcasts.apple.com/podcast/moviliax" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-cian-electrico hover:underline"
              >
                Seguir en Apple Podcasts →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Suggestion CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-cian-electrico/10 to-violeta-tech/10 border border-cian-electrico/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4">
              ¿Conoces a Alguien que Debería Estar en el Show?
            </h2>
            <p className="text-gris-metalico text-lg mb-8 max-w-2xl mx-auto">
              Estamos siempre buscando historias inspiradoras. Si conoces a un líder, emprendedor o innovador 
              que está transformando la movilidad en LATAM, cuéntanos.
            </p>
            <Link 
              href="/contacto?subject=sugerir-invitado-podcast"
              className="btn-primary inline-flex items-center gap-2"
            >
              Sugerir un Invitado
              <span>🎙️</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}