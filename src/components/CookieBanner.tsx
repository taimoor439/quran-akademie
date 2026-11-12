"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";

const KEY = "qa_cookie_consent";

const text = {
  en: {
    body: "We use only essential cookies to remember your language choice and improve this preview site. No tracking cookies are set.",
    accept: "Accept",
    decline: "Decline",
    privacy: "Privacy policy",
  },
  de: {
    body: "Wir verwenden nur notwendige Cookies, um Ihre Sprachauswahl zu speichern und diese Vorschau-Website zu verbessern. Es werden keine Tracking-Cookies gesetzt.",
    accept: "Akzeptieren",
    decline: "Ablehnen",
    privacy: "Datenschutzerklärung",
  },
} as const;

export default function CookieBanner() {
  const { locale } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem(KEY)) setVisible(true);
  }, []);

  const choose = (value: "accepted" | "declined") => {
    window.localStorage.setItem(KEY, value);
    setVisible(false);
  };

  if (!visible) return null;
  const t = text[locale];

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand/10 bg-white/95 p-4 shadow-lift backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-ink/80">
          {t.body}{" "}
          <Link href="/privacy" className="font-semibold text-brand underline">
            {t.privacy}
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("declined")}
            className="rounded-full border border-brand/30 px-5 py-2 text-sm font-bold text-brand"
          >
            {t.decline}
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-full bg-brand px-5 py-2 text-sm font-bold text-white"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
