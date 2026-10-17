import { NextResponse } from "next/server";
import { Resend } from "resend";
import { sanitize } from "isomorphic-dompurify";

// Simple in-memory store for rate limiting
const rateLimitStore = {
  emails: 0,
  resetTime: Date.now(),
};

const RATE_LIMIT = 50;
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes in milliseconds

export async function POST(request) {
  try {
    // Check rate limit
    if (Date.now() > rateLimitStore.resetTime + RATE_LIMIT_WINDOW) {
      rateLimitStore.emails = 0;
      rateLimitStore.resetTime = Date.now();
    }

    if (rateLimitStore.emails >= RATE_LIMIT) {
      return NextResponse.json(
        { message: "Límite de envíos superado. Inténtalo de nuevo más tarde." },
        { status: 429 }
      );
    }

    rateLimitStore.emails++;

    const { name, email, message } = await request.json();

    // Basic input validation
    if (!name || name.trim().length === 0) {
      return NextResponse.json(
        { message: "El nombre es obligatorio" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { message: "El formato del correo no es válido" },
        { status: 400 }
      );
    }

    if (!message || message.trim().length === 0 || message.length > 2000) {
      return NextResponse.json(
        { message: "El mensaje debe tener entre 1 y 2000 caracteres" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitize(name.trim());
    const sanitizedEmail = sanitize(email.trim());
    const sanitizedMessage = sanitize(message.trim());

    const apiKey = process.env.RESEND_API_KEY || process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      console.error("No email API key configured (RESEND_API_KEY)");
      return NextResponse.json(
        { message: "Error de configuración del servidor de correo" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL || "lekhalali56@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Ali Lekhal <contacto@alilekhal.com>";

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      reply_to: sanitizedEmail,
      subject: `Nuevo mensaje de ${sanitizedName} (alilekhal.com)`,
      text: `Nombre: ${sanitizedName}\nCorreo: ${sanitizedEmail}\n\nMensaje:\n${sanitizedMessage}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eaeaea; border-radius: 8px;">
          <h2 style="color: #111; margin-top: 0;">Nuevo mensaje desde tu Portfolio</h2>
          <p style="margin: 8px 0;"><strong>Nombre:</strong> ${sanitizedName}</p>
          <p style="margin: 8px 0;"><strong>Correo:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="margin: 8px 0;"><strong>Mensaje:</strong></p>
          <div style="background-color: #f9f9f9; padding: 16px; border-radius: 6px; white-space: pre-wrap; font-size: 15px; line-height: 1.5; color: #333;">${sanitizedMessage}</div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888; margin-bottom: 0;">Mensaje enviado desde alilekhal.com. Puedes responder directamente a este correo para escribir a ${sanitizedName}.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { message: "Error al enviar el mensaje", error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Mensaje enviado correctamente", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { message: "Error en el servidor", error: error.message },
      { status: 500 }
    );
  }
}
