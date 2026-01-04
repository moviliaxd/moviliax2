import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones - MOVILIAX',
  description: 'Términos y Condiciones de Uso de MOVILIAX - Reglas y directrices para el uso de nuestros servicios',
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      {/* Hero */}
      <div className="container mx-auto max-w-4xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-exo font-bold mb-4">
          Términos y <span className="text-gradient">Condiciones</span>
        </h1>
        <p className="text-gris-metalico text-lg">Términos de uso de nuestros servicios</p>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl">
        <div className="bg-cian-electrico/5 border border-cian-electrico/20 rounded-xl p-6 mb-8 text-center">
          <p className="text-cian-electrico font-semibold">
            <strong>Última actualización:</strong> 2 de noviembre de 2025
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-violeta-tech/10 border-l-4 border-violeta-tech p-6 rounded-r-lg mb-8">
            <p className="text-base leading-relaxed mb-0">
              <strong>Bienvenido a MOVILIAX.</strong> Estos Términos y Condiciones de Uso establecen las reglas 
              y regulaciones para el uso de nuestro sitio web y servicios. Al acceder o usar MOVILIAX, aceptas 
              estar sujeto a estos términos. Si no estás de acuerdo con alguna parte de estos términos, no debes 
              usar nuestros servicios.
            </p>
          </div>

          <h2 className="text-3xl font-exo font-bold text-cian-electrico mt-12 mb-6 pb-3 border-b border-cian-electrico/30">
            1. Aceptación de los Términos
          </h2>
          <p className="text-gris-metalico leading-relaxed mb-6">
            Al acceder, navegar o utilizar el sitio web de MOVILIAX (en adelante, "el Sitio"), o cualquier servicio, 
            contenido o funcionalidad disponible a través del mismo, aceptas cumplir y estar sujeto a estos Términos 
            y Condiciones, así como a nuestra <Link href="/privacidad" className="text-cian-electrico hover:underline">Política de Privacidad</Link>.
          </p>

          <h2 className="text-3xl font-exo font-bold text-cian-electrico mt-12 mb-6 pb-3 border-b border-cian-electrico/30">
            2. Descripción del Servicio
          </h2>
          <p className="text-gris-metalico leading-relaxed mb-4">
            MOVILIAX es una plataforma digital especializada en contenido sobre movilidad sostenible, vehículos 
            eléctricos, ciudades inteligentes y transporte del futuro en América Latina. Nuestros servicios incluyen:
          </p>
          <ul className="text-gris-metalico space-y-2 mb-6">
            <li>Artículos, análisis y reportajes sobre movilidad sostenible</li>
            <li>Noticias y actualizaciones sobre vehículos eléctricos</li>
            <li>Guías, reseñas y comparativas de EVs</li>
            <li>Información sobre políticas públicas y tendencias del sector</li>
            <li>Boletines informativos por correo electrónico</li>
            <li>Contenido multimedia (videos, infografías, podcasts)</li>
          </ul>

          <h2 className="text-3xl font-exo font-bold text-cian-electrico mt-12 mb-6 pb-3 border-b border-cian-electrico/30">
            3. Uso Aceptable
          </h2>
          <h3 className="text-2xl font-exo font-bold text-white mt-8 mb-4">3.1 Restricciones de Uso</h3>
          <p className="text-gris-metalico leading-relaxed mb-4">
            Al utilizar nuestros servicios, te comprometes a NO:
          </p>
          <ul className="text-gris-metalico space-y-2 mb-6">
            <li>Usar el Sitio para fines ilegales o no autorizados</li>
            <li>Copiar, modificar, distribuir o explotar comercialmente nuestro contenido sin autorización</li>
            <li>Recopilar información de otros usuarios sin su consentimiento</li>
            <li>Transmitir virus, malware o cualquier código malicioso</li>
            <li>Crear cuentas fraudulentas o proporcionar información falsa</li>
          </ul>

          <h2 className="text-3xl font-exo font-bold text-cian-electrico mt-12 mb-6 pb-3 border-b border-cian-electrico/30">
            4. Propiedad Intelectual
          </h2>
          <p className="text-gris-metalico leading-relaxed mb-6">
            Todo el contenido del Sitio, incluyendo pero no limitado a texto, gráficos, logotipos, iconos, imágenes, 
            clips de audio, descargas digitales, compilaciones de datos y software, es propiedad de MOVILIAX o de sus 
            proveedores de contenido y está protegido por leyes de derechos de autor internacionales.
          </p>

          <div className="bg-cian-electrico/5 border-l-4 border-cian-electrico p-6 rounded-r-lg mb-8">
            <p className="text-base leading-relaxed mb-0">
              <strong>Contenido Editorial:</strong> Puedes citar extractos breves de nuestros artículos para fines 
              de crítica, comentario o información, siempre que proporciones la atribución adecuada y un enlace al 
              artículo original.
            </p>
          </div>

          <h2 className="text-3xl font-exo font-bold text-cian-electrico mt-12 mb-6 pb-3 border-b border-cian-electrico/30">
            5. Privacidad y Datos Personales
          </h2>
          <p className="text-gris-metalico leading-relaxed mb-6">
            El uso que hacemos de tu información personal está regido por nuestra{' '}
            <Link href="/privacidad" className="text-cian-electrico hover:underline">Política de Privacidad</Link>. 
            Al usar nuestros servicios, consientes la recopilación y uso de tu información según se describe en dicha política.
          </p>

          <h2 className="text-3xl font-exo font-bold text-cian-electrico mt-12 mb-6 pb-3 border-b border-cian-electrico/30">
            6. Limitación de Responsabilidad
          </h2>
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
            <h4 className="text-red-400 font-bold mb-3">⚠️ Descargo de Responsabilidad</h4>
            <p className="text-gris-metalico mb-0">
              El uso de nuestro Sitio y servicios es bajo tu propio riesgo. Todos los servicios se proporcionan 
              "tal cual" sin garantías de ningún tipo, ya sean expresas o implícitas.
            </p>
          </div>

          <h2 className="text-3xl font-exo font-bold text-cian-electrico mt-12 mb-6 pb-3 border-b border-cian-electrico/30">
            7. Contacto Legal
          </h2>
          <div className="bg-violeta-tech/10 border border-violeta-tech/30 rounded-xl p-8 text-center">
            <h3 className="text-violeta-tech font-bold text-xl mb-4">Información de Contacto</h3>
            <p className="text-gris-metalico mb-2">
              Para cualquier pregunta sobre estos Términos y Condiciones:
            </p>
            <p className="text-cian-electrico font-semibold mb-1">
              <a href="mailto:legal@moviliax.com" className="hover:underline">legal@moviliax.com</a>
            </p>
            <p className="text-gris-metalico text-sm">Tiempo de respuesta: 5-7 días hábiles</p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-gris-metalico">
              Gracias por ser parte de la comunidad MOVILIAX. Juntos estamos construyendo el futuro de la 
              movilidad sostenible en América Latina.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}