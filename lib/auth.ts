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
        
        const { data: usuario, error } = await supabase
          .from('usuarios')
          .select('*')
          .eq('email', credentials.email.toLowerCase())
          .maybeSingle()

        if (error || !usuario) {
          return null
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          usuario.password_hash
        )

        if (!isValid) {
          return null
        }

        await supabase
          .from('usuarios')
          .update({ last_login: new Date().toISOString() })
          .eq('id', usuario.id)

        return {
          id: usuario.id,
          email: usuario.email,
          nombre: usuario.nombre,
          apellido: usuario.apellido,
          empresa: usuario.empresa,
          pais: usuario.pais
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.nombre = user.nombre
        token.apellido = user.apellido
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.nombre = token.nombre as string
        session.user.apellido = token.apellido as string
      }
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
}