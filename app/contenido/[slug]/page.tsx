import { notFound } from 'next/navigation';

export default function ContenidoSlugPage({ params }: { params: { slug: string } }) {
  notFound();
}

export function generateStaticParams() {
  return [];
}