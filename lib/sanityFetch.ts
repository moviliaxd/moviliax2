import { client } from './sanity'
import { insightsQuery } from './queries'

export async function getInsights() {
  return client.fetch(insightsQuery)
}
