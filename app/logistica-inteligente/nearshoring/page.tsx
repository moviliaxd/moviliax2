import Link from 'next/link';
import { ArrowLeft, Globe, TrendingUp, Package, Ship, Factory, MapPin, ExternalLink } from 'lucide-react';

export default function NearshoringPage() {
  const drivers = [
    {
      icon: TrendingUp,
      title: "Tensiones Geopolíticas",
      description: "Guerra comercial USA-China y necesidad de supply chains más resilientes",
      impact: "Relocalización de manufactura"
    },
    {
      icon: Ship,
      title: "Costos de Transporte",
      description: "Aumento del 300% en fletes marítimos post-pandemia",
      impact: "Nearshoring más competitivo"
    },
    {
      icon: Factory,
      title: "T-MEC / USMCA",
      description: "Tratado de libre comercio entre México, USA y Canadá",
      impact: "Ventajas arancelarias"
    },
    {
      icon: Globe,
      title: "ESG & Sostenibilidad",
      description: "Presión por reducir huella de carbono en cadenas de suministro",
      impact: "Supply chains más cortas"
    }
  ];

  const corridors = [
    {
      name: "🇲🇽 México",
      description: "Líder absoluto en nearshoring hacia USA",
      stats: {
        fdi: "+51B USD (2023)",
        sectors: "Auto, Electrónica, Aerospace",
        cities: "Monterrey, Querétaro, Guadalajara"
      },
      advantage: "Proximidad geográfica + T-MEC"
    },
    {
      name: "🇨🇴 Colombia",
      description: "Hub logístico para Sudamérica y acceso a ambos océanos",
      stats: {
        fdi: "+15B USD",
        sectors: "BPO, Tech, Manufactura ligera",
        cities: "Bogotá, Medellín, Barranquilla"
      },
      advantage: "Infraestructura portuaria dual"
    },
    {
      name: "🇨🇱 Chile",
      description: "Puerta de entrada al Pacífico y economía estable",
      stats: {
        fdi: "+10B USD",
        sectors: "Minería, Logística, Data Centers",
        cities: "Santiago, Valparaíso, Antofagasta"
      },
      advantage: "Estabilidad + acuerdos comerciales"
    },
    {
      name: "🇧🇷 Brasil",
      description: "Mercado interno masivo y manufactura avanzada",
      stats: {
        fdi: "+70B USD",
        sectors: "Auto, Agro, Energía",
        cities: "São Paulo, Curitiba, Porto Alegre"
      },
      advantage: "Escala + mercado interno"
    }
  ];

  const sectors = [
    {
      name: "Automotriz",
      growth: "+85%",
      description: "Fábricas de Tesla, GM, BMW relocalizando a México",
      investment: "$40B USD"
    },
    {
      name: "Semiconductores",
      growth: "+120%",
      description: "Intel, Samsung invirtiendo en LATAM post chip shortage",
      investment: "$15B USD"
    },
    {
      name: "E-commerce",
      growth: "+200%",
      description: "Fulfillment centers de Amazon, Mercado Libre, Shopify",
      investment: "$8B USD"
    },
    {
      name: "Nearshore IT",
      growth: "+150%",
      description: "Desarrollo de software y BPO desde LATAM hacia USA/Europa",
      investment: "$25B USD"
    }
  ];

  const challenges = [
    {
      title: "Infraestructura Logística",
      description: "Puertos, carreteras y ferrocarriles requieren modernización urgente",
      status: "En progreso"
    },
    {
      title: "Capacitación Laboral",
      description: "Necesidad de upskilling en manufactura avanzada y tecnología",
      status: "Crítico"
    },
    {
      title: "Energía Limpia",
      description: "Demanda de energías renovables para cumplir con ESG de corporaciones",
      status: "Oportunidad"
    },
    {
      title: "Digitalización",
      description: "Adopción de WMS, TMS y plataformas de gestión de supply chain",
      status: "En desarrollo"
    }
  ];

  const articles = [
    {
      title: "México Supera a China: El Nuevo Gigante Exportador hacia USA",
      category: "Comercio Internacional",
      date: "18 Dic 2024",
      readTime: "7 min"
    },
    {
      title: "T-MEC 2.0: Qué Cambios Vienen en 2026 y Cómo Prepararse",
      category: "Regulación",
      date: "14 Dic 2024",
      readTime: "9 min"
    },
    {
      title: "Corredores Industriales en LATAM: Dónde Están Invirtiendo las Multinacionales",
      category: "Inversión",
      date: "10 Dic 2024",
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
            href="/logistica-inteligente"
            className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#00ffff] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver a Logística Inteligente
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-[#00d4ff]/20 to-[#7b2cbf]/20 rounded-2xl border border-[#00d4ff]/30">
              <Globe className="w-8 h-8 text-[#00d4ff]" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white font-['Exo']">
                Nearshoring & Comercio
              </h1>
              <p className="text-xl text-gray-400 mt-2">
                La Relocalización que Está Transformando LATAM
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: "$200B", label: "Inversión proyectada 2024-2030" },
              { value: "+40%", label: "Exportaciones MX a USA" },
              { value: "2.5M", label: "Empleos generados" },
              { value: "#1", label: "México: Socio comercial USA" }
            ].map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-xl border border-[#00d4ff]/20">
                <div className="text-3xl font-bold text-[#00d4ff] font-['Exo']">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drivers del Nearshoring */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            ¿Por Qué <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Ahora?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {drivers.map((driver, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#00d4ff]/10 rounded-xl">
                    <driver.icon className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 font-['Exo']">{driver.title}</h3>
                    <p className="text-gray-400 mb-3">{driver.description}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7b2cbf]/10 rounded-full border border-[#7b2cbf]/30">
                      <TrendingUp className="w-4 h-4 text-[#c77dff]" />
                      <span className="text-[#c77dff] font-semibold text-sm">{driver.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corredores Estratégicos */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Corredores <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Estratégicos</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {corridors.map((corridor, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]"
              >
                <h3 className="text-3xl font-bold text-white mb-3 font-['Exo']">{corridor.name}</h3>
                <p className="text-gray-400 mb-6">{corridor.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">IED 2023</span>
                    <span className="text-[#00d4ff] font-semibold">{corridor.stats.fdi}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Sectores</span>
                    <span className="text-white font-semibold">{corridor.stats.sectors}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Ciudades clave</span>
                    <span className="text-white font-semibold text-right">{corridor.stats.cities}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#00d4ff]/20">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#c77dff]" />
                    <span className="text-[#c77dff] text-sm font-semibold">{corridor.advantage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores en Auge */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Sectores en <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Auge</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {sectors.map((sector, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white font-['Exo']">{sector.name}</h3>
                  <span className="px-4 py-2 bg-[#00d4ff]/10 text-[#00d4ff] font-bold rounded-full border border-[#00d4ff]/30">
                    {sector.growth}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{sector.description}</p>
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-[#c77dff]" />
                  <span className="text-[#c77dff] font-semibold">{sector.investment} en inversiones</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desafíos y Oportunidades */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Desafíos & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Oportunidades</span>
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
                    challenge.status === 'Crítico' ? 'bg-red-500/10 text-red-400 border border-red-500/30' :
                    challenge.status === 'Oportunidad' ? 'bg-green-500/10 text-green-400 border border-green-500/30' :
                    'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {challenge.status}
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
              Recibe análisis semanal sobre nearshoring y comercio internacional
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