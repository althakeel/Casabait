import { isLocale, type Locale } from "@/i18n/config";
import { VALID_INTERESTS } from "@/lib/email/interest-labels";
import type { ContactFormPayload } from "@/lib/email/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ValidatedContactPayload {
  name: string;
  email: string;
  phone?: string;
  interest?: string;
  message: string;
  locale: Locale;
}

export function validateContactPayload(body: unknown):
  | { success: true; data: ValidatedContactPayload }
  | { success: false; error: string } {
  if (!body || typeof body !== "object") {
    return { success: false, error: "Invalid request body" };
  }

  const payload = body as ContactFormPayload;

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const phone = payload.phone?.trim();
  const interest = payload.interest?.trim();
  const locale: Locale = payload.locale && isLocale(payload.locale) ? payload.locale : "en";

  if (!name || name.length < 2 || name.length > 100) {
    return { success: false, error: "Please enter a valid name (2–100 characters)." };
  }

  if (!email || !EMAIL_REGEX.test(email) || email.length > 254) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (phone && phone.length > 30) {
    return { success: false, error: "Phone number is too long." };
  }

  if (interest && !VALID_INTERESTS.includes(interest)) {
    return { success: false, error: "Please select a valid property interest." };
  }

  if (!message || message.length < 10 || message.length > 5000) {
    return { success: false, error: "Message must be between 10 and 5,000 characters." };
  }

  return {
    success: true,
    data: {
      name,
      email,
      phone: phone || undefined,
      interest: interest || undefined,
      message,
      locale,
    },
  };
}
