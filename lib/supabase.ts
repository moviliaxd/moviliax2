/**
 * Clientes Supabase consolidados
 * - Cliente público (anon key) para uso en cliente
 * - Cliente admin (service role) para uso en servidor
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { logger } from './logger';

/**
 * Cliente público de Supabase (con anon key)
 * Seguro para usar en el cliente (navegador)
 */
export function getSupabaseClient(): SupabaseClient {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    logger.error('Missing Supabase public credentials');
    throw new Error(
      'Faltan credenciales públicas de Supabase (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)'
    );
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}

/**
 * Cliente de administrador de Supabase (con service role key)
 * SOLO usar en API routes y server components (NUNCA en cliente)
 */
export function createSupabaseAdminClient(): SupabaseClient {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl) {
    logger.error('Missing NEXT_PUBLIC_SUPABASE_URL');
    throw new Error('Falta la variable NEXT_PUBLIC_SUPABASE_URL');
  }

  if (!supabaseServiceRoleKey) {
    logger.error('Missing SUPABASE_SERVICE_ROLE_KEY');
    throw new Error('Falta la variable SUPABASE_SERVICE_ROLE_KEY');
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

/**
 * Cliente público exportado (lazy initialization)
 * Para usar en componentes cliente
 */
export const supabase = (() => {
  try {
    return getSupabaseClient();
  } catch (error) {
    // En build time, retornar proxy que falle en runtime si se usa
    logger.warn('Supabase client not initialized (build time)');
    return null as any;
  }
})();

/**
 * Cliente admin exportado (lazy initialization)
 * SOLO para API routes y server components
 */
export const supabaseAdmin = (() => {
  try {
    return createSupabaseAdminClient();
  } catch (error) {
    // En build time, retornar proxy que falle en runtime si se usa
    logger.warn('Supabase admin client not initialized (build time)');
    return null as any;
  }
})();
