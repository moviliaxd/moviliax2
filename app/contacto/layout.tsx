import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto - MOVILIAX | Hablemos sobre Movilidad',
  description: '¿Tienes una idea, proyecto o colaboración en mente? Contáctanos para construir juntos el ecosistema de movilidad en América Latina.',
  keywords: ['contacto moviliax', 'movilidad sostenible', 'partnerships', 'consultoría movilidad'],
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}