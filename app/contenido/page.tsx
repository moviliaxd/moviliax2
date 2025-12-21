import { client } from '@/lib/sanity'
import Link from 'next/link'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Contenido - MOVILIAX',
  description: 'Artículos sobre movilidad e innovación en América Latina',
}

export const revalidate = 60 // Revalidar cada 60 segundos

interface Article {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  author?: { name: string }
  categories?: Array<{ title: string; color: string }>
  readTime?: number
  featured?: boolean
}

async function getArticles(): Promise<Article[]> {
  try {
    const articles = await client.fetch<Article[]>(
      `*[_type == "article"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        "author": author->{name},
        "categories": categories[]->{title, color},
        readTime,
        featured
      }`,
      {},
      {
        next: { revalidate: 60 }
      }
    )
    return articles
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}
export default async function ContenidoPage() {
  const articles = await getArticles()

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00E0FF] text-sm font-semibold mb-2 block">
            Contenido Premium
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Artículos y Reportajes
          </h1>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Análisis profundos sobre el futuro de la movilidad en América Latina.
          </p>
        </div>
        {/* Filtros */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <button className="px-6 py-2 bg-[#00E0FF] text-[#0A0F2C] rounded-full font-semibold">
            Todos
          </button>
          <button className="px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
            Vehículos Eléctricos
          </button>
          <button className="px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
            Ciudades Inteligentes
          </button>
          <button className="px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
            Startups
          </button>
        </div>
        {/* Grid de Artículos */}
        {articles.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold mb-2">Próximamente</h3>
            <p className="text-[#9CA3AF]">
              Estamos trabajando en contenido increíble para ti.
              <br />
              Suscríbete al newsletter para ser el primero en leerlo.
            </p>
            <Link
              href="/#newsletter"
              className="inline-block mt-6 px-8 py-3 bg-[#00E0FF] text-[#0A0F2C] font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              Suscribirse al Newsletter
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link 
                href={`/contenido/${article.slug.current}`} 
                key={article._id}
                className="block"
              >
                <article className="bg-gradient-to-br from-[#0A0F2C] to-[#0D0D0D] rounded-xl overflow-hidden border border-[#00E0FF]/20 hover:border-[#00E0FF]/50 transition-all group cursor-pointer h-full">
                  {/* Placeholder Image */}
                  <div className="aspect-video bg-gradient-to-br from-[#00E0FF]/20 to-[#6B46FF]/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-4xl">
                      📰
                    </div>
                    {article.featured && (
                      <div className="absolute top-4 right-4 bg-[#00E0FF] text-[#0A0F2C] px-3 py-1 rounded-full text-xs font-bold">
                        Destacado
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    {/* Categorías */}
                    {article.categories && article.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
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
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#00E0FF] transition-colors">
                      {article.title}
                    </h3>
                    {/* Excerpt */}
                    <p className="text-[#9CA3AF] text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    {/* Metadata */}
                    <div className="flex items-center justify-between text-xs text-[#9CA3AF]">
                      <span>{article.author?.name || 'MOVILIAX'}</span>
                      <span>{article.readTime || 5} min lectura</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}