"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { NAV_LINKS, PHONE, PHONE_LINK } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="container-custom flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo variant="header" />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-dark transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={PHONE_LINK} className="text-sm font-medium text-primary" aria-label={`Call us at ${PHONE}`}>
            {PHONE}
          </a>
          <Link href="/contact" className="btn-primary text-sm">
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <Icon name="menu" size={24} />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileOpen(false)} aria-hidden="true" />
          <div className="fixed right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b px-4 py-3">
              <Logo variant="header" />
              <button
                type="button"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <Icon name="x" size={24} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="min-h-[44px] rounded-md px-4 py-3 text-base font-medium text-neutral-dark transition-colors hover:bg-neutral-light hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="border-t p-4">
              <a href={PHONE_LINK} className="mb-3 block text-sm font-medium text-primary">
                {PHONE}
              </a>
              <Link href="/contact" className="btn-primary w-full text-center" onClick={() => setMobileOpen(false)}>
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
