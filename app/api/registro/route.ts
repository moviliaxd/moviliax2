// app/api/registro/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { crearUsuario } from '@/lib/db/usuarios'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      email, 
      password, 
      confirmarPassword,
      nombre,
      apellido,
      empresa,
      cargo,
      pais,
      linkedin,
      areasInteres,
      aceptaTerminos,
      suscritoNewsletter
    } = body

    // Validaciones
    if (!email || !password || !nombre) {
      return NextResponse.json(
        { error: 'Email, contraseña y nombre son obligatorios' },
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

    // Validar contraseña
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'La contraseña debe tener al menos 8 caracteres' },
        { status: 400 }
      )
    }

    // Validar coincidencia de contraseñas
    if (confirmarPassword && password !== confirmarPassword) {
      return NextResponse.json(
        { error: 'Las contraseñas no coinciden' },
        { status: 400 }
      )
    }

    // Validar términos y condiciones
    if (!aceptaTerminos) {
      return NextResponse.json(
        { error: 'Debes aceptar los términos y condiciones' },
        { status: 400 }
      )
    }

    // Crear usuario
    const usuario = await crearUsuario({
      email,
      password,
      nombre,
      apellido,
      empresa,
      cargo,
      pais,
      linkedin,
      areas_interes: areasInteres || [],
      acepta_terminos: aceptaTerminos,
      suscrito_newsletter: suscritoNewsletter || false
    })

    // Enviar email de bienvenida
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        
        const nombreCompleto = apellido ? ` ` : nombre
        
        await resend.emails.send({
          from: 'MOVILIAX <newsletter@moviliax.lat>',
          to: email,
          subject: '¡Bienvenido a MOVILIAX! 🚀',
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2>¡Hola ``!</h2>
              <p>Gracias por unirte a la comunidad de MOVILIAX.</p>
              <p>Tu cuenta ha sido creada exitosamente.</p>
              ``
              <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
              <p><strong>Equipo MOVILIAX</strong></p>
            </div>
          `
        })
      } catch (emailError) {
        console.error('Error enviando email:', emailError)
        // No fallar si el email no se envía
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Usuario registrado exitosamente',
      user: {
        id: usuario.id,
        email: usuario.email,
        nombre: usuario.nombre
      }
    })

  } catch (error: any) {
    console.error('Error en registro:', error)
    return NextResponse.json(
      { error: error.message || 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
