// app/api/contacto/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { createSupabaseAdminClient } from '@/lib/supabase'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const supabase = createSupabaseAdminClient()
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    const body = await request.json()
    const { nombre, email, empresa, asunto, mensaje } = body

    // Validaciones...

    // Insertar en DB
    const { error } = await supabase
      .from('contact_forms')
      .insert({
        nombre,
        email,
        empresa,
        asunto,
        mensaje,
        status: 'pending',
      })

    if (error) throw error

    // Enviar emails...

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Error interno' },
      { status: 500 }
    )
  }
}