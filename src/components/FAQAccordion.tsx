"use client";

import { useState } from "react";
import { Icon } from "./Icon";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  idPrefix?: string;
}

export function FAQAccordion({ faqs, idPrefix = "faq" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `${idPrefix}-panel-${index}`;
        const buttonId = `${idPrefix}-button-${index}`;

        return (
          <div
            key={faq.question}
            className={`overflow-hidden rounded-lg border bg-surface transition-colors duration-200 ${
              isOpen ? "border-secondary/50 shadow-card" : "border-primary/10 hover:border-primary/20"
            }`}
          >
            <button
              id={buttonId}
              type="button"
              className="flex min-h-[52px] w-full items-center justify-between gap-4 px-5 py-4 text-start"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="text-sm font-semibold text-charcoal sm:text-base">{faq.question}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                  isOpen ? "border-secondary bg-secondary/10" : "border-primary/15 bg-ivory"
                }`}
                aria-hidden="true"
              >
                <Icon
                  name="chevron-down"
                  size={18}
                  className={`transition-transform duration-200 ${isOpen ? "rotate-180 icon-gold" : ""}`}
                />
              </span>
            </button>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="border-t border-primary/10 px-5 py-4 text-sm leading-relaxed text-neutral-dark/70"
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
