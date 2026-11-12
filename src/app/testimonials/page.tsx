"use client";

import { useLocale } from "@/lib/i18n";
import { testimonials } from "@/lib/testimonials";
import { PageHero, CtaBand } from "@/components/Shared";

const content = {
  en: {
    eyebrow: "Testimonials",
    title: "What families say about us",
    subtitle:
      "From a first alphabet lesson to finishing Hifz — here is what parents and adult students tell us about learning with Quran Akademie.",
    inviteTitle: "Share your experience",
    inviteBody:
      "Are you learning with us? We would love to hear how it is going. After launch, parents and students can share their experience with us — and help other families find the right tutor.",
  },
  de: {
    eyebrow: "Erfahrungsberichte",
    title: "Was Familien über uns sagen",
    subtitle:
      "Von der ersten Alphabetstunde bis zum Abschluss des Hifz — hier berichten Eltern und erwachsene Schüler vom Lernen mit der Quran Akademie.",
    inviteTitle: "Teilen Sie Ihre Erfahrung",
    inviteBody:
      "Lernen Sie bei uns? Wir freuen uns zu hören, wie es läuft. Nach dem Start können Eltern und Schüler ihre Erfahrung mit uns teilen — und anderen Familien helfen, den passenden Lehrer zu finden.",
  },
} as const;

export default function TestimonialsPage() {
  const { locale } = useLocale();
  const t = content[locale];

  return (
    <main>
      <PageHero eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      {/* REVIEW CARDS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((review) => (
              <figure
                key={review.name.en}
                className="flex flex-col rounded-3xl bg-cream p-8 shadow-card transition hover:shadow-lift sm:p-10"
              >
                <span
                  className="font-display text-6xl leading-none text-gold"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 font-display text-xl leading-relaxed text-brand sm:text-2xl">
                  {review.quote[locale]}
                </blockquote>
                <figcaption className="mt-8 border-t border-brand/10 pt-6">
                  <p className="font-bold text-brand">{review.name[locale]}</p>
                  <p className="mt-1 text-sm font-semibold text-gold-dark">
                    {review.detail[locale]}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* MOSQUE BANNER ACCENT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <div className="overflow-hidden rounded-3xl shadow-card">
            <img
              src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1200&q=80"
              alt="Mosque at dusk"
              loading="lazy"
              className="h-64 w-full object-cover sm:h-80"
            />
          </div>
        </div>
      </section>

      {/* INVITE TO SHARE */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-brand sm:text-4xl">
            {t.inviteTitle}
          </h2>
          <div className="gold-rule mt-5" />
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
            {t.inviteBody}
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
