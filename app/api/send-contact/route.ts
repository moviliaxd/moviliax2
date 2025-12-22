import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, empresa, asunto, mensaje } = body;

    // Validación mejorada
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Validar API Key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY no está configurada');
      return NextResponse.json(
        { error: 'Error de configuración del servidor' },
        { status: 500 }
      );
    }

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

    // 1. Email de notificación para ti
    const resultNotificacion = await resend.emails.send({
      from: 'Moviliax <onboarding@resend.dev>',
      to: ['moviliaxdigital@gmail.com'],
      subject: `[Contacto] ${asuntoTexto} - ${nombre}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #06b6d4, #3b82f6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin: 15px 0; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #06b6d4; }
              .label { font-weight: bold; color: #0891b2; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
              .value { color: #1e293b; font-size: 16px; }
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
                <div class="value"><a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a></div>
              </div>
              ${empresa ? `
              <div class="field">
                <div class="label">🏢 Empresa</div>
                <div class="value">${empresa}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">📋 Asunto</div>
                <div class="value">${asuntoTexto}</div>
              </div>
              <div class="field">
                <div class="label">💬 Mensaje</div>
                <div class="message-box">${mensaje}</div>
              </div>
              <p style="text-align: center; color: #64748b; font-size: 12px; margin-top: 30px;">
                Enviado el ${new Date().toLocaleString('es-MX', { dateStyle: 'full', timeStyle: 'short', timeZone: 'America/Mexico_City' })}
              </p>
            </div>
          </body>
        </html>
      `,
    });

    console.log('Email de notificación enviado:', resultNotificacion);

    // 2. Email de confirmación al usuario
    const resultConfirmacion = await resend.emails.send({
      from: 'Moviliax <onboarding@resend.dev>',
      to: [email],
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
              <p>Hemos recibido tu mensaje sobre <strong>${asuntoTexto}</strong> y queremos agradecerte por ponerte en contacto con nosotros.</p>
              <div class="highlight">
                <p style="margin: 0; color: #0891b2; font-weight: bold;">⏱️ Tiempo de respuesta estimado</p>
                <p style="margin: 10px 0 0 0; font-size: 18px;">24-48 horas hábiles</p>
              </div>
              <p>Nuestro equipo revisará tu consulta y te responderá a la brevedad a: <strong>${email}</strong></p>
              <p style="text-align: center; color: #64748b; font-size: 14px; margin-top: 30px;">
                <strong>Moviliax</strong> - El futuro de la movilidad en América Latina
              </p>
            </div>
          </body>
        </html>
      `,
    });

    console.log('Email de confirmación enviado:', resultConfirmacion);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Emails enviados correctamente',
        ids: {
          notificacion: resultNotificacion.data?.id,
          confirmacion: resultConfirmacion.data?.id
        }
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error detallado:', error);
    return NextResponse.json(
      { 
        error: 'Error al enviar el email',
        details: error.message 
      },
      { status: 500 }
    );
  }
}