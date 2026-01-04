
import { NextResponse } from 'next/server';
import { createSupabaseAdmin } from '@/lib/supabaseadmin';
import bcrypt from 'bcrypt';

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    // Validar y crear cliente en runtime
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { error: 'Supabase configuration missing' },
        { status: 500 }
      );
    }

    const supabaseAdmin = createSupabaseAdmin();
    const { email, password, name } = await req.json();

    if (!email || !password || !name) {
      return NextResponse.json({ error: 'Todos los campos son obligatorios' }, { status: 400 });
    }

    // Cifrar la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario en Supabase Auth
    const { data: user, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password, // Supabase maneja su propio hash internamente
      email_confirm: true,
      user_metadata: { name },
    });

    if (authError) throw authError;

    // Guardar datos adicionales en la tabla "profiles"
    const { error: dbError } = await supabaseAdmin.from('profiles').insert({
      id: user.user.id,
      name,
      email,
      password_hash: hashedPassword, // opcional si quieres tener tu propio hash
      created_at: new Date(),
    });

    if (dbError) throw dbError;

    return NextResponse.json({ message: 'Usuario registrado exitosamente', user: user.user });
  } catch (error: any) {
    console.error('Error en registro:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
