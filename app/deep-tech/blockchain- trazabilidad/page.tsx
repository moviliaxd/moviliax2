import Link from 'next/link';
import { ArrowLeft, Link as LinkIcon, Shield, FileCheck, Lock, TrendingUp, CheckCircle, ExternalLink } from 'lucide-react';

export default function BlockchainTrazabilidadPage() {
  const applications = [
    {
      icon: FileCheck,
      title: "Trazabilidad de Carga",
      description: "Registro inmutable de cada movimiento desde origen hasta destino final",
      benefits: ["Transparencia total", "Reducción de fraude", "Certificación automática"],
      impact: "↓ 40% en disputas documentales"
    },
    {
      icon: Shield,
      title: "Smart Contracts",
      description: "Automatización de pagos y liberación de mercancía según condiciones",
      benefits: ["Pagos instantáneos", "Eliminación de intermediarios", "Cumplimiento automático"],
      impact: "↓ 30% en tiempos de pago"
    },
    {
      icon: Lock,
      title: "Cadena de Custodia",
      description: "Validación de autenticidad para productos de alto valor y farmacéuticos",
      benefits: ["Anti-falsificación", "Cold chain monitoring", "Compliance regulatorio"],
      impact: "↓ 70% en productos falsificados"
    },
    {
      icon: CheckCircle,
      title: "Certificaciones ESG",
      description: "Proof of origin y cumplimiento de estándares de sostenibilidad",
      benefits: ["Carbon footprint tracking", "Fair trade verification", "Auditoría transparente"],
      impact: "↑ 50% en confianza del consumidor"
    }
  ];

  const platforms = [
    {
      name: "TradeLens",
      partners: "Maersk + IBM",
      description: "Plataforma blockchain para shipping y logística internacional",
      adoption: "150+ organizaciones",
      volume: "1B+ eventos rastreados"
    },
    {
      name: "VeChain",
      partners: "Walmart China + DNV",
      description: "Trazabilidad de supply chain con focus en retail y alimentos",
      adoption: "200+ empresas Fortune 500",
      volume: "300M+ productos rastreados"
    },
    {
      name: "IBM Food Trust",
      partners: "Walmart + Carrefour",
      description: "Blockchain para cadena alimentaria end-to-end",
      adoption: "300+ proveedores",
      volume: "40M+ productos diarios"
    },
    {
      name: "MediLedger",
      partners: "FDA + Pharma Alliance",
      description: "Verificación de medicamentos y compliance regulatorio",
      adoption: "25+ farmacéuticas",
      volume: "$230B+ en transacciones"
    }
  ];

  const useCases = [
    {
      title: "Walmart + VeChain: Trazabilidad de Carne de Cerdo en China",
      sector: "Retail & Food",
      description: "Rastreo completo desde granja hasta tienda, reduciendo brotes alimentarios",
      results: ["↓ 95% en tiempo de rastreo", "↑ 60% en confianza del consumidor", "Compliance total con regulación china"],
      status: "Operando desde 2019"
    },
    {
      title: "Maersk + TradeLens: Shipping Documental Sin Papel",
      sector: "Shipping & Logistics",
      description: "Digitalización de Bill of Lading y documentos aduaneros en blockchain",
      results: ["↓ 40% en costos documentales", "↓ 75% en errores", "Reducción de 5-10 días en procesos"],
      status: "Global deployment"
    },
    {
      title: "De Beers: Trazabilidad de Diamantes 'Conflict-Free'",
      sector: "Luxury Goods",
      description: "Certificación de origen ético usando blockchain Tracr",
      results: ["100% trazabilidad", "Eliminación de diamantes de conflicto", "Premium pricing justificado"],
      status: "Industria-wide adoption"
    }
  ];

  const technologies = [
    {
      name: "Blockchain Pública",
      description: "Ethereum, Polygon para máxima transparencia",
      pros: ["Descentralización", "Inmutabilidad", "Auditabilidad pública"],
      cons: ["Costos de gas", "Escalabilidad limitada"]
    },
    {
      name: "Blockchain Privada",
      description: "Hyperledger Fabric para control corporativo",
      pros: ["Privacidad", "Performance", "Control de acceso"],
      cons: ["Menor descentralización", "Dependencia de consorcio"]
    },
    {
      name: "IoT + Blockchain",
      description: "Sensores conectados que escriben en blockchain",
      pros: ["Data en tiempo real", "Automatización", "Validación continua"],
      cons: ["Complejidad técnica", "Costo de dispositivos"]
    },
    {
      name: "NFTs para Assets",
      description: "Tokenización de carga y activos físicos",
      pros: ["Propiedad digital", "Fraccionamiento", "Liquidez"],
      cons: ["Regulación unclear", "Volatilidad"]
    }
  ];

  const challenges = [
    {
      title: "Interoperabilidad",
      description: "Diferentes blockchains no se comunican entre sí",
      severity: "Alto"
    },
    {
      title: "Adopción de la Industria",
      description: "Requiere consenso de múltiples actores de la cadena",
      severity: "Medio"
    },
    {
      title: "Integración Legacy",
      description: "Conectar sistemas ERP/TMS tradicionales con blockchain",
      severity: "Alto"
    },
    {
      title: "Costo de Implementación",
      description: "Inversión inicial elevada para infraestructura y capacitación",
      severity: "Medio"
    }
  ];

  const articles = [
    {
      title: "TradeLens Cierra: Lecciones del Fracaso de Blockchain en Shipping",
      category: "Análisis",
      date: "21 Dic 2024",
      readTime: "9 min"
    },
    {
      title: "Smart Contracts en Logística: Casos de Uso Reales Más Allá del Hype",
      category: "Tecnología",
      date: "17 Dic 2024",
      readTime: "7 min"
    },
    {
      title: "NFTs de Carga: ¿El Futuro de la Documentación o Una Moda Pasajera?",
      category: "Innovación",
      date: "12 Dic 2024",
      readTime: "6 min"
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
            href="/deep-tech"
            className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#00ffff] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver a Deep Tech
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-[#00d4ff]/20 to-[#7b2cbf]/20 rounded-2xl border border-[#00d4ff]/30">
              <LinkIcon className="w-8 h-8 text-[#00d4ff]" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white font-['Exo']">
                Blockchain & Trazabilidad
              </h1>
              <p className="text-xl text-gray-400 mt-2">
                Transparencia y Seguridad en Supply Chains
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: "$3.3B", label: "Mercado blockchain logistics 2024" },
              { value: "↓ 40%", label: "Reducción en fraude documental" },
              { value: "1B+", label: "Transacciones rastreadas" },
              { value: "300+", label: "Empresas Fortune 500 usando" }
            ].map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-xl border border-[#00d4ff]/20">
                <div className="text-3xl font-bold text-[#00d4ff] font-['Exo']">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicaciones en Supply Chain */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Aplicaciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Clave</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {applications.map((app, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[#00d4ff]/10 rounded-xl">
                    <app.icon className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 font-['Exo']">{app.title}</h3>
                    <p className="text-gray-400 mb-4">{app.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  {app.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00d4ff]/10 rounded-full border border-[#00d4ff]/30">
                  <TrendingUp className="w-4 h-4 text-[#00d4ff]" />
                  <span className="text-[#00d4ff] font-semibold text-sm">{app.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plataformas Principales */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Plataformas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Principales</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]"
              >
                <h3 className="text-2xl font-bold text-white mb-2 font-['Exo']">{platform.name}</h3>
                <div className="text-[#c77dff] font-semibold mb-3 text-sm">{platform.partners}</div>
                <p className="text-gray-400 mb-6">{platform.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Adopción</span>
                    <span className="text-[#00d4ff] font-semibold text-sm">{platform.adoption}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Volumen</span>
                    <span className="text-[#00d4ff] font-semibold text-sm">{platform.volume}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Uso Reales */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Casos de Uso <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Reales</span>
          </h2>

          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 font-['Exo']">{useCase.title}</h3>
                    <span className="inline-block px-3 py-1 bg-[#7b2cbf]/20 text-[#c77dff] text-sm rounded-full border border-[#7b2cbf]/30 mb-3">
                      {useCase.sector}
                    </span>
                  </div>
                  <span className="px-4 py-2 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/30 font-semibold">
                    {useCase.status}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-6">{useCase.description}</p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {useCase.results.map((result, i) => (
                    <div key={i} className="bg-[#0a0a0f] p-4 rounded-xl border border-[#00d4ff]/20">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#00d4ff]" />
                        <span className="text-white text-sm font-semibold">{result}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Tecnológico</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20"
              >
                <h3 className="text-2xl font-bold text-white mb-2 font-['Exo']">{tech.name}</h3>
                <p className="text-gray-400 mb-6">{tech.description}</p>
                
                <div className="grid gap-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">✅ Ventajas</div>
                    <div className="space-y-2">
                      {tech.pros.map((pro, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                          <span className="text-gray-300 text-sm">{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500 mb-2">⚠️ Limitaciones</div>
                    <div className="space-y-2">
                      {tech.cons.map((con, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                          <span className="text-gray-300 text-sm">{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desafíos Actuales */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Desafíos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Actuales</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-xl border border-[#00d4ff]/20"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white font-['Exo']">{challenge.title}</h3>
                  <span className={`px-3 py-1 text-xs rounded-full font-semibold ${
                    challenge.severity === 'Alto' ? 'bg-red-500/10 text-red-400 border border-red-500/30' :
                    'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {challenge.severity}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artículos Destacados */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Artículos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Destacados</span>
          </h2>

          <div className="grid gap-6">
            {articles.map((article, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-[#7b2cbf]/20 text-[#c77dff] text-sm rounded-full border border-[#7b2cbf]/30">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm">{article.date}</span>
                      <span className="text-gray-500 text-sm">• {article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00d4ff] transition-colors font-['Exo']">
                      {article.title}
                    </h3>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#00d4ff] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#00d4ff]/10 to-[#7b2cbf]/10 p-12 rounded-3xl border border-[#00d4ff]/30 text-center">
            <h2 className="text-4xl font-bold text-white mb-4 font-['Exo']">
              Mantente Actualizado
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Recibe análisis semanal sobre blockchain y trazabilidad en supply chains
            </p>
            <Link 
              href="/#newsletter"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
            >
              Suscribirte a RadarX
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}