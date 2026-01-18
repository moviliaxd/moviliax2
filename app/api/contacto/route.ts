import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase";
import { Resend } from "resend";
import { validators, escapeHtml } from "@/lib/validators";
import { checkRateLimit, getClientIP, rateLimitConfigs } from "@/lib/rateLimit";

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(`contact:${clientIP}`, rateLimitConfigs.contact);

    if (!rateLimit.success) {
      return NextResponse.json(
        { error: "Demasiadas solicitudes. Intenta de nuevo en unos minutos." },
        { status: 429 }
      );
    }

    const supabase = createSupabaseAdminClient();
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { nombre, email, empresa, asunto, mensaje } = body;

    // Validaciones
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Datos incompletos" },
        { status: 400 }
      );
    }

    // Validar formato de email
    if (!validators.email(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // Insertar en DB
    const { error } = await supabase
      .from("contact_forms")
      .insert({
        nombre: validators.xss(nombre),
        email: email.toLowerCase().trim(),
        empresa: empresa ? validators.xss(empresa) : null,
        asunto: asunto ? validators.xss(asunto) : null,
        mensaje: validators.xss(mensaje),
        status: "pending",
      });

    if (error) throw error;

    // Email para el equipo (con HTML escapado para prevenir inyección)
    await resend.emails.send({
      from: "contacto@moviliax.lat",
      to: ["moviliaxdigital@gmail.com"],
      subject: `Nuevo contacto: ${escapeHtml(asunto || "Sin asunto")}`,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Empresa:</strong> ${escapeHtml(empresa || "-")}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(mensaje)}</p>
      `,
    });

    // Email de confirmación al usuario
    await resend.emails.send({
      from: "contacto@moviliax.lat",
      to: [email],
      subject: "Recibimos tu mensaje",
      html: `
        <p>Hola ${escapeHtml(nombre)},</p>
        <p>Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos a la brevedad.</p>
        <p><strong>Asunto:</strong> ${escapeHtml(asunto || "-")}</p>
        <br />
        <p>— Equipo de Moviliax</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error en contacto:", error);
    return NextResponse.json(
      { error: "Error interno" },
      { status: 500 }
    );
  }
}
