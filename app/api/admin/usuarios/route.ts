// app/api/admin/usuarios/route.ts
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { obtenerUsuarios } from '@/lib/db/usuarios'
import { createSupabaseAdminClient } from '@/lib/supabase'

// Lista de emails de administradores autorizados
const ADMIN_EMAILS = [
  'moviliaxdigital@gmail.com',
  // Agregar más emails de admins aquí
]

async function isUserAdmin(email: string): Promise<boolean> {
  // Verificar en lista hardcodeada
  if (ADMIN_EMAILS.includes(email.toLowerCase())) {
    return true
  }

  // También verificar en BD si existe un campo de rol
  try {
    const supabase = createSupabaseAdminClient()
    const { data } = await supabase
      .from('usuarios')
      .select('rol')
      .eq('email', email.toLowerCase())
      .single()

    return data?.rol === 'admin'
  } catch {
    return false
  }
}

export async function GET() {
  try {
    // Verificar autenticación
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      )
    }

    // Verificar rol de administrador
    const isAdmin = await isUserAdmin(session.user.email)
    if (!isAdmin) {
      return NextResponse.json(
        { error: 'Acceso denegado. Se requieren permisos de administrador.' },
        { status: 403 }
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