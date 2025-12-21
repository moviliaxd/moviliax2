import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabase } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: Request) {
  try {
    const { nombre, email, empresa, asunto, mensaje } = await req.json()

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Campos requeridos incompletos' },
        { status: 400 }
      )
    }

    const score = calculateLeadScore({ email, empresa, asunto, mensaje })
    const priority = classifyPriority(score)

    await saveLead({
      nombre,
      email,
      empresa,
      asunto,
      mensaje,
      score,
      priority,
      status: 'new'
    })

    await sendAutoReply({ email, nombre, priority })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('CONTACT API ERROR', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

/* ----------------------------- LEAD SCORING ----------------------------- */

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

  if (asunto && asuntoScore[asunto]) {
    score += asuntoScore[asunto]
  }

  if (isCorporateEmail(email)) score += 20
  if (empresa && empresa.trim()) score += 10
  if (mensaje.length > 300) score += 15

  const keywords = ['proyecto', 'estrategia', 'implementación', 'latam', 'movilidad']
  if (keywords.some(k => mensaje.toLowerCase().includes(k))) {
    score += 10
  }

  return score
}

function classifyPriority(score: number): 'high' | 'medium' | 'low' {
  if (score >= 70) return 'high'
  if (score >= 40) return 'medium'
  return 'low'
}

/* --------------------------- AUTO RESPUESTA --------------------------- */

async function sendAutoReply({
  email,
  nombre,
  priority
}: {
  email: string
  nombre: string
  priority: 'high' | 'medium' | 'low'
}) {
  let subject = 'Gracias por contactarnos'
  let body = ''

  if (priority === 'high') {
    subject = 'Hablemos de tu proyecto'
    body = `
Hola ${nombre},

Gracias por tu mensaje. Estamos revisando tu consulta de forma prioritaria.
En breve te contactaremos.

Saludos,
MoviliaX
`
  } else if (priority === 'medium') {
    body = `
Hola ${nombre},

Gracias por escribirnos. Revisaremos tu mensaje y te responderemos pronto.

Saludos,
MoviliaX
`
  } else {
    body = `
Hola ${nombre},

Gracias por contactarnos.
Te invitamos a suscribirte a nuestro newsletter para recibir insights semanales.

Saludos,
MoviliaX
`
  }

  await resend.emails.send({
    from: process.env.FROM_EMAIL!,
    to: email,
    subject,
    text: body
  })
}

/* ------------------------------ UTILIDADES ------------------------------ */

function isCorporateEmail(email: string) {
  const freeDomains = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com']
  const domain = email.split('@')[1]?.toLowerCase()
  return domain && !freeDomains.includes(domain)
}

async function saveLead(lead: any) {
  await supabase.from('leads').insert(lead)
}


