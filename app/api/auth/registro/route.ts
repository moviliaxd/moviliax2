import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { hash } from 'bcryptjs'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      nombre,
      apellido,
      email,
      password,
      empresa,
      cargo,
      pais,
      intereses,
      aceptaNewsletter
    } = body

    // Validaciones básicas
    if (!nombre || !email || !password) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'La contraseña debe tener al menos 8 caracteres' },
        { status: 400 }
      )
    }

    // Verificar si el email ya existe
    const { data: existingUser } = await supabaseAdmin
      .from('usuarios')
      .select('email')
      .eq('email', email.toLowerCase())
      .single()

    if (existingUser) {
      return NextResponse.json(
        { error: 'Este email ya está registrado' },
        { status: 409 }
      )
    }

    // Hash de la contraseña
    const passwordHash = await hash(password, 12)

    // Crear usuario en Supabase
    const { data: newUser, error: insertError } = await supabaseAdmin
      .from('usuarios')
      .insert([
        {
          nombre: nombre.trim(),
          apellido: apellido?.trim() || null,
          email: email.toLowerCase().trim(),
          password_hash: passwordHash,
          empresa: empresa?.trim() || null,
          cargo: cargo?.trim() || null,
          pais: pais || null,
          intereses: intereses || [],
        }
      ])
      .select()
      .single()

    if (insertError) {
      console.error('Error al crear usuario:', insertError)
      return NextResponse.json(
        { error: 'Error al crear la cuenta' },
        { status: 500 }
      )
    }

    // Enviar email de bienvenida
    try {
      await resend.emails.send({
        from: 'Moviliax <hola@moviliax.lat>',
        to: email,
        subject: '¡Bienvenido a Moviliax! 🚀',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #00d4ff;">¡Bienvenido a Moviliax, ${nombre}!</h1>
            <p>Gracias por unirte a la comunidad líder de movilidad e innovación en LATAM.</p>
            <p>Tu cuenta ha sido creada exitosamente. Ahora puedes:</p>
            <ul>
              <li>Acceder a contenido exclusivo</li>
              <li>Participar en eventos</li>
              <li>Conectar con profesionales del sector</li>
              <li>Recibir el newsletter semanal RadarX</li>
            </ul>
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/login" style="display: inline-block; margin-top: 20px; padding: 12px 24px; background: linear-gradient(to right, #00d4ff, #7b2cbf); color: white; text-decoration: none; border-radius: 9999px; font-weight: bold;">
              Iniciar Sesión
            </a>
            <p style="margin-top: 30px; color: #666; font-size: 14px;">
              Si no creaste esta cuenta, puedes ignorar este email.
            </p>
          </div>
        `
      })
    } catch (emailError) {
      console.error('Error al enviar email:', emailError)
      // No fallar si el email no se envía
    }

    // Si acepta newsletter, suscribir
    if (aceptaNewsletter) {
      // TODO: Integrar con tu servicio de newsletter (Mailchimp, ConvertKit, etc.)
      console.log('Suscribir al newsletter:', email)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Cuenta creada exitosamente',
        userId: newUser.id
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Error en registro:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}