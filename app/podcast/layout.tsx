import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MOVILIAX Talks | El Podcast de Movilidad en LATAM',
  description: 'Conversaciones profundas con los visionarios que están construyendo el futuro de la movilidad. CEOs, innovadores y expertos comparten sus insights más valiosos.',
  keywords: ['podcast movilidad', 'EVs', 'ciudades inteligentes', 'transporte sostenible', 'América Latina'],
  openGraph: {
    title: 'MOVILIAX Talks - El Podcast de Movilidad en LATAM',
    description: 'Conversaciones profundas con CEOs, innovadores y expertos sobre el futuro de la movilidad',
    type: 'website',
  }
}

export default function PodcastLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}