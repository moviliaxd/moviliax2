import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'MOVILIAX - El Futuro de la Movilidad en Movimiento | Plataforma #1 en LATAM',
  description: 'Exploramos, analizamos y conectamos el ecosistema de movilidad en América Latina. Desde vehículos eléctricos hasta ciudades inteligentes.',
  keywords: ['movilidad', 'América Latina', 'vehículos eléctricos', 'EVs', 'ciudades inteligentes', 'transporte sostenible', 'MOVILIAX'],
  authors: [{ name: 'HLG Innovación Digital' }],
  openGraph: {
    type: 'website',
    url: 'https://moviliax.com/',
    title: 'MOVILIAX - El Futuro de la Movilidad en Movimiento',
    description: 'Exploramos, analizamos y conectamos el ecosistema de movilidad en América Latina.',
    siteName: 'MOVILIAX',
    images: [{
      url: 'https://moviliax.com/images/og-image.jpg',
      width: 1200,
      height: 630,
    }],
    locale: 'es_MX',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MoviliaxD54988',
    title: 'MOVILIAX - El Futuro de la Movilidad en Movimiento',
    description: 'Exploramos, analizamos y conectamos el ecosistema de movilidad en América Latina.',
    images: ['https://moviliax.com/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/genfavicon-32.png',
    apple: '/images/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-MX">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        
        {/* Skip to content para accesibilidad */}
        <a href="#main-content" className="skip-to-main">
          Saltar al contenido principal
        </a>
        
        <Header />
        
        <main id="main-content">
          {children}
        </main>
        
        <Footer />

        <ScrollToTop />
      </body>
    </html>
  )
}
