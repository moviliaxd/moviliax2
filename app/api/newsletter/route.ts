import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'

const resend = new Resend(process.env.RESEND_API_KEY)

// Inicializar Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validar email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Verificar si ya existe el suscriptor
    const { data: existingSubscriber } = await supabase
      .from('newsletter_subscribers')
      .select('email')
      .eq('email', email)
      .single()

    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'Este email ya está suscrito' },
        { status: 409 }
      )
    }

    // Guardar en base de datos
    const { data: subscriber, error: dbError } = await supabase
      .from('newsletter_subscribers')
      .insert([
        {
          email,
          subscribed_at: new Date().toISOString(),
          status: 'active',
          source: 'website',
        },
      ])
      .select()
      .single()

    if (dbError) {
      console.error('Database error:', dbError)
      return NextResponse.json(
        { error: 'Error al guardar suscripción' },
        { status: 500 }
      )
    }

    // Enviar email de bienvenida
    try {
      await resend.emails.send({
        from: 'MOVILIAX <newsletter@moviliax.lat>',
        to: email,
        subject: '¡Bienvenido a RADARX! 🚀',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body {
                  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                  line-height: 1.6;
                  color: #333;
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                }
                .header {
                  background: linear-gradient(135deg, #0A0F2C 0%, #0D0D0D 100%);
                  color: white;
                  padding: 40px 20px;
                  text-align: center;
                  border-radius: 8px 8px 0 0;
                }
                .logo {
                  font-size: 32px;
                  font-weight: bold;
                  margin-bottom: 10px;
                }
                .logo-x {
                  color: #00E0FF;
                }
                .content {
                  background: white;
                  padding: 40px 30px;
                  border: 1px solid #e5e7eb;
                }
                .cta-button {
                  display: inline-block;
                  background: #00E0FF;
                  color: #0A0F2C;
                  padding: 12px 30px;
                  text-decoration: none;
                  border-radius: 6px;
                  font-weight: bold;
                  margin: 20px 0;
                }
                .footer {
                  background: #f9fafb;
                  padding: 20px;
                  text-align: center;
                  font-size: 12px;
                  color: #6b7280;
                  border-radius: 0 0 8px 8px;
                }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="logo">MOVILIA<span class="logo-x">X</span></div>
                <p style="margin: 0; font-size: 18px;">El Futuro de la Movilidad en Movimiento</p>
              </div>
              
              <div class="content">
                <h2 style="color: #0A0F2C; margin-top: 0;">¡Bienvenido a RADARX! 🎉</h2>
                
                <p>Gracias por suscribirte al newsletter de MOVILIAX. Estás a punto de recibir cada domingo:</p>
                
                <ul style="color: #4b5563;">
                  <li>📰 Las tendencias más importantes en movilidad LATAM</li>
                  <li>📊 Análisis exclusivos con datos que importan</li>
                  <li>🚀 Innovaciones y startups que están cambiando el juego</li>
                  <li>🎤 Entrevistas con líderes del sector</li>
                  <li>💡 Insights que no encontrarás en ningún otro lugar</li>
                </ul>
                
                <p><strong>Tu primera edición llegará este domingo.</strong></p>
                
                <div style="text-align: center;">
                  <a href="https://moviliax.lat" class="cta-button">Explorar MOVILIAX</a>
                </div>
                
                <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
                  Mientras tanto, te invitamos a explorar nuestro contenido más reciente y unirte a MOVILIAX Connect, nuestra red profesional con +5,000 expertos en movilidad.
                </p>
              </div>
              
              <div class="footer">
                <p><strong>MOVILIAX</strong> - El punto de conexión entre la movilidad humana y la inteligencia tecnológica</p>
                <p style="margin: 10px 0;">
                  <a href="https://moviliax.lat" style="color: #00E0FF; text-decoration: none;">Web</a> | 
                  <a href="https://www.linkedin.com/company/moviliax/" style="color: #00E0FF; text-decoration: none;">LinkedIn</a> | 
                  <a href="https://x.com/MoviliaxD54988" style="color: #00E0FF; text-decoration: none;">Twitter</a>
                </p>
                <p style="font-size: 11px; color: #9ca3af;">
                  Si no deseas recibir más emails, puedes <a href="https://moviliax.lat/unsubscribe?email=${email}" style="color: #6b7280;">darte de baja aquí</a>
                </p>
              </div>
            </body>
          </html>
        `,
      })
    } catch (emailError) {
      console.error('Email error:', emailError)
      // No fallar si el email no se envía, el suscriptor ya está guardado
    }

    return NextResponse.json({
      success: true,
      message: '¡Gracias por suscribirte! Revisa tu email.',
    })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
