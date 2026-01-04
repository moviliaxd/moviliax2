import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-negro-profundo border-t border-gris-oscuro/30">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-exo font-bold">
                MOVILIA<span className="text-cian-electrico">X</span>
              </h3>
            </Link>
            <p className="text-gris-metalico mb-6 max-w-sm">
              Exploramos, analizamos y conectamos el ecosistema de movilidad en América Latina.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/company/moviliax" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gris-oscuro/30 hover:bg-cian-electrico/20 hover:text-cian-electrico transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-xl">in</span>
              </a>
              <a 
                href="https://twitter.com/moviliax" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gris-oscuro/30 hover:bg-cian-electrico/20 hover:text-cian-electrico transition-colors"
                aria-label="Twitter"
              >
                <span className="text-xl">𝕏</span>
              </a>
              <a 
                href="https://instagram.com/moviliax" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gris-oscuro/30 hover:bg-cian-electrico/20 hover:text-cian-electrico transition-colors"
                aria-label="Instagram"
              >
                <span className="text-xl">📷</span>
              </a>
              <a 
                href="https://youtube.com/@moviliax" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gris-oscuro/30 hover:bg-cian-electrico/20 hover:text-cian-electrico transition-colors"
                aria-label="YouTube"
              >
                <span className="text-xl">▶</span>
              </a>
            </div>
          </div>

          {/* Sobre Moviliax */}
          <div>
            <h4 className="font-exo font-bold text-lg mb-4">Sobre Moviliax</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/manifiesto" 
                  className="text-gris-metalico hover:text-cian-electrico transition-colors"
                >
                  El Manifiesto
                </Link>
              </li>
              <li>
                <Link 
                  href="/equipo" 
                  className="text-gris-metalico hover:text-cian-electrico transition-colors"
                >
                  Nuestro Equipo
                </Link>
              </li>
              <li>
                <Link 
                  href="/colaboradores" 
                  className="text-gris-metalico hover:text-cian-electrico transition-colors"
                >
                  Colabora con Nosotros
                </Link>
              </li>
              <li>
                <Link 
                  href="/contacto" 
                  className="text-gris-metalico hover:text-cian-electrico transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Partnerships */}
          <div>
            <h4 className="font-exo font-bold text-lg mb-4">Partnerships</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/patrocinadores" 
                  className="text-gris-metalico hover:text-cian-electrico transition-colors"
                >
                  Patrocinadores
                </Link>
              </li>
              <li>
                <Link 
                  href="/aliados" 
                  className="text-gris-metalico hover:text-cian-electrico transition-colors"
                >
                  Aliados Estratégicos
                </Link>
              </li>
              <li>
                <Link 
                  href="/media-kit" 
                  className="text-gris-metalico hover:text-cian-electrico transition-colors"
                >
                  Publicidad-Media Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Eventos */}
          <div>
            <h4 className="font-exo font-bold text-lg mb-4">Eventos</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/calendario" 
                  className="text-gris-metalico hover:text-cian-electrico transition-colors"
                >
                  Calendario 2026 (Proximamente)
                </Link>
              </li>
              <li>
                <Link 
                  href="/ferias-congresos" 
                  className="text-gris-metalico hover:text-cian-electrico transition-colors"
                >
                  Ferias y Congresos (Proximamente)
                </Link>
              </li>
              <li>
                <Link 
                  href="/webinars" 
                  className="text-gris-metalico hover:text-cian-electrico transition-colors"
                >
                 Webinars (Proximamente)
                </Link>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Newsletter CTA Strip */}
        <div className="border-t border-b border-gris-oscuro/30 py-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-exo font-bold text-xl mb-2">
                ¿Aún no te suscribes a RadarX?
              </h4>
              <p className="text-gris-metalico">
                Únete a +15K profesionales que reciben insights semanales.
              </p>
            </div>
            <Link 
              href="/#newsletter"
              className="btn-primary whitespace-nowrap"
            >
              Suscríbete Gratis ✨
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gris-metalico">
          <div className="flex flex-wrap items-center gap-6">
            <Link 
              href="/privacidad" 
              className="hover:text-cian-electrico transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link 
              href="/terminos" 
              className="hover:text-cian-electrico transition-colors"
            >
              Términos de Uso
            </Link>
            <Link 
              href="/cookies" 
              className="hover:text-cian-electrico transition-colors"
            >
              Cookies
            </Link>
          </div>
          
          <div>
            <p>© 2025 HManuel Innovación Digital. Moviliax. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}