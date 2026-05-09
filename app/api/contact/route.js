import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_RECEIVER || process.env.SMTP_USER;

    const mailBody = `New contact request from ${name} (${email})\n\nService: ${service || "Not specified"}\n\nMessage:\n${message}`;

    await transporter.sendMail({
      from: `${name} <${email}>`,
      to,
      subject: `New contact from ${name} — ${service || "General"}`,
      text: mailBody,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("/api/contact error", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
