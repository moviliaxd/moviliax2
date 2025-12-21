import { client, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

interface Article {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  author?: { name: string; image?: any }
  categories?: Array<{ title: string; color: string }>
  readTime?: number
  featured?: boolean
  mainImage?: any
  body?: any
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const article = await client.fetch<Article>(
      `*[_type == "article" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        "author": author->{name, image},
        "categories": categories[]->{title, color},
        readTime,
        featured,
        mainImage,
        body
      }`,
      { slug },
      { next: { revalidate: 60 } }
    )
    return article
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
}

export async function generateMetadata({ 
  params 
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
    title: `${article.title} - MOVILIAX`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ 
  params 
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
    day: 'numeric'
  })

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="container mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-[#00E0FF] hover:underline">
            Inicio
          </Link>
          <span className="mx-2 text-[#9CA3AF]">/</span>
          <Link href="/contenido" className="text-[#00E0FF] hover:underline">
            Contenido
          </Link>
          <span className="mx-2 text-[#9CA3AF]">/</span>
          <span className="text-[#9CA3AF]">{article.title}</span>
        </nav>

        {/* Header del Artículo */}
        <article>
          {/* Categorías */}
          {article.categories && article.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {article.categories.map((cat, i) => (
                <span
                  key={i}
                  className="text-sm px-4 py-2 rounded-full font-semibold"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-[#9CA3AF] mb-8 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Metadata */}
          <div className="flex items-center gap-6 mb-12 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              {article.author?.image ? (
                <Image
                  src={urlFor(article.author.image).width(48).height(48).url()}
                  alt={article.author.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00E0FF] to-[#6B46FF] flex items-center justify-center text-xl">
                  ✍️
                </div>
              )}
              <div>
                <p className="font-semibold">{article.author?.name || 'MOVILIAX'}</p>
                <p className="text-sm text-[#9CA3AF]">{publishedDate}</p>
              </div>
            </div>
            <div className="text-sm text-[#9CA3AF]">
              {article.readTime || 5} min de lectura
            </div>
          </div>

          {/* Imagen Principal */}
          {article.mainImage ? (
            <div className="mb-12 rounded-xl overflow-hidden">
              <Image
                src={urlFor(article.mainImage).width(1200).height(600).url()}
                alt={article.title}
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          ) : (
            <div className="mb-12 aspect-video bg-gradient-to-br from-[#00E0FF]/20 to-[#6B46FF]/20 rounded-xl flex items-center justify-center text-6xl">
              📰
            </div>
          )}

          {/* Contenido del Artículo */}
          <div className="prose prose-invert prose-lg max-w-none">
            {article.body ? (
              <PortableText
                value={article.body}
                components={{
                  block: {
                    h2: ({ children }) => (
                      <h2 className="text-3xl font-bold mt-12 mb-6 text-white">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-2xl font-bold mt-8 mb-4 text-white">
                        {children}
                      </h3>
                    ),
                    normal: ({ children }) => (
                      <p className="mb-6 text-[#E5E7EB] leading-relaxed text-lg">
                        {children}
                      </p>
                    ),
                  },
                  marks: {
                    link: ({ children, value }) => (
                      <a
                        href={value?.href}
                        className="text-[#00E0FF] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    ),
                  },
                }}
              />
            ) : (
              <div className="text-center py-20">
                <p className="text-[#9CA3AF] text-lg mb-8">
                  Este artículo está en proceso de redacción.
                </p>
                <Link
                  href="/contenido"
                  className="inline-block px-8 py-3 bg-[#00E0FF] text-[#0A0F2C] font-bold rounded-lg hover:opacity-90 transition-opacity"
                >
                  ← Volver a Contenido
                </Link>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-16 p-8 bg-gradient-to-br from-[#00E0FF]/10 to-[#6B46FF]/10 rounded-xl border border-[#00E0FF]/20">
            <h3 className="text-2xl font-bold mb-4">
              ¿Te gustó este artículo?
            </h3>
            <p className="text-[#9CA3AF] mb-6">
              Suscríbete a nuestro newsletter para recibir más contenido sobre movilidad e innovación.
            </p>
            <Link
              href="/#newsletter"
              className="inline-block px-8 py-3 bg-[#00E0FF] text-[#0A0F2C] font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              Suscribirme al Newsletter
            </Link>
          </div>

          {/* Navegación */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <Link
              href="/contenido"
              className="text-[#00E0FF] hover:underline flex items-center gap-2"
            >
              ← Volver a todos los artículos
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}