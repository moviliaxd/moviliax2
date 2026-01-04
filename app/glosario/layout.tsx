import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glosario Tech de Movilidad - MOVILIAX | Términos y Definiciones',
  description: 'Diccionario completo de términos técnicos sobre vehículos eléctricos, movilidad sostenible, tecnologías emergentes y transporte inteligente.',
  keywords: ['glosario movilidad', 'términos EV', 'vehículos eléctricos', 'diccionario tech', 'Smart Cities', 'electromovilidad'],
}

export default function GlosarioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}