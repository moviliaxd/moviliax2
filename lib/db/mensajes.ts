// lib/db/mensajes.ts
import { createSupabaseAdminClient } from '@/lib/supabase'

export async function obtenerMensajes() {
  const supabase = createSupabaseAdminClient()
  
  const { data, error } = await supabase
    .from('contact_forms')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function marcarMensajeLeido(id: string) {
  const supabase = createSupabaseAdminClient()
  
  const { error } = await supabase
    .from('contact_forms')
    .update({ status: 'read' })
    .eq('id', id)

  if (error) throw error
}
