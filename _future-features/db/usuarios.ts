// lib/db/usuarios.ts
import { createSupabaseAdminClient } from '@/lib/supabase'
import bcrypt from 'bcrypt'

export async function crearUsuario(data: {
  email: string
  password: string
  nombre: string
  apellido?: string
  empresa?: string
  cargo?: string
  pais?: string
  linkedin?: string
  areas_interes?: string[]
  acepta_terminos?: boolean
  suscrito_newsletter?: boolean
}) {
  const supabase = createSupabaseAdminClient()

  // Verificar si ya existe
  const { data: existente } = await supabase
    .from('usuarios')
    .select('email')
    .eq('email', data.email.toLowerCase())
    .maybeSingle()

  if (existente) {
    throw new Error('El email ya está registrado')
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(data.password, 10)

  // Insertar
  const { data: usuario, error } = await supabase
    .from('usuarios')
    .insert({
      email: data.email.toLowerCase(),
      nombre: data.nombre,
      apellido: data.apellido || null,
      password_hash: hashedPassword,
      empresa: data.empresa || null,
      cargo: data.cargo || null,
      pais: data.pais || null,
      linkedin: data.linkedin || null,
      areas_interes: data.areas_interes || null,
      acepta_terminos: data.acepta_terminos || false,
      suscrito_newsletter: data.suscrito_newsletter || false,
      emailVerificado: false,
    })
    .select()
    .single()

  if (error) throw error
  return usuario
}

export async function obtenerUsuarios() {
  const supabase = createSupabaseAdminClient()
  
  const { data, error } = await supabase
    .from('usuarios')
    .select('id, email, nombre, apellido, empresa, cargo, pais, areas_interes, emailVerificado, created_at, last_login')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function obtenerUsuarioPorEmail(email: string) {
  const supabase = createSupabaseAdminClient()
  
  const { data, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('email', email.toLowerCase())
    .single()

  if (error) throw error
  return data
}
