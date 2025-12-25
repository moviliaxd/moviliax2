import Link from 'next/link';
import { ArrowLeft, Cookie, Shield, Settings, Eye, BarChart3, Target, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export default function CookiesPage() {
  const cookieTypes = [
    {
      icon: Shield,
      type: "Cookies Estrictamente Necesarias",
      status: "Siempre Activas",
      required: true,
      description: "Estas cookies son esenciales para que el sitio web funcione correctamente. No se pueden desactivar.",
      examples: [
        "Cookies de sesión para mantener tu login",
        "Cookies de seguridad para prevenir ataques",
        "Cookies de preferencias básicas de navegación"
      ],
      duration: "Sesión o hasta 1 año",
      canDisable: false
    },
    {
      icon: BarChart3,
      type: "Cookies Analíticas",
      status: "Opcionales",
      required: false,
      description: "Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio mediante la recopilación de información de forma anónima.",
      examples: [
        "Google Analytics (_ga, _gid, _gat)",
        "Métricas de rendimiento del sitio",
        "Análisis de comportamiento de usuarios"
      ],
      duration: "Hasta 2 años",
      canDisable: true,
      providers: ["Google Analytics", "Hotjar"]
    },
    {
      icon: Target,
      type: "Cookies de Marketing",
      status: "Opcionales",
      required: false,
      description: "Se utilizan para rastrear visitantes en los sitios web. La intención es mostrar anuncios relevantes y atractivos.",
      examples: [
        "Cookies de remarketing de Google Ads",
        "LinkedIn Insight Tag",
        "Facebook Pixel"
      ],
      duration: "Hasta 2 años",
      canDisable: true,
      providers: ["Google Ads", "LinkedIn", "Meta"]
    },
    {
      icon: Eye,
      type: "Cookies de Preferencias",
      status: "Opcionales",
      required: false,
      description: "Permiten que el sitio web recuerde información que cambia la forma en que se comporta o se ve el sitio.",
      examples: [
        "Idioma preferido",
        "Región o país seleccionado",
        "Configuración de visualización"
      ],
      duration: "Hasta 1 año",
      canDisable: true
    }
  ];

  const cookieTable = [
    {
      name: "_ga",
      provider: "Google Analytics",
      purpose: "Distinguir usuarios únicos",
      type: "Analítica",
      duration: "2 años"
    },
    {
      name: "_gid",
      provider: "Google Analytics",
      purpose: "Distinguir usuarios únicos",
      type: "Analítica",
      duration: "24 horas"
    },
    {
      name: "_gat",
      provider: "Google Analytics",
      purpose: "Limitar tasa de solicitudes",
      type: "Analítica",
      duration: "1 minuto"
    },
    {
      name: "moviliax_session",
      provider: "Moviliax",
      purpose: "Mantener sesión de usuario",
      type: "Necesaria",
      duration: "Sesión"
    },
    {
      name: "moviliax_preferences",
      provider: "Moviliax",
      purpose: "Guardar preferencias de usuario",
      type: "Preferencias",
      duration: "1 año"
    },
    {
      name: "_fbp",
      provider: "Facebook",
      purpose: "Entregar y medir anuncios",
      type: "Marketing",
      duration: "3 meses"
    },
    {
      name: "li_gc",
      provider: "LinkedIn",
      purpose: "Guardar consentimiento de cookies",
      type: "Marketing",
      duration: "2 años"
    }
  ];

  const thirdParties = [
    {
      name: "Google Analytics",
      purpose: "Análisis de tráfico y comportamiento de usuarios",
      privacy: "https://policies.google.com/privacy",
      optOut: "https://tools.google.com/dlpage/gaoptout"
    },
    {
      name: "Google Ads",
      purpose: "Publicidad y remarketing",
      privacy: "https://policies.google.com/privacy",
      optOut: "https://adssettings.google.com/"
    },
    {
      name: "LinkedIn Insight",
      purpose: "Analytics y conversión de anuncios",
      privacy: "https://www.linkedin.com/legal/privacy-policy",
      optOut: "https://www.linkedin.com/psettings/guest-controls"
    },
    {
      name: "Meta Pixel",
      purpose: "Medición y optimización de campañas",
      privacy: "https://www.facebook.com/privacy/policy/",
      optOut: "https://www.facebook.com/settings?tab=ads"
    }
  ];

  const controlMethods = [
    {
      icon: Settings,
      title: "Configuración del Navegador",
      description: "Puedes configurar tu navegador para rechazar cookies o para que te avise cuando se envíen.",
      links: [
        { browser: "Chrome", url: "https://support.google.com/chrome/answer/95647" },
        { browser: "Firefox", url: "https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer" },
        { browser: "Safari", url: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" },
        { browser: "Edge", url: "https://support.microsoft.com/microsoft-edge/delete-cookies-63947406-40ac-c3b8-57b9-2a946a29ae09" }
      ]
    },
    {
      icon: Shield,
      title: "Panel de Preferencias",
      description: "Usa nuestro panel de configuración de cookies para gestionar tus preferencias en cualquier momento.",
      action: "Abrir Panel de Cookies"
    },
    {
      icon: Target,
      title: "Herramientas de Opt-Out",
      description: "Utiliza herramientas de la industria para optar por no recibir publicidad personalizada.",
      links: [
        { name: "Your Ad Choices", url: "https://www.youradchoices.com/" },
        { name: "Network Advertising Initiative", url: "https://optout.networkadvertising.org/" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#00ffff] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver al Home
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-[#00d4ff]/20 to-[#7b2cbf]/20 rounded-2xl border border-[#00d4ff]/30">
              <Cookie className="w-8 h-8 text-[#00d4ff]" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white font-['Exo']">
                Política de Cookies
              </h1>
              <p className="text-xl text-gray-400 mt-2">
                Última actualización: 25 de diciembre de 2024
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#00d4ff]/10 to-[#7b2cbf]/10 p-6 rounded-xl border border-[#00d4ff]/30 mt-8">
            <p className="text-gray-300 leading-relaxed">
              En Moviliax utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación, 
              analizar el tráfico del sitio, personalizar contenido y ofrecer funciones de redes sociales. 
              Esta política explica qué son las cookies, cómo las usamos y cómo puedes controlarlas.
            </p>
          </div>
        </div>
      </section>

      {/* ¿Qué son las cookies? */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 font-['Exo']">
            ¿Qué son las <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Cookies?</span>
          </h2>

          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20">
            <p className="text-gray-300 leading-relaxed mb-6">
              Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo cuando los visitas. 
              Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, proporcionar información 
              a los propietarios del sitio y mejorar la experiencia del usuario.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#0a0a0f] p-4 rounded-xl border border-[#00d4ff]/20">
                <AlertCircle className="w-6 h-6 text-[#00d4ff] mb-2" />
                <h3 className="font-bold text-white mb-2">Propias</h3>
                <p className="text-gray-400 text-sm">Establecidas por Moviliax.lat directamente</p>
              </div>
              <div className="bg-[#0a0a0f] p-4 rounded-xl border border-[#00d4ff]/20">
                <AlertCircle className="w-6 h-6 text-[#c77dff] mb-2" />
                <h3 className="font-bold text-white mb-2">De Terceros</h3>
                <p className="text-gray-400 text-sm">Establecidas por servicios externos como Google</p>
              </div>
              <div className="bg-[#0a0a0f] p-4 rounded-xl border border-[#00d4ff]/20">
                <AlertCircle className="w-6 h-6 text-[#7b2cbf] mb-2" />
                <h3 className="font-bold text-white mb-2">Persistentes</h3>
                <p className="text-gray-400 text-sm">Permanecen tras cerrar el navegador</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Cookies */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-[#0a0a0f]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Tipos de Cookies que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Utilizamos</span>
          </h2>

          <div className="space-y-6">
            {cookieTypes.map((cookie, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 bg-[#00d4ff]/10 rounded-xl">
                      <cookie.icon className="w-6 h-6 text-[#00d4ff]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 font-['Exo']">{cookie.type}</h3>
                      <p className="text-gray-400 mb-4">{cookie.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {cookie.required ? (
                      <span className="px-4 py-2 bg-green-500/10 text-green-400 text-sm rounded-full border border-green-500/30 font-semibold flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        {cookie.status}
                      </span>
                    ) : (
                      <span className="px-4 py-2 bg-yellow-500/10 text-yellow-400 text-sm rounded-full border border-yellow-500/30 font-semibold flex items-center gap-2">
                        <Settings className="w-4 h-4" />
                        {cookie.status}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Ejemplos de uso:</h4>
                    <div className="space-y-2">
                      {cookie.examples.map((example, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="mt-1 w-1.5 h-1.5 bg-[#00d4ff] rounded-full flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-[#0a0a0f] p-4 rounded-xl border border-[#00d4ff]/20">
                      <div className="text-sm text-gray-400 mb-1">Duración</div>
                      <div className="text-white font-semibold">{cookie.duration}</div>
                    </div>
                    
                    {cookie.providers && (
                      <div className="bg-[#0a0a0f] p-4 rounded-xl border border-[#00d4ff]/20">
                        <div className="text-sm text-gray-400 mb-2">Proveedores</div>
                        <div className="flex flex-wrap gap-2">
                          {cookie.providers.map((provider, i) => (
                            <span key={i} className="px-2 py-1 bg-[#7b2cbf]/10 text-[#c77dff] text-xs rounded-full border border-[#7b2cbf]/30">
                              {provider}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="bg-[#0a0a0f] p-4 rounded-xl border border-[#00d4ff]/20">
                      <div className="flex items-center gap-2">
                        {cookie.canDisable ? (
                          <>
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 text-sm font-semibold">Puede desactivarse</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 text-red-400" />
                            <span className="text-red-400 text-sm font-semibold">No puede desactivarse</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabla de Cookies */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Cookies <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Específicas</span>
          </h2>

          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl border border-[#00d4ff]/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0a0a0f] border-b border-[#00d4ff]/20">
                    <th className="px-6 py-4 text-left text-sm font-bold text-[#00d4ff]">Nombre</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[#00d4ff]">Proveedor</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[#00d4ff]">Propósito</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[#00d4ff]">Tipo</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[#00d4ff]">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTable.map((cookie, index) => (
                    <tr key={index} className="border-b border-[#00d4ff]/10 hover:bg-[#0a0a0f]/50 transition-colors">
                      <td className="px-6 py-4">
                        <code className="text-sm text-white bg-[#0a0a0f] px-2 py-1 rounded">{cookie.name}</code>
                      </td>
                      <td className="px-6 py-4 text-gray-300 text-sm">{cookie.provider}</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">{cookie.purpose}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                          cookie.type === 'Necesaria' ? 'bg-green-500/10 text-green-400 border border-green-500/30' :
                          cookie.type === 'Analítica' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30' :
                          cookie.type === 'Marketing' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30' :
                          'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          {cookie.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300 text-sm">{cookie.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios de Terceros */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-[#0a0a0f]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Servicios de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Terceros</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {thirdParties.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-2xl border border-[#00d4ff]/20"
              >
                <h3 className="text-xl font-bold text-white mb-3 font-['Exo']">{service.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.purpose}</p>
                
                <div className="space-y-2">
                  <a 
                    href={service.privacy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#00d4ff] hover:text-[#00ffff] transition-colors text-sm"
                  >
                    <Shield className="w-4 h-4" />
                    Ver Política de Privacidad
                  </a>
                  <a 
                    href={service.optOut}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#c77dff] hover:text-[#d896ff] transition-colors text-sm"
                  >
                    <Settings className="w-4 h-4" />
                    Configurar Preferencias
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo Controlar las Cookies */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 font-['Exo']">
            Cómo Controlar las <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf]">Cookies</span>
          </h2>

          <div className="space-y-6">
            {controlMethods.map((method, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-[#00d4ff]/10 rounded-xl">
                    <method.icon className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 font-['Exo']">{method.title}</h3>
                    <p className="text-gray-400">{method.description}</p>
                  </div>
                </div>

                {method.links && (
                  <div className="flex flex-wrap gap-3">
                    {method.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#0a0a0f] text-[#00d4ff] rounded-lg border border-[#00d4ff]/30 hover:border-[#00d4ff] transition-all text-sm font-semibold"
                      >
                        {'browser' in link ? link.browser : link.name}
                      </a>
                    ))}
                  </div>
                )}

                {method.action && (
                  <button className="px-6 py-3 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all">
                    {method.action}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consecuencias de Deshabilitar Cookies */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-[#0a0a0f]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-8 rounded-2xl border border-yellow-500/30">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 font-['Exo']">
                  Importante: Consecuencias de Deshabilitar Cookies
                </h3>
                <p className="text-gray-300 mb-4">
                  Si decides deshabilitar o rechazar cookies, algunas partes de nuestro sitio web pueden no funcionar correctamente:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-300 text-sm">No podrás mantener tu sesión iniciada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Tus preferencias de idioma y región no se guardarán</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Algunas funciones interactivas pueden no estar disponibles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-300 text-sm">No podremos mejorar nuestros servicios basándonos en tu comportamiento</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto y Actualizaciones */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20">
              <h3 className="text-2xl font-bold text-white mb-4 font-['Exo']">Actualizaciones</h3>
              <p className="text-gray-400 mb-4">
                Podemos actualizar esta Política de Cookies periódicamente. Te notificaremos de cualquier cambio 
                significativo mediante un aviso en nuestro sitio web.
              </p>
              <div className="text-sm text-[#c77dff]">
                Última actualización: 25 de diciembre de 2024
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl border border-[#00d4ff]/20">
              <h3 className="text-2xl font-bold text-white mb-4 font-['Exo']">¿Preguntas?</h3>
              <p className="text-gray-400 mb-4">
                Si tienes preguntas sobre nuestra Política de Cookies, no dudes en contactarnos.
              </p>
              <Link 
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00d4ff] to-[#7b2cbf] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
              >
                Contactar
              </Link>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 rounded-2xl border border-[#00d4ff]/20">
            <h4 className="font-bold text-white mb-4">Documentos Relacionados</h4>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/privacidad"
                className="text-[#00d4ff] hover:text-[#00ffff] transition-colors text-sm"
              >
                Política de Privacidad
              </Link>
              <Link 
                href="/terminos"
                className="text-[#00d4ff] hover:text-[#00ffff] transition-colors text-sm"
              >
                Términos y Condiciones
              </Link>
              <Link 
                href="/contacto"
                className="text-[#00d4ff] hover:text-[#00ffff] transition-colors text-sm"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}