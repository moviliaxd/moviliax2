import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad - MOVILIAX',
  description: 'Política de Privacidad de MOVILIAX - Comprometidos con la protección de tus datos personales',
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      {/* Hero */}
      <div className="container mx-auto max-w-4xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-exo font-bold mb-4">
          Política de <span className="text-gradient">Privacidad</span>
        </h1>
        <p className="text-gris-metalico text-lg">Tu privacidad es importante para nosotros</p>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl">
        <div className="bg-cian-electrico/5 border border-cian-electrico/20 rounded-xl p-6 mb-8 text-center">
          <p className="text-cian-electrico font-semibold">
            <strong>Última actualización:</strong> 2 de noviembre de 2025
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gris-metalico leading-relaxed mb-8 text-lg">
            En MOVILIAX nos comprometemos a proteger tu privacidad y a ser transparentes sobre cómo recopilamos, 
            usamos y compartimos tu información personal. Esta Política de Privacidad describe nuestras prácticas 
            de manejo de datos cuando utilizas nuestro sitio web y servicios.
          </p>

          <h2 className="text-3xl font-exo font-bold text-cian-electrico mt-12 mb-6 pb-3 border-b border-cian-electrico/30">
            1. Información que Recopilamos
          </h2>
          
          <h3 className="text-2xl font-exo font-bold text-white mt-8 mb-4">
            1.1 Información que Proporcionas Directamente
          </h3>
          <p className="text-gris-metalico leading-relaxed mb-4">
            Recopilamos información que nos proporcionas voluntariamente cuando:
          </p>
          <ul className="text-gris-metalico space-y-2 mb-6">
            <li>Te suscribes a nuestro boletín informativo</li>
            <li>Completas formularios de contacto</li>
            <li>Participas en encuestas o promociones</li>
            <li>Comentas en nuestros artículos</li>
            <li>Envías consultas o solicitudes de información</li>
          </ul>

          <h3 className="text-2xl font-exo font-bold text-white mt-8 mb-4">
            1.2 Información Recopilada Automáticamente
          </h3>
          <p className="text-gris-metalico leading-relaxed mb-4">
            Cuando visitas nuestro sitio web, recopilamos automáticamente cierta información sobre tu dispositivo 
            y tu interacción con nuestro sitio, incluyendo:
          </p>
          <ul className="text-gris-metalico space-y-2 mb-6">
            <li>Dirección IP y ubicación geográfica general</li>
            <li>Tipo de navegador y sistema operativo</li>
            <li>Páginas visitadas y tiempo de permanencia</li>
            <li>Fuente de referencia (cómo llegaste a nuestro sitio)</li>
            <li>Información del dispositivo (modelo, resolución de pantalla)</li>
          </ul>

          <h3 className="text-2xl font-exo font-bold text-white mt-8 mb-4">
            1.3 Cookies y Tecnologías Similares
          </h3>
          <p className="text-gris-metalico leading-relaxed mb-4">
            Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio. 
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo. Utilizamos cookies para:
          </p>
          <ul className="text-gris-metalico space-y-2 mb-8">
            <li>Recordar tus preferencias y configuraciones</li>
            <li>Analizar el tráfico y patrones de uso del sitio</li>
            <li>Personalizar el contenido que ves</li>
            <li>Medir la efectividad de nuestras campañas</li>
          </ul>

          <h2 className="text-3xl font-exo font-bold text-cian-electrico mt-12 mb-6 pb-3 border-b border-cian-electrico/30">
            2. Cómo Usamos Tu Información
          </h2>
          <p className="text-gris-metalico leading-relaxed mb-4">
            Utilizamos la información recopilada para los siguientes propósitos:
          </p>
          <ul className="text-gris-metalico space-y-3 mb-8">
            <li>
              <strong className="text-white">Proveer y mejorar nuestros servicios:</strong> Para entregar el contenido 
              solicitado, responder consultas y mejorar nuestro sitio web
            </li>
            <li>
              <strong className="text-white">Comunicaciones:</strong> Para enviarte boletines informativos, actualizaciones 
              y contenido relevante sobre movilidad sostenible (solo si te has suscrito)
            </li>
            <li>
              <strong className="text-white">Análisis y estadísticas:</strong> Para entender cómo los usuarios interactúan 
              con nuestro sitio y mejorar la experiencia
            </li>
            <li>
              <strong className="text-white">Seguridad:</strong> Para detectar, prevenir y abordar fraudes, abusos o 
              problemas técnicos
            </li>
          </ul>

          <h2 className="text-3xl font-exo font-bold text-cian-electrico mt-12 mb-6 pb-3 border-b border-cian-electrico/30">
            3. Compartir Tu Información
          </h2>
          <p className="text-gris-metalico leading-relaxed mb-6">
            No vendemos, alquilamos ni compartimos tu información personal con terceros para fines comerciales. 
            Podemos compartir tu información en las siguientes circunstancias limitadas:
          </p>

          <h3 className="text-2xl font-exo font-bold text-white mt-8 mb-4">3.1 Proveedores de Servicios</h3>
          <p className="text-gris-metalico leading-relaxed mb-4">
            Compartimos información con proveedores externos que nos ayudan a operar nuestro sitio web y servicios:
          </p>
          <ul className="text-gris-metalico space-y-2 mb-8">
            <li>Servicios de análisis web (Google Analytics)</li>
            <li>Plataformas de email marketing</li>
            <li>Servicios de hosting y almacenamiento en la nube</li>
            <li>Procesadores de pagos (si aplicable)</li>
          </ul>

          <h2 className="text-3xl font-exo font-bold text-cian-electrico mt-12 mb-6 pb-3 border-b border-cian-electrico/30">
            4. Tus Derechos y Opciones
          </h2>
          <p className="text-gris-metalico leading-relaxed mb-6">
            Tienes los siguientes derechos respecto a tu información personal:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-cian-electrico/5 border-l-4 border-cian-electrico p-5 rounded-r-lg">
              <p className="text-base mb-0">
                <strong className="text-white">Derecho de Acceso:</strong> Puedes solicitar una copia de la información 
                personal que tenemos sobre ti.
              </p>
            </div>

            <div className="bg-cian-electrico/5 border-l-4 border-cian-electrico p-5 rounded-r-lg">
              <p className="text-base mb-0">
                <strong className="text-white">Derecho de Rectificación:</strong> Puedes solicitar que corrijamos 
                información inexacta o incompleta.
              </p>
            </div>

            <div className="bg-cian-electrico/5 border-l-4 border-cian-electrico p-5 rounded-r-lg">
              <p className="text-base mb-0">
                <strong className="text-white">Derecho de Supresión:</strong> Puedes solicitar que eliminemos tu 
                información personal, sujeto a ciertas excepciones legales.
              </p>
            </div>

            <div className="bg-cian-electrico/5 border-l-4 border-cian-electrico p-5 rounded-r-lg">
              <p className="text-base mb-0">
                <strong className="text-white">Derecho de Oposición:</strong> Puedes oponerte al procesamiento de 
                tu información personal para ciertos fines.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-exo font-bold text-white mt-8 mb-4">4.1 Cancelar Suscripción</h3>
          <p className="text-gris-metalico leading-relaxed mb-8">
            Puedes cancelar tu suscripción a nuestros boletines en cualquier momento haciendo clic en el enlace 
            "Cancelar suscripción" que aparece en cada email, o contactándonos directamente.
          </p>

          <h2 className="text-3xl font-exo font-bold text-cian-electrico mt-12 mb-6 pb-3 border-b border-cian-electrico/30">
            5. Seguridad de los Datos
          </h2>
          <p className="text-gris-metalico leading-relaxed mb-4">
            Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal:
          </p>
          <ul className="text-gris-metalico space-y-2 mb-6">
            <li>Encriptación SSL/TLS para la transmisión de datos</li>
            <li>Controles de acceso estrictos</li>
            <li>Monitoreo regular de sistemas</li>
            <li>Capacitación del personal en protección de datos</li>
          </ul>
          <p className="text-gris-metalico leading-relaxed mb-8">
            Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro. 
            No podemos garantizar la seguridad absoluta de tu información.
          </p>

          <h2 className="text-3xl font-exo font-bold text-cian-electrico mt-12 mb-6 pb-3 border-b border-cian-electrico/30">
            6. Contacto
          </h2>
          <div className="bg-violeta-tech/10 border border-violeta-tech/30 rounded-xl p-8 text-center">
            <h3 className="text-violeta-tech font-bold text-xl mb-4">¿Preguntas sobre tu Privacidad?</h3>
            <p className="text-gris-metalico mb-4">
              Si tienes preguntas, inquietudes o deseas ejercer tus derechos relacionados con tu información personal:
            </p>
            <p className="text-cian-electrico font-semibold mb-1">
              <a href="mailto:privacidad@moviliax.com" className="hover:underline">privacidad@moviliax.com</a>
            </p>
            <p className="text-gris-metalico text-sm">
              Responderemos a tu solicitud dentro de los 30 días hábiles siguientes a su recepción.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-gris-metalico">
              Al utilizar nuestro sitio web y servicios, aceptas esta Política de Privacidad y nuestros{' '}
              <Link href="/terminos" className="text-cian-electrico hover:underline">Términos y Condiciones</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}