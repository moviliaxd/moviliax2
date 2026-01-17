import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const supabase = createSupabaseAdminClient();
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { nombre, email, empresa, asunto, mensaje } = body;

    // 🧪 Validaciones básicas
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Datos incompletos" },
        { status: 400 }
      );
    }

    // 💾 Insertar en DB
    const { error } = await supabase
      .from("contact_forms")
      .insert({
        nombre,
        email,
        empresa,
        asunto,
        mensaje,
        status: "pending",
      });

    if (error) throw error;

    // 📩 Email para tu equipo
    await resend.emails.send({
      from: "contacto@moviliax.lat",
      to: ["moviliaxdigital@gmail.com"],
      subject: `Nuevo contacto: ${asunto || "Sin asunto"}`,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${empresa || "-"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    // 📬 Email de confirmación al usuario
    await resend.emails.send({
      from: "contacto@moviliax.lat",
      to: [email],
      subject: "Recibimos tu mensaje 🙌",
      html: `
        <p>Hola ${nombre},</p>
        <p>Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos a la brevedad.</p>
        <p><strong>Asunto:</strong> ${asunto || "-"}</p>
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
