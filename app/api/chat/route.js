import OpenAI from "openai";
import { businessData } from "@/lib/knowledge";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return Response.json(
        { error: "OPENAI_API_KEY is missing from environment variables" },
        { status: 500 }
      );
    }

    const { message, history = [] } = await req.json();
    const safeHistory = Array.isArray(history)
      ? history.filter(
          (entry) => entry && typeof entry.role === "string" && typeof entry.content === "string"
        )
      : [];

    const leadPrompt = `
If the user shows interest (like "I need service", "how to start", "contact"),
politely ask for:
- Name
- Email

If user provides email, thank them and say our team will contact them soon.
`;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: businessData + leadPrompt,
        },
        ...safeHistory,
        {
          role: "user",
          content: message,
        },
      ],
    });

    return Response.json({
      reply: response.choices?.[0]?.message?.content || "Sorry, I could not generate a response.",
    });

  } catch (err) {
    console.error('OpenAI error in /api/chat:', err);

    const defaultMsg = 'Chat is temporarily unavailable. Please try again.';
    const devDebug = process.env.NODE_ENV !== 'production';

    const payload = { error: defaultMsg };
    if (devDebug) {
      payload.debug = {
        name: err?.name,
        message: err?.message,
        status: err?.status || err?.code,
      };
    }

    return Response.json(payload, { status: 500 });
  }
}