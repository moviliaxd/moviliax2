import { groq } from 'next-sanity'

export const insightsQuery = groq`
  *[_type == "insight" && defined(slug.current)]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt
  }
`
