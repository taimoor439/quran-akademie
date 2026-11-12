"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { faqs } from "@/lib/faqs";
import { PageHero, CtaBand } from "@/components/Shared";

const content = {
  en: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    subtitle:
      "Everything parents ask us before the first lesson — how classes work, when they run in Germany time (CET/CEST), and how payment and cancellation work.",
    stillTitle: "Still have questions?",
    stillBody:
      "We are happy to help. Send us a message and we will get back to you as soon as we can.",
    stillCta: "Contact us",
  },
  de: {
    eyebrow: "FAQ",
    title: "Häufig gestellte Fragen",
    subtitle:
      "Alles, was Eltern uns vor der ersten Stunde fragen — wie der Unterricht funktioniert, wann die Stunden nach deutscher Zeit (MEZ/MESZ) stattfinden, und wie Zahlung und Kündigung laufen.",
    stillTitle: "Noch Fragen?",
    stillBody:
      "Wir helfen Ihnen gerne weiter. Schreiben Sie uns eine Nachricht, und wir melden uns so bald wie möglich bei Ihnen.",
    stillCta: "Kontakt aufnehmen",
  },
} as const;

export default function FaqPage() {
  const { locale } = useLocale();
  const t = content[locale];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main>
      <PageHero eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      {/* ACCORDION */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <div
                  key={faq.q.en}
                  className={`overflow-hidden rounded-3xl shadow-card transition ${
                    open ? "bg-cream ring-1 ring-gold/40" : "bg-cream"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
                  >
                    <span className="font-display text-lg font-bold text-brand sm:text-xl">
                      {faq.q[locale]}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg font-bold transition-transform duration-300 ${
                        open ? "rotate-45 bg-gold text-brand-deep" : "bg-brand text-white"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  {open && (
                    <p className="px-6 pb-6 leading-relaxed text-ink/70 sm:px-8">
                      {faq.a[locale]}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* STILL HAVE QUESTIONS */}
          <div className="mt-12 rounded-3xl bg-brand p-8 text-center shadow-card sm:p-10">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              {t.stillTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-white/80">
              {t.stillBody}
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-gold px-8 py-3.5 text-base font-bold text-brand-deep transition hover:bg-gold-light"
            >
              {t.stillCta}
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
