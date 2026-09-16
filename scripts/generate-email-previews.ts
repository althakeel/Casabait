/**
 * Generates static HTML previews of contact form email templates.
 * Run: npm run email:preview
 * Open email-previews/*.html in a browser to review designs.
 */
import fs from "fs";
import path from "path";
import { renderInternalNotificationEmail } from "../src/lib/email/templates/internal-notification";
import { renderAutoReplyEmail } from "../src/lib/email/templates/auto-reply";

const sample = {
  name: "Sarah Al-Mansoori",
  email: "sarah@example.com",
  phone: "+971 50 123 4567",
  interest: "buy",
  message:
    "I'm looking for a 2-bedroom apartment in JVT or JVC, budget around AED 1.2M. Prefer ready properties with good rental yield. Available for viewings on weekends.",
  locale: "en" as const,
  submittedAt: new Date("2026-03-16T10:30:00+04:00"),
};

const sampleAr = {
  ...sample,
  name: "سارة المنصوري",
  locale: "ar" as const,
  message:
    "أبحث عن شقة غرفتين في JVT أو JVC، الميزانية حوالي 1.2 مليون درهم. أفضّل عقارات جاهزة بعائد إيجار جيد.",
};

const outDir = path.join(process.cwd(), "email-previews");
fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(
  path.join(outDir, "internal-notification.html"),
  renderInternalNotificationEmail(sample),
  "utf8"
);
fs.writeFileSync(
  path.join(outDir, "auto-reply-en.html"),
  renderAutoReplyEmail(sample),
  "utf8"
);
fs.writeFileSync(
  path.join(outDir, "auto-reply-ar.html"),
  renderAutoReplyEmail(sampleAr),
  "utf8"
);

console.log("Email previews written to email-previews/");
