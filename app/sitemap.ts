import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://moviliax.lat'
  
  // Rutas estáticas principales
  const routes = [
    '',
    '/movilidad-humana',
    '/movilidad-humana/electromovilidad',
    '/movilidad-humana/micro-movilidad',
    '/movilidad-humana/maas',
    '/logistica-inteligente',
    '/logistica-inteligente/ultima-milla',
    '/logistica-inteligente/smart-warehousing',
    '/logistica-inteligente/nearshoring',
    '/deep-tech',
    '/deep-tech/ia-big-data',
    '/deep-tech/autonomia-robotica',
    '/deep-tech/blockchain-trazabilidad',
    '/glosario',
    '/radar-latam',
    '/sustainability',
    '/logtech-showroom',
    '/podcast',
    '/connect',
    '/knowledge-lab',
    '/media-kit',
    '/patrocinadores',
    '/contacto',
    '/manifiesto',
    '/equipo',
    '/colaboradores',
    '/aliados',
    '/privacidad',
    '/terminos',
    '/cookies',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}