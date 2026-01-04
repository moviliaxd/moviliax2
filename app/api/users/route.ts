
import { NextResponse } from 'next/server';
import { createSupabaseAdminClient } from '@/lib/supabase';

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // Validar e instanciar Supabase en runtime
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { error: 'Supabase configuration missing' },
        { status: 500 }
      );
    }

    const supabaseAdmin = createSupabaseAdminClient();
    const { data, error } = await supabaseAdmin.from('users').select('*');

    if (error) throw error;

    return NextResponse.json({ users: data });
  } catch (err: any) {
    console.error('Error consultando usuarios:', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
