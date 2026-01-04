
// lib/supabaseadmin.ts
import { createClient } from '@supabase/supabase-js';

/**
 * Función para crear un cliente Supabase admin
 * Debe ser llamada en runtime, no durante build
 */
export function createSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error('Supabase credentials are missing');
  }

  return createClient(url, key);
}

/**
 * Intenta crear el cliente, pero no falla durante build
 */
export const supabaseAdmin = (() => {
  try {
    return createSupabaseAdmin();
  } catch (error) {
    // Retornar null para no fallar en build
    return null as any;
  }
})();
