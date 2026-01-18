import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')

  if (!slug) {
    return new Response('Missing slug', { status: 400 })
  }

  // 👇 CLAVE EN NEXT 15 / 16
  const dm = await draftMode()
  dm.enable()

  redirect(`/contenido/${slug}`)
}
