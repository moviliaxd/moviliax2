import { getInsights } from '@/lib/sanityFetch'
import Link from 'next/link'

export default async function HomePage() {
  const insights = await getInsights()

  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-10">MoviliaX</h1>

      <ul className="space-y-10">
        {insights.map((item: any) => (
          <li key={item._id}>
            <Link href={`/insights/${item.slug}`}>
              <h2 className="text-xl font-semibold">{item.title}</h2>
            </Link>
            {item.excerpt && (
              <p className="text-gray-600 mt-2">{item.excerpt}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  )
}
