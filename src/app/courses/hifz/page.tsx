"use client";

import Link from "next/link";
import { useLocale, uiDict } from "@/lib/i18n";
import { getCourse } from "@/lib/courses";
import { CtaBand, PageHero, SectionHeading } from "@/components/Shared";

const content = {
  en: {
    eyebrow: "Course",
    overviewHeading: "Course overview",
    overview: [
      "Memorising the Quran is a journey of a lifetime — and one no student should walk alone. Our Hifz programme pairs each student with an experienced Hafiz or Hafiza who guides daily memorisation, revision and retention.",
      "Every lesson follows a proven three-part structure: new memorisation (sabaq), recent revision (sabqi) and revision of older portions (manzil). Parents receive a monthly progress report, so you always know exactly where your child stands.",
    ],
    learnHeading: "What you will learn",
    learn: [
      "New memorisation (sabaq), verse by verse, with correct Tajweed",
      "Daily revision cycles (sabqi) so new verses truly stick",
      "Long-term revision (manzil) of everything memorised so far",
      "Memorisation techniques that suit your child's learning style",
      "Understanding the meaning of what is memorised",
      "Juz' tracking and milestone celebrations along the way",
    ],
    whoHeading: "Who this course is for",
    whoIntro:
      "Hifz is for motivated students who can already read the Quran with basic Tajweed — usually children aged 7 and above, and committed teens and adults. Family support for short daily revision makes all the difference.",
    who: [
      "Children aged 7+ with Tajweed basics",
      "Teens and adults with a memorisation goal",
      "Families who can support 15–20 minutes of daily revision",
      "Students aiming to complete one juz' — or the whole Quran",
    ],
    formatHeading: "Class format",
    format: [
      "1-to-1 live lessons with a dedicated Hafiz or Hafiza",
      "45 minutes per class on the Hifz Intensive plan",
      "Zoom or Google Meet — link sent before class",
      "Germany time (CET/CEST)",
      "After-school & evening slots, including weekends",
    ],
    pricingHeading: "Simple monthly pricing",
    pricingBody:
      "Plans start from $35/month, with a dedicated Hifz Intensive plan for serious memorisation. Start with a free trial class, no payment details needed.",
    pricingCta: "View pricing",
    trialCta: "Book a free trial",
    faqHeading: "Questions about this course",
    faqEyebrow: "FAQ",
    faqs: [
      {
        q: "How long does it take to memorise the whole Quran?",
        a: "It varies greatly — typically 3–5 years with regular classes and daily revision. There is no rush: your tutor sets a realistic pace for your child, and every juz' completed is celebrated.",
      },
      {
        q: "What if my child forgets what they memorised?",
        a: "Forgetting is a normal part of memorisation — that is exactly why the manzil revision cycle exists. Older portions are revisited every week, so they stay fresh alongside new memorisation.",
      },
      {
        q: "How much revision is needed between classes?",
        a: "Around 15–20 minutes a day is enough for most students. Your tutor gives a clear daily task after every lesson, so parents always know what to practise.",
      },
    ],
    relatedEyebrow: "Keep learning",
    relatedHeading: "Related courses",
  },
  de: {
    eyebrow: "Kurs",
    overviewHeading: "Kursüberblick",
    overview: [
      "Den Koran auswendig zu lernen ist eine Reise fürs Leben — und eine, die kein Schüler allein gehen sollte. Unser Hifz-Programm begleitet jeden Schüler mit einem erfahrenen Hafiz oder einer erfahrenen Hafiza, der bzw. die das tägliche Auswendiglernen, Wiederholen und Behalten anleitet.",
      "Jede Stunde folgt einer bewährten dreiteiligen Struktur: neues Auswendiglernen (Sabaq), Wiederholung des Neuen (Sabqi) und Wiederholung älterer Abschnitte (Manzil). Eltern erhalten einen monatlichen Fortschrittsbericht, sodass Sie immer genau wissen, wo Ihr Kind steht.",
    ],
    learnHeading: "Was Sie lernen werden",
    learn: [
      "Neues Auswendiglernen (Sabaq), Vers für Vers, mit korrektem Tadschwid",
      "Tägliche Wiederholungszyklen (Sabqi), damit neue Verse wirklich sitzen",
      "Langfristige Wiederholung (Manzil) alles bisher Gelernten",
      "Lerntechniken, die zum Lernstil Ihres Kindes passen",
      "Das Verständnis der Bedeutung des Gelernten",
      "Dschuz'-Fortschrittsverfolgung und Meilenstein-Feiern auf dem Weg",
    ],
    whoHeading: "Für wen dieser Kurs ist",
    whoIntro:
      "Hifz ist für motivierte Schüler, die den Koran bereits mit grundlegenden Tadschwid-Regeln lesen können — in der Regel Kinder ab 7 Jahren sowie engagierte Jugendliche und Erwachsene. Die Unterstützung der Familie bei der kurzen täglichen Wiederholung macht den entscheidenden Unterschied.",
    who: [
      "Kinder ab 7 Jahren mit Tadschwid-Grundlagen",
      "Jugendliche und Erwachsene mit einem Auswendiglern-Ziel",
      "Familien, die 15–20 Minuten tägliche Wiederholung unterstützen können",
      "Schüler, die einen Dschuz' — oder den ganzen Koran — auswendig lernen möchten",
    ],
    formatHeading: "Unterrichtsformat",
    format: [
      "Live-Unterricht 1-zu-1 mit einem festen Hafiz oder einer festen Hafiza",
      "45 Minuten pro Stunde im Hifz-Intensivplan",
      "Zoom oder Google Meet — Link kommt vor der Stunde",
      "Deutsche Zeit (MEZ/MESZ)",
      "Nachmittags- und Abendtermine, auch am Wochenende",
    ],
    pricingHeading: "Einfache monatliche Preise",
    pricingBody:
      "Die Pläne beginnen ab 35 $/Monat, mit einem eigenen Hifz-Intensivplan für ernsthaftes Auswendiglernen. Beginnen Sie mit einer kostenlosen Probestunde, ohne Zahlungsdaten.",
    pricingCta: "Preise ansehen",
    trialCta: "Kostenlose Probestunde buchen",
    faqHeading: "Fragen zu diesem Kurs",
    faqEyebrow: "FAQ",
    faqs: [
      {
        q: "Wie lange dauert es, den ganzen Koran auswendig zu lernen?",
        a: "Das ist sehr unterschiedlich — in der Regel 3–5 Jahre bei regelmäßigen Stunden und täglicher Wiederholung. Es gibt keine Eile: Ihre Lehrkraft legt ein realistisches Tempo für Ihr Kind fest, und jeder abgeschlossene Dschuz' wird gefeiert.",
      },
      {
        q: "Was, wenn mein Kind das Gelernte wieder vergisst?",
        a: "Vergessen ist ein normaler Teil des Auswendiglernens — genau dafür gibt es den Manzil-Wiederholungszyklus. Ältere Abschnitte werden jede Woche wiederholt, damit sie neben dem Neuen frisch bleiben.",
      },
      {
        q: "Wie viel Wiederholung ist zwischen den Stunden nötig?",
        a: "Etwa 15–20 Minuten am Tag reichen für die meisten Schüler. Ihre Lehrkraft gibt nach jeder Stunde eine klare tägliche Aufgabe, sodass Eltern immer wissen, was geübt werden soll.",
      },
    ],
    relatedEyebrow: "Weiterlernen",
    relatedHeading: "Passende Kurse",
  },
} as const;

