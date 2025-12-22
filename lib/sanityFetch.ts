import { client } from './sanity'
import { 
  articlesQuery, 
  articleBySlugQuery, 
  authorsQuery, 
  categoriesQuery,
  articlesByCategoryQuery,
  articlesByAuthorQuery
} from './queries'

// ===== ARTICLES =====
export async function getArticles() {
  return client.fetch(articlesQuery)
}

export async function getArticleBySlug(slug: string) {
  return client.fetch(articleBySlugQuery, { slug })
}

export async function getArticlesByCategory(categoryId: string) {
  return client.fetch(articlesByCategoryQuery, { categoryId })
}

export async function getArticlesByAuthor(authorId: string) {
  return client.fetch(articlesByAuthorQuery, { authorId })
}

// ===== AUTHORS =====
export async function getAuthors() {
  return client.fetch(authorsQuery)
}

// ===== CATEGORIES =====
export async function getCategories() {
  return client.fetch(categoriesQuery)
}
