import Link from 'next/link';
import { ArrowLeft, Download, Users, Eye, TrendingUp, Globe, FileText, Image, Palette, Mail, ExternalLink } from 'lucide-react';

export default function MediaKitPage() {
  const stats = [
    { value: "150K+", label: "Visitantes mensuales", growth: "+85% YoY" },
    { value: "45K+", label: "Suscriptores RadarX", growth: "+120% este año" },
    { value: "35K", label: "Seguidores en redes", growth: "LinkedIn + Twitter" },
    { value: "78%", label: "Audiencia decisores", growth: "C-Level & Managers" }
  ];

  const audience = [
    {
      segment: "Supply Chain & Logistics",
      percentage: 42,
      roles: ["Directors de Logística", "Supply Chain Managers", "Operations Leaders"]
    },
    {
      segment: "Movilidad Urbana & Tech",
      percentage: 28,
      roles: ["CTOs de Transporte", "Smart City Planners", "Mobility Managers"]
    },
    {
      segment: "Innovación & Transformación",
      percentage: 18,
      roles: ["Chief Innovation Officers", "Digital Transformation", "Tech Investors"]
    },
    {
      segment: "Gobierno & Regulación",
      percentage: 12,
      roles: ["Policy Makers", "Consultores", "Entidades Regulatorias"]
    }
  ];

  const adFormats = [
    {
      name: "Banner Hero Home",
      dimensions: "1400x400px",
      position: "Above the fold en homepage",
      impressions: "~50K/mes",
      price: "$3,500 USD/mes"
    },
    {
      name: "Native Content",
      dimensions: "Artículo branded",
      position: "Integrado en feed principal",
      impressions: "~25K views promedio",
      price: "$2,800 USD/artículo"
    },
    {
      name: "Newsletter Spotlight",
      dimensions: "Email RadarX",
      position: "Sección destacada en newsletter",
      impressions: "45K suscriptores",
      price: "$4,200 USD/edición"
    },
    {
      name: "Sidebar Premium",
      dimensions: "300x600px",
      position: "Todas las páginas internas",
      impressions: "~120K/mes",
      price: "$2,200 USD/mes"
    },
    {
      name: "Podcast Sponsorship",
      dimensions: "Audio 60seg",
      position: "Pre-roll en Moviliax Talks",
      impressions: "~15K escuchas/episodio",
      price: "$1,800 USD/episodio"
    },
    {
      name: "Knowledge Lab Feature",
      dimensions: "White Paper destacado",
      position: "Sección de recursos premium",
      impressions: "~8K descargas estimadas",
      price: "$3,200 USD/trimestre"
    }
  ];

  const packages = [
    {
      name: "Starter Package",
      price: "$8,500 USD",
      duration: "3 meses",
      includes: [
        "2 artículos nativos branded",
        "1 banner sidebar (3 meses)",
        "Mención en 2 newsletters",
        "Logo en sección partners"
      ],
      ideal: "Startups y empresas emergentes"
    },
    {
      name: "Growth Package",
      price: "$22,000 USD",
      duration: "6 meses",
      includes: [
        "4 artículos nativos + 1 case study",
        "Banner hero rotation (2 meses)",
        "Newsletter spotlight mensual",
        "2 episodios podcast sponsorship",
        "Presencia en eventos Moviliax"
      ],
      ideal: "Scale-ups y empresas en expansión",
      featured: true
    },
    {
      name: "Enterprise Package",
      price: "$45,000+ USD",
      duration: "12 meses",
      includes: [
        "10 artículos nativos premium",
        "Banner hero exclusivo (4 meses)",
        "Newsletter spotlight quincenal",
        "Serie de podcast (6 episodios)",
        "White Paper en Knowledge Lab",
        "Evento co-branded",
        "Reporte de analytics mensual"
      ],
      ideal: "Corporativos y líderes del sector"
    }
  ];

  const brandAssets = [
    {
      category: "Logos",
      items: [
        { name: "Logo Principal (PNG)", size: "2048x2048px", format: "PNG transparente" },
        { name: "Logo Horizontal (SVG)", size: "Vectorial", format: "SVG escalable" },
        { name: "Logo Monocromo", size: "Múltiples", format: "Blanco/Negro" }
      ]
    },
    {
      category: "Colores Corporativos",
      items: [
        { name: "Cian Eléctrico", size: "#00d4ff", format: "RGB: 0, 212, 255" },
        { name: "Violeta Tech", size: "#7b2cbf", format: "RGB: 123, 44, 191" },
        { name: "Púrpura Radiante", size: "#c77dff", format: "RGB: 199, 125, 255" }
      ]
    },
    {
      category: "Tipografía",
      items: [
        { name: "Exo (Títulos)", size: "Bold/ExtraBold", format: "Google Fonts" },
        { name: "Inter (Cuerpo)", size: "Regular/Medium", format: "Sistema/Web" }
      ]
    },
    {
      category: "Templates",
      items: [
        { name: "Presentación PowerPoint", size: "16:9", format: "PPTX" },
        { name: "Redes Sociales Pack", size: "1080x1080", format: "PSD + PNG" },
        { name: "Email Signature", size: "HTML", format: "Personalizable" }
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Moviliax nos conectó con los tomadores de decisión correctos. El ROI de nuestra campaña superó expectativas en un 180%.",
      author: "Carlos Mendoza",
      role: "CMO, LogiTech Solutions",
      company: "🇲🇽 México"
    },
    {
      quote: "La audiencia de Moviliax es exactamente la que buscábamos: profesionales de alto nivel en supply chain e innovación.",
      author: "Ana Rodríguez",
      role: "Head of Marketing LATAM",
      company: "🇺🇸 Global Shipping Corp"
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
            href="/#partnerships"
            className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#00ffff] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver a Partnerships
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-[#00d4ff]/20 to-[#7b2cbf]/20 rounded-2xl border border-[#00d4ff]/30">
              <FileText className="w-8 h-8 text-[#00d4ff]" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white font-['Exo']">
                Media Kit
              </h1>
              <p className="text-xl text-gray-400 mt-2">
                Conecta con la Audiencia Más Influyente de Movilidad y Logística en LATAM
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all">
              <Download className="w-5 h-5" />
              Descargar Media Kit PDF
            </button>
            <Link 
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a2e] text-white font-bold rounded-full border border-[#00d4ff]/30 hover:border-[#00d4ff] transition-all"
            >
              <Mail className="w-5 h-5" />
              Solicitar Propuesta
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-['Exo']">
            Alcance e <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Impacto</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20 text-center hover:border-[#00d4ff]/50 transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]"
              >
                <div className="text-5xl font-bold text-[#00d4ff] mb-3 font-['Exo']">{stat.value}</div>
                <div className="text-white font-semibold mb-2">{stat.label}</div>
                <div className="text-[#c77dff] text-sm">{stat.growth}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Breakdown */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Audiencia</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {audience.map((segment, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white font-['Exo']">{segment.segment}</h3>
                  <span className="text-4xl font-bold text-[#00d4ff] font-['Exo']">{segment.percentage}%</span>
                </div>
                
                <div className="w-full bg-[#0a0a0f] rounded-full h-3 mb-6">
                  <div 
                    className="bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] h-3 rounded-full transition-all"
                    style={{ width: `${segment.percentage}%` }}
                  />
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-gray-500 mb-2">Perfiles principales</div>
                  {segment.roles.map((role, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full" />
                      <span className="text-gray-300 text-sm">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Formats */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Formatos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Publicitarios</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {adFormats.map((format, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 font-['Exo']">{format.name}</h3>
                    <div className="space-y-1 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Image className="w-4 h-4 text-[#00d4ff]" />
                        <span className="text-gray-400">{format.dimensions}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Globe className="w-4 h-4 text-[#00d4ff]" />
                        <span className="text-gray-400">{format.position}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Eye className="w-4 h-4 text-[#00d4ff]" />
                        <span className="text-gray-400">{format.impressions}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-[#00d4ff]/20">
                  <div className="text-3xl font-bold text-[#00d4ff] font-['Exo']">{format.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-['Exo']">
            Paquetes <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Integrales</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border ${
                  pkg.featured 
                    ? 'border-[#00d4ff] shadow-[0_0_40px_rgba(0,212,255,0.3)]' 
                    : 'border-[#00d4ff]/20'
                } hover:border-[#00d4ff]/50 transition-all`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white text-sm font-bold rounded-full">
                      MÁS POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 font-['Exo']">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-[#00d4ff] mb-2 font-['Exo']">{pkg.price}</div>
                  <div className="text-gray-400 text-sm">{pkg.duration}</div>
                </div>

                <div className="space-y-3 mb-6">
                  {pkg.includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-[#00d4ff] rounded-full" />
                      </div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-[#00d4ff]/20">
                  <div className="text-[#c77dff] text-sm font-semibold text-center">{pkg.ideal}</div>
                </div>

                <button className={`w-full mt-6 py-3 rounded-full font-bold transition-all ${
                  pkg.featured
                    ? 'bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]'
                    : 'bg-[#0a0a0f] text-white border border-[#00d4ff]/30 hover:border-[#00d4ff]'
                }`}>
                  Solicitar Cotización
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Recursos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Marca</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {brandAssets.map((category, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Palette className="w-6 h-6 text-[#00d4ff]" />
                  <h3 className="text-2xl font-bold text-white font-['Exo']">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <div key={i} className="bg-[#0a0a0f] p-4 rounded-xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all cursor-pointer group">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="font-semibold text-white mb-1">{item.name}</div>
                          <div className="text-sm text-gray-400">{item.size}</div>
                          <div className="text-xs text-[#c77dff] mt-1">{item.format}</div>
                        </div>
                        <Download className="w-5 h-5 text-gray-400 group-hover:text-[#00d4ff] transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 py-3 bg-[#00d4ff]/10 text-[#00d4ff] font-bold rounded-full border border-[#00d4ff]/30 hover:bg-[#00d4ff]/20 transition-all">
                  Descargar {category.category}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-['Exo']">
            Lo Que Dicen <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Nuestros Partners</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20"
              >
                <div className="text-6xl text-[#00d4ff] mb-4 font-['Exo']">"</div>
                <p className="text-gray-300 text-lg mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#7b2cbf]" />
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-[#c77dff]">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#00d4ff]/10 to-[#7b2cbf]/10 p-12 rounded-3xl border border-[#00d4ff]/30 text-center">
            <h2 className="text-4xl font-bold text-white mb-4 font-['Exo']">
              ¿Listo para Conectar con tu Audiencia Ideal?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Contacta a nuestro equipo de partnerships para crear una propuesta personalizada
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:partnerships@moviliax.lat"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
              >
                <Mail className="w-5 h-5" />
                partnerships@moviliax.lat
              </a>
              <a 
                href="https://calendly.com/moviliax"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a2e] text-white font-bold rounded-full border border-[#00d4ff]/30 hover:border-[#00d4ff] transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Agendar Reunión
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}