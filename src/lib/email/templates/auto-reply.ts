import { ADDRESS, EMAIL, PHONE, WHATSAPP_LINK } from "@/lib/constants";
import type { ContactSubmission } from "@/lib/email/types";
import { getInterestLabel } from "@/lib/email/interest-labels";
import {
  emailLayout,
  emailHeader,
  emailFooter,
  fieldRow,
  escapeHtml,
  EMAIL_COLORS,
} from "./shared";

const COPY = {
  en: {
    subtitle: "Thank You",
    heading: "We received your inquiry",
    intro:
      "Thank you for contacting Casa Bait Property Consultant. A member of our team will review your message and respond within 24 hours.",
    summaryHeading: "Your submission summary",
    labels: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      interest: "Property Interest",
      message: "Message",
    },
    contactHeading: "Need to reach us sooner?",
    phone: "Phone",
    whatsapp: "WhatsApp",
    email: "Email",
    address: "Office",
    notProvided: "Not provided",
  },
  ar: {
    subtitle: "شكراً لك",
    heading: "لقد استلمنا استفسارك",
    intro:
      "شكراً لتواصلك مع كازا بايت للاستشارات العقارية. سيراجع أحد أعضاء فريقنا رسالتك ويرد عليك خلال 24 ساعة.",
    summaryHeading: "ملخص رسالتك",
    labels: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      interest: "نوع الاهتمام العقاري",
      message: "الرسالة",
    },
    contactHeading: "هل تحتاج للتواصل معنا قبل ذلك؟",
    phone: "الهاتف",
    whatsapp: "واتساب",
    email: "البريد الإلكتروني",
    address: "المكتب",
    notProvided: "غير محدد",
  },
} as const;

export function renderAutoReplyEmail(data: ContactSubmission): string {
  const locale = data.locale === "ar" ? "ar" : "en";
  const t = COPY[locale];
  const dir = locale === "ar" ? "rtl" : "ltr";
  const textAlign = locale === "ar" ? "right" : "left";
  const phone = data.phone?.trim() || t.notProvided;
  const interest = getInterestLabel(data.interest, locale);

  const body = `
    ${emailHeader(t.subtitle)}
    <tr>
      <td style="padding:32px;direction:${dir};text-align:${textAlign};">
        <h1 style="margin:0 0 12px;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:600;color:${EMAIL_COLORS.charcoal};">
          ${t.heading}
        </h1>
        <p style="margin:0 0 28px;font-size:15px;line-height:1.7;color:${EMAIL_COLORS.muted};">
          ${t.intro}
        </p>

        <p style="margin:0 0 12px;font-size:11px;font-weight:bold;letter-spacing:0.14em;text-transform:uppercase;color:${EMAIL_COLORS.secondary};">
          ${t.summaryHeading}
        </p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${EMAIL_COLORS.ivory};border:1px solid ${EMAIL_COLORS.border};border-radius:8px;padding:0 20px;margin-bottom:28px;">
          ${fieldRow(t.labels.name, escapeHtml(data.name))}
          ${fieldRow(t.labels.email, escapeHtml(data.email), "ltr")}
          ${fieldRow(t.labels.phone, escapeHtml(phone), "ltr")}
          ${fieldRow(t.labels.interest, escapeHtml(interest))}
          ${fieldRow(t.labels.message, `<span style="white-space:pre-wrap;">${escapeHtml(data.message)}</span>`)}
        </table>

        <p style="margin:0 0 12px;font-size:11px;font-weight:bold;letter-spacing:0.14em;text-transform:uppercase;color:${EMAIL_COLORS.secondary};">
          ${t.contactHeading}
        </p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:14px;line-height:1.8;color:${EMAIL_COLORS.charcoal};">
          <tr><td style="padding:4px 0;"><strong>${t.phone}:</strong> <span dir="ltr">${PHONE}</span></td></tr>
          <tr><td style="padding:4px 0;"><strong>${t.whatsapp}:</strong> <a href="${WHATSAPP_LINK}" style="color:${EMAIL_COLORS.primary};">${WHATSAPP_LINK.replace("https://wa.me/", "+")}</a></td></tr>
          <tr><td style="padding:4px 0;"><strong>${t.email}:</strong> <a href="mailto:${EMAIL}" style="color:${EMAIL_COLORS.primary};" dir="ltr">${EMAIL}</a></td></tr>
          <tr><td style="padding:4px 0;"><strong>${t.address}:</strong> ${escapeHtml(ADDRESS.street)}, ${escapeHtml(ADDRESS.city)}, ${escapeHtml(ADDRESS.country)}</td></tr>
        </table>
      </td>
    </tr>
    ${emailFooter(locale)}
  `;

  return emailLayout(body);
}
