//Contact form handler server action
"use server";
import { Resend } from 'resend';
import { EmailTemplate } from '../components/EmailTemplate';


export async function handleContactForm(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
    const resend = new Resend(String(process.env.EMAIL_PROVIDER_API));
    const {data} = await resend.emails.send({
        from: `ACM <${String(process.env.EMAIL_PROVIDER_DOMAIN)}>`,
        to: [String(process.env.ACM_CONTACT_EMAIL)],
        subject: 'New Contact Form Submission',
        react : EmailTemplate({name, email, message}),
    });
        console.log(data);
        return { success: true };
    } catch (error) {
        return { error: "Failed to send message" };
    }
}

