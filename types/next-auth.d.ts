import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    id: string
    nombre?: string
    apellido?: string
    empresa?: string
    pais?: string
    intereses?: string[]
    emailVerificado?: boolean
    estado?: string | null
  }

  interface Session {
    user: {
      id: string
      nombre?: string
      apellido?: string
      empresa?: string
      pais?: string
      intereses?: string[]
      emailVerificado?: boolean
      estado?: string | null
      email?: string
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    nombre?: string
    apellido?: string
    empresa?: string
    pais?: string
    intereses?: string[]
    emailVerificado?: boolean
    estado?: string | null
  }
}
