"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import {
  COOKIE_CONSENT_KEY,
  denyAnalyticsConsent,
  grantAnalyticsConsent,
} from "@/lib/analytics";

const KEY = COOKIE_CONSENT_KEY;

const text = {
  en: {
    body: "We use cookies to remember your language choice and, only with your consent, to measure visits with Google Analytics. You can accept or decline — the website works either way.",
    accept: "Accept",
    decline: "Decline",
    privacy: "Privacy policy",
  },
  de: {
    body: "Wir verwenden Cookies, um Ihre Sprachauswahl zu speichern und – nur mit Ihrer Einwilligung – Besuche mit Google Analytics zu messen. Sie können zustimmen oder ablehnen — die Website funktioniert in beiden Fällen.",
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
    if (value === "accepted") {
      grantAnalyticsConsent();
    } else {
      denyAnalyticsConsent();
    }
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
