import Link from 'next/link';
import { ArrowLeft, Car, Truck, Plane, Bot, Radar, Navigation, ExternalLink } from 'lucide-react';

export default function AutonomiRoboticaPage() {
  const categories = [
    {
      icon: Car,
      title: "Vehículos Autónomos",
      description: "Self-driving cars y robotaxis transformando la movilidad urbana",
      levels: ["L2: Autopilot", "L3: Conditional", "L4: High automation", "L5: Full autonomy"],
      leaders: ["Waymo", "Cruise", "Tesla FSD"]
    },
    {
      icon: Truck,
      title: "Trucking Autónomo",
      description: "Camiones sin conductor para transporte de carga de largo recorrido",
      levels: ["Hub-to-hub", "Highway pilot", "First-last mile", "Full autonomous"],
      leaders: ["Aurora", "TuSimple", "Kodiak"]
    },
    {
      icon: Plane,
      title: "Drones de Entrega",
      description: "UAVs para última milla y entregas en zonas remotas",
      levels: ["VLOS", "EVLOS", "BVLOS", "Urban air mobility"],
      leaders: ["Zipline", "Wing (Google)", "Amazon Prime Air"]
    },
    {
      icon: Bot,
      title: "AGVs & AMRs",
      description: "Robots móviles para almacenes, fábricas y espacios urbanos",
      levels: ["Fixed path", "Dynamic routing", "Collaborative", "Swarm robotics"],
      leaders: ["Kiva", "Geek+", "Starship"]
    }
  ];

  const technologies = [
    {
      name: "LiDAR & Sensores",
      description: "Percepción 360° del entorno en tiempo real",
      components: ["Velodyne", "Luminar", "Ouster", "Radar 4D"]
    },
    {
      name: "Computer Vision",
      description: "Detección de objetos, señales y peatones",
      components: ["Mobileye", "NVIDIA DRIVE", "Tesla Vision"]
    },
    {
      name: "Planificación de Trayectorias",
      description: "Algoritmos para navegación segura y eficiente",
      components: ["Path planning", "Collision avoidance", "Motion control"]
    },
    {
      name: "V2X Communication",
      description: "Conectividad entre vehículos e infraestructura",
      components: ["5G", "DSRC", "C-V2X", "Edge computing"]
    }
  ];

  const useCases = [
    {
      title: "Robotaxis en Phoenix (Waymo)",
      description: "Servicio comercial de taxis autónomos Level 4 sin conductor de respaldo",
      status: "Operando",
      impact: "100K+ viajes/semana"
    },
    {
      title: "Trucking I-10 Corridor",
      description: "Transporte autónomo de carga entre Texas y California",
      status: "Piloto",
      impact: "↓ 30% en costos por milla"
    },
    {
      title: "Delivery Robots en Campus",
      description: "Robots de entrega en universidades y comunidades cerradas",
      status: "Operando",
      impact: "5M+ entregas realizadas"
    },
    {
      title: "Drones Médicos en África",
      description: "Zipline entregando suministros médicos en Ruanda y Ghana",
      status: "Operando",
      impact: "500K+ entregas urgentes"
    }
  ];

  const challenges = [
    {
      challenge: "Regulación y Certificación",
      description: "Falta de marcos legales claros para operación a escala",
      progress: 40
    },
    {
      challenge: "Edge Cases & Long Tail",
      description: "Situaciones impredecibles que requieren intervención humana",
      progress: 60
    },
    {
      challenge: "Infraestructura V2X",
      description: "Ciudades inteligentes con comunicación vehicular aún en desarrollo",
      progress: 30
    },
    {
      challenge: "Costos de Hardware",
      description: "LiDAR y sensores premium siguen siendo caros",
      progress: 70
    }
  ];

  const companies = [
    {
      name: "Waymo",
      country: "🇺🇸",
      focus: "Robotaxis Level 4",
      valuation: "$30B+",
      status: "Comercial"
    },
    {
      name: "Cruise (GM)",
      country: "🇺🇸",
      focus: "AVs urbanos",
      valuation: "$30B",
      status: "Suspendido"
    },
    {
      name: "Aurora",
      country: "🇺🇸",
      focus: "Trucking autónomo",
      valuation: "$13B",
      status: "Piloto comercial"
    },
    {
      name: "Nuro",
      country: "🇺🇸",
      focus: "Delivery vehicles",
      valuation: "$8.6B",
      status: "Operando"
    },
    {
      name: "Zipline",
      country: "🇺🇸",
      focus: "Medical drones",
      valuation: "$4.2B",
      status: "Global"
    },
    {
      name: "Mobileye (Intel)",
      country: "🇮🇱",
      focus: "ADAS & AV tech",
      valuation: "$17B",
      status: "Proveedor"
    }
  ];

  const articles = [
    {
      title: "Waymo vs Cruise: ¿Por Qué Uno Triunfa y Otro Se Detiene?",
      category: "Análisis",
      date: "19 Dic 2024",
      readTime: "10 min"
    },
    {
      title: "El Futuro del Trucking: ¿Cuándo Veremos Camiones Sin Conductor?",
      category: "Transporte de Carga",
      date: "15 Dic 2024",
      readTime: "8 min"
    },
    {
      title: "Drones de Entrega: De la Promesa a la Realidad en 2025",
      category: "Última Milla",
      date: "10 Dic 2024",
      readTime: "7 min"
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
              <Radar className="w-8 h-8 text-[#00d4ff]" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white font-['Exo']">
                Autonomía & Robótica
              </h1>
              <p className="text-xl text-gray-400 mt-2">
                Vehículos Sin Conductor y Robots Móviles
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: "$400B", label: "Mercado AV proyectado 2030" },
              { value: "Level 4", label: "Autonomía alcanzada (2024)" },
              { value: "15+", label: "Ciudades con robotaxis" },
              { value: "↓ 90%", label: "Reducción en accidentes (meta)" }
            ].map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-xl border border-[#00d4ff]/20">
                <div className="text-3xl font-bold text-[#00d4ff] font-['Exo']">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías de Autonomía */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Categorías de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Autonomía</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[#00d4ff]/10 rounded-xl">
                    <category.icon className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 font-['Exo']">{category.title}</h3>
                    <p className="text-gray-400 mb-4">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="text-sm text-gray-500 mb-2">Niveles de autonomía</div>
                  {category.levels.map((level, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#00d4ff] rounded-full" />
                      <span className="text-gray-300 text-sm">{level}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#00d4ff]/20">
                  <div className="text-sm text-gray-500 mb-2">Líderes del sector</div>
                  <div className="flex flex-wrap gap-2">
                    {category.leaders.map((leader, i) => (
                      <span key={i} className="px-3 py-1 bg-[#7b2cbf]/10 text-[#c77dff] text-xs rounded-full border border-[#7b2cbf]/30">
                        {leader}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Tecnológico</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Navigation className="w-6 h-6 text-[#00d4ff]" />
                  <h3 className="text-2xl font-bold text-white font-['Exo']">{tech.name}</h3>
                </div>
                <p className="text-gray-400 mb-4">{tech.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {tech.components.map((component, i) => (
                    <span key={i} className="px-3 py-1 bg-[#00d4ff]/10 text-[#00d4ff] text-sm rounded-full border border-[#00d4ff]/30">
                      {component}
                    </span>
                  ))}
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

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white font-['Exo']">{useCase.title}</h3>
                  <span className={`px-3 py-1 text-xs rounded-full font-semibold ${
                    useCase.status === 'Operando' ? 'bg-green-500/10 text-green-400 border border-green-500/30' :
                    'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {useCase.status}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00d4ff]/10 rounded-full border border-[#00d4ff]/30">
                  <span className="text-[#00d4ff] font-semibold text-sm">{useCase.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desafíos Técnicos */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Desafíos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Técnicos</span>
          </h2>

          <div className="grid gap-6">
            {challenges.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-xl border border-[#00d4ff]/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 font-['Exo']">{item.challenge}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                  <span className="text-2xl font-bold text-[#00d4ff] ml-4">{item.progress}%</span>
                </div>
                <div className="w-full bg-[#1a1a2e] rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] h-2 rounded-full transition-all"
                    style={{ width: `${item.progress}%` }}
                  />
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
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white font-['Exo']">{company.name}</h3>
                  <span className="text-2xl">{company.country}</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{company.focus}</p>
                <div className="flex items-center justify-between pt-3 border-t border-[#00d4ff]/20">
                  <span className="text-[#00d4ff] font-semibold text-sm">{company.valuation}</span>
                  <span className="text-[#c77dff] text-xs">{company.status}</span>
                </div>
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
              Recibe análisis semanal sobre vehículos autónomos y robótica móvil
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