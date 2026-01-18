import { draftMode } from 'next/headers'
import { getClient } from '@/sanity/lib/client'
import styles from './page.module.css'

const query = `
*[_type == "page" && slug.current == $slug][0]{
  title,
  content
}
`

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const dm = await draftMode()
  const isPreview = dm.isEnabled

  const client = getClient(isPreview)
  const data = await client.fetch(query, { slug })

  if (!data) {
    return <div className={styles.notFound}>No encontrado</div>
  }

  return (
    <main className={styles.main}>
      <h1>{data.title}</h1>

      <section>
        {data.content?.map((block: any, index: number) => (
          <p key={index}>
            {block.children?.map((child: any) => child.text).join('')}
          </p>
        ))}
      </section>
    </main>
  )
}
