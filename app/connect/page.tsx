import Link from 'next/link'
import type { Metadata } from 'next'
import ConnectForm from '@/components/ConnectForm'

export const metadata: Metadata = {
  title: 'MOVILIAX Connect - Red Profesional de Movilidad',
  description:
    'Únete a la red profesionales del sector movilidad y logística en América Latina. Networking, oportunidades y colaboración.',
}

export default function ConnectPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-6">
            <p className="text-[#00E0FF] text-sm font-semibold tracking-wider uppercase">
              MOVILIAX CONNECT
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            La Red de{' '}
            <span className="text-gradient">Logística y Movilidad en LATAM</span>
          </h1>

          <p className="text-xl text-[#9CA3AF] mb-12 max-w-3xl mx-auto">
            Únete a profesionales, startups, inversionistas y
            líderes que están transformando la movilidad en América Latina.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#join"
              className="px-8 py-4 bg-[#00E0FF] text-[#0A0F2C] font-bold rounded-lg hover:opacity-90 transition-opacity text-lg"
            >
              Unirse Gratis →
            </Link>

            <Link
              href="#beneficios"
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors text-lg"
            >
              Conocer Beneficios
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 mb-20 bg-gradient-to-br from-[#0A0F2C] to-[#0D0D0D] py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#00E0FF] mb-2">
                +5,000
              </p>
              <p className="text-[#9CA3AF]">Profesionales</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#00E0FF] mb-2">
                12
              </p>
              <p className="text-[#9CA3AF]">Países LATAM</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#00E0FF] mb-2">
                200+
              </p>
              <p className="text-[#9CA3AF]">Empresas</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#00E0FF] mb-2">
                50+
              </p>
              <p className="text-[#9CA3AF]">Eventos/Año</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quién está en MOVILIAX Connect */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              ¿Quién está en MOVILIAX Connect?
            </h2>
            <p className="text-[#9CA3AF] text-lg">
              Profesionales de los sectores de movilidad y logística
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚗',
                title: 'Ejecutivos',
                description:
                  'CTOs, CEOs, VPs de empresas de movilidad, logística y transporte',
                examples: 'Uber, Rappi, 99, Cabify, Beat',
              },
              {
                icon: '🚀',
                title: 'Startups',
                description:
                  'Fundadores y equipos de startups de movilidad en etapa temprana',
                examples: 'Electromaps, Cornershop, Jetty',
              },
              {
                icon: '💼',
                title: 'Inversionistas',
                description:
                  'VCs, Angels y Corporate Venture Capital enfocados en movilidad',
                examples: 'ALLVP, Kaszek, Monashees',
              },
              {
                icon: '🏛️',
                title: 'Sector Público',
                description:
                  'Funcionarios de gobierno, movilidad urbana y transporte',
                examples: 'Secretarías de Movilidad',
              },
              {
                icon: '🏭',
                title: 'Corporativos',
                description:
                  'OEMs, Tier 1, empresas de infraestructura y energía',
                examples: 'BMW, Stellantis, ABB',
              },
              {
                icon: '🎓',
                title: 'Academia',
                description:
                  'Investigadores, profesores y estudiantes de posgrado',
                examples: 'ITAM, Tec de Monterrey, USP',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0A0F2C] to-[#0D0D0D] rounded-xl p-6 border border-[#00E0FF]/20 hover:border-[#00E0FF]/50 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-[#9CA3AF] text-sm mb-3">
                  {item.description}
                </p>
                <p className="text-xs text-[#00E0FF]">Ej: {item.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Beneficios de Ser Parte
            </h2>
            <p className="text-[#9CA3AF] text-lg">
              Conecta, aprende y crece con la comunidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '🤝',
                title: 'Networking Inteligente',
                description:
                  'Matchmaking basado en intereses, industria y objetivos. Conecta con las personas correctas.',
              },
              {
                icon: '💼',
                title: 'Oportunidades Laborales',
                description:
                  'Job board exclusivo con posiciones en startups y corporativos de movilidad en LATAM.',
              },
              {
                icon: '📊',
                title: 'Datos Exclusivos',
                description:
                  'Acceso a reportes, análisis y datos del mercado de movilidad que no encontrarás en otro lado.',
              },
              {
                icon: '🎤',
                title: 'Eventos Mensuales',
                description:
                  'Meetups virtuales y presenciales, conferencias y sesiones de networking.',
              },
              {
                icon: '💡',
                title: 'Grupos Especializados',
                description:
                  'Comunidades por tema: EVs, Logística, MaaS, Micro-movilidad, Financiamiento, etc.',
              },
              {
                icon: '🎓',
                title: 'Contenido Premium',
                description:
                  'Webinars, workshops y recursos educativos exclusivos para miembros.',
              },
              {
                icon: '🚀',
                title: 'Visibilidad para Startups',
                description:
                  'Perfil destacado, pitches a inversionistas y partners, cobertura en MOVILIAX.',
              },
              {
                icon: '📢',
                title: 'Voz en la Industria',
                description:
                  'Participa en encuestas, influye en reportes y comparte tu expertise con miles.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0A0F2C] to-[#0D0D0D] rounded-xl p-8 border border-[#00E0FF]/20 hover:border-[#00E0FF]/50 transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#9CA3AF]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Planes de Membresía
            </h2>
            <p className="text-[#9CA3AF] text-lg">
              Elige el plan que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free */}
            <div className="bg-gradient-to-br from-[#0A0F2C] to-[#0D0D0D] rounded-xl p-8 border border-white/20">
              <p className="text-sm text-[#9CA3AF] mb-2">BÁSICO</p>
              <p className="text-4xl font-bold mb-4">Gratis</p>
              <p className="text-[#9CA3AF] mb-6">Para empezar a conectar</p>

              <ul className="space-y-3 mb-8">
                {[
                  'Perfil público',
                  'Directorio de miembros',
                  'Grupos de discusión',
                  'Newsletter semanal',
                  'Eventos online gratuitos',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#00E0FF]">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#join"
                className="block w-full py-3 bg-white/10 text-white text-center font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                Unirse Gratis
              </Link>
            </div>

            {/* Pro */}
            <div className="bg-gradient-to-br from-[#00E0FF]/10 to-[#6B46FF]/10 rounded-xl p-8 border-2 border-[#00E0FF] relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00E0FF] text-[#0A0F2C] px-4 py-1 rounded-full text-xs font-bold">
                MÁS POPULAR
              </span>

              <p className="text-sm text-[#00E0FF] mb-2">PROFESIONAL</p>
              <div className="flex items-baseline justify-center gap-1 mb-1">
                <p className="text-4xl font-bold">$49</p>
                <p className="text-lg text-[#9CA3AF]">/mes</p>
              </div>
              <p className="text-[#9CA3AF] text-sm mb-6">
                o $490/año (ahorra 17%)
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Todo lo de Básico',
                  'Perfil destacado',
                  'Mensajes directos ilimitados',
                  'Acceso a reportes premium',
                  'Job board exclusivo',
                  'Descuentos en eventos',
                  'Badge verificado',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#00E0FF]">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#join"
                className="block w-full py-3 bg-[#00E0FF] text-[#0A0F2C] text-center font-bold rounded-lg hover:opacity-90 transition-opacity"
              >
                Empezar Pro
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-gradient-to-br from-[#0A0F2C] to-[#0D0D0D] rounded-xl p-8 border border-[#6B46FF]/50">
              <p className="text-sm text-[#6B46FF] mb-2">ENTERPRISE</p>
              <p className="text-4xl font-bold mb-4">Contactar</p>
              <p className="text-[#9CA3AF] mb-6">Para equipos y empresas</p>

              <ul className="space-y-3 mb-8">
                {[
                  'Todo lo de Pro',
                  'Múltiples usuarios',
                  'Página de empresa',
                  'Analytics avanzados',
                  'Publicación de empleos',
                  'Consultoría estratégica',
                  'Soporte prioritario',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#6B46FF]">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contacto"
                className="block w-full py-3 bg-[#6B46FF] text-white text-center font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Contactar Ventas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="px-4 mb-20 bg-gradient-to-br from-[#0A0F2C] to-[#0D0D0D] py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Lo Que Dicen los Miembros
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  'MOVILIAX Connect me ayudó a encontrar co-fundadores y nuestros primeros inversionistas. Es la red más activa de movilidad en LATAM.',
                author: 'Argelia Gómez',
                role: 'CEO, FleetTech',
                country: '🇲🇽 México',
              },
              {
                quote:
                  'Como VC enfocado en movilidad, Connect es mi fuente #1 para deal flow y entender tendencias en la región.',
                author: 'Miguel Pichardo',
                role: 'Partner, Venture Capital',
                country: '🇨🇴 Colombia',
              },
              {
                quote:
                  'Los eventos mensuales y el contenido exclusivo han sido invaluables para mantenernos al día con la industria.',
                author: 'Isabel Gómez',
                role: 'Head of Mobility, Corp.',
                country: '🇧🇷 Brasil',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="text-2xl mb-4">“</div>
                <p className="text-[#9CA3AF] mb-6 italic">
                  {testimonial.quote}
                </p>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-[#9CA3AF]">{testimonial.role}</p>
                <p className="text-sm text-[#00E0FF] mt-1">
                  {testimonial.country}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Final */}
      <section id="join" className="px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-[#00E0FF]/20 to-[#6B46FF]/20 rounded-2xl p-12 border border-[#00E0FF]/30">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
              ¿Listo para Conectar?
            </h2>
            <p className="text-xl text-[#9CA3AF] mb-8 text-center">
              Completa tus datos y únete a +5,000 profesionales
            </p>

            <ConnectForm defaultPlan="free" />
          </div>
        </div>
      </section>
      {/* cierre correcto del contenedor */}
    </div>
  )
}

