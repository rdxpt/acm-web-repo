import { Resend } from "resend";
import { EmailTemplate } from "../../../src/components/EmailTemplate.jsx";


export async function POST(req) {
  try {
    const body = await req.json(); // Parse JSON request body
    const { name, email, message } = body;

    const resend = new Resend(process.env.EMAIL_PROVIDER_API);

    await resend.emails.send({
      from: `ACM <${process.env.EMAIL_PROVIDER_DOMAIN}>`,
      to: [process.env.ACM_CONTACT_EMAIL],
      subject: "New Contact Form Submission",
      react: EmailTemplate({ name, email, message }),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Email Error:", error);
    return new Response(JSON.stringify({ error: "Failed to send message" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
