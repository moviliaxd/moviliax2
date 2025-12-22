import { MetadataRoute } from 'next'
import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'tsyxjl86',
  dataset: 'production',
  apiVersion: '2024-01-01',
})

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://moviliax.lat'

  // Páginas estáticas
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/acerca`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contenido`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/podcast`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/connect`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/glosario`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/sponsors`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/colaboradores`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  // Artículos dinámicos de Sanity
  try {
    const articles = await client.fetch<Array<{ slug: { current: string }; publishedAt: string }>>(
      `*[_type == "article" && defined(slug.current)] {
        slug,
        publishedAt
      } | order(publishedAt desc)`
    )

    const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
      url: `${baseUrl}/contenido/${article.slug.current}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

    return [...staticPages, ...articlePages]
  } catch (error) {
    console.error('Error fetching articles for sitemap:', error)
    return staticPages
  }
}
