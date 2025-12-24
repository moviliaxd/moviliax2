import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, Mail, MapPin, Phone, Send, MessageSquare, Briefcase, Users, FileText, Calendar, Linkedin, Twitter, Instagram, Youtube, CheckCircle } from 'lucide-react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    pais: '',
    asunto: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email General",
      value: "hola@moviliax.lat",
      description: "Para consultas generales y información",
      link: "mailto:hola@moviliax.lat"
    },
    {
      icon: Briefcase,
      title: "Partnerships",
      value: "partnerships@moviliax.lat",
      description: "Patrocinios y colaboraciones estratégicas",
      link: "mailto:partnerships@moviliax.lat"
    },
    {
      icon: FileText,
      title: "Redacción",
      value: "editorial@moviliax.lat",
      description: "Propuestas de contenido y colaboraciones",
      link: "mailto:editorial@moviliax.lat"
    },
    {
      icon: Users,
      title: "Prensa",
      value: "prensa@moviliax.lat",
      description: "Solicitudes de medios y comunicados",
      link: "mailto:prensa@moviliax.lat"
    }
  ];

  const subjects = [
    "Consulta General",
    "Partnership / Patrocinio",
    "Propuesta de Contenido",
    "Prensa / Media",
    "Eventos y Webinars",
    "Newsletter RadarX",
    "Reporte de Error Técnico",
    "Otro"
  ];

  const offices = [
    {
      country: "🇲🇽 México",
      city: "Ciudad de México",
      address: "Insurgentes Sur 1602, Crédito Constructor",
      timezone: "GMT-6",
      isHQ: true
    },
    {
      country: "🇨🇴 Colombia",
      city: "Bogotá",
      address: "Calle 93 #13-24, Chicó Reservado",
      timezone: "GMT-5",
      isHQ: false
    },
    {
      country: "🇨🇱 Chile",
      city: "Santiago",
      address: "Av. Apoquindo 4800, Las Condes",
      timezone: "GMT-3",
      isHQ: false
    }
  ];

  const socialMedia = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "@moviliax",
      link: "https://linkedin.com/company/moviliax",
      followers: "28K+"
    },
    {
      icon: Twitter,
      name: "Twitter / X",
      handle: "@moviliax",
      link: "https://twitter.com/moviliax",
      followers: "15K+"
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@moviliax.lat",
      link: "https://instagram.com/moviliax.lat",
      followers: "8K+"
    },
    {
      icon: Youtube,
      name: "YouTube",
      handle: "Moviliax",
      link: "https://youtube.com/@moviliax",
      followers: "5K+"
    }
  ];

  const faqs = [
    {
      question: "¿Cómo puedo escribir para Moviliax?",
      answer: "Envía tu propuesta a editorial@moviliax.lat con un breve resumen del tema, tu perfil y 2-3 muestras de escritura previa."
    },
    {
      question: "¿Ofrecen espacios publicitarios?",
      answer: "Sí, consulta nuestro Media Kit o escribe a partnerships@moviliax.lat para conocer formatos y precios."
    },
    {
      question: "¿Puedo republicar contenido de Moviliax?",
      answer: "Contacta a editorial@moviliax.lat. Generalmente permitimos republicación con atribución y link original."
    },
    {
      question: "¿Organizan eventos presenciales?",
      answer: "Sí, organizamos eventos trimestrales en principales ciudades LATAM. Suscríbete a nuestro calendario de eventos."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#00ffff] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver al Home
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-[#00d4ff]/20 to-[#7b2cbf]/20 rounded-2xl border border-[#00d4ff]/30">
              <MessageSquare className="w-8 h-8 text-[#00d4ff]" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white font-['Exo']">
                Contacto
              </h1>
              <p className="text-xl text-gray-400 mt-2">
                Estamos Aquí para Ayudarte. Conectemos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Form - 3 columns */}
            <div className="md:col-span-3">
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20">
                <h2 className="text-3xl font-bold text-white mb-6 font-['Exo']">
                  Envíanos un Mensaje
                </h2>

                {submitted ? (
                  <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2 font-['Exo']">¡Mensaje Enviado!</h3>
                    <p className="text-gray-400">
                      Gracias por contactarnos. Te responderemos en menos de 24 horas.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-400 mb-2 text-sm">Nombre Completo *</label>
                        <input
                          type="text"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#00d4ff]/30 rounded-xl text-white focus:border-[#00d4ff] focus:outline-none transition-colors"
                          placeholder="Tu nombre"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-400 mb-2 text-sm">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#00d4ff]/30 rounded-xl text-white focus:border-[#00d4ff] focus:outline-none transition-colors"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-400 mb-2 text-sm">Empresa</label>
                        <input
                          type="text"
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#00d4ff]/30 rounded-xl text-white focus:border-[#00d4ff] focus:outline-none transition-colors"
                          placeholder="Tu empresa"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-400 mb-2 text-sm">País</label>
                        <input
                          type="text"
                          name="pais"
                          value={formData.pais}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#00d4ff]/30 rounded-xl text-white focus:border-[#00d4ff] focus:outline-none transition-colors"
                          placeholder="Tu país"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 mb-2 text-sm">Asunto *</label>
                      <select
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#00d4ff]/30 rounded-xl text-white focus:border-[#00d4ff] focus:outline-none transition-colors"
                      >
                        <option value="">Selecciona un asunto</option>
                        {subjects.map((subject, index) => (
                          <option key={index} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-400 mb-2 text-sm">Mensaje *</label>
                      <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#00d4ff]/30 rounded-xl text-white focus:border-[#00d4ff] focus:outline-none transition-colors resize-none"
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Enviar Mensaje
                    </button>

                    <p className="text-gray-500 text-sm text-center">
                      Responderemos en menos de 24 horas hábiles
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar - 2 columns */}
            <div className="md:col-span-2 space-y-6">
              {/* Direct Contacts */}
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-2xl border border-[#00d4ff]/20">
                <h3 className="text-xl font-bold text-white mb-4 font-['Exo']">Contacto Directo</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.link}
                      className="block bg-[#0a0a0f] p-4 rounded-xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-[#00d4ff]/10 rounded-lg">
                          <contact.icon className="w-5 h-5 text-[#00d4ff]" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-white text-sm mb-1">{contact.title}</div>
                          <div className="text-[#00d4ff] text-sm mb-1 group-hover:text-[#00ffff] transition-colors">
                            {contact.value}
                          </div>
                          <div className="text-gray-500 text-xs">{contact.description}</div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-2xl border border-[#00d4ff]/20">
                <h3 className="text-xl font-bold text-white mb-4 font-['Exo']">Enlaces Rápidos</h3>
                <div className="space-y-2">
                  <Link
                    href="/media-kit"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#00d4ff] transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span className="text-sm">Media Kit</span>
                  </Link>
                  <Link
                    href="/patrocinadores"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#00d4ff] transition-colors"
                  >
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm">Patrocinadores</span>
                  </Link>
                  <Link
                    href="/#newsletter"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#00d4ff] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Newsletter RadarX</span>
                  </Link>
                  <a
                    href="https://calendly.com/moviliax"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#00d4ff] transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Agendar Reunión</span>
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-[#00d4ff]/10 to-[#7b2cbf]/10 p-6 rounded-2xl border border-[#00d4ff]/30">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="w-5 h-5 text-[#00d4ff]" />
                  <span className="font-bold text-white">Tiempo de Respuesta</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Respondemos todas las consultas en <span className="text-[#00d4ff] font-semibold">menos de 24 horas hábiles</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-['Exo']">
            Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Oficinas</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border ${
                  office.isHQ ? 'border-[#00d4ff] shadow-[0_0_30px_rgba(0,212,255,0.2)]' : 'border-[#00d4ff]/20'
                }`}
              >
                {office.isHQ && (
                  <span className="inline-block px-3 py-1 bg-[#00d4ff]/10 text-[#00d4ff] text-xs rounded-full border border-[#00d4ff]/30 mb-4 font-semibold">
                    HEADQUARTERS
                  </span>
                )}
                <div className="text-4xl mb-4">{office.country.split(' ')[0]}</div>
                <h3 className="text-2xl font-bold text-white mb-2 font-['Exo']">{office.city}</h3>
                <div className="flex items-start gap-2 text-gray-400 text-sm mb-3">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>{office.address}</span>
                </div>
                <div className="text-[#c77dff] text-sm font-semibold">{office.timezone}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-['Exo']">
            Síguenos en <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Redes Sociales</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-2xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#00d4ff]/10 rounded-full flex items-center justify-center group-hover:bg-[#00d4ff]/20 transition-colors">
                  <social.icon className="w-8 h-8 text-[#00d4ff]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-['Exo']">{social.name}</h3>
                <div className="text-gray-400 text-sm mb-2">{social.handle}</div>
                <div className="text-[#c77dff] font-semibold text-sm">{social.followers}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-[#0a0a0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-['Exo']">
            Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Frecuentes</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-xl border border-[#00d4ff]/20"
              >
                <h3 className="text-xl font-bold text-white mb-3 font-['Exo']">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">¿No encuentras lo que buscas?</p>
            <a
              href="#form"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a2e] text-white font-bold rounded-full border border-[#00d4ff]/30 hover:border-[#00d4ff] transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              Envíanos tu Pregunta
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}