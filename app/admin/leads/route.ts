import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const formData = await req.formData()
  const status = formData.get('status')

  if (!status) {
    return NextResponse.json({ error: 'Missing status' }, { status: 400 })
  }

  await supabase
    .from('leads')
    .update({ status })
    .eq('id', params.id)

  return NextResponse.redirect(new URL('/admin/leads', req.url))
}
