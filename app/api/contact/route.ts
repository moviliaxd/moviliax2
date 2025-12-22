import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const { nombre, email, empresa, asunto, mensaje } = await req.json()

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Campos requeridos incompletos' },
        { status: 400 }
      )
    }

    // 🔐 Crear clientes EN RUNTIME
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const resend = new Resend(process.env.RESEND_API_KEY!)

    const score = calculateLeadScore({ email, empresa, asunto, mensaje })
    const priority = classifyPriority(score)

    await supabase.from('leads').insert({
      nombre,
      email,
      empresa,
      asunto,
      mensaje,
      score,
      priority,
      status: 'new'
    })

    await sendAutoReply({ resend, email, nombre, priority })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('CONTACT API ERROR', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

/* -------------------------------------------------------------------------- */
/*                              LEAD SCORING                                  */
/* -------------------------------------------------------------------------- */

function calculateLeadScore({
  email,
  empresa,
  asunto,
  mensaje
}: {
  email: string
  empresa?: string
  asunto?: string
  mensaje: string
}) {
  let score = 0

  const asuntoScore: Record<string, number> = {
    consultoria: 40,
    partnership: 35,
    prensa: 25,
    colaboracion: 15,
    publicidad: 20,
    general: 5,
    otro: 5
  }

    if (asunto && asuntoScore[asunto]) score += asuntoScore[asunto]
    if (isCorporateEmail(email)) score += 20
    if (empresa && empresa.length > 0) score += 15
  
    return score
  }
  
    function isCorporateEmail(email: string): boolean {
      const freeEmailDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com']
      const domain = email.split('@')[1]
      return !freeEmailDomains.includes(domain.toLowerCase())
    }

  function classifyPriority(score: number): string {
    if (score >= 70) return 'high'
    if (score >= 40) return 'medium'
    return 'low'
  }
  
  /* -------------------------------------------------------------------------- */
  /*                            AUTO REPLY EMAIL                                */
  /* -------------------------------------------------------------------------- */
  
  async function sendAutoReply({
    resend,
    email,
    nombre,
    priority
  }: {
    resend: Resend
    email: string
    nombre: string
    priority: string
  }) {
    try {
      await resend.emails.send({
        from: '@moviliax.lat',
        to: email,
        subject: 'Hemos recibido tu mensaje',
        html: `<p>Hola ${nombre},</p><p>Gracias por contactarnos. Tu mensaje ha sido recibido y será atendido pronto.</p>`
      })
    } catch (error) {
      console.error('AUTO REPLY ERROR', error)
    }
  }

