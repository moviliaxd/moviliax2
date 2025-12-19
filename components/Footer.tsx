import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-negro-carbon border-t border-cian-electrico/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-exo font-bold mb-4">
              MOVILIA<span className="text-cian-electrico">X</span>
            </div>
            <p className="text-gris-metalico mb-4 text-sm leading-relaxed">
              El punto de conexión entre la movilidad humana y la inteligencia tecnológica. 
              Explorando el futuro del movimiento en América Latina.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/share/1C3SnM1Cy8/" 
                className="text-2xl hover:text-cian-electrico transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                📘
              </a>
              <a 
                href="https://x.com/MoviliaxD54988" 
                className="text-2xl hover:text-cian-electrico transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                🐦
              </a>
              <a 
                href="https://www.instagram.com/moviliax_lat" 
                className="text-2xl hover:text-cian-electrico transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                📸
              </a>
              <a 
                href="https://www.linkedin.com/company/moviliax/" 
                className="text-2xl hover:text-cian-electrico transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼
              </a>
              <a 
                href="https://www.youtube.com/@MoviliaXDigital" 
                className="text-2xl hover:text-cian-electrico transition-colors"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▶️
              </a>
            </div>
          </div>

          {/* Contenido */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contenido</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contenido" className="text-gris-metalico hover:text-cian-electrico transition-colors text-sm">
                  Reportajes Especiales
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="text-gris-metalico hover:text-cian-electrico transition-colors text-sm">
                  Entrevistas
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@MoviliaXDigital" 
                  className="text-gris-metalico hover:text-cian-electrico transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Videos
                </a>
              </li>
            </ul>
          </div>

          {/* Comunidad */}
          <div>
            <h4 className="text-white font-semibold mb-4">Comunidad</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/connect" className="text-gris-metalico hover:text-cian-electrico transition-colors text-sm">
                  MOVILIAX Connect
                </Link>
              </li>
              <li>
                <Link href="/colaboradores" className="text-gris-metalico hover:text-cian-electrico transition-colors text-sm">
                  Colaboradores
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gris-metalico hover:text-cian-electrico transition-colors text-sm">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-gris-metalico hover:text-cian-electrico transition-colors text-sm">
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/acerca" className="text-gris-metalico hover:text-cian-electrico transition-colors text-sm">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/acerca#team" className="text-gris-metalico hover:text-cian-electrico transition-colors text-sm">
                  Equipo
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gris-metalico hover:text-cian-electrico transition-colors text-sm">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-gris-metalico hover:text-cian-electrico transition-colors text-sm">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-gris-metalico hover:text-cian-electrico transition-colors text-sm">
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cian-electrico/10 pt-6 text-center">
          <p className="text-gris-metalico text-sm">
            &copy; {currentYear} HManuel Innovación Digital. Todos los derechos reservados. 
            Impulsando el futuro de la movilidad en LATAM.
          </p>
        </div>
      </div>
    </footer>
  )
}
