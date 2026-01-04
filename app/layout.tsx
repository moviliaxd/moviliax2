import ClientProviders from './ClientProviders'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MOVILIAX - El Futuro de la Movilidad en Movimiento | Plataforma #1 en LATAM',
  description:
    'Exploramos, analizamos y conectamos el ecosistema de movilidad en América Latina. Desde vehículos eléctricos hasta ciudades inteligentes.',
  keywords: [
    'movilidad',
    'América Latina',
    'vehículos eléctricos',
    'EVs',
    'ciudades inteligentes',
    'transporte sostenible',
    'MOVILIAX',
  ],
  authors: [{ name: 'HManuel Innovación Digital' }],

  openGraph: {
    type: 'website',
    url: 'https://moviliax.lat/',
    title: 'MOVILIAX - El Futuro de la Movilidad en Movimiento',
    description:
      'Exploramos, analizamos y conectamos el ecosistema de movilidad en América Latina.',
    siteName: 'MOVILIAX',
    images: [
      {
        url: 'https://moviliax.lat/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_MX',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@MoviliaxD54988',
    title: 'MOVILIAX - El Futuro de la Movilidad en Movimiento',
    description:
      'Exploramos, analizamos y conectamos el ecosistema de movilidad en América Latina.',
    images: ['https://moviliax.lat/images/twitter-image.jpg'],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <body>
        <a href="#main-content" className="skip-to-main">
          Saltar al contenido principal
        </a>

        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  )
}
``
