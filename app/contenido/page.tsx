import { client } from '@/lib/sanity'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

// GROQ query para obtener artículos
const articlesQuery = `
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    "author": author->{name, slug, image},
    "categories": categories[]->{title, slug}
  }
`

export const revalidate = 60 // Revalidar cada 60 segundos

export const metadata = {
  title: 'Artículos - MOVILIAX',
  description: 'Artículos sobre movilidad y logística en Latinoámerica'
}

interface Article {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  mainImage?: any
  publishedAt: string
  author: {
    name: string
    slug: { current: string }
    image?: any
  }
  categories: Array<{
    title: string
    slug: { current: string }
  }>
}

export default async function ContenidoPage() {
  let articles: Article[] = []
  let error = null

  try {
    articles = await client.fetch(articlesQuery)
  } catch (e) {
    error = 'Error al cargar los artículos'
    console.error('Error fetching articles:', e)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0F2C] to-[#0D0D0D] py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#00E0FF] to-[#6B46FF] bg-clip-text text-transparent">
            Blog de MOVILIAX
          </h1>
          <p className="text-[#9CA3AF] text-xl">
            Artículos sobre tecnología, desarrollo y transformación digital
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-500/10 border border-red-500 rounded-lg p-6 text-center">
            <p className="text-red-500">{error}</p>
            <p className="text-[#9CA3AF] mt-2">
              Asegúrate de que Sanity esté configurado correctamente
            </p>
          </div>
        )}

        {/* Empty State */}
        {!error && articles.length === 0 && (
          <div className="bg-[#0A0F2C] border border-[#00E0FF]/20 rounded-lg p-12 text-center">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Aún no hay artículos publicados
            </h2>
            <p className="text-[#9CA3AF] mb-6">
              Ve a tu Sanity Studio y crea tu primer artículo
            </p>
            <a
              href="http://localhost:3333"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#00E0FF] to-[#6B46FF] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Abrir Sanity Studio
            </a>
          </div>
        )}

        {/* Articles Grid */}
        {articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article._id}
                href={`/contenido/${article.slug.current}`}
                className="group bg-[#0A0F2C] border border-[#00E0FF]/20 rounded-lg overflow-hidden hover:border-[#00E0FF] transition-all hover:scale-105"
              >
                {/* Image */}
                {article.mainImage && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={urlFor(article.mainImage).width(600).height(400).url()}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6">
                  {/* Categories */}
                  {article.categories && article.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.categories.map((category) => (
                        <span
                          key={category.slug.current}
                          className="text-xs bg-[#6B46FF]/20 text-[#6B46FF] px-2 py-1 rounded"
                        >
                          {category.title}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#00E0FF] transition-colors">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  {article.excerpt && (
                    <p className="text-[#9CA3AF] mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                  )}

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-[#9CA3AF]">
                    <span>{article.author.name}</span>
                    <span>
                      {new Date(article.publishedAt).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}