import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  consent: z.boolean().optional(),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }

    const data = parsed.data;

    // Webhook URL from env — only send if configured
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, source: "peakspring.nl/contact", timestamp: new Date().toISOString() }),
        });
      } catch (webhookErr) {
        console.error("Webhook delivery failed:", webhookErr);
      }
    }

    return NextResponse.json({ success: true, message: "Thank you! We'll be in touch within 24 hours." });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}