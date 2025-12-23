import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  // Protege rutas que empiezan por /admin
  if (req.nextUrl.pathname.startsWith('/admin')) {
    const token = req.headers.get('x-admin-token')

    if (!token || token !== process.env.ADMIN_TOKEN) {
      // Redirigir a signin (ajusta la ruta si usas otro flujo)
      const url = req.nextUrl.clone()
      url.pathname = '/api/auth/signin'
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}