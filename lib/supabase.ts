// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

/**
 * Crea un cliente Supabase con credenciales de administrador.
 * Debe ser llamado en runtime (nunca en scope global durante build).
 */
export function createSupabaseAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl) {
    throw new Error('Falta la variable NEXT_PUBLIC_SUPABASE_URL')
  }

  if (!supabaseServiceRoleKey) {
    throw new Error('Falta la variable SUPABASE_SERVICE_ROLE_KEY')
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey)
}

/**
 * Cliente Supabase de administrador (con validación en runtime)
 * Solo usar en API routes y server components
 */
export const supabaseAdmin = (() => {
  try {
    return createSupabaseAdminClient()
  } catch (error) {
    // En build time, retornar un proxy que falle en runtime si se usa
    return null as any
  }
})()
