import Link from 'next/link';
import { ArrowLeft, Brain, TrendingUp, Zap, BarChart3, Network, Cpu, ExternalLink } from 'lucide-react';

export default function IABigDataPage() {
  const applications = [
    {
      icon: TrendingUp,
      title: "Optimización de Rutas",
      description: "Algoritmos de ML que reducen tiempos y costos de entrega en tiempo real",
      impact: "↓ 25% en costos logísticos",
      examples: ["Route optimization", "Dynamic pricing", "Fleet management"]
    },
    {
      icon: BarChart3,
      title: "Forecasting Predictivo",
      description: "Predicción de demanda con redes neuronales para optimizar inventarios",
      impact: "↑ 40% en precisión de pronósticos",
      examples: ["Demand planning", "Inventory optimization", "Sales forecasting"]
    },
    {
      icon: Zap,
      title: "Mantenimiento Predictivo",
      description: "IoT + IA para predecir fallas en flotas antes de que ocurran",
      impact: "↓ 50% en tiempo de inactividad",
      examples: ["Predictive maintenance", "Anomaly detection", "Asset health"]
    },
    {
      icon: Network,
      title: "Supply Chain Visibility",
      description: "Analytics en tiempo real de toda la cadena de suministro",
      impact: "↑ 60% en visibilidad end-to-end",
      examples: ["Real-time tracking", "Risk assessment", "Performance analytics"]
    }
  ];

  const technologies = [
    {
      name: "Machine Learning",
      description: "Modelos supervisados y no supervisados para optimización",
      tools: ["TensorFlow", "PyTorch", "Scikit-learn"],
      useCases: "Clasificación, regresión, clustering"
    },
    {
      name: "Deep Learning",
      description: "Redes neuronales profundas para patrones complejos",
      tools: ["LSTM", "Transformers", "CNN"],
      useCases: "Vision por computadora, NLP, series de tiempo"
    },
    {
      name: "Computer Vision",
      description: "Reconocimiento de objetos y automatización visual",
      tools: ["YOLO", "OpenCV", "Detectron2"],
      useCases: "Quality control, safety monitoring, OCR"
    },
    {
      name: "Data Lakes & Warehouses",
      description: "Arquitecturas para procesamiento masivo de datos",
      tools: ["Snowflake", "Databricks", "BigQuery"],
      useCases: "Data pipelines, ETL, analytics at scale"
    }
  ];

  const companies = [
    {
      name: "Project44",
      country: "🇺🇸",
      focus: "Visibility & Predictive Analytics",
      valuation: "$2.7B"
    },
    {
      name: "FourKites",
      country: "🇺🇸",
      focus: "Real-time Supply Chain Visibility",
      valuation: "$1B+"
    },
    {
      name: "ClearMetal (Blume)",
      country: "🇺🇸",
      focus: "ML-powered Freight Insights",
      valuation: "Acquired"
    },
    {
      name: "Loadsmart",
      country: "🇺🇸",
      focus: "AI Freight Brokerage",
      valuation: "$200M+"
    },
    {
      name: "Rappi (Tech)",
      country: "🇨🇴",
      focus: "Last-mile AI optimization",
      valuation: "$5.25B"
    },
    {
      name: "Nowports",
      country: "🇲🇽",
      focus: "Digital Freight Forwarding + AI",
      valuation: "$1.1B"
    }
  ];

  const dataPoints = [
    {
      metric: "328 Exabytes",
      description: "Datos generados diariamente en supply chains globales",
      growth: "+23% YoY"
    },
    {
      metric: "85%",
      description: "De empresas Fortune 500 usando IA en logística",
      growth: "+40% desde 2020"
    },
    {
      metric: "$15.7B",
      description: "Mercado de AI en Supply Chain (2024)",
      growth: "CAGR 45% hasta 2030"
    },
    {
      metric: "70%",
      description: "Reducción en errores de pronóstico con ML",
      growth: "vs métodos tradicionales"
    }
  ];

  const articles = [
    {
      title: "GPT-4 en Logística: Cómo los LLMs Están Optimizando Operations",
      category: "Inteligencia Artificial",
      date: "20 Dic 2024",
      readTime: "8 min"
    },
    {
      title: "De Excel a IA: La Evolución del Forecasting en Supply Chain",
      category: "Analytics",
      date: "16 Dic 2024",
      readTime: "6 min"
    },
    {
      title: "Computer Vision en Almacenes: 5 Casos de Uso Reales",
      category: "Automatización",
      date: "11 Dic 2024",
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
              <Brain className="w-8 h-8 text-[#00d4ff]" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white font-['Exo']">
                IA & Big Data
              </h1>
              <p className="text-xl text-gray-400 mt-2">
                Optimización y Analítica Predictiva en Movilidad
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {dataPoints.map((point, i) => (
              <div key={i} className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-xl border border-[#00d4ff]/20">
                <div className="text-3xl font-bold text-[#00d4ff] font-['Exo'] mb-2">{point.metric}</div>
                <div className="text-sm text-gray-400 mb-2">{point.description}</div>
                <div className="text-xs text-[#c77dff] font-semibold">{point.growth}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicaciones en Movilidad y Logística */}
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
                    <p className="text-gray-400 mb-3">{app.description}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00d4ff]/10 rounded-full border border-[#00d4ff]/30 mb-4">
                      <TrendingUp className="w-4 h-4 text-[#00d4ff]" />
                      <span className="text-[#00d4ff] font-semibold text-sm">{app.impact}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {app.examples.map((example, i) => (
                    <span key={i} className="px-3 py-1 bg-[#7b2cbf]/10 text-[#c77dff] text-xs rounded-full border border-[#7b2cbf]/30">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologías y Herramientas */}
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
                  <Cpu className="w-6 h-6 text-[#00d4ff]" />
                  <h3 className="text-2xl font-bold text-white font-['Exo']">{tech.name}</h3>
                </div>
                <p className="text-gray-400 mb-4">{tech.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Herramientas principales</div>
                    <div className="flex flex-wrap gap-2">
                      {tech.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1 bg-[#00d4ff]/10 text-[#00d4ff] text-sm rounded-full border border-[#00d4ff]/30">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Casos de uso</div>
                    <div className="text-[#c77dff] text-sm font-semibold">{tech.useCases}</div>
                  </div>
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
                <p className="text-gray-400 text-sm mb-3">{company.focus}</p>
                <div className="pt-3 border-t border-[#00d4ff]/20">
                  <span className="text-[#00d4ff] font-semibold text-sm">{company.valuation}</span>
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
              Recibe insights semanales sobre IA y analytics en movilidad
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