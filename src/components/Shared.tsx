"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n";

/** Standard page header: eyebrow + serif title + subtitle on a cream background. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  arabic,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  arabic?: string;
}) {
  return (
    <section className="pattern-star bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        {arabic && (
          <p className="mb-4 font-arabic text-2xl text-brand" dir="rtl">
            {arabic}
          </p>
        )}
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
          {eyebrow}
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-bold leading-tight text-brand sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

/** Centered section heading with gold rule. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
        {eyebrow}
      </p>
      <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-brand sm:text-4xl">
        {title}
      </h2>
      <div className="gold-rule mt-5" />
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
          {subtitle}
        </p>
      )}
    </div>
  );
}

const ctaText = {
  en: {
    title: "Start with a free trial class",
    body: "Meet your tutor, try a real lesson, and decide with confidence. No payment details needed.",
    primary: "Book a Free Trial Class",
    secondary: "View pricing",
  },
  de: {
    title: "Beginnen Sie mit einer kostenlosen Probestunde",
    body: "Lernen Sie Ihren Lehrer kennen, erleben Sie eine echte Stunde und entscheiden Sie dann in Ruhe. Keine Zahlungsdaten erforderlich.",
    primary: "Kostenlose Probestunde buchen",
    secondary: "Preise ansehen",
  },
} as const;

/** Dark emerald call-to-action band used at the bottom of most pages. */
export function CtaBand() {
  const { locale } = useLocale();
  const t = ctaText[locale];
  return (
    <section className="bg-brand-deep">
      <div className="pattern-star-light">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/75">
            {t.body}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/free-trial"
              className="rounded-full bg-gold px-8 py-3.5 text-base font-bold text-brand-deep shadow transition hover:bg-gold-light"
            >
              {t.primary}
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-white/40 px-8 py-3.5 text-base font-bold text-white transition hover:bg-white/10"
            >
              {t.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
