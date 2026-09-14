"use client";

import { useState } from "react";
import { Icon } from "./Icon";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div key={index} className="rounded-lg border border-gray-200 bg-white">
          <button
            type="button"
            className="flex min-h-[44px] w-full items-center justify-between px-4 py-3 text-left font-medium text-neutral-dark"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            {faq.question}
            <Icon
              name="chevron-down"
              size={20}
              className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>
          {openIndex === index && (
            <div className="border-t border-gray-100 px-4 py-3 text-sm text-gray-600">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
