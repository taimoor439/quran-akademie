"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n";

// PLACEHOLDER: no real WhatsApp number exists yet. Before launch, replace
// this link with the real wa.me link, e.g. https://wa.me/4917XXXXXXXX
// (business WhatsApp number). Until then the button opens the contact page.
export default function WhatsAppButton() {
  const { locale } = useLocale();
  return (
    <Link
      href="/contact"
      aria-label={locale === "de" ? "Kontakt über WhatsApp" : "Contact us on WhatsApp"}
      title={locale === "de" ? "Kontakt über WhatsApp" : "Contact us on WhatsApp"}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.1 14.9l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 0 1 12 4zm-3.2 4.2c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1.1 2.6c.1.2 1.9 3 4.7 4.1 2.3.9 2.8.7 3.3.7.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.2-.2-.5-.3l-1.9-.9c-.3-.2-.5-.1-.7.1l-.9 1.1c-.2.2-.3.2-.6.1a7.6 7.6 0 0 1-2.2-1.4 8.3 8.3 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5z" />
      </svg>
    </Link>
  );
}