const relatedSlugs = ["tajweed", "tafseer"] as const;

export default function HifzPage() {
  const { locale } = useLocale();
  const t = content[locale];
  const ui = uiDict[locale];
  const course = getCourse("hifz")!;
  const related = relatedSlugs.map((slug) => getCourse(slug)!);

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={course.name[locale]}
        subtitle={course.tagline[locale]}
        arabic={course.arabic}
      />

      {/* Hero image */}
      <section className="bg-cream pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <img
            src={course.image}
            alt={course.name[locale]}
            className="h-64 w-full rounded-3xl object-cover shadow-card sm:h-96"
          />
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl font-bold text-brand">{t.overviewHeading}</h2>
            <div className="gold-rule mt-4" />
            {t.overview.map((para) => (
              <p key={para.slice(0, 24)} className="mt-5 text-lg leading-relaxed text-ink/75">
                {para}
              </p>
            ))}

            <h2 className="mt-12 font-display text-3xl font-bold text-brand">{t.learnHeading}</h2>
            <div className="gold-rule mt-4" />
            <ul className="mt-6 space-y-3">
              {t.learn.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-lg leading-relaxed text-ink/80">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-display text-3xl font-bold text-brand">{t.whoHeading}</h2>
            <div className="gold-rule mt-4" />
            <p className="mt-5 text-lg leading-relaxed text-ink/75">{t.whoIntro}</p>
            <ul className="mt-6 space-y-3">
              {t.who.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  <span className="text-lg leading-relaxed text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-3xl bg-brand p-6 text-white shadow-card">
              <h3 className="font-display text-2xl font-bold">{t.formatHeading}</h3>
              <ul className="mt-5 space-y-4">
                {t.format.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-brand-deep">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3.5}
                        stroke="currentColor"
                        className="h-3 w-3"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="leading-relaxed text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-white/20 pt-4 text-sm font-semibold text-gold-light">
                {course.ages[locale]} · {course.level[locale]}
              </p>
            </div>

            <div className="rounded-3xl bg-cream p-6 shadow-card">
              <h3 className="font-display text-2xl font-bold text-brand">{t.pricingHeading}</h3>
              <p className="mt-3 leading-relaxed text-ink/70">{t.pricingBody}</p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/pricing"
                  className="rounded-full bg-brand px-6 py-3 text-center font-bold text-white transition hover:bg-brand-dark"
                >
                  {t.pricingCta}
                </Link>
                <Link
                  href="/free-trial"
                  className="rounded-full bg-gold px-6 py-3 text-center font-bold text-brand-deep transition hover:bg-gold-light"
                >
                  {t.trialCta}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t.faqEyebrow} title={t.faqHeading} />
          <div className="mt-10 space-y-4">
            {t.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-3xl bg-white p-6 shadow-card"
              >
                <summary className="cursor-pointer list-none font-display text-xl font-bold text-brand">
                  <span className="flex items-start justify-between gap-4">
                    {faq.q}
                    <span className="mt-1 shrink-0 text-gold-dark transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-ink/70">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related courses */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t.relatedEyebrow} title={t.relatedHeading} />
          <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-2">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/courses/${rel.slug}`}
                className="group overflow-hidden rounded-3xl bg-white shadow-card transition hover:shadow-lift"
              >
                <img
                  src={rel.image}
                  alt={rel.name[locale]}
                  loading="lazy"
                  className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="p-6">
                  <p className="text-right font-arabic text-lg text-gold-dark" dir="rtl">
                    {rel.arabic}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-brand">
                    {rel.name[locale]}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{rel.tagline[locale]}</p>
                  <p className="mt-3 font-bold text-brand transition group-hover:text-gold-dark">
                    {ui.learnMore} &rarr;
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
