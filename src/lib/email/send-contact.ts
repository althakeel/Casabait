import nodemailer from "nodemailer";
import { formatFromAddress, getEmailRuntimeConfig } from "@/lib/email/config";
import { renderInternalNotificationEmail } from "@/lib/email/templates/internal-notification";
import { renderAutoReplyEmail } from "@/lib/email/templates/auto-reply";
import type { ContactSubmission } from "@/lib/email/types";

export async function sendContactEmails(data: ContactSubmission): Promise<void> {
  const config = getEmailRuntimeConfig();
  const submittedAt = data.submittedAt;
  const from = formatFromAddress(config.from);

  const transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.secure,
    auth: {
      user: config.smtp.user,
      pass: config.smtp.pass,
    },
  });

  const internalHtml = renderInternalNotificationEmail({ ...data, submittedAt });
  const autoReplyHtml = renderAutoReplyEmail({ ...data, submittedAt });

  const internalSubject = `New Property Inquiry — ${data.name}`;
  const autoReplySubject =
    data.locale === "ar"
      ? "لقد استلمنا استفسارك — كازا بايت"
      : "We received your inquiry — Casa Bait";

  await transporter.sendMail({
    from,
    to: config.teamEmail,
    replyTo: data.email,
    subject: internalSubject,
    html: internalHtml,
  });

  await transporter.sendMail({
    from,
    to: data.email,
    subject: autoReplySubject,
    html: autoReplyHtml,
  });
}
