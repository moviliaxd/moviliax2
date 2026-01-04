import Link from 'next/link';
import { ArrowLeft, Star, Trophy, Award, Briefcase, Handshake, Target, TrendingUp, Users, Globe, Mail, ExternalLink } from 'lucide-react';

export default function PatrocinadoresPage() {
  const tiers = [
    {
      tier: "Diamond Sponsors",
      icon: Trophy,
      color: "from-[#00d4ff] to-[#0099cc]",
      benefits: [
        "Logo prominente en homepage (above the fold)",
        "Categoría exclusiva en directorio",
        "8 artículos nativos branded/año",
        "Presencia en todos los newsletters (52 ediciones)",
        "Sponsorship de serie completa de podcast (12 episodios)",
        "Booth premium en eventos Moviliax",
        "White Paper destacado en Knowledge Lab",
        "Webinar co-branded trimestral",
        "Reporte de analytics mensual detallado",
        "Reuniones trimestrales de estrategia"
      ],
      investment: "$120,000+ USD/año",
      spots: "Solo 3 empresas",
      companies: [
        {
          name: "Maersk LATAM",
          logo: "🚢",
          industry: "Shipping & Logistics",
          description: "Líder global en transporte marítimo y soluciones logísticas integradas"
        },
        {
          name: "Disponible",
          logo: "💎",
          industry: "Tu empresa aquí",
          description: "Conviértete en Diamond Sponsor y lidera la conversación"
        }
      ]
    },
    {
      tier: "Platinum Sponsors",
      icon: Award,
      color: "from-[#c77dff] to-[#9d4edd]",
      benefits: [
        "Logo destacado en homepage y footer",
        "Categoría premium en directorio",
        "6 artículos nativos branded/año",
        "Newsletter spotlight mensual",
        "6 episodios de podcast sponsorship",
        "Booth estándar en eventos",
        "Mención en reportes anuales",
        "Webinar co-branded semestral",
        "Dashboard de métricas en tiempo real"
      ],
      investment: "$75,000 USD/año",
      spots: "Hasta 6 empresas",
      companies: [
        {
          name: "Amazon Logistics",
          logo: "📦",
          industry: "E-commerce & Fulfillment",
          description: "Innovación en última milla y automatización de warehouses"
        },
        {
          name: "Siemens Mobility",
          logo: "🚄",
          industry: "Smart Infrastructure",
          description: "Soluciones de movilidad inteligente y ciudades conectadas"
        },
        {
          name: "Disponible",
          logo: "🏆",
          industry: "Tu empresa aquí",
          description: "Únete como Platinum Sponsor"
        }
      ]
    },
    {
      tier: "Gold Sponsors",
      icon: Star,
      color: "from-[#ffd700] to-[#ffb700]",
      benefits: [
        "Logo en sección de sponsors",
        "Listado en directorio Gold",
        "4 artículos nativos branded/año",
        "Newsletter spotlight trimestral",
        "3 episodios de podcast",
        "Presencia en eventos select",
        "Acceso a reportes de industria"
      ],
      investment: "$45,000 USD/año",
      spots: "Hasta 12 empresas",
      companies: [
        {
          name: "Waymo",
          logo: "🚗",
          industry: "Autonomous Vehicles",
          description: "Liderando la revolución de vehículos autónomos"
        },
        {
          name: "Geek+ Robotics",
          logo: "🤖",
          industry: "Warehouse Automation",
          description: "Soluciones robóticas para logística inteligente"
        },
        {
          name: "Mercado Libre",
          logo: "🛒",
          industry: "E-commerce LATAM",
          description: "Infraestructura logística e innovación en entregas"
        }
      ]
    },
    {
      tier: "Silver Sponsors",
      icon: Briefcase,
      color: "from-[#c0c0c0] to-[#999999]",
      benefits: [
        "Logo en página de sponsors",
        "Listado en directorio",
        "2 artículos nativos/año",
        "Newsletter mention semestral",
        "Descuento en eventos"
      ],
      investment: "$25,000 USD/año",
      spots: "Hasta 20 empresas",
      companies: [
        {
          name: "Nowports",
          logo: "⚓",
          industry: "Digital Freight",
          description: "Freight forwarding digital para LATAM"
        },
        {
          name: "Kavak",
          logo: "🚙",
          industry: "Auto Tech",
          description: "Plataforma de compra-venta de autos"
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Audiencia Altamente Segmentada",
      description: "Accede directamente a 150K+ tomadores de decisión en movilidad, logística e innovación en LATAM",
      stat: "78% C-Level & Managers"
    },
    {
      icon: TrendingUp,
      title: "Thought Leadership",
      description: "Posiciona tu marca como líder de la industria con contenido nativo y análisis de expertos",
      stat: "↑ 85% en brand awareness"
    },
    {
      icon: Users,
      title: "Networking Exclusivo",
      description: "Conecta con los principales actores del ecosistema en eventos, webinars y espacios privados",
      stat: "45K+ profesionales"
    },
    {
      icon: Globe,
      title: "Alcance Regional",
      description: "Presencia garantizada en los 18 países de LATAM con contenido localizado y relevante",
      stat: "Cobertura Pan-LATAM"
    }
  ];

  const successStories = [
    {
      company: "TechLogistics Corp",
      tier: "Platinum Sponsor",
      results: [
        "↑ 240% en generación de leads calificados",
        "45 reuniones con C-Level en 6 meses",
        "3 partnerships estratégicos cerrados",
        "$2.8M en pipeline generado"
      ],
      quote: "Moviliax nos conectó con exactamente los decisores que necesitábamos. El ROI superó nuestras expectativas.",
      author: "María González, CMO"
    },
    {
      company: "Smart Mobility Solutions",
      tier: "Gold Sponsor",
      results: [
        "↑ 180% en tráfico web desde Moviliax",
        "25K+ impresiones en newsletters",
        "Expansión a 4 nuevos mercados LATAM",
        "Podcast posicionó como thought leader"
      ],
      quote: "La credibilidad de Moviliax abrió puertas que nos hubiera tomado años alcanzar de forma independiente.",
      author: "Carlos Méndez, VP Growth"
    }
  ];

  const perks = [
    "Acceso prioritario a research y datos de mercado",
    "Invitaciones VIP a eventos exclusivos del sector",
    "Early access a nuevos formatos y plataformas",
    "Descuentos en servicios de marketing adicionales",
    "Colaboración en white papers y reportes anuales",
    "Networking con otros sponsors y partners estratégicos"
  ];

  const process = [
    {
      step: "1",
      title: "Consulta Inicial",
      description: "Agenda una llamada con nuestro equipo para discutir objetivos y audiencia objetivo"
    },
    {
      step: "2",
      title: "Propuesta Personalizada",
      description: "Recibe una propuesta customizada con tier recomendado y activaciones específicas"
    },
    {
      step: "3",
      title: "Onboarding",
      description: "Firma del acuerdo y kick-off con planning detallado de contenidos y activaciones"
    },
    {
      step: "4",
      title: "Activación & Reporting",
      description: "Ejecución del plan con reportes mensuales de performance y optimización continua"
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
              <Handshake className="w-8 h-8 text-[#00d4ff]" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white font-['Exo']">
                Patrocinadores
              </h1>
              <p className="text-xl text-gray-400 mt-2">
                Impulsa tu Marca con la Comunidad Más Influyente de Movilidad y Logística en LATAM
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: "150K+", label: "Profesionales alcanzados" },
              { value: "78%", label: "Decisores C-Level" },
              { value: "18", label: "Países en LATAM" },
              { value: "240%", label: "ROI promedio sponsors" }
            ].map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-xl border border-[#00d4ff]/20">
                <div className="text-3xl font-bold text-[#00d4ff] font-['Exo']">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-['Exo']">
            ¿Por Qué Ser <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Patrocinador?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[#00d4ff]/10 rounded-xl">
                    <benefit.icon className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 font-['Exo']">{benefit.title}</h3>
                    <p className="text-gray-400 mb-3">{benefit.description}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00d4ff]/10 rounded-full border border-[#00d4ff]/30">
                      <span className="text-[#00d4ff] font-semibold text-sm">{benefit.stat}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center font-['Exo']">
            Niveles de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Patrocinio</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Elige el nivel que mejor se adapte a tus objetivos de marca y presupuesto
          </p>

          <div className="space-y-8">
            {tiers.map((tier, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-3xl border border-[#00d4ff]/20 overflow-hidden hover:border-[#00d4ff]/50 transition-all"
              >
                {/* Tier Header */}
                <div className={`bg-gradient-to-r ${tier.color} p-6`}>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                        <tier.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white font-['Exo']">{tier.tier}</h3>
                        <p className="text-white/80 text-sm">{tier.spots}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white font-['Exo']">{tier.investment}</div>
                      <div className="text-white/80 text-sm">Compromiso anual</div>
                    </div>
                  </div>
                </div>

                {/* Tier Content */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Benefits */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 font-['Exo']">Beneficios Incluidos</h4>
                      <div className="space-y-2">
                        {tier.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="mt-1 w-5 h-5 rounded-full bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">
                              <div className="w-2 h-2 bg-[#00d4ff] rounded-full" />
                            </div>
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Current Sponsors */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 font-['Exo']">Sponsors Actuales</h4>
                      <div className="space-y-4">
                        {tier.companies.map((company, i) => (
                          <div 
                            key={i}
                            className="bg-[#0a0a0f] p-4 rounded-xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all"
                          >
                            <div className="flex items-start gap-4">
                              <div className="text-4xl">{company.logo}</div>
                              <div className="flex-1">
                                <h5 className="font-bold text-white mb-1">{company.name}</h5>
                                <div className="text-sm text-[#c77dff] mb-2">{company.industry}</div>
                                <p className="text-xs text-gray-400">{company.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 py-4 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all">
                    Solicitar {tier.tier}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-['Exo']">
            Casos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Éxito</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-['Exo']">{story.company}</h3>
                    <span className="inline-block px-3 py-1 bg-[#7b2cbf]/20 text-[#c77dff] text-sm rounded-full border border-[#7b2cbf]/30">
                      {story.tier}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {story.results.map((result, i) => (
                    <div key={i} className="bg-[#0a0a0f] p-3 rounded-xl border border-[#00d4ff]/20">
                      <div className="text-[#00d4ff] font-bold text-sm">{result}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-[#00d4ff]/20">
                  <div className="text-6xl text-[#00d4ff] mb-3 font-['Exo']">"</div>
                  <p className="text-gray-300 italic mb-4">{story.quote}</p>
                  <div className="text-sm text-gray-400">— {story.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Perks */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-['Exo']">
            Beneficios <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Adicionales</span>
          </h2>

          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20">
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Todos los patrocinadores, independientemente del tier, reciben acceso a:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {perks.map((perk, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 bg-[#0a0a0f] p-4 rounded-xl border border-[#00d4ff]/20"
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-[#00d4ff] rounded-full" />
                  </div>
                  <span className="text-gray-300">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-['Exo']">
            Proceso de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Onboarding</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div 
                key={index}
                className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-xl border border-[#00d4ff]/20 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white font-['Exo']">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-['Exo']">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6">
                    <div className="text-[#00d4ff] text-2xl">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#00d4ff]/10 to-[#7b2cbf]/10 p-12 rounded-3xl border border-[#00d4ff]/30 text-center">
            <h2 className="text-4xl font-bold text-white mb-4 font-['Exo']">
              ¿Listo para Impulsar tu Marca?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Conecta con nuestro equipo para crear un paquete de patrocinio personalizado
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:sponsors@moviliax.lat"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
              >
                <Mail className="w-5 h-5" />
                sponsors@moviliax.lat
              </a>
              <Link
                href="/media-kit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a2e] text-white font-bold rounded-full border border-[#00d4ff]/30 hover:border-[#00d4ff] transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Ver Media Kit
              </Link>
            </div>

            <p className="text-gray-500 text-sm mt-6">
              Respuesta en menos de 24 horas • Propuesta personalizada incluida
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}