import nodemailer from "nodemailer";

const recipient = "yazid.ziad2000@gmail.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function respond(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  return res.end(JSON.stringify(body));
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return respond(res, 405, { error: "Method not allowed." });
  }

  const { name, email, subject, message, website } = req.body || {};
  if (website) {
    return respond(res, 400, {
      error: "Please leave the website field empty. It is an anti-spam field.",
    });
  }

  const fields = { name, email, subject, message };
  const limits = { name: 100, email: 254, subject: 150, message: 5000 };
  for (const [field, limit] of Object.entries(limits)) {
    if (typeof fields[field] !== "string" || !fields[field].trim()) {
      return respond(res, 400, { error: `Please provide a valid ${field}.` });
    }
    if (fields[field].trim().length > limit) {
      return respond(res, 400, { error: `${field} is too long.` });
    }
  }

  const normalizedEmail = email.trim();
  if (!emailPattern.test(normalizedEmail)) {
    return respond(res, 400, { error: "Please provide a valid email address." });
  }
  if (/[\r\n]/.test(subject)) {
    return respond(res, 400, { error: "Subject must be a single line." });
  }

  const user = process.env.GMAIL_ADDRESS;
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  if (!user || !pass) {
    console.error("Contact email is not configured. Set GMAIL_ADDRESS and GMAIL_APP_PASSWORD.");
    return respond(res, 503, {
      error: "Email delivery is not configured yet. Please contact yazid.ziad2000@gmail.com directly.",
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  try {
    await transporter.sendMail({
      from: { name: "Portfolio Contact", address: user },
      to: recipient,
      replyTo: normalizedEmail,
      subject: `Portfolio inquiry: ${subject.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${normalizedEmail}`,
        `Subject: ${subject.trim()}`,
        "",
        message.trim(),
      ].join("\n"),
    });
    return respond(res, 200, { message: "Message sent." });
  } catch (error) {
    console.error("Gmail contact delivery failed:", error.code || "UNKNOWN", error.command || "");
    return respond(res, 502, {
      error: "Your message could not be delivered. Please try again later or email yazid.ziad2000@gmail.com directly.",
    });
  } finally {
    transporter.close();
  }
}
