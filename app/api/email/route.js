import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { sanitize } from "isomorphic-dompurify";

// Simple in-memory store for rate limiting
const rateLimitStore = {
  emails: 0,
  resetTime: Date.now(),
};

const RATE_LIMIT = 50;
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes in milliseconds

export async function POST(request) {
  console.log("API route hit");
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

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { message: "El formato del correo no es válido" },
        { status: 400 }
      );
    }

    // Message length check
    if (!message || message.trim().length === 0 || message.length > 1000) {
      return NextResponse.json(
        { message: "El mensaje debe tener entre 1 y 1000 caracteres" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitize(name);
    const sanitizedEmail = sanitize(email);
    const sanitizedMessage = sanitize(message);

    // Check if the API key is available
    if (!process.env.SENDGRID_API_KEY) {
      console.error("SendGrid API key is not defined");
      return NextResponse.json(
        { message: "Error de configuración del servidor" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "apikey",
        pass: process.env.SENDGRID_API_KEY,
      },
    });

    try {
      console.log("Attempting to send email");
      const info = await transporter.sendMail({
        from: process.env.CONTACT_FROM_EMAIL || "lekhalali56@gmail.com",
        to: process.env.CONTACT_TO_EMAIL || "lekhalali56@gmail.com",
        replyTo: sanitizedEmail,
        subject: `Nuevo mensaje de ${sanitizedName} (portfolio)`,
        text: `
          Nombre: ${sanitizedName}
          Correo: ${sanitizedEmail}
          Mensaje: ${sanitizedMessage}
        `,
        headers: {
          "X-Priority": "3",
          "X-MSMail-Priority": "Normal",
          Importance: "Normal",
          "X-Mailer": "Portfolio Ali Lekhal",
        },
      });
      console.log("Email sent successfully:", info);

      return NextResponse.json(
        { message: "Mensaje enviado correctamente" },
        { status: 200 }
      );
    } catch (sendError) {
      console.error("Error sending email:", sendError);
      return NextResponse.json(
        { message: "Error al enviar el mensaje", error: sendError.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { message: "Error en el servidor", error: error.message },
      { status: 500 }
    );
  }
}
