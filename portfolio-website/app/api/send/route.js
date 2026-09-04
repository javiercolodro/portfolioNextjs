import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    // Validación en el servidor: no confiar solo en la del cliente
    if (!email || !subject || !message) {
      return Response.json(
        { error: "email, subject and message are required" },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY || !toEmail) {
      return Response.json(
        { error: "Email service is not configured" },
        { status: 500 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: toEmail,
      subject: `[Portfolio] ${subject}`,
      reply_to: email,
      react: (
        <>
          <h1>{subject}</h1>
          <p>
            From: <strong>{email}</strong>
          </p>
          <p>{message}</p>
        </>
      ),
    });

    // Antes esta rama usaba una variable `error` que no existía, así que
    // lanzaba un ReferenceError y el catch devolvía 200 igual: el formulario
    // mostraba "enviado" incluso cuando el envío fallaba.
    if (error) {
      return Response.json({ error: error.message }, { status: 502 });
    }

    return Response.json({ data }, { status: 200 });
  } catch (err) {
    return Response.json(
      { error: err?.message ?? "Unexpected error" },
      { status: 500 },
    );
  }
}
