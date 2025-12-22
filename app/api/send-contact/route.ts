import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, empresa, asunto, mensaje } = body;

    // Validación
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Mapeo de asuntos
    const asuntosMap: Record<string, string> = {
      general: 'Consulta General',
      partnership: 'Alianzas y Partnerships',
      prensa: 'Prensa y Medios',
      colaboracion: 'Colaboración Editorial',
      publicidad: 'Publicidad y Sponsors',
      consultoria: 'Consultoría',
      otro: 'Otro'
    };

    const asuntoTexto = asuntosMap[asunto] || 'Consulta General';

    // 1. Email para ti (notificación)
    const notificacion = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || 'moviliaxdigital@gmail.com',
      subject: `[Moviliax] ${asuntoTexto} - ${nombre}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; }
              .header { background: linear-gradient(135deg, #06b6d4, #3b82f6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin: 15px 0; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #06b6d4; }
              .label { font-weight: bold; color: #0891b2; font-size: 12px; text-transform: uppercase; }
              .value { color: #1e293b; margin-top: 5px; font-size: 16px; }
              .message-box { background: white; padding: 20px; border-radius: 8px; border: 2px solid #e2e8f0; white-space: pre-wrap; line-height: 1.8; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🚀 Nuevo Mensaje de Contacto</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Moviliax Digital</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Nombre</div>
                <div class="value">${nombre}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #06b6d4;">${email}</a></div>
              </div>
              ${empresa ? `<div class="field"><div class="label">🏢 Empresa</div><div class="value">${empresa}</div></div>` : ''}
              <div class="field">
                <div class="label">📋 Asunto</div>
                <div class="value">${asuntoTexto}</div>
              </div>
              <div class="field">
                <div class="label">💬 Mensaje</div>
                <div class="message-box">${mensaje}</div>
              </div>
              <p style="text-align: center; color: #64748b; font-size: 12px; margin-top: 30px;">
                Enviado el ${new Date().toLocaleString('es-MX', { dateStyle: 'full', timeStyle: 'short' })}
              </p>
            </div>
          </body>
        </html>
      `,
    });

    if (notificacion.error) {
      return NextResponse.json(
        { error: 'Error al enviar el email de notificación' },
        { status: 500 }
      );
    }

    // 2. Email de confirmación al usuario
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: email,
      subject: '✅ Hemos recibido tu mensaje - Moviliax',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #06b6d4, #3b82f6); color: white; padding: 40px; border-radius: 10px; text-align: center; }
              .content { background: #f8fafc; padding: 30px; border-radius: 10px; margin-top: 20px; }
              .highlight { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4; margin: 20px 0; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>¡Gracias por contactarnos!</h1>
              <p style="margin: 10px 0 0 0; font-size: 18px;">Moviliax Digital</p>
            </div>
            <div class="content">
              <p>Hola <strong>${nombre}</strong>,</p>
              <p>Hemos recibido tu mensaje sobre <strong>${asuntoTexto}</strong> y queremos agradecerte por ponerte en contacto.</p>
              <div class="highlight">
                <p style="margin: 0; color: #0891b2; font-weight: bold;">⏱️ Tiempo de respuesta</p>
                <p style="margin: 10px 0 0 0; font-size: 18px;">24-48 horas hábiles</p>
              </div>
              <p>Te responderemos a: <strong>${email}</strong></p>
              <p style="text-align: center; color: #64748b; font-size: 14px; margin-top: 30px;">
                <strong>Moviliax</strong> - El futuro de la movilidad en LATAM
              </p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Email enviado', id: notificacion.data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error al enviar el email' },
      { status: 500 }
    );
  }
}