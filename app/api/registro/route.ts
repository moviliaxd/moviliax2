import { NextResponse } from 'next/server';
import { createSupabaseAdminClient } from '@/lib/supabase';
import { logger } from '@/lib/logger';
import { validators } from '@/lib/validators';
import bcrypt from 'bcrypt';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    // Validar configuración
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      logger.error('Supabase configuration missing');
      return NextResponse.json(
        { error: 'Configuración del servidor incompleta' },
        { status: 500 }
      );
    }

    const supabaseAdmin = createSupabaseAdminClient();
    const { email, password, name, empresa, pais, linkedin } = await req.json();

    // Validaciones
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Email, contraseña y nombre son obligatorios' },
        { status: 400 }
      );
    }

    // Validar email
    if (!validators.email(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Validar contraseña
    const passwordValidation = validators.password(password);
    if (!passwordValidation.valid) {
      return NextResponse.json(
        { error: `Contraseña inválida: ${passwordValidation.errors.join(', ')}` },
        { status: 400 }
      );
    }

    // Validar SQL injection
    if (!validators.sqlInjection(name) || !validators.sqlInjection(email)) {
      return NextResponse.json(
        { error: 'Entrada inválida detectada' },
        { status: 400 }
      );
    }

    // Cifrar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario en Supabase Auth
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: email.toLowerCase().trim(),
      password,
      email_confirm: true,
      user_metadata: { 
        name: validators.xss(name.trim()),
        empresa: empresa ? validators.xss(empresa.trim()) : null,
        pais: pais || null,
        linkedin: linkedin || null
      },
    });

    if (authError) {
      logger.error('Auth error', { error: authError.message });
      return NextResponse.json(
        { error: authError.message },
        { status: 400 }
      );
    }

    // Guardar en la tabla "usuarios" (no "profiles")
    const { error: dbError } = await supabaseAdmin.from('usuarios').insert({
      id: authData.user.id,
      nombre: validators.xss(name.trim()),
      email: email.toLowerCase().trim(),
      password_hash: hashedPassword,
      empresa: empresa ? validators.xss(empresa.trim()) : null,
      pais: pais || null,
      linkedin: linkedin || null,
      created_at: new Date().toISOString(),
    });

    if (dbError) {
      logger.error('Database error', { error: dbError.message });
      // Intentar limpiar el usuario de Auth si falla la inserción en BD
      await supabaseAdmin.auth.admin.deleteUser(authData.user.id);
      return NextResponse.json(
        { error: `Error al guardar datos: ${dbError.message}` },
        { status: 500 }
      );
    }

    logger.info('User registered successfully', { userId: authData.user.id });

    return NextResponse.json({ 
      message: 'Usuario registrado exitosamente',
      user: { 
        id: authData.user.id,
        email: authData.user.email 
      }
    });

  } catch (error: any) {
    logger.error('Registration error', error);
    return NextResponse.json(
      { error: error.message || 'Error al registrar usuario' },
      { status: 500 }
    );
  }
}