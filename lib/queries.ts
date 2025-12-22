import { groq } from 'next-sanity'

// ===== ARTICLES =====
export const articlesQuery = groq`
  *[_type == "article" && defined(slug.current)]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    publishedAt,
    readTime,
    featured,
    mainImage,
    "author": author->{_id, name, image, rol},
    "categories": categories[]->{_id, title, color},
    "related": *[_type == "article" && defined(slug.current) && _id != ^._id][0..2]{
      _id,
      title,
      "slug": slug.current,
      mainImage
    }
  }
`

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    publishedAt,
    readTime,
    featured,
    mainImage,
    "author": author->{_id, name, image, rol, biografia},
    "categories": categories[]->{_id, title, color},
    "related": *[_type == "article" && defined(slug.current) && _id != ^._id][0..2]{
      _id,
      title,
      "slug": slug.current,
      excerpt,
      mainImage
    }
  }
`

export const articlesByCategoryQuery = groq`
  *[_type == "article" && references($categoryId)]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    "author": author->{name},
    "categories": categories[]->{title, color}
  }
`

export const articlesByAuthorQuery = groq`
  *[_type == "article" && author._ref == $authorId]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    "categories": categories[]->{title, color}
  }
`

// ===== AUTHORS =====
export const authorsQuery = groq`
  *[_type == "author"] | order(name asc) {
    _id,
    name,
    slug,
    image,
    rol,
    biografia,
    "articlesCount": count(*[_type == "article" && author._ref == ^._id])
  }
`

// ===== CATEGORIES =====
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    color,
    description,
    "articlesCount": count(*[_type == "article" && references(^._id)])
  }
`
