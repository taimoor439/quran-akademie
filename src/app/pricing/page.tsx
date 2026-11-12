"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { plans } from "@/lib/plans";
import { faqs } from "@/lib/faqs";
import { PageHero, SectionHeading, CtaBand } from "@/components/Shared";

// Pricing FAQ strip reuses the payment / cancellation entries from faqs.ts:
// trial class (3), how to pay (6), cancel or pause (7).
const pricingFaqs = [faqs[3], faqs[6], faqs[7]];

const content = {
  en: {
    eyebrow: "Pricing",
    title: "Simple, honest pricing",
    subtitle:
      "One-to-one lessons with a certified Quran tutor, in Germany time (CET/CEST). No lock-in, no hidden fees — and your first class is free.",
    perMonth: "/month",
    classesPerWeek: (n: number) => `${n} classes per week`,
    minutesPerClass: (n: number) => `${n} minutes per class, 1-to-1`,
    mostPopular: "Most popular",
    choosePlan: "Choose this plan",
    notesEyebrow: "Good to know",
    notesTitle: "Everything included, nothing hidden",
    siblingTitle: "Sibling discount — 10% off",
    siblingBody:
      "Enrol a second child from the same family and save 10% on their plan, every month. The discount applies automatically when you book together.",
    currencyTitle: "Prices in USD — EUR at checkout",
    currencyBody:
      "Plans are priced in USD and the EUR equivalent is charged at checkout at the current rate. Final EUR pricing is confirmed at launch; the amount you see at checkout is the amount you pay.",
    trialTitle: "Free trial class included",
    trialBody:
      "Every plan starts with a free 30-minute trial class. Meet the tutor, try a real lesson, and only then decide — no payment details needed.",
    faqEyebrow: "Pricing questions",
    faqTitle: "Questions about payment",
    faqCta: "See all frequently asked questions",
  },
  de: {
    eyebrow: "Preise",
    title: "Einfache, ehrliche Preise",
    subtitle:
      "Einzelunterricht mit einer zertifizierten Koranlehrkraft, nach deutscher Zeit (MEZ/MESZ). Keine Mindestlaufzeit, keine versteckten Kosten — und die erste Stunde ist kostenlos.",
    perMonth: "/Monat",
    classesPerWeek: (n: number) => `${n} Stunden pro Woche`,
    minutesPerClass: (n: number) => `${n} Minuten pro Stunde, Einzelunterricht`,
    mostPopular: "Am beliebtesten",
    choosePlan: "Diesen Tarif wählen",
    notesEyebrow: "Gut zu wissen",
    notesTitle: "Alles inklusive, nichts versteckt",
    siblingTitle: "Geschwisterrabatt — 10 % Rabatt",
    siblingBody:
      "Melden Sie ein zweites Kind aus derselben Familie an und sparen Sie jeden Monat 10 % auf dessen Tarif. Der Rabatt wird automatisch gewährt, wenn Sie gemeinsam buchen.",
    currencyTitle: "Preise in USD — EUR an der Kasse",
    currencyBody:
      "Die Tarife sind in USD angegeben; an der Kasse wird der Euro-Gegenwert zum aktuellen Kurs berechnet. Die endgültigen Euro-Preise werden zum Start bestätigt; der Betrag, den Sie an der Kasse sehen, ist der Betrag, den Sie zahlen.",
    trialTitle: "Kostenlose Probestunde inklusive",
    trialBody:
      "Jeder Tarif beginnt mit einer kostenlosen 30-minütigen Probestunde. Lernen Sie den Lehrer kennen, erleben Sie eine echte Stunde und entscheiden Sie erst dann — ohne Angabe von Zahlungsdaten.",
    faqEyebrow: "Fragen zu den Preisen",
    faqTitle: "Fragen zur Zahlung",
    faqCta: "Alle häufig gestellten Fragen ansehen",
  },
} as const;

export default function PricingPage() {
  const { locale } = useLocale();
  const t = content[locale];

  return (
    <main>
      <PageHero eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      {/* PLAN CARDS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-3xl p-8 shadow-card transition hover:shadow-lift ${
                  plan.popular
                    ? "border-2 border-gold bg-brand text-white"
                    : "bg-cream"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-deep shadow">
                    {t.mostPopular}
                  </span>
                )}
                <h2
                  className={`font-serif text-2xl font-bold ${
                    plan.popular ? "text-white" : "text-brand"
                  }`}
                >
                  {plan.name[locale]}
                </h2>
                <p
                  className={`mt-1 text-sm font-semibold ${
                    plan.popular ? "text-gold-light" : "text-gold-dark"
                  }`}
                >
                  {t.classesPerWeek(plan.classesPerWeek)}
                </p>
                <p className="mt-6">
                  <span className="font-serif text-5xl font-bold">
                    ${plan.priceUsd}
                  </span>
                  <span
                    className={`ml-1 text-base ${
                      plan.popular ? "text-white/70" : "text-ink/60"
                    }`}
                  >
                    {t.perMonth}
                  </span>
                </p>
                <p
                  className={`mt-2 text-sm ${
                    plan.popular ? "text-white/75" : "text-ink/70"
                  }`}
                >
                  {t.minutesPerClass(plan.minutesPerClass)}
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features[locale].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          plan.popular
                            ? "bg-gold text-brand-deep"
                            : "bg-brand text-white"
                        }`}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span className={plan.popular ? "text-white/90" : "text-ink/80"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/free-trial"
                  className={`mt-8 rounded-full px-8 py-3.5 text-center text-base font-bold transition ${
                    plan.popular
                      ? "bg-gold text-brand-deep hover:bg-gold-light"
                      : "bg-brand text-white hover:bg-brand-light"
                  }`}
                >
                  {t.choosePlan}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTES: sibling discount, currency, free trial */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading eyebrow={t.notesEyebrow} title={t.notesTitle} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft font-serif text-xl font-bold text-brand">
                %
              </span>
              <h3 className="mt-5 font-serif text-xl font-bold text-brand">
                {t.siblingTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {t.siblingBody}
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft font-serif text-xl font-bold text-brand">
                €
              </span>
              <h3 className="mt-5 font-serif text-xl font-bold text-brand">
                {t.currencyTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {t.currencyBody}
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft font-serif text-xl font-bold text-brand">
                ★
              </span>
              <h3 className="mt-5 font-serif text-xl font-bold text-brand">
                {t.trialTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {t.trialBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING FAQ STRIP */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading eyebrow={t.faqEyebrow} title={t.faqTitle} />
          <div className="mt-12 space-y-6">
            {pricingFaqs.map((faq) => (
              <div key={faq.q.en} className="rounded-3xl bg-cream p-8 shadow-card">
                <h3 className="font-serif text-xl font-bold text-brand">
                  {faq.q[locale]}
                </h3>
                <p className="mt-3 leading-relaxed text-ink/70">{faq.a[locale]}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-block rounded-full border-2 border-brand px-8 py-3 text-base font-bold text-brand transition hover:bg-brand-soft"
            >
              {t.faqCta}
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
