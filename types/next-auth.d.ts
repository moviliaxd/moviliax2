import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      nombre: string
      apellido?: string
      empresa?: string
      pais?: string
      emailVerificado?: boolean
    }
  }

  interface User {
    id: string
    email: string
    nombre: string
    apellido?: string
    empresa?: string
    pais?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    nombre: string
    apellido?: string
  }
}