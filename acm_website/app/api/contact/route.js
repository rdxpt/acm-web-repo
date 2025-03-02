import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/EmailTemplate"; // Adjust the path if needed

export async function POST(req) {
  try {
    const body = await req.json(); // Parse JSON request body

    const { name, email, message } = body;
    const resend = new Resend(process.env.EMAIL_PROVIDER_API);

    const { data } = await resend.emails.send({
      from: `ACM <${process.env.EMAIL_PROVIDER_DOMAIN}>`,
      to: [process.env.ACM_CONTACT_EMAIL],
      subject: "New Contact Form Submission",
      react: EmailTemplate({ name, email, message }),
    });

    console.log("Email Sent:", data);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
