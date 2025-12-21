import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type Context = {
  params: Promise<{
    id: string
  }>
}

export async function POST(
  req: NextRequest,
  context: Context
) {
  try {
    const { id } = await context.params

    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const formData = await req.formData()
    const status = formData.get('status')

    if (!status || typeof status !== 'string') {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 }
      )
    }

    await supabase
      .from('leads')
      .update({ status })
      .eq('id', id)

    return NextResponse.redirect(new URL('/admin/leads', req.url))
  } catch (error) {
    console.error('ADMIN LEAD UPDATE ERROR', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

