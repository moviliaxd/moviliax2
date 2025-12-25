import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    // ─────────────────────────────────────────────
    // 1. Validación de variables de entorno
    // ─────────────────────────────────────────────
    const {
      RESEND_API_KEY,
      RESEND_FROM_EMAIL,
      RESEND_TO_EMAIL,
      NEXT_PUBLIC_SUPABASE_URL,
      SUPABASE_SERVICE_ROLE_KEY,
    } = process.env

    if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !RESEND_TO_EMAIL) {
      console.error('[SEND_CONTACT] Configuración incompleta de Resend')
      return NextResponse.json({ error: 'Configuración de email incompleta' }, { status: 500 })
    }

    if (!NEXT_PUBLIC_SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      console.error('[SEND_CONTACT] Configuración incompleta de Supabase')
      return NextResponse.json({ error: 'Configuración de base de datos incompleta' }, { status: 500 })
    }

    // ─────────────────────────────────────────────
    // 2. Inicialización de clientes
    // ─────────────────────────────────────────────
    const { Resend } = await import('resend')
    const resend = new Resend(RESEND_API_KEY)

    const supabase = createClient(
      NEXT_PUBLIC_SUPABASE_URL,
      SUPABASE_SERVICE_ROLE_KEY
    )

    // ─────────────────────────────────────────────
    // 3. Parseo y validación del body
    // ─────────────────────────────────────────────
    const body = await request.json()
    const { nombre, email, empresa, asunto, mensaje } = body

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son obligatorios' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    // ─────────────────────────────────────────────
    // 4. Normalización de asunto
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

    const asuntoTexto = asuntosMap[asunto] || 'Consulta General'

    // ─────────────────────────────────────────────
    // 5. Guardado en Supabase (no bloqueante)
    // ─────────────────────────────────────────────
    const { error: dbError } = await supabase.from('contacts').insert([
      { nombre, email, empresa, asunto: asuntoTexto, mensaje },
    ])

    if (dbError) {
      console.error('[SEND_CONTACT] Error Supabase:', dbError)
    }

    // ─────────────────────────────────────────────
    // 6. Envío de email al equipo MOVILIAX
    // ─────────────────────────────────────────────
    const teamEmailResponse = await resend.emails.send({
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

    console.log('[SEND_CONTACT] Team email response:', teamEmailResponse)

    if (teamEmailResponse.error) {
      console.error('[SEND_CONTACT] Error email equipo:', teamEmailResponse.error)
    }

    // ─────────────────────────────────────────────
    // 7. Envío de email de confirmación al usuario
    // ─────────────────────────────────────────────
    const userEmailResponse = await resend.emails.send({
      from: `MOVILIAX <${RESEND_FROM_EMAIL}>`,
      to: [email],
      subject: 'Hemos recibido tu mensaje – MOVILIAX',
      html: `
        <h2>Hola ${nombre},</h2>
        <p>Gracias por escribirnos. Hemos recibido tu mensaje sobre <strong>${asuntoTexto}</strong>.</p>
        <p>Nuestro equipo te responderá en un plazo de 24 a 48 horas.</p>
        <p>Saludos,<br /><strong>Equipo MOVILIAX</strong></p>
      `,
    })

    console.log('[SEND_CONTACT] User email response:', userEmailResponse)

    if (userEmailResponse.error) {
      console.error('[SEND_CONTACT] Error email usuario:', userEmailResponse.error)
    }

    // ─────────────────────────────────────────────
    // 8. Respuesta final
    // ─────────────────────────────────────────────
    return NextResponse.json(
      { success: true, message: 'Mensaje recibido y correos enviados' },
      { status: 200 }
    )

  } catch (error) {
    console.error('[SEND_CONTACT] Error general:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
console.log('[SEND_CONTACT] Endpoint ejecutado')