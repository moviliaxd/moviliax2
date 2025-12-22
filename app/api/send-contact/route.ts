import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, empresa, asunto, mensaje } = body;

    // Validación básica
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

    // Enviar email con Resend
    const data = await resend.emails.send({
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
              body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                background: #f8fafc;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-radius: 8px;
                border-left: 4px solid #06b6d4;
              }
              .label {
                font-weight: bold;
                color: #0891b2;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .value {
                color: #1e293b;
                font-size: 16px;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 2px solid #e2e8f0;
                margin-top: 10px;
                white-space: pre-wrap;
                font-size: 15px;
                line-height: 1.8;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 2px solid #e2e8f0;
                text-align: center;
                color: #64748b;
                font-size: 12px;
              }
              .badge {
                display: inline-block;
                background: #06b6d4;
                color: white;
                padding: 5px 15px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: bold;
                margin-top: 5px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🚀 Nuevo Mensaje de Contacto</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Moviliax Digital</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">👤 Nombre Completo</div>
                <div class="value">${nombre}</div>
              </div>

              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value">
                  <a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">
                    ${email}
                  </a>
                </div>
              </div>

              ${empresa ? `
                <div class="field">
                  <div class="label">🏢 Empresa / Organización</div>
                  <div class="value">${empresa}</div>
                </div>
              ` : ''}

              <div class="field">
                <div class="label">📋 Asunto</div>
                <div class="value">
                  ${asuntoTexto}
                  <span class="badge">${asunto}</span>
                </div>
              </div>

              <div class="field">
                <div class="label">💬 Mensaje</div>
                <div class="message-box">${mensaje}</div>
              </div>

              <div class="footer">
                <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-MX', {
                  dateStyle: 'full',
                  timeStyle: 'short',
                  timeZone: 'America/Mexico_City'
                })}</p>
                <p style="margin-top: 15px; opacity: 0.7;">
                  Este mensaje fue enviado desde el formulario de contacto de Moviliax.com
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // También enviar email de confirmación al usuario
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
              body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
                color: white;
                padding: 40px;
                border-radius: 10px;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 28px;
              }
              .content {
                background: #f8fafc;
                padding: 30px;
                border-radius: 10px;
                margin-top: 20px;
              }
              .highlight {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #06b6d4;
                margin: 20px 0;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                color: #64748b;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>¡Gracias por contactarnos!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 18px;">
                Moviliax Digital
              </p>
            </div>
            
            <div class="content">
              <p>Hola <strong>${nombre}</strong>,</p>
              
              <p>
                Hemos recibido tu mensaje sobre <strong>${asuntoTexto}</strong> 
                y queremos agradecerte por ponerte en contacto con nosotros.
              </p>

              <div class="highlight">
                <p style="margin: 0; color: #0891b2; font-weight: bold;">
                  ⏱️ Tiempo de respuesta estimado
                </p>
                <p style="margin: 10px 0 0 0; font-size: 18px;">
                  24-48 horas hábiles
                </p>
              </div>

              <p>
                Nuestro equipo revisará tu consulta y te responderá a la brevedad posible 
                al correo: <strong>${email}</strong>
              </p>

              <p>
                Mientras tanto, te invitamos a:
              </p>
              <ul style="color: #475569;">
                <li>📰 Leer nuestros últimos artículos sobre movilidad en LATAM</li>
                <li>🎙️ Escuchar nuestro podcast</li>
                <li>📬 Suscribirte a nuestro newsletter RADARX</li>
              </ul>

              <div class="footer">
                <p>
                  <strong>Moviliax</strong> - El futuro de la movilidad en América Latina
                </p>
                <p style="margin-top: 10px; opacity: 0.7;">
                  Ciudad de México, LATAM
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email enviado correctamente',
        emailId: data.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el email' },
      { status: 500 }
    );
  }
}