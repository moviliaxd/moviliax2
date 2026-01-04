import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { JWT } from 'next-auth/jwt';
import type { User as NextAuthUser, Session as NextAuthSession } from 'next-auth';
import { createSupabaseAdminClient } from '@/lib/supabase';

/**
 * Tipos extendidos para token / user / session
 * Ajusta las propiedades según tu tabla `usuarios`.
 */
type ExtendedUser = NextAuthUser & {
  id: string;
  nombre?: string;
  apellido?: string;
  empresa?: string;
  pais?: string;
  intereses?: string[];
  emailVerificado?: boolean;
  estado?: string | null;
};

type ExtendedJWT = JWT & {
  id?: string;
  nombre?: string;
  apellido?: string;
  empresa?: string;
  pais?: string;
  intereses?: string[];
  emailVerificado?: boolean;
  estado?: string | null;
};

type ExtendedSession = NextAuthSession & {
  user: {
    id: string;
    email?: string;  // ✅ CAMBIO: string | undefined (NO null)
    nombre?: string;
    apellido?: string;
    empresa?: string;
    pais?: string;
    intereses?: string[];
    emailVerificado?: boolean;
    estado?: string | null;
  };
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email) return null;

        // Validar que tengamos las credenciales de Supabase
        if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
          console.error('[AUTH] Supabase credentials not configured');
          return null;
        }

        // Crear cliente Supabase
        const supabaseAdmin = createSupabaseAdminClient();

        // Buscar usuario en Supabase
        const { data: user, error } = await supabaseAdmin
          .from('usuarios')
          .select('*')
          .eq('email', credentials.email.toLowerCase())
          .single();

        if (error || !user) {
          console.error('[AUTH] Usuario no encontrado:', error?.message);
          return null;
        }

        // Si guardas contraseña hasheada, valida aquí.
        // Ejemplo: const isValid = await compare(credentials.password, user.password_hash);
        // if (!isValid) return null;

        // Normalizar y devolver un objeto que NextAuth pueda usar como "user"
        const returnedUser: ExtendedUser = {
          id: user.id,
          email: user.email ?? null,
          nombre: user.nombre ?? undefined,
          apellido: user.apellido ?? undefined,
          empresa: user.empresa ?? undefined,
          pais: user.pais ?? undefined,
          intereses: user.intereses ?? [],
          emailVerificado: !!user.emailVerificado,
          estado: user.estado ?? null,
        };

        return returnedUser;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    // jwt callback: token inicializado o actualizado al iniciar sesión
    async jwt({
      token,
      user,
    }: {
      token: ExtendedJWT;
      user?: ExtendedUser;
    }): Promise<ExtendedJWT> {
      if (user) {
        token.id = user.id;
        token.nombre = user.nombre;
        token.apellido = user.apellido;
        token.empresa = user.empresa;
        token.pais = user.pais;
        token.intereses = user.intereses;
        token.emailVerificado = user.emailVerificado;
        token.estado = user.estado ?? null;
      }
      return token;
    },

    // session callback: construir session.user a partir del token
    async session({
      session,
      token,
    }: {
      session: ExtendedSession;
      token: ExtendedJWT;
    }): Promise<ExtendedSession> {
      // Validar que token.id existe antes de asignarlo
      if (!token.id) {
        throw new Error('Token ID no está disponible. Verifica tus variables de entorno.');
      }

      // Aseguramos que session.user exista y asignamos campos desde token
      session.user = {
        id: token.id,
        email: session.user?.email,  // ✅ Sin ?? null
        nombre: token.nombre,
        apellido: token.apellido,
        empresa: token.empresa,
        pais: token.pais,
        intereses: token.intereses ?? [],
        emailVerificado: token.emailVerificado ?? false,
        estado: token.estado ?? null,
      };

      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
