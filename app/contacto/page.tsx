'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    asunto: 'general',
    mensaje: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      alert('Por favor completa todos los campos requeridos')
      return
    }

    setIsSubmitting(true)
    
    // Simulación de envío
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    alert('¡Mensaje enviado exitosamente! Te contactaremos pronto.')
    setFormData({
      nombre: '',
      email: '',
      empresa: '',
      asunto: 'general',
      mensaje: ''
    })
    setIsSubmitting(false)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      info: 'hola@moviliax.com',
      link: 'mailto:hola@moviliax.com'
    },
    {
      icon: '📱',
      title: 'Redes Sociales',
      info: '@moviliax',
      link: '#'
    },
    {
      icon: '📍',
      title: 'Ubicación',
      info: 'Ciudad de México, LATAM',
      link: '#'
    },
    {
      icon: '⏰',
      title: 'Horario',
      info: 'Lun - Vie: 9:00 - 18:00',
      link: '#'
    }
  ]

  const reasons = [
    {
      icon: '🤝',
      title: 'Alianzas y Partnerships',
      description: 'Explora oportunidades de colaboración estratégica'
    },
    {
      icon: '📰',
      title: 'Prensa y Medios',
      description: 'Solicitudes de prensa y entrevistas'
    },
    {
      icon: '✍️',
      title: 'Colabora con Nosotros',
      description: 'Escribe artículos o participa en nuestro podcast'
    },
    {
      icon: '💼',
      title: 'Publicidad y Sponsors',
      description: 'Oportunidades de patrocinio y publicidad'
    },
    {
      icon: '🎓',
      title: 'Consultoría',
      description: 'Servicios de consultoría en movilidad'
    },
    {
      icon: '💡',
      title: 'Otros Temas',
      description: 'Cualquier otra consulta o sugerencia'
    }
  ]

  const faqs = [
    {
      question: '¿Cuánto tardan en responder?',
      answer: 'Normalmente respondemos en 24-48 horas hábiles.'
    },
    {
      question: '¿Cómo puedo contribuir con contenido?',
      answer: 'Selecciona "Colaboración Editorial" en el formulario y cuéntanos tu propuesta.'
    },
    {
      question: '¿Ofrecen servicios de consultoría?',
      answer: 'Sí, ofrecemos consultoría especializada en movilidad y electromovilidad para empresas.'
    },
    {
      question: '¿Cómo puedo ser sponsor?',
      answer: 'Visita nuestra página de Sponsors o selecciona ese tema en el formulario de contacto.'
    }
  ]

  return (
    <div className="min-h-screen bg-azul-profundo text-blanco">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-azul-profundo/50 to-azul-profundo"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cian-electrico/5 to-transparent animate-scan"></div>
        
        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="font-exo text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blanco to-cian-electrico bg-clip-text text-transparent">
            Hablemos del Futuro de la Movilidad
          </h1>
          <p className="text-xl text-gris-metalico leading-relaxed max-w-2xl mx-auto">
            ¿Tienes una idea, proyecto o colaboración en mente? Estamos aquí para escucharte 
            y construir juntos el ecosistema de movilidad en América Latina.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-6 py-12 -mt-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="bg-white/5 backdrop-blur-sm border border-cian-electrico/20 rounded-2xl p-6 text-center hover:border-cian-electrico hover:-translate-y-2 hover:shadow-xl hover:shadow-cian-electrico/20 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-exo text-lg font-bold mb-2 text-cian-electrico">{item.title}</h3>
              <p className="text-gris-metalico text-sm">{item.info}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Main Content: Form + Info */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 border border-cian-electrico/20 rounded-3xl p-8 md:p-12">
              <h2 className="font-exo text-3xl font-bold mb-2">Envíanos un Mensaje</h2>
              <p className="text-gris-metalico mb-8">
                Completa el formulario y nos pondremos en contacto contigo lo antes posible
              </p>

              <div className="space-y-6">
                {/* Nombre */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => handleChange('nombre', e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 bg-azul-profundo border border-cian-electrico/30 rounded-xl text-blanco placeholder-gris-metalico focus:outline-none focus:border-cian-electrico transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 bg-azul-profundo border border-cian-electrico/30 rounded-xl text-blanco placeholder-gris-metalico focus:outline-none focus:border-cian-electrico transition-colors"
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Empresa / Organización
                  </label>
                  <input
                    type="text"
                    value={formData.empresa}
                    onChange={(e) => handleChange('empresa', e.target.value)}
                    placeholder="Nombre de tu empresa (opcional)"
                    className="w-full px-4 py-3 bg-azul-profundo border border-cian-electrico/30 rounded-xl text-blanco placeholder-gris-metalico focus:outline-none focus:border-cian-electrico transition-colors"
                  />
                </div>

                {/* Asunto */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Asunto *
                  </label>
                  <select
                    value={formData.asunto}
                    onChange={(e) => handleChange('asunto', e.target.value)}
                    className="w-full px-4 py-3 bg-azul-profundo border border-cian-electrico/30 rounded-xl text-blanco focus:outline-none focus:border-cian-electrico transition-colors"
                  >
                    <option value="general">Consulta General</option>
                    <option value="partnership">Alianzas y Partnerships</option>
                    <option value="prensa">Prensa y Medios</option>
                    <option value="colaboracion">Colaboración Editorial</option>
                    <option value="publicidad">Publicidad y Sponsors</option>
                    <option value="consultoria">Consultoría</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    value={formData.mensaje}
                    onChange={(e) => handleChange('mensaje', e.target.value)}
                    placeholder="Cuéntanos más sobre tu consulta o proyecto..."
                    rows={6}
                    className="w-full px-4 py-3 bg-azul-profundo border border-cian-electrico/30 rounded-xl text-blanco placeholder-gris-metalico focus:outline-none focus:border-cian-electrico transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                    isSubmitting
                      ? 'bg-gris-metalico cursor-not-allowed'
                      : 'bg-gradient-to-r from-cian-electrico to-blue-400 text-azul-profundo hover:scale-105 hover:shadow-2xl hover:shadow-cian-electrico/40'
                  }`}
                >
                  {isSubmitting ? '⏳ Enviando...' : '📤 Enviar Mensaje'}
                </button>

                <p className="text-xs text-gris-metalico text-center">
                  Al enviar este formulario, aceptas nuestra{' '}
                  <Link href="/privacidad" className="text-cian-electrico hover:underline">
                    Política de Privacidad
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            {/* Por qué contactarnos */}
            <div className="bg-white/5 border border-cian-electrico/20 rounded-3xl p-8">
              <h3 className="font-exo text-2xl font-bold mb-6">¿Por qué Contactarnos?</h3>
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="text-2xl flex-shrink-0">{reason.icon}</div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{reason.title}</h4>
                      <p className="text-xs text-gris-metalico">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-gradient-to-br from-cian-electrico/10 to-violeta-tech/10 border border-cian-electrico/30 rounded-3xl p-8 text-center">
              <div className="text-5xl mb-4">📬</div>
              <h3 className="font-exo text-xl font-bold mb-3">Newsletter RADARX</h3>
              <p className="text-sm text-gris-metalico mb-6">
                Recibe cada domingo insights exclusivos sobre movilidad en LATAM
              </p>
              <Link
                href="/#newsletter"
                className="inline-block px-6 py-3 bg-gradient-to-r from-cian-electrico to-blue-400 text-azul-profundo font-bold rounded-full hover:scale-105 transition-transform text-sm"
              >
                Suscribirme Gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-exo text-4xl font-bold text-center mb-4">Preguntas Frecuentes</h2>
        <p className="text-center text-gris-metalico mb-12 text-lg">
          Respuestas rápidas a las dudas más comunes
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-cian-electrico/20 rounded-2xl p-6 hover:border-cian-electrico transition-colors"
            >
              <h3 className="font-exo text-lg font-bold mb-3 text-cian-electrico">
                {faq.question}
              </h3>
              <p className="text-gris-metalico text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white/5 border border-cian-electrico/20 rounded-3xl p-12 text-center">
          <div className="text-7xl mb-6">🌎</div>
          <h2 className="font-exo text-3xl font-bold mb-4">Cobertura en toda América Latina</h2>
          <p className="text-gris-metalico max-w-2xl mx-auto mb-8">
            Desde México hasta Argentina, estamos comprometidos con transformar la movilidad 
            en toda la región. Trabajamos con partners, instituciones y empresas en 18 países.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['🇲🇽 México', '🇧🇷 Brasil', '🇦🇷 Argentina', '🇨🇱 Chile', '🇨🇴 Colombia', '🇵🇪 Perú'].map((country, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/10 border border-cian-electrico/30 rounded-full text-sm"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center">
          <h3 className="font-exo text-2xl font-bold mb-6">Síguenos en Redes Sociales</h3>
          <div className="flex justify-center gap-4">
            {[
              { icon: '🐦', name: 'Twitter', link: '#' },
              { icon: '📸', name: 'Instagram', link: '#' },
              { icon: '💼', name: 'LinkedIn', link: '#' },
              { icon: '📺', name: 'YouTube', link: '#' },
              { icon: '🎵', name: 'Spotify', link: '#' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="w-14 h-14 bg-white/10 border border-cian-electrico/30 rounded-full flex items-center justify-center text-2xl hover:bg-cian-electrico/20 hover:border-cian-electrico hover:scale-110 transition-all"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
  