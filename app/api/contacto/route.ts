import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    // ─────────────────────────────────────────────
    // 1. Variables de entorno
    // ─────────────────────────────────────────────
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL
    const RESEND_TO_EMAIL = process.env.RESEND_TO_EMAIL
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
    const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !RESEND_TO_EMAIL) {
      return NextResponse.json(
        { error: 'Configuración de email incompleta' },
        { status: 500 }
      )
    }

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { error: 'Configuración de base de datos incompleta' },
        { status: 500 }
      )
    }

    // ─────────────────────────────────────────────
    // 2. Inicializar clientes
    // ─────────────────────────────────────────────
    const resend = new Resend(RESEND_API_KEY)

    const supabase = createClient(
      SUPABASE_URL,
      SUPABASE_SERVICE_ROLE_KEY
    )

    // ─────────────────────────────────────────────
    // 3. Parsear body
    // ─────────────────────────────────────────────
    const body = await request.json()

    const nombre: string = body.nombre
    const email: string = body.email
    const empresa: string = body.empresa ?? null
    const asunto: string = body.asunto ?? 'general'
    const mensaje: string = body.mensaje

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son obligatorios' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // ─────────────────────────────────────────────
    // 4. Normalizar asunto
    // ─────────────────────────────────────────────
    const asuntosMap: Record<string, string> = {
      general: 'Consulta General',
      partnership: 'Alianzas y Partnerships',
      prensa: 'Prensa y Medios',
      colaboracion: 'Colaboración Editorial',
      publicidad: 'Publicidad y Sponsors',
      consultoria: 'Consultoría',
      otro: 'Otro',
    }

    const asuntoTexto =
  asuntosMap[asunto as keyof typeof asuntosMap] || 'Consulta General'

    // ─────────────────────────────────────────────
    // 5. Metadata request
    // ─────────────────────────────────────────────
    const ipAddress =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown'

    const userAgent =
      request.headers.get('user-agent') || 'unknown'

    // ─────────────────────────────────────────────
    // 6. Insertar en Supabase
    // ─────────────────────────────────────────────
    const { error: dbError } = await supabase
      .from('contact_forms')
      .insert([
        {
          nombre,
          email,
          empresa,
          asunto: asuntoTexto,
          mensaje,
          ip_address: ipAddress,
          user_agent: userAgent,
          status: 'pending',
        },
      ])

    if (dbError) {
      console.error('[CONTACTO] Supabase error:', dbError)
    }

    // ─────────────────────────────────────────────
    // 7. Email al equipo
    // ─────────────────────────────────────────────
    await resend.emails.send({
      from: `MOVILIAX <${RESEND_FROM_EMAIL}>`,
      to: [RESEND_TO_EMAIL],
      subject: `Nuevo mensaje de contacto: ${asuntoTexto}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${empresa || 'N/A'}</p>
        <p><strong>Asunto:</strong> ${asuntoTexto}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    })

    // ─────────────────────────────────────────────
    // 8. Email al usuario
    // ─────────────────────────────────────────────
    await resend.emails.send({
      from: `MOVILIAX <${RESEND_FROM_EMAIL}>`,
      to: [email],
      subject: 'Hemos recibido tu mensaje – MOVILIAX',
      html: `
        <h2>Hola ${nombre}</h2>
        <p>Gracias por contactarnos. Hemos recibido tu mensaje.</p>
        <p>Te responderemos pronto.</p>
        <p><strong>Equipo MOVILIAX</strong></p>
      `,
    })

    // ─────────────────────────────────────────────
    // 9. Respuesta final
    // ─────────────────────────────────────────────
    return NextResponse.json(
      { success: true },
      { status: 200 }
    )

  } catch (error) {
    console.error('[CONTACTO] Error general:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
