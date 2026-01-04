import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Función auxiliar para obtener el cliente Supabase
function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Faltan variables de entorno de Supabase')
  }

  return createClient(supabaseUrl, supabaseKey)
}

export async function POST(request: NextRequest) {
  try {
    const supabase = getSupabaseClient()
    const body = await request.json()
    const { email, nombre, empresa, puesto, pais, telefono, linkedin_url, plan = 'free' } = body

    // Validar campos requeridos
    if (!email || !nombre) {
      return NextResponse.json(
        { error: 'Email y nombre son obligatorios' },
        { status: 400 }
      )
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Verificar si ya existe
    const { data: existing } = await supabase
      .from('connect_members')
      .select('email')
      .eq('email', email)
      .single()

    if (existing) {
      return NextResponse.json(
        { error: 'Este email ya está registrado' },
        { status: 409 }
      )
    }

    // Insertar nuevo miembro
    const { error: insertError } = await supabase
      .from('connect_members')
      .insert([
        {
          email,
          nombre,
          empresa,
          puesto,
          pais,
          telefono,
          linkedin_url,
          plan,
          joined_at: new Date().toISOString(),
        },
      ])

    if (insertError) {
      console.error('Database error:', insertError)
      return NextResponse.json(
        { error: 'Error al registrar' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Registro exitoso' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Connect registration error:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// GET: Obtener estadísticas públicas
export async function GET() {
  try {
    const supabase = getSupabaseClient()
    const { data: stats, error } = await supabase
      .from('connect_stats')
      .select('*')

    if (error) throw error

    // Calcular total de miembros
    const { count } = await supabase
      .from('connect_members')
      .select('*', { count: 'exact', head: true })

    return NextResponse.json({
      total_members: count || 0,
      stats: stats || [],
    })
  } catch (error) {
    console.error('Stats error:', error)
    return NextResponse.json(
      { error: 'Error al obtener estadísticas' },
      { status: 500 }
    )
  }
}