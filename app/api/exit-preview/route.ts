import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const dm = await draftMode()
  dm.disable()

  const url = new URL(request.url)
  const slug = url.searchParams.get('slug')

  redirect(slug ? `/contenido/${slug}` : '/')
}
