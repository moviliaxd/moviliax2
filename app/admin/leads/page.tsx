export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

import { createClient } from '@supabase/supabase-js'

export default async function LeadsPage(): Promise<void> {
  // 🔐 Crear Supabase SOLO en runtime
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

    const { data: leads, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
  
    if (error) {
      console.error('Error fetching leads:', error)
    }
  }