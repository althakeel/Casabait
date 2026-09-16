import { RERA_ORN, SITE_URL } from "@/lib/constants";

/** Email-safe brand tokens */
export const EMAIL_COLORS = {
  primary: "#0B3D2E",
  secondary: "#C9A24B",
  ivory: "#FAF7F2",
  charcoal: "#1A2421",
  muted: "#5A6562",
  white: "#FFFFFF",
  border: "#E8E4DC",
} as const;

export const LOGO_URL = `${process.env.SITE_URL ?? SITE_URL}/logo-footer.jpg`;

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function emailLayout(content: string): string {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <title>Casa Bait</title>
</head>
<body style="margin:0;padding:0;background-color:${EMAIL_COLORS.ivory};font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${EMAIL_COLORS.ivory};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:${EMAIL_COLORS.white};border:1px solid ${EMAIL_COLORS.border};">
          ${content}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function emailHeader(subtitle?: string): string {
  const subtitleRow = subtitle
    ? `<tr><td align="center" style="padding:0 32px 8px;font-size:11px;font-weight:bold;letter-spacing:0.18em;text-transform:uppercase;color:${EMAIL_COLORS.secondary};">${escapeHtml(subtitle)}</td></tr>`
    : "";

  return `<tr>
    <td align="center" style="padding:28px 32px 12px;background-color:${EMAIL_COLORS.primary};">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td align="center" style="padding-bottom:12px;">
            <img src="${LOGO_URL}" alt="Casa Bait Property Consultant" width="160" style="display:block;border:0;max-width:160px;height:auto;background:#ffffff;border-radius:4px;padding:8px 12px;" />
          </td>
        </tr>
        ${subtitleRow}
      </table>
    </td>
  </tr>`;
}

export function emailFooter(locale: "en" | "ar" = "en"): string {
  const isAr = locale === "ar";
  const dir = isAr ? "rtl" : "ltr";
  const textAlign = isAr ? "right" : "left";

  return `<tr>
    <td style="padding:24px 32px;background-color:${EMAIL_COLORS.charcoal};color:#ffffff;font-size:12px;line-height:1.6;direction:${dir};text-align:${textAlign};">
      <p style="margin:0 0 8px;font-size:11px;font-weight:bold;letter-spacing:0.14em;text-transform:uppercase;color:${EMAIL_COLORS.secondary};">
        ${isAr ? "كازا بايت للاستشارات العقارية" : "Casa Bait Property Consultant"}
      </p>
      <p style="margin:0 0 4px;color:rgba(255,255,255,0.7);">
        ${isAr ? "RERA ORN" : "RERA ORN"}: ${RERA_ORN}
      </p>
      <p style="margin:0;color:rgba(255,255,255,0.5);font-size:11px;">
        &copy; ${new Date().getFullYear()} ${isAr ? "كازا بايت. جميع الحقوق محفوظة." : "Casa Bait. All rights reserved."}
      </p>
    </td>
  </tr>`;
}

export function fieldRow(label: string, value: string, dir: "ltr" | "rtl" = "ltr"): string {
  return `<tr>
    <td style="padding:12px 0;border-bottom:1px solid ${EMAIL_COLORS.border};">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td width="140" valign="top" style="font-size:11px;font-weight:bold;letter-spacing:0.12em;text-transform:uppercase;color:${EMAIL_COLORS.secondary};padding-right:16px;">
            ${escapeHtml(label)}
          </td>
          <td valign="top" style="font-size:14px;line-height:1.6;color:${EMAIL_COLORS.charcoal};direction:${dir};">
            ${value}
          </td>
        </tr>
      </table>
    </td>
  </tr>`;
}

export function primaryButton(href: string, label: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:24px auto 0;">
    <tr>
      <td align="center" style="border-radius:8px;background-color:${EMAIL_COLORS.secondary};">
        <a href="${href}" target="_blank" style="display:inline-block;padding:14px 28px;font-size:12px;font-weight:bold;letter-spacing:0.12em;text-transform:uppercase;color:${EMAIL_COLORS.charcoal};text-decoration:none;border-radius:8px;">
          ${escapeHtml(label)}
        </a>
      </td>
    </tr>
  </table>`;
}
