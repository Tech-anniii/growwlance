import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name = "",
      phone = "",
      email = "",
      service = "",
      message = "",
    } = body;

    // Clean input
    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanService = service.trim();
    const cleanMessage = message.trim();

    // Required field validation
    if (
      !cleanName ||
      !cleanPhone ||
      !cleanEmail ||
      !cleanService ||
      !cleanMessage
    ) {
      return NextResponse.json(
        {
          error: "Please fill in all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        {
          error: "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    // Prevent excessively large submissions
    if (
      cleanName.length > 100 ||
      cleanPhone.length > 30 ||
      cleanEmail.length > 150 ||
      cleanService.length > 100 ||
      cleanMessage.length > 5000
    ) {
      return NextResponse.json(
        {
          error: "One or more fields are too long.",
        },
        {
          status: 400,
        }
      );
    }

    // Check environment variables
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      console.error("Missing SMTP environment variables.");

      return NextResponse.json(
        {
          error: "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,

      port: process.env.SMTP_PORT
        ? Number(process.env.SMTP_PORT)
        : 587,

      secure: process.env.SMTP_SECURE === "true",

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to =
      process.env.CONTACT_RECEIVER || process.env.SMTP_USER;

    const safeService =
      cleanService || "General Enquiry";

    const textMessage = `
New Growwlance Contact Enquiry

Name: ${cleanName}

Email: ${cleanEmail}

Phone: ${cleanPhone}

Service: ${safeService}

Message:
${cleanMessage}
`;

    const htmlMessage = `
      <div style="
        font-family: Arial, sans-serif;
        max-width: 650px;
        margin: 0 auto;
        background: #ffffff;
        color: #111827;
        padding: 30px;
      ">
        <h2 style="color: #d97706;">
          New Growwlance Contact Enquiry 🚀
        </h2>

        <hr style="border: none; border-top: 1px solid #e5e7eb;" />

        <p>
          <strong>Name:</strong><br />
          ${escapeHtml(cleanName)}
        </p>

        <p>
          <strong>Email:</strong><br />
          <a href="mailto:${escapeHtml(cleanEmail)}">
            ${escapeHtml(cleanEmail)}
          </a>
        </p>

        <p>
          <strong>Phone:</strong><br />
          <a href="tel:${escapeHtml(cleanPhone)}">
            ${escapeHtml(cleanPhone)}
          </a>
        </p>

        <p>
          <strong>Service Interested In:</strong><br />
          ${escapeHtml(safeService)}
        </p>

        <p>
          <strong>Project Details:</strong>
        </p>

        <div style="
          background: #f9fafb;
          padding: 20px;
          border-radius: 10px;
          border-left: 4px solid #f59e0b;
          white-space: pre-wrap;
        ">
          ${escapeHtml(cleanMessage)}
        </div>

        <hr style="
          border: none;
          border-top: 1px solid #e5e7eb;
          margin-top: 30px;
        " />

        <p style="
          color: #6b7280;
          font-size: 13px;
        ">
          This enquiry was submitted through growwlance.in
        </p>
      </div>
    `;

    await transporter.sendMail({
      // Always send from your authenticated email
      from: `"Growwlance Website" <${process.env.SMTP_USER}>`,

      to,

      // When you click Reply, it goes directly to the client
      replyTo: cleanEmail,

      subject: `New Lead: ${cleanName} | ${safeService}`,

      text: textMessage,

      html: htmlMessage,
    });

    return NextResponse.json(
      {
        ok: true,
        message:
          "Your message has been sent successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error:
          "Unable to send your message right now. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}

// Escape user input before inserting into HTML email
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}