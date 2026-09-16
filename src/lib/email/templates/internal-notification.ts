import type { ContactSubmission } from "@/lib/email/types";
import { getInterestLabel } from "@/lib/email/interest-labels";
import {
  emailLayout,
  emailHeader,
  emailFooter,
  fieldRow,
  primaryButton,
  escapeHtml,
  EMAIL_COLORS,
} from "./shared";

export function renderInternalNotificationEmail(data: ContactSubmission): string {
  const submittedAt = data.submittedAt.toLocaleString("en-AE", {
    timeZone: "Asia/Dubai",
    dateStyle: "full",
    timeStyle: "short",
  });

  const interest = getInterestLabel(data.interest, "en");
  const phone = data.phone?.trim() || "Not provided";
  const mailtoHref = `mailto:${encodeURIComponent(data.email)}?subject=${encodeURIComponent(`Re: Your Casa Bait property inquiry`)}`;

  const body = `
    ${emailHeader("New Inquiry")}
    <tr>
      <td style="padding:32px;">
        <h1 style="margin:0 0 8px;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:600;color:${EMAIL_COLORS.charcoal};">
          New Property Inquiry
        </h1>
        <p style="margin:0 0 24px;font-size:14px;line-height:1.6;color:${EMAIL_COLORS.muted};">
          A new message was submitted via the casabait.ae contact form.
        </p>

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${EMAIL_COLORS.ivory};border:1px solid ${EMAIL_COLORS.border};border-radius:8px;padding:0 20px;">
          ${fieldRow("Name", escapeHtml(data.name))}
          ${fieldRow("Email", `<a href="mailto:${escapeHtml(data.email)}" style="color:${EMAIL_COLORS.primary};text-decoration:none;">${escapeHtml(data.email)}</a>`)}
          ${fieldRow("Phone", escapeHtml(phone), "ltr")}
          ${fieldRow("Property Interest", escapeHtml(interest))}
          ${fieldRow("Message", `<span style="white-space:pre-wrap;">${escapeHtml(data.message)}</span>`)}
          ${fieldRow("Submitted", escapeHtml(submittedAt), "ltr")}
          ${fieldRow("Language", data.locale === "ar" ? "Arabic (AR)" : "English (EN)", "ltr")}
        </table>

        ${primaryButton(mailtoHref, `Reply to ${data.name.split(" ")[0]}`)}
      </td>
    </tr>
    ${emailFooter("en")}
  `;

  return emailLayout(body);
}
