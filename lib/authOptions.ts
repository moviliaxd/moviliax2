import { createSupabaseAdminClient } from "@/lib/supabase"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email) return null

        if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
          return null
        }

        const supabaseAdmin = createSupabaseAdminClient()

        const { data: user, error } = await supabaseAdmin
          .from("usuarios")
          .select("*")
          .eq("email", credentials.email.toLowerCase())
          .single()

        if (error || !user) return null

        return user
      },
    }),
  ],
}
