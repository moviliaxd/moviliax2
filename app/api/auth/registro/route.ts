import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import bcrypt from 'bcrypt';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    // 1. Verificar variables de entorno
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error('Credenciales de Supabase no configuradas');
      return NextResponse.json(
        { error: 'Configuración del servidor incompleta' },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY no está configurado');
    }

    // 2. Crear cliente Supabase (igual que newsletter)
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // 3. Parsear body
    const { email, password, name, empresa, pais, linkedin } = await request.json();

    // 4. Validar campos obligatorios
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Email, contraseña y nombre son obligatorios' },
        { status: 400 }
      );
    }

    // 5. Validar email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // 6. Validar contraseña
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'La contraseña debe tener al menos 8 caracteres' },
        { status: 400 }
      );
    }

    // 7. Verificar si ya existe
    const { data: existingUser } = await supabase
      .from('usuarios')
      .select('email')
      .eq('email', email.toLowerCase())
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: 'Este email ya está registrado' },
        { status: 409 }
      );
    }

    // 8. Hashear contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // 9. Guardar en base de datos
    const { error: dbError } = await supabase
      .from('usuarios')
      .insert([
        {
          email: email.toLowerCase().trim(),
          nombre: name.trim(),
          password_hash: hashedPassword,
          empresa: empresa?.trim() || null,
          pais: pais || null,
          linkedin: linkedin?.trim() || null,
          created_at: new Date().toISOString(),
          emailVerificado: false,
        },
      ]);

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Error al guardar usuario: ' + dbError.message },
        { status: 500 }
      );
    }

    // 10. Enviar email de bienvenida (opcional)
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'MOVILIAX <newsletter@moviliax.lat>',
          to: email,
          subject: '¡Bienvenido a MOVILIAX! 🚀',
          html: `
            <h2>¡Hola ${name}!</h2>
            <p>Gracias por registrarte en MOVILIAX.</p>
            <p>Tu cuenta ha sido creada exitosamente.</p>
            <p><strong>Equipo MOVILIAX</strong></p>
          `,
        });
      } catch (emailError) {
        console.error('Email error:', emailError);
        // No fallar si el email no se envía
      }
    }

    // 11. Respuesta exitosa
    return NextResponse.json({
      success: true,
      message: 'Usuario registrado exitosamente',
    });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}