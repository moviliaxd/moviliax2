'use client'

import { useState } from 'react'
import Link from 'next/link'

// Metadata se debe definir en un layout.tsx separado o en un Server Component
// Para este caso, se omite el metadata del Client Component

export default function PodcastPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [email, setEmail] = useState('')

  const episodes = [
    { number: 12, title: 'El Boom de los EVs en México', guest: 'Ana Torres - Directora Tesla LATAM', category: 'evs', duration: '45 min', icon: '🚗', description: 'Exploramos el explosivo crecimiento del mercado de vehículos eléctricos en México y la visión de Tesla para la región.' },
    { number: 11, title: 'Smart Cities: El Futuro Urbano', guest: 'Carlos Mendoza - Director Smart City Guadalajara', category: 'smart-cities', duration: '38 min', icon: '🏙️', description: 'Descubre cómo Guadalajara se está transformando en una ciudad inteligente y las tecnologías que están revolucionando la movilidad urbana.' },
    { number: 10, title: 'Vehículos Autónomos en LATAM', guest: 'Dr. Roberto Silva - CTO Aurora Innovation', category: 'autonomos', duration: '52 min', icon: '🤖', description: 'Una conversación profunda sobre el estado de la tecnología autónoma y su implementación en América Latina.' },
    { number: 9, title: 'Red de Carga: Construyendo el Futuro', guest: 'Laura Jiménez - CEO Electrify América Latina', category: 'infraestructura', duration: '42 min', icon: '⚡', description: 'El desafío de construir la infraestructura de carga necesaria para la revolución eléctrica en la región.' },
    { number: 8, title: 'Baterías: El Corazón de los EVs', guest: 'Dr. Miguel Ángel Vargas - Científico UNAM', category: 'evs', duration: '48 min', icon: '🔋', description: 'Una inmersión técnica en la tecnología de baterías y las innovaciones que están transformando los vehículos eléctricos.' },
    { number: 7, title: 'Carreteras Inteligentes', guest: 'Ing. Fernando Ruiz - Director SCT México', category: 'infraestructura', duration: '40 min', icon: '🛣️', description: 'Cómo la tecnología está transformando nuestras carreteras para prepararse para el futuro de la movilidad.' },
    { number: 6, title: 'Micromovilidad: Bicis y Scooters', guest: 'Andrés Morales - CEO Lime Latinoamérica', category: 'smart-cities', duration: '35 min', icon: '🚴', description: 'El boom de la micromovilidad en ciudades latinoamericanas y cómo está cambiando la forma en que nos desplazamos.' },
    { number: 5, title: 'Last Mile: El Desafío Final', guest: 'Patricia Rojas - VP Operaciones Amazon México', category: 'logistica', duration: '50 min', icon: '🚚', description: 'Los retos y soluciones innovadoras para la entrega de última milla en el e-commerce mexicano.' },
    { number: 4, title: 'Robotaxis en São Paulo', guest: 'Bruno Santos - Director Uber ATG Brasil', category: 'autonomos', duration: '44 min', icon: '🚕', description: 'El proyecto piloto de taxis autónomos en São Paulo y las lecciones aprendidas para otras ciudades de LATAM.' }
  ]

  const filteredEpisodes = activeFilter === 'all' 
    ? episodes 
    : episodes.filter(ep => ep.category === activeFilter)

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      alert(`¡Gracias por suscribirte con ${email}!`)
      setEmail('')
    } else {
      alert('Por favor ingresa un email válido')
    }
  }

  return (
    <div className="min-h-screen bg-azul-profundo text-blanco">
      {/* Hero */}
      <section className="relative px-6 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-azul-profundo/50 to-azul-profundo"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block bg-cian-electrico/10 border border-cian-electrico px-6 py-2 rounded-full text-cian-electrico text-sm font-semibold mb-6 uppercase tracking-wider">
            🎙️ El Podcast de Movilidad #1 en LATAM
          </div>
          
          <h1 className="font-exo text-6xl md:text-7xl font-black mb-6">
            MOVILIA<span className="text-cian-electrico">X</span> TALKS
          </h1>
          
          <p className="text-xl text-gris-metalico mb-12 leading-relaxed">
            Conversaciones profundas con los visionarios que están construyendo el futuro 
            de la movilidad. CEOs, innovadores y expertos comparten sus insights más valiosos.
          </p>

          <div className="grid grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-4xl font-black text-cian-electrico font-exo">50K+</div>
              <div className="text-sm text-gris-metalico">Oyentes Mensuales</div>
            </div>
            <div>
              <div className="text-4xl font-black text-cian-electrico font-exo">25+</div>
              <div className="text-sm text-gris-metalico">Episodios Publicados</div>
            </div>
            <div>
              <div className="text-4xl font-black text-cian-electrico font-exo">4.9★</div>
              <div className="text-sm text-gris-metalico">Rating Promedio</div>
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 bg-gradient-to-r from-cian-electrico to-blue-400 text-azul-profundo font-bold rounded-full hover:-translate-y-1 hover:shadow-2xl hover:shadow-cian-electrico/40 transition-all duration-300 flex items-center gap-2">
              <span>🎧</span>
              Escuchar Episodios
            </button>
            <button className="px-8 py-4 bg-white/10 border border-cian-electrico/30 text-blanco font-bold rounded-full hover:bg-white/20 hover:border-cian-electrico transition-all duration-300 flex items-center gap-2">
              <span>🔔</span>
              Suscribirse Gratis
            </button>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-center text-gris-metalico mb-8 text-lg">Disponible en tus plataformas favoritas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '🎵', name: 'Spotify' },
            { icon: '🎧', name: 'Apple Podcasts' },
            { icon: '📺', name: 'YouTube' },
            { icon: '📊', name: 'Google Podcasts' }
          ].map((platform, index) => (
            <a 
              key={index}
              href="#" 
              className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-cian-electrico/20 rounded-2xl hover:bg-white/10 hover:border-cian-electrico hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-4xl">{platform.icon}</span>
              <span className="font-semibold">{platform.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Episode */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-cian-electrico/10 to-violeta-tech/10 rounded-3xl p-8 md:p-12 border border-cian-electrico/30 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-cian-electrico/20 text-cian-electrico px-4 py-1 rounded-full text-sm font-bold mb-4">
              ⭐ Episodio Destacado
            </span>
            <h2 className="font-exo text-4xl font-bold mb-3">El Boom de los EVs en México</h2>
            <p className="text-cian-electrico font-semibold mb-4">Con Ana Torres, Directora Tesla LATAM</p>
            <p className="text-gris-metalico leading-relaxed mb-6">
              En este episodio especial, exploramos el explosivo crecimiento del mercado de 
              vehículos eléctricos en México. Ana Torres comparte datos exclusivos sobre 
              las tendencias de adopción, desafíos de infraestructura, y la visión de Tesla 
              para convertir a México en el hub EV de América Latina.
            </p>
            
            <div className="flex gap-6 mb-8 text-sm text-gris-metalico">
              <span className="flex items-center gap-2">📅 25 Oct 2025</span>
              <span className="flex items-center gap-2">⏱️ 45 minutos</span>
              <span className="flex items-center gap-2">📖 EVs</span>
            </div>

            <div className="flex gap-4 flex-wrap">
              <button className="px-6 py-3 bg-gradient-to-r from-cian-electrico to-blue-400 text-azul-profundo font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">
                <span>▶️</span>
                Escuchar Ahora
              </button>
              <button className="px-6 py-3 bg-white/10 border border-cian-electrico/30 text-blanco font-bold rounded-full hover:bg-white/20 transition-all flex items-center gap-2">
                <span>📝</span>
                Ver Transcripción
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center bg-azul-profundo/50 rounded-2xl p-12 border border-cian-electrico/20">
            <div className="text-8xl mb-6">🎙️</div>
            <div className="w-20 h-20 bg-gradient-to-br from-cian-electrico to-violeta-tech rounded-full flex items-center justify-center text-3xl cursor-pointer hover:scale-110 transition-transform">
              ▶️
            </div>
            <p className="text-gris-metalico text-sm mt-4">Haz clic para reproducir</p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="font-exo text-3xl font-bold mb-8">Todos los Episodios</h3>
        
        <div className="flex flex-wrap gap-3 mb-12">
          {[
            { id: 'all', label: 'Todos' },
            { id: 'evs', label: 'EVs' },
            { id: 'smart-cities', label: 'Smart Cities' },
            { id: 'autonomos', label: 'Autónomos' },
            { id: 'logistica', label: 'Logística' },
            { id: 'infraestructura', label: 'Infraestructura' }
          ].map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeFilter === filter.id
                  ? 'bg-cian-electrico text-azul-profundo'
                  : 'bg-white/10 text-gris-metalico hover:bg-white/20 hover:text-blanco'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Episodes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEpisodes.map((episode) => (
            <article key={episode.number} className="bg-white/5 border border-cian-electrico/20 rounded-2xl overflow-hidden hover:border-cian-electrico hover:-translate-y-2 hover:shadow-xl hover:shadow-cian-electrico/20 transition-all duration-300">
              <div className="relative bg-gradient-to-br from-cian-electrico/20 to-violeta-tech/20 p-8 text-center">
                <span className="text-6xl">{episode.icon}</span>
                <span className="absolute top-4 left-4 bg-azul-profundo px-3 py-1 rounded-full text-sm font-bold">
                  EP. {episode.number}
                </span>
                <span className="absolute top-4 right-4 bg-azul-profundo px-3 py-1 rounded-full text-sm">
                  {episode.duration}
                </span>
              </div>
              
              <div className="p-6">
                <span className="inline-block text-cian-electrico text-xs font-semibold uppercase tracking-wider mb-2">
                  {episode.category.replace('-', ' ')}
                </span>
                <h3 className="font-exo text-xl font-bold mb-2">{episode.title}</h3>
                <p className="text-sm text-gris-metalico mb-3 flex items-center gap-2">
                  <span>🎤</span>
                  {episode.guest}
                </p>
                <p className="text-gris-metalico text-sm mb-6 leading-relaxed">
                  {episode.description}
                </p>
                
                <div className="flex gap-3">
                  <button className="flex-1 py-2 bg-gradient-to-r from-cian-electrico to-blue-400 text-azul-profundo font-bold rounded-lg hover:scale-105 transition-transform text-sm flex items-center justify-center gap-2">
                    <span>▶️</span>
                    Escuchar
                  </button>
                  <button className="px-4 py-2 bg-white/10 border border-cian-electrico/30 text-blanco font-bold rounded-lg hover:bg-white/20 transition-all text-sm flex items-center gap-2">
                    <span>📝</span>
                    Notas
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-cian-electrico/10 to-violeta-tech/10 rounded-3xl p-12 text-center border border-cian-electrico/30">
          <div className="text-6xl mb-6">🔔</div>
          <h2 className="font-exo text-4xl font-bold mb-4">
            No Te Pierdas Ningún Episodio
          </h2>
          <p className="text-gris-metalico mb-8 text-lg leading-relaxed">
            Suscríbete a nuestra newsletter RADARX y recibe cada domingo los mejores 
            insights sobre movilidad, además de acceso anticipado a nuevos episodios.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 px-6 py-4 bg-azul-profundo border border-cian-electrico/30 rounded-full text-blanco placeholder-gris-metalico focus:outline-none focus:border-cian-electrico"
            />
            <button 
              onClick={handleSubscribe}
              className="px-8 py-4 bg-gradient-to-r from-cian-electrico to-blue-400 text-azul-profundo font-bold rounded-full hover:scale-105 transition-transform whitespace-nowrap"
            >
              Suscribirse Gratis
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 border-t border-cian-electrico/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div>
              <div className="font-exo text-2xl font-black mb-4">
                MOVILIA<span className="text-cian-electrico">X</span>
              </div>
              <p className="text-gris-metalico text-sm leading-relaxed mb-4">
                La plataforma líder de contenido sobre movilidad, vehículos eléctricos 
                y ciudades inteligentes en América Latina.
              </p>
              <div className="flex gap-3">
                {['🎵', '📺', '🐦', '📸', '💼'].map((icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cian-electrico/20 hover:scale-110 transition-all"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Podcast</h4>
              <ul className="space-y-2 text-sm text-gris-metalico">
                <li><a href="#" className="hover:text-cian-electrico transition-colors">Todos los Episodios</a></li>
                <li><a href="#" className="hover:text-cian-electrico transition-colors">Invitados</a></li>
                <li><a href="#" className="hover:text-cian-electrico transition-colors">Temas</a></li>
                <li><a href="#" className="hover:text-cian-electrico transition-colors">Ser Invitado</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contenido</h4>
              <ul className="space-y-2 text-sm text-gris-metalico">
                <li><Link href="/" className="hover:text-cian-electrico transition-colors">Home</Link></li>
                <li><Link href="/contenido" className="hover:text-cian-electrico transition-colors">Artículos</Link></li>
                <li><a href="#" className="hover:text-cian-electrico transition-colors">Newsletter RADARX</a></li>
                <li><a href="#" className="hover:text-cian-electrico transition-colors">Reportes</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gris-metalico">
                <li><Link href="/acerca" className="hover:text-cian-electrico transition-colors">Sobre Nosotros</Link></li>
                <li><a href="#" className="hover:text-cian-electrico transition-colors">Equipo</a></li>
                <li><Link href="/contacto" className="hover:text-cian-electrico transition-colors">Contacto</Link></li>
                <li><Link href="/privacidad" className="hover:text-cian-electrico transition-colors">Privacidad</Link></li>
              </ul>
            </div>
          </div>

          <div className="text-center text-gris-metalico text-sm pt-8 border-t border-white/10">
            <p>&copy; 2025 MOVILIAX. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}