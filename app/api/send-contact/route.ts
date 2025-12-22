import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    // ✅ Validar env vars PRIMERO
    if (!process.env.RESEND_API_KEY) {
      console.error('[SEND_CONTACT] RESEND_API_KEY no está configurada')
      return NextResponse.json(
        { error: 'Error de configuración del servidor' },
        { status: 500 }
      )
    }

    // 🔐 Importar dinámicamente EN RUNTIME
    const { Resend } = await import('resend')

    const resend = new Resend(process.env.RESEND_API_KEY)

    // Parsear request
    const body = await request.json()
    const { nombre, email, empresa, asunto, mensaje } = body

    // ✅ Validar campos requeridos
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Campos requeridos incompletos' },
        { status: 400 }
      )
    }

    // ✅ Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Mapeo de asuntos
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

    // 📧 Email de confirmación al usuario
    try {
      await resend.emails.send({
        from: 'MOVILIAX <contacto@moviliax.lat>',
        to: email,
        subject: '✅ Hemos recibido tu mensaje - MOVILIAX',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #0A0F2C, #6B46FF); color: white; padding: 40px; border-radius: 10px; text-align: center; }
                .content { background: #f8fafc; padding: 30px; border-radius: 10px; margin-top: 20px; }
                .highlight { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #00E0FF; margin: 20px 0; }
                .footer { text-align: center; color: #64748b; font-size: 12px; margin-top: 30px; }
                a { color: #00E0FF; text-decoration: none; }
              </style>
            </head>
            <body>
              <div class="header">
                <h1>✅ Mensaje Recibido</h1>
                <p style="margin: 10px 0 0 0;">Gracias por contactarnos, ${nombre}</p>
              </div>
              <div class="content">
                <p>Hola <strong>${nombre}</strong>,</p>
                
                <p>Confirmamos que hemos recibido correctamente tu mensaje sobre <strong>"${asuntoTexto}"</strong>.</p>
                
                <div class="highlight">
                  <p><strong>📋 Resumen de tu consulta:</strong></p>
                  <p><em>${mensaje.substring(0, 150)}${mensaje.length > 150 ? '...' : ''}</em></p>
                </div>

                <p>Nuestro equipo revisará tu mensaje y te contactará dentro de las próximas 24-48 horas.</p>

                <p><strong>En caso de urgencia:</strong> puedes escribir directamente a <a href="mailto:moviliaxdigital@gmail.com">moviliaxdigital@gmail.com</a></p>

                <p style="margin-top: 30px;">
                  Saludos,<br>
                  <strong>Equipo MOVILIAX</strong><br>
                  <em>El Futuro de la Movilidad en Movimiento</em>
                </p>
              </div>
              <div class="footer">
                <p>© 2025 MOVILIAX. Todos los derechos reservados.</p>
              </div>
            </body>
          </html>
        `,
      })
    } catch (emailError) {
      console.error('[SEND_CONTACT] Email error:', emailError)
      // No fallar si el email no se envía
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Mensaje recibido. Hemos enviado una confirmación a tu email.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[SEND_CONTACT] Error:', error)
    return NextResponse.json(
      { error: 'Error al procesar el formulario' },
      { status: 500 }
    )
  }
}