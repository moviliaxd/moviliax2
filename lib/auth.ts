// lib/auth.ts
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { createSupabaseAdminClient } from './supabase'
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const supabase = createSupabaseAdminClient()
        
        // Buscar usuario en Supabase
        const { data: usuario, error } = await supabase
          .from('usuarios')
          .select('*')
          .eq('email', credentials.email.toLowerCase())
          .single()

        if (error || !usuario) {
          return null
        }

        // Verificar contraseña
        const isValid = await bcrypt.compare(
          credentials.password,
          usuario.password_hash
        )

        if (!isValid) {
          return null
        }

        // Actualizar last_login
        await supabase
          .from('usuarios')
          .update({ last_login: new Date().toISOString() })
          .eq('id', usuario.id)

        return {
          id: usuario.id,
          email: usuario.email,
          name: usuario.nombre,
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 días
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
}