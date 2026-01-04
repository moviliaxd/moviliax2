'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-azul-profundo/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-exo font-bold tracking-tight hover:opacity-80 transition-opacity">
          MOVILIA<span className="text-cian-electrico">X</span>
        </Link>

        {/* Menu Toggle Button (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Abrir menú de navegación"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Navigation Links */}
        <ul 
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } lg:flex flex-col lg:flex-row absolute lg:relative top-full left-0 right-0 lg:top-0 bg-azul-profundo lg:bg-transparent p-4 lg:p-0 gap-2 lg:gap-8 items-center shadow-lg lg:shadow-none`}
        >
          <li>
            <Link 
              href="/contenido" 
              className="text-gris-metalico hover:text-cian-electrico transition-colors block py-2 lg:py-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Contenido
            </Link>
          </li>
          <li>
            <Link 
              href="/podcast" 
              className="text-gris-metalico hover:text-cian-electrico transition-colors block py-2 lg:py-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Podcast
            </Link>
          </li>
          <li>
            <Link 
              href="/connect" 
              className="text-gris-metalico hover:text-cian-electrico transition-colors block py-2 lg:py-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Comunidad
            </Link>
          </li>
          <li>
            <Link 
              href="/#newsletter" 
              className="text-gris-metalico hover:text-cian-electrico transition-colors block py-2 lg:py-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Newsletter
            </Link>
          </li>
          
        
        </ul>
      </nav>
    </header>
  )
}
