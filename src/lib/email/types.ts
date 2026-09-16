import type { Locale } from "@/i18n/config";

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  interest?: string;
  message: string;
  locale: Locale;
  submittedAt: Date;
}

export interface ContactFormPayload {
  name: string;
  email: string;
  phone?: string;
  interest?: string;
  message: string;
  locale?: string;
  website?: string;
}
