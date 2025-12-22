import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    // ✅ Validar variables de entorno
    const resendApiKey = process.env.RESEND_API_KEY
    const resendFrom = process.env.RESEND_FROM_EMAIL
    const resendTo = process.env.RESEND_TO_EMAIL
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!resendApiKey || !resendFrom || !resendTo) {
      console.error('[SEND_CONTACT] Falta configuración de Resend')
      return NextResponse.json({ error: 'Error de configuración del servidor' }, { status: 500 })
    }

    if (!supabaseUrl || !supabaseKey) {
      console.error('[SEND_CONTACT] Falta configuración de Supabase')
      return NextResponse.json({ error: 'Error de base de datos' }, { status: 500 })
    }

    // 🔧 Importar Resend dinámicamente
    const { Resend } = await import('resend')
    const resend = new Resend(resendApiKey)

    // 🔧 Crear cliente Supabase
    const supabase = createClient(supabaseUrl, supabaseKey)

    // 📥 Parsear datos del body
    const body = await request.json()
    const { nombre, email, empresa, asunto, mensaje } = body

    // ✅ Validar campos obligatorios
    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: 'Campos requeridos incompletos' }, { status: 400 })
    }

    // ✅ Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    // 📚 Mapeo de asuntos
    const asuntosMap: Record<string, string> = {
      general: 'Consulta General',
      partnership: 'Alianzas y Partnerships',
      prensa: 'Prensa y Medios',
      colaboracion: 'Colaboración Editorial',
      publicidad: 'Publicidad y Sponsors',
      consultoria: 'Consultoría',
      otro: 'Otro'
    }
    const asuntoTexto = asuntosMap[asunto] || 'Consulta General'

    // 💾 Guardar en Supabase
    const { error: dbError } = await supabase.from('contacts').insert([
      { nombre, email, empresa, asunto: asuntoTexto, mensaje }
    ])
    if (dbError) {
      console.error('[SEND_CONTACT] Error al guardar en Supabase:', dbError)
    }

    // 📧 Enviar email al equipo MOVILIAX
    try {
      await resend.emails.send({
        from: `MOVILIAX <${resendFrom}>`,
        to: resendTo,
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
    } catch (emailError) {
      console.error('[SEND_CONTACT] Error al enviar email a MOVILIAX:', emailError)
    }

    // 📧 Email de confirmación al usuario
    try {
      await resend.emails.send({
        from: `MOVILIAX <${resendFrom}>`,
        to: email,
        subject: '✅ Hemos recibido tu mensaje - MOVILIAX',
        html: `
          <h2>¡Hola ${nombre}!</h2>
          <p>Gracias por contactarnos. Hemos recibido tu mensaje sobre <strong>${asuntoTexto}</strong>.</p>
          <p>Nuestro equipo te responderá dentro de las próximas 24 a 48 horas.</p>
          <p><em>El equipo MOVILIAX</em></p>
        `,
      })
    } catch (emailError) {
      console.error('[SEND_CONTACT] Error al enviar email de confirmación:', emailError)
    }

    return NextResponse.json(
      { success: true, message: 'Mensaje recibido. Se ha enviado confirmación por email.' },
      { status: 200 }
    )

  } catch (error) {
    console.error('[SEND_CONTACT] Error general:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
