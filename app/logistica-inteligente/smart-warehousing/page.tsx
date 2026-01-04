import Link from 'next/link';
import { ArrowLeft, Package, Bot, Wifi, BarChart3, Cpu, TrendingUp, ExternalLink } from 'lucide-react';

export default function SmartWarehousingPage() {
  const technologies = [
    {
      icon: Package,
      name: "WMS Avanzados",
      description: "Sistemas de gestión de almacenes con IA para optimización en tiempo real",
      examples: ["Manhattan Associates", "SAP EWM", "Oracle WMS"]
    },
    {
      icon: Bot,
      name: "Robots AGV/AMR",
      description: "Vehículos autónomos para transporte interno de mercancías",
      examples: ["Kiva (Amazon)", "Geek+", "GreyOrange"]
    },
    {
      icon: Wifi,
      name: "IoT & Sensores",
      description: "Red de dispositivos para monitoreo continuo de inventario y condiciones",
      examples: ["RFID", "Beacons", "Sensores ambientales"]
    },
    {
      icon: Cpu,
      name: "Automatización",
      description: "Sistemas de picking, sorting y embalaje automatizados",
      examples: ["AutoStore", "Shuttle Systems", "Pick-to-Light"]
    }
  ];

  const useCases = [
    {
      title: "E-commerce Fulfillment",
      description: "Centros de distribución automatizados para procesamiento de órdenes online a alta velocidad",
      impact: "↑ 300% en capacidad de procesamiento"
    },
    {
      title: "Cold Chain",
      description: "Almacenes refrigerados con monitoreo IoT para productos perecederos y farmacéuticos",
      impact: "↓ 40% en pérdidas por cadena de frío"
    },
    {
      title: "Micro-Fulfillment",
      description: "Mini-almacenes urbanos automatizados para entrega rápida en última milla",
      impact: "↓ 60% en tiempo de entrega"
    },
    {
      title: "Cross-Docking",
      description: "Transferencia directa sin almacenamiento prolongado usando IA para coordinación",
      impact: "↓ 50% en costos de inventario"
    }
  ];

  const companies = [
    { name: "Amazon Robotics", country: "🇺🇸", focus: "AGVs y automatización" },
    { name: "Geek+", country: "🇨🇳", focus: "Robótica de almacén" },
    { name: "AutoStore", country: "🇳🇴", focus: "Sistemas cúbicos" },
    { name: "Dematic", country: "🇺🇸", focus: "Soluciones integrales" },
    { name: "Magazino", country: "🇩🇪", focus: "Robots móviles" },
    { name: "Locus Robotics", country: "🇺🇸", focus: "AMRs colaborativos" }
  ];

  const articles = [
    {
      title: "La Revolución de los Dark Warehouses: Almacenes sin Luz ni Calefacción",
      category: "Innovación",
      date: "15 Dic 2024",
      readTime: "6 min"
    },
    {
      title: "AutoStore vs. Geek+: Comparativa de Sistemas de Almacenamiento Automatizado",
      category: "Tecnología",
      date: "12 Dic 2024",
      readTime: "8 min"
    },
    {
      title: "Micro-Fulfillment Centers en LATAM: ¿El Futuro del E-commerce?",
      category: "Tendencias",
      date: "8 Dic 2024",
      readTime: "5 min"
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
              <Package className="w-8 h-8 text-[#00d4ff]" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white font-['Exo']">
                Smart Warehousing
              </h1>
              <p className="text-xl text-gray-400 mt-2">
                Automatización y Gestión Inteligente de Almacenes
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: "85%", label: "Reducción en errores" },
              { value: "3x", label: "Aumento en throughput" },
              { value: "$50B", label: "Mercado global 2024" },
              { value: "40%", label: "Ahorro en costos" }
            ].map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-xl border border-[#00d4ff]/20">
                <div className="text-3xl font-bold text-[#00d4ff] font-['Exo']">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologías Clave */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Tecnologías <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Clave</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[#00d4ff]/10 rounded-xl">
                    <tech.icon className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 font-['Exo']">{tech.name}</h3>
                    <p className="text-gray-400">{tech.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {tech.examples.map((example, i) => (
                    <span key={i} className="px-3 py-1 bg-[#00d4ff]/10 text-[#00d4ff] text-sm rounded-full border border-[#00d4ff]/30">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Casos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Uso</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-3 font-['Exo']">{useCase.title}</h3>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00d4ff]/10 rounded-full border border-[#00d4ff]/30">
                  <TrendingUp className="w-4 h-4 text-[#00d4ff]" />
                  <span className="text-[#00d4ff] font-semibold">{useCase.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empresas Líderes */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Empresas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Líderes</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white font-['Exo']">{company.name}</h3>
                  <span className="text-2xl">{company.country}</span>
                </div>
                <p className="text-gray-400 text-sm">{company.focus}</p>
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
              Recibe cada domingo las últimas novedades en automatización de almacenes
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