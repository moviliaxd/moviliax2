import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'

// GROQ query para un artículo específico
const articleBySlugQuery = `
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    body,
    "author": author->{name, slug, image, bio},
    "categories": categories[]->{title, slug},
    seo
  }
`

export const revalidate = 60

// Generate static params para ISR
export async function generateStaticParams() {
  const articles = await client.fetch(`*[_type == "article"]{ "slug": slug.current }`)
  return articles.map((article: { slug: string }) => ({
    slug: article.slug,
  }))
}

// Generate metadata dinámico
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await client.fetch(articleBySlugQuery, { slug })

  if (!article) {
    return {
      title: 'Artículo no encontrado - MOVILIAX',
    }
  }

  return {
    title: article.seo?.metaTitle || `${article.title} - MOVILIAXontenido`,
    description: article.seo?.metaDescription || article.excerpt || '',
    keywords: article.seo?.keywords || [],
    openGraph: {
      title: article.seo?.metaTitle || article.title,
      description: article.seo?.metaDescription || article.excerpt || '',
      images: article.mainImage ? [urlFor(article.mainImage).width(1200).height(630).url()] : [],
    },
  }
}

// Componentes personalizados para PortableText
const components = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8 relative h-96">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || 'Imagen del artículo'}
          fill
          className="object-cover rounded-lg"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 text-white">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold mt-8 mb-4 text-white">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold mt-6 mb-3 text-white">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-[#9CA3AF] text-lg leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#00E0FF] pl-4 my-6 italic text-[#9CA3AF]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-[#9CA3AF]">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-[#9CA3AF]">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#00E0FF] hover:text-[#6B46FF] underline"
      >
        {children}
      </a>
    ),
    strong: ({ children }: any) => <strong className="font-bold text-white">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-[#0A0F2C] px-2 py-1 rounded text-[#00E0FF] font-mono text-sm">
        {children}
      </code>
    ),
  },
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await client.fetch(articleBySlugQuery, { slug })

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0F2C] to-[#0D0D0D] py-20">
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/contenido"
          className="inline-flex items-center text-[#00E0FF] hover:text-[#6B46FF] mb-8 transition-colors"
        >
          ← Volver al blog
        </Link>

        {/* Categories */}
        {article.categories && article.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {article.categories.map((category: any) => (
              <span
                key={category.slug.current}
                className="text-sm bg-[#6B46FF]/20 text-[#6B46FF] px-3 py-1 rounded-full"
              >
                {category.title}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00E0FF] to-[#6B46FF] bg-clip-text text-transparent">
          {article.title}
        </h1>

        {/* Meta Info */}
        <div className="flex items-center gap-6 mb-8 text-[#9CA3AF]">
          {article.author.image && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={urlFor(article.author.image).width(100).height(100).url()}
                alt={article.author.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <p className="text-white font-semibold">{article.author.name}</p>
            <p className="text-sm">
              {new Date(article.publishedAt).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>

        {/* Main Image */}
        {article.mainImage && (
          <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
            <Image
              src={urlFor(article.mainImage).width(1200).height(600).url()}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Excerpt */}
        {article.excerpt && (
          <div className="text-xl text-[#9CA3AF] mb-8 pb-8 border-b border-[#00E0FF]/20">
            {article.excerpt}
          </div>
        )}

        {/* Body Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {article.body && <PortableText value={article.body} components={components} />}
        </div>

        {/* Author Bio */}
        {article.author.bio && (
          <div className="mt-16 p-8 bg-[#0A0F2C] border border-[#00E0FF]/20 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Sobre el autor</h3>
            <div className="flex gap-6 items-start">
              {article.author.image && (
                <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={urlFor(article.author.image).width(150).height(150).url()}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="text-xl font-bold text-white mb-2">{article.author.name}</p>
                <div className="text-[#9CA3AF]">
                  <PortableText value={article.author.bio} components={components} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link
            href="/contenido"
            className="inline-block bg-gradient-to-r from-[#00E0FF] to-[#6B46FF] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Ver más artículos
          </Link>
        </div>
      </article>
    </div>
  )
}