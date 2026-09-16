"use client";

import { useState, FormEvent } from "react";
import { useLocale } from "@/i18n/LocaleProvider";

interface ContactFormProps {
  showPropertyInterest?: boolean;
  submitLabel?: string;
}

export function ContactForm({ showPropertyInterest = true, submitLabel }: ContactFormProps) {
  const { dict } = useLocale();
  const t = dict.contact.form;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-secondary/30 bg-secondary/5 p-8 text-center shadow-gold">
        <p className="font-serif text-xl font-semibold text-primary">{dict.common.thankYouTitle}</p>
        <p className="mt-2 text-sm text-neutral-dark/70">{dict.common.thankYouBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-primary">
          {t.fullName}
        </label>
        <input type="text" id="name" name="name" required className="input-field" placeholder={t.namePlaceholder} />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-primary">
          {t.email}
        </label>
        <input type="email" id="email" name="email" required className="input-field" placeholder={t.emailPlaceholder} />
      </div>
      <div>
        <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-primary">
          {t.phone}
        </label>
        <input type="tel" id="phone" name="phone" className="input-field" placeholder={t.phonePlaceholder} dir="ltr" />
      </div>
      {showPropertyInterest && (
        <div>
          <label htmlFor="interest" className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-primary">
            {t.propertyInterest}
          </label>
          <select id="interest" name="interest" className="input-field">
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
          className="input-field resize-y"
          placeholder={t.messagePlaceholder}
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        {submitLabel ?? dict.common.sendMessage}
      </button>
    </form>
  );
}
