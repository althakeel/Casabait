"use client";

import { useState, FormEvent } from "react";
import { useLocale } from "@/i18n/LocaleProvider";

interface ContactFormProps {
  showPropertyInterest?: boolean;
  submitLabel?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  website: string;
}

export function ContactForm({ showPropertyInterest = true, submitLabel }: ContactFormProps) {
  const { dict, locale } = useLocale();
  const t = dict.contact.form;
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
    website: "",
  });

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const resolveErrorMessage = (payload: { error?: string; message?: string }) => {
    switch (payload.error) {
      case "RATE_LIMIT":
        return t.errorRateLimit;
      case "UNAVAILABLE":
        return t.errorUnavailable;
      case "VALIDATION":
        return payload.message || t.errorGeneric;
      default:
        return t.errorGeneric;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          interest: form.interest || undefined,
          message: form.message,
          locale,
          website: form.website,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(resolveErrorMessage(data));
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(t.errorGeneric);
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-lg border border-secondary/30 bg-secondary/5 p-8 text-center shadow-gold">
        <p className="font-serif text-xl font-semibold text-primary">{dict.common.thankYouTitle}</p>
        <p className="mt-2 text-sm text-neutral-dark/70">{dict.common.thankYouBody}</p>
      </div>
    );
  }

  const isLoading = status === "loading";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — hidden from users, bots often fill this */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => updateField("website", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-primary">
          {t.fullName}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={isLoading}
          className="input-field"
          placeholder={t.namePlaceholder}
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-primary">
          {t.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={isLoading}
          className="input-field"
          placeholder={t.emailPlaceholder}
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-primary">
          {t.phone}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          disabled={isLoading}
          className="input-field"
          placeholder={t.phonePlaceholder}
          dir="ltr"
          value={form.phone}
          onChange={(e) => updateField("phone", e.target.value)}
        />
      </div>
      {showPropertyInterest && (
        <div>
          <label htmlFor="interest" className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-primary">
            {t.propertyInterest}
          </label>
          <select
            id="interest"
            name="interest"
            disabled={isLoading}
            className="input-field"
            value={form.interest}
            onChange={(e) => updateField("interest", e.target.value)}
          >
            <option value="">{t.selectOption}</option>
            <option value="buy">{t.options.buy}</option>
            <option value="sell">{t.options.sell}</option>
            <option value="rent">{t.options.rent}</option>
            <option value="off-plan">{t.options.offPlan}</option>
            <option value="valuation">{t.options.valuation}</option>
            <option value="other">{t.options.other}</option>
          </select>
        </div>
      )}
      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-primary">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          disabled={isLoading}
          className="input-field resize-y"
          placeholder={t.messagePlaceholder}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
        />
      </div>

      {status === "error" && errorMessage && (
        <div
          role="alert"
          className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-sm leading-relaxed text-charcoal"
        >
          {errorMessage}
        </div>
      )}

      <button type="submit" className="btn-primary w-full" disabled={isLoading} aria-busy={isLoading}>
        {isLoading ? t.sending : (submitLabel ?? dict.common.sendMessage)}
      </button>
    </form>
  );
}
