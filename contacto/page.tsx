'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    organizacion: '',
    asunto: 'consulta-general',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    
    // Reset form
    setTimeout(() => {
      setFormData({
        nombre: '',
        email: '',
        organizacion: '',
        asunto: 'consulta-general',
        mensaje: ''
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hola@moviliax.lat',
      link: 'mailto:hola@moviliax.lat',
      description: 'Para consultas generales'
    },
    {
      icon: '📰',
      title: 'Prensa',
      value: 'prensa@moviliax.lat',
      link: 'mailto:prensa@moviliax.lat',
      description: 'Solicitudes de medios'
    },
    {
      icon: '🤝',
      title: 'Partnerships',
      value: 'partnerships@moviliax.lat',
      link: 'mailto:partnerships@moviliax.lat',
      description: 'Alianzas estratégicas'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: '@moviliax',
      link: 'https://linkedin.com/company/moviliax',
      description: 'Síguenos en LinkedIn'
    }
  ];

  const reasons = [
    { value: 'consulta-general', label: 'Consulta General' },
    { value: 'colaboracion', label: 'Oportunidad de Colaboración' },
    { value: 'partnership', label: 'Partnership / Alianza' },
    { value: 'prensa', label: 'Consulta de Prensa' },
    { value: 'evento', label: 'Propuesta de Evento' },
    { value: 'publicidad', label: 'Publicidad / Sponsorship' },
    { value: 'otro', label: 'Otro' }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cian-electrico/10 border border-cian-electrico/20 mb-6">
            <span className="text-cian-electrico text-sm font-medium">Hablemos</span>
          </div>
          
          <h1 className="font-['Exo'] text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cian-electrico via-violeta-tech to-magenta-futures bg-clip-text text-transparent">
              Contacto
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes una pregunta, propuesta o simplemente quieres saludar? Estamos aquí para escucharte.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, idx) => (
              <a 
                key={idx}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cian-electrico/20 to-violeta-tech/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cian-electrico/50 transition-all text-center h-full flex flex-col">
                  <div className="text-4xl mb-3">{method.icon}</div>
                  <h3 className="font-['Exo'] text-lg font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-cian-electrico font-medium mb-2 break-all">{method.value}</p>
                  <p className="text-sm text-slate-400 mt-auto">{method.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cian-electrico/20 to-violeta-tech/20 rounded-2xl blur-xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-12">
              
              <h2 className="font-['Exo'] text-3xl font-bold text-white mb-2 text-center">
                Envíanos un Mensaje
              </h2>
              <p className="text-slate-400 text-center mb-8">
                Responderemos en menos de 24 horas
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Nombre y Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-slate-300 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cian-electrico focus:outline-none focus:ring-2 focus:ring-cian-electrico/20 transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cian-electrico focus:outline-none focus:ring-2 focus:ring-cian-electrico/20 transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                {/* Organización y Asunto */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organizacion" className="block text-sm font-medium text-slate-300 mb-2">
                      Organización
                    </label>
                    <input
                      type="text"
                      id="organizacion"
                      name="organizacion"
                      value={formData.organizacion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cian-electrico focus:outline-none focus:ring-2 focus:ring-cian-electrico/20 transition-all"
                      placeholder="Tu empresa (opcional)"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium text-slate-300 mb-2">
                      Asunto *
                    </label>
                    <select
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-lg text-white focus:border-cian-electrico focus:outline-none focus:ring-2 focus:ring-cian-electrico/20 transition-all"
                    >
                      {reasons.map(reason => (
                        <option key={reason.value} value={reason.value}>
                          {reason.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-slate-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cian-electrico focus:outline-none focus:ring-2 focus:ring-cian-electrico/20 transition-all resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  {submitStatus === 'success' ? (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                      <p className="text-green-400 font-medium">
                        ✓ Mensaje enviado con éxito. Te contactaremos pronto.
                      </p>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full px-8 py-4 rounded-xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cian-electrico to-violeta-tech transition-transform group-hover:scale-105 group-disabled:scale-100" />
                      <span className="relative text-white font-semibold flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Enviando...
                          </>
                        ) : (
                          <>
                            Enviar Mensaje
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </>
                        )}
                      </span>
                    </button>
                  )}
                </div>

                <p className="text-xs text-slate-500 text-center">
                  Al enviar este formulario, aceptas nuestra{' '}
                  <Link href="/legal/privacidad" className="text-cian-electrico hover:underline">
                    Política de Privacidad
                  </Link>
                </p>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location (if applicable) */}
      <section className="relative py-20 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Exo'] text-3xl font-bold text-white mb-12 text-center">
            ¿Prefieres Visitarnos?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cian-electrico/20 to-violeta-tech/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-cian-electrico/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cian-electrico to-violeta-tech flex items-center justify-center text-2xl mb-4">
                  📍
                </div>
                <h3 className="font-['Exo'] text-xl font-bold text-white mb-4">Oficina Principal</h3>
                <p className="text-slate-300 mb-2">
                  Av. Santa Fe 1234, Piso 8<br />
                  C1060 Buenos Aires, Argentina
                </p>
                <p className="text-slate-400 text-sm">
                  Lunes a Viernes: 9:00 - 18:00 ART
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-magenta-futures/20 to-cian-electrico/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-magenta-futures/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-magenta-futures to-cian-electrico flex items-center justify-center text-2xl mb-4">
                  ☕
                </div>
                <h3 className="font-['Exo'] text-xl font-bold text-white mb-4">Coffee Chat</h3>
                <p className="text-slate-300 mb-4">
                  ¿Prefieres una conversación informal? Agenda un café virtual con nuestro equipo.
                </p>
                <a 
                  href="https://calendly.com/moviliax"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-magenta-futures hover:text-cian-electrico transition-colors font-medium"
                >
                  Agendar reunión
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Exo'] text-2xl font-bold text-white mb-6">
            ¿Buscas Algo Específico?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { label: 'Media Kit', href: '/partnerships/media-kit' },
              { label: 'Colabora con Nosotros', href: '/sobre/colaboradores' },
              { label: 'Publica tu Startup', href: '/logtech-showroom' },
              { label: 'Eventos', href: '/eventos' },
              { label: 'Newsletter', href: '#newsletter' }
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="px-6 py-3 bg-slate-900/80 border border-slate-700 rounded-lg text-slate-300 hover:border-cian-electrico/50 hover:text-white transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}