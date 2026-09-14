"use client";

import { useState, FormEvent } from "react";

interface ContactFormProps {
  showPropertyInterest?: boolean;
  submitLabel?: string;
}

export function ContactForm({ showPropertyInterest = true, submitLabel = "Send Message" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 text-center">
        <p className="text-lg font-medium text-primary">Thank you for your message!</p>
        <p className="mt-2 text-sm text-gray-600">A Casa Bait consultant will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-neutral-dark">
          Full Name
        </label>
        <input type="text" id="name" name="name" required className="input-field" placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-neutral-dark">
          Email
        </label>
        <input type="email" id="email" name="email" required className="input-field" placeholder="you@email.com" />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-neutral-dark">
          Phone
        </label>
        <input type="tel" id="phone" name="phone" className="input-field" placeholder="+971 XX XXX XXXX" />
      </div>
      {showPropertyInterest && (
        <div>
          <label htmlFor="interest" className="mb-1 block text-sm font-medium text-neutral-dark">
            Property Interest
          </label>
          <select id="interest" name="interest" className="input-field">
            <option value="">Select an option</option>
            <option value="buy">Buying Property</option>
            <option value="sell">Selling Property</option>
            <option value="rent">Renting / Leasing</option>
            <option value="off-plan">Off-Plan Investment</option>
            <option value="valuation">Property Valuation</option>
            <option value="other">Other</option>
          </select>
        </div>
      )}
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-neutral-dark">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="input-field resize-y"
          placeholder="Tell us about your property requirements..."
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        {submitLabel}
      </button>
    </form>
  );
}
