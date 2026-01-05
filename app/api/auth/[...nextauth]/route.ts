import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { JWT } from 'next-auth/jwt';
import type { User as NextAuthUser, Session as NextAuthSession } from 'next-auth';
import { createSupabaseAdminClient } from '@/lib/supabase';
import { compare } from 'bcryptjs';
import { logger } from '@/lib/logger';

/**
 * Tipos extendidos para token / user / session
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
    email?: string;
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
        if (!credentials?.email || !credentials?.password) {
          logger.warn('Auth attempt without email or password');
          return null;
        }

        // Validar que tengamos las credenciales de Supabase
        if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
          logger.error('Supabase credentials not configured');
          return null;
        }

        try {
          // Crear cliente Supabase
          const supabaseAdmin = createSupabaseAdminClient();

          // Buscar usuario en Supabase
          const { data: user, error } = await supabaseAdmin
            .from('usuarios')
            .select('*')
            .eq('email', credentials.email.toLowerCase())
            .single();

          if (error || !user) {
            logger.warn('User not found', { email: credentials.email });
            return null;
          }

          // ✅ SEGURIDAD: Validar que el usuario tenga password_hash
          if (!user.password_hash) {
            logger.error('User has no password_hash', { userId: user.id });
            return null;
          }

          // ✅ SEGURIDAD: Validar password con bcrypt
          const isValidPassword = await compare(credentials.password, user.password_hash);
          
          if (!isValidPassword) {
            logger.warn('Invalid password attempt', { email: credentials.email });
            return null;
          }

          logger.info('User authenticated successfully', { userId: user.id });

          // Normalizar y devolver usuario
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
        } catch (error) {
          logger.error('Auth error', error as Error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
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

    async session({
      session,
      token,
    }: {
      session: ExtendedSession;
      token: ExtendedJWT;
    }): Promise<ExtendedSession> {
      if (!token.id) {
        throw new Error('Token ID no está disponible');
      }

      session.user = {
        id: token.id,
        email: session.user?.email,
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