import { client, urlFor } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import { PortableText } from '@portabletext/react'

interface Article {
  title: string
  slug: { current: string }
  excerpt: string
  body: any[]
  publishedAt: string
  mainImage: any
  author: {
    name: string
    image: any
    bio: any[]
  }
  categories: Array<{
    title: string
    color: string
  }>
  readTime: number
  seo: {
    metaTitle: string
    metaDescription: string
  }
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const article = await client.fetch<Article>(
      `
      *[_type == "article" && slug.current == $slug][0] {
        title,
        slug,
        excerpt,
        body,
        publishedAt,
        mainImage,
        "author": author->{name, image, bio},
        "categories": categories[]->{title, color},
        readTime,
        seo
      }
    `,
      { slug }
    )
    return article
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = await getArticle(params.slug)

  if (!article) {
    return {
      title: 'Artículo no encontrado - MOVILIAX',
    }
  }

  return {
    title: article.seo?.metaTitle || `${article.title} - MOVILIAX`,
    description: article.seo?.metaDescription || article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const article = await getArticle(params.slug)

  if (!article) {
    notFound()
  }

  const publishedDate = new Date(article.publishedAt).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <article className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/contenido"
            className="inline-flex items-center gap-2 text-[#00E0FF] hover:underline mb-6"
          >
            ← Volver a Contenido
          </Link>

          {/* Categorías */}
          {article.categories && article.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {article.categories.map((cat, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full font-semibold"
                  style={{
                    backgroundColor: cat.color + '20',
                    color: cat.color,
                  }}
                >
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          {/* Título */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-[#9CA3AF] mb-6">{article.excerpt}</p>

          {/* Metadata */}
          <div className="flex items-center gap-6 text-[#9CA3AF] text-sm">
            <span>Por {article.author?.name || 'MOVILIAX'}</span>
            <span>•</span>
            <time>{publishedDate}</time>
            <span>•</span>
            <span>{article.readTime || 5} min lectura</span>
          </div>
        </div>

        {/* Imagen Principal */}
        {article.mainImage && (
          <div className="aspect-video bg-gradient-to-br from-[#00E0FF]/20 to-[#6B46FF]/20 rounded-xl mb-12 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-6xl">
              📰
            </div>
          </div>
        )}

        {/* Contenido */}
        <div className="prose prose-invert prose-lg max-w-none">
          {article.body && article.body.length > 0 ? (
            <PortableText value={article.body} />
          ) : (
            <div className="text-center py-20">
              <p className="text-[#9CA3AF]">
                El contenido de este artículo está siendo preparado.
              </p>
            </div>
          )}
        </div>

        {/* Autor */}
        {article.author && (
          <div className="mt-16 pt-8 border-t border-white/10">
            <h3 className="text-sm font-semibold text-[#00E0FF] mb-4">
              SOBRE EL AUTOR
            </h3>
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00E0FF]/20 to-[#6B46FF]/20 flex items-center justify-center text-2xl flex-shrink-0">
                👤
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">{article.author.name}</h4>
                {article.author.bio && article.author.bio.length > 0 && (
                  <div className="text-[#9CA3AF] text-sm">
                    <PortableText value={article.author.bio} />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-[#00E0FF]/10 to-[#6B46FF]/10 border border-[#00E0FF]/30 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-2">¿Te gustó este artículo?</h3>
          <p className="text-[#9CA3AF] mb-6">
            Suscríbete a RADARX y recibe contenido exclusivo cada domingo
          </p>
          <Link
            href="/#newsletter"
            className="inline-block px-8 py-3 bg-[#00E0FF] text-[#0A0F2C] font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            Suscribirse Gratis
          </Link>
        </div>
      </article>
    </div>
  )
}
