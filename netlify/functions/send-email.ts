import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  const {
    RESEND_API_KEY,
    CONTACT_FORM_SENDER_EMAIL, // Email address verified with Resend (e.g., noreply@yourdomain.com)
    CONTACT_FORM_RECEIVER_EMAIL, // Your personal email to receive submissions
  } = process.env;

  if (!RESEND_API_KEY || !CONTACT_FORM_SENDER_EMAIL || !CONTACT_FORM_RECEIVER_EMAIL) {
    console.error("Missing required environment variables for Resend.");
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server configuration error: Missing email service variables." }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required form fields." }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    const emailHtml = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    const data = await resend.emails.send({
      from: `Ternafit Contact Form <${CONTACT_FORM_SENDER_EMAIL}>`, // This 'from' name is what appears in the email client
      to: [CONTACT_FORM_RECEIVER_EMAIL],
      subject: `New Contact Form Message: ${subject}`,
      replyTo: email, // So you can directly reply to the user who submitted the form
      html: emailHtml,
    });

    if (data.error) {
      console.error("Resend API Error:", data.error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: `Failed to send email: ${data.error.message}` }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully! We will get back to you as soon as possible." }),
      headers: { 'Content-Type': 'application/json' },
    };

  } catch (error) {
    console.error("Error processing request:", error);
    let errorMessage = "An unexpected error occurred.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === 'string' && error.includes("Unexpected token")) {
        errorMessage = "Invalid request body. Please ensure it is valid JSON.";
    }
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `Server error: ${errorMessage}` }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
};

export { handler };