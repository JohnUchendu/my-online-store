// app/api/contact-whatsapp/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const phoneNumberId = process.env.WHATSAPP_PHONE_ID;
    const token = process.env.WHATSAPP_ACCESS_TOKEN;
    const recipientNumber = "2348012345678"; // your WhatsApp number

    const payload = {
      messaging_product: "whatsapp",
      to: recipientNumber,
      type: "text",
      text: { body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` },
    };

    await fetch(`https://graph.facebook.com/v17.0/${phoneNumberId}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({ message: "Message sent to WhatsApp!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
