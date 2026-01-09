// app/api/admin/usuarios/route.ts
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { obtenerUsuarios } from '@/lib/db/usuarios'

export async function GET() {
  try {
    // Verificar autenticación
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      )
    }

    const usuarios = await obtenerUsuarios()

    return NextResponse.json({
      success: true,
      usuarios,
      total: usuarios.length
    })

  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Error interno' },
      { status: 500 }
    )
  }
}