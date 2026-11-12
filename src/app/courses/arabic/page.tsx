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
      "Arabic is the language of the Quran — and learning it opens the door to understanding the words you recite every day. This course teaches Arabic as a living language: reading, writing, listening and speaking, from the alphabet to everyday conversation.",
      "Lessons use Modern Standard Arabic with a Quranic vocabulary thread, so progress in Arabic directly supports progress in Quran reading. Adults and children follow separate, age-appropriate paths — and every lesson is 1-to-1.",
    ],
    learnHeading: "What you will learn",
    learn: [
      "The Arabic alphabet, script and correct pronunciation",
      "Reading and writing words and sentences",
      "Everyday vocabulary — family, home, school, travel",
      "Grammar essentials, taught simply and practically",
      "Speaking and listening through real conversation",
      "Quranic vocabulary that deepens your recitation",
    ],
    whoHeading: "Who this course is for",
    whoIntro:
      "This course is for learners aged 6 and above, from complete beginners to intermediate students — including adults who want to understand the Quran in its original language.",
    who: [
      "Children growing up in Germany who want to keep their Arabic",
      "Adults starting Arabic from zero",
      "Students who want to understand the Quran directly",
      "Families preparing for travel or Umrah",
    ],
    formatHeading: "Class format",
    format: [
      "1-to-1 live lessons with a dedicated tutor",
      "30 minutes per class",
      "Zoom or Google Meet — link sent before class",
      "Germany time (CET/CEST)",
      "After-school & evening slots, including weekends",
    ],
    pricingHeading: "Simple monthly pricing",
    pricingBody:
      "Plans start from $35/month — choose 2, 3 or 5 classes per week. Start with a free trial class, no payment details needed.",
    pricingCta: "View pricing",
    trialCta: "Book a free trial",
    faqHeading: "Questions about this course",
    faqEyebrow: "FAQ",
    faqs: [
      {
        q: "Is this Modern Standard Arabic or a dialect?",
        a: "We teach Modern Standard Arabic (Fusha) — the language of the Quran, books and media across the Arab world — with Quranic vocabulary woven in. Everyday expressions are included so you can also use Arabic in conversation.",
      },
      {
        q: "How long until I can hold a simple conversation?",
        a: "Most beginners can manage simple everyday conversations after 6–9 months of regular classes. Reading usually comes faster — many students read Arabic words confidently within the first few months.",
      },
      {
        q: "Are learning materials included?",
        a: "Yes — your tutor provides digital worksheets, vocabulary lists and reading exercises for every lesson, at no extra cost.",
      },
    ],
    relatedEyebrow: "Keep learning",
    relatedHeading: "Related courses",
  },
  de: {
    eyebrow: "Kurs",
    overviewHeading: "Kursüberblick",
    overview: [
      "Arabisch ist die Sprache des Korans — und es zu lernen öffnet die Tür zum Verständnis der Worte, die Sie jeden Tag rezitieren. Dieser Kurs lehrt Arabisch als lebendige Sprache: Lesen, Schreiben, Hören und Sprechen — vom Alphabet bis zur Alltagskonversation.",
      "Die Stunden verwenden modernes Hocharabisch mit einem koranischen Wortschatz, sodass Fortschritte im Arabischen direkt das Koranlesen unterstützen. Erwachsene und Kinder folgen getrennten, altersgerechten Lernwegen — und jede Stunde ist 1-zu-1.",
    ],
    learnHeading: "Was Sie lernen werden",
    learn: [
      "Das arabische Alphabet, die Schrift und die korrekte Aussprache",
      "Wörter und Sätze lesen und schreiben",
      "Alltagswortschatz — Familie, Zuhause, Schule, Reisen",
      "Grammatik-Grundlagen, einfach und praktisch vermittelt",
      "Sprechen und Hören durch echte Gespräche",
      "Koranischer Wortschatz, der Ihre Rezitation vertieft",
    ],
    whoHeading: "Für wen dieser Kurs ist",
    whoIntro:
      "Dieser Kurs ist für Lernende ab 6 Jahren, von absoluten Anfängern bis zu fortgeschrittenen Schülern — einschließlich Erwachsener, die den Koran in seiner Originalsprache verstehen möchten.",
    who: [
      "Kinder, die in Deutschland aufwachsen und ihr Arabisch behalten möchten",
      "Erwachsene, die Arabisch von Grund auf lernen",
      "Schüler, die den Koran direkt verstehen möchten",
      "Familien, die sich auf Reisen oder Umra vorbereiten",
    ],
    formatHeading: "Unterrichtsformat",
    format: [
      "Live-Unterricht 1-zu-1 mit einer festen Lehrkraft",
      "30 Minuten pro Unterrichtsstunde",
      "Zoom oder Google Meet — Link kommt vor der Stunde",
      "Deutsche Zeit (MEZ/MESZ)",
      "Nachmittags- und Abendtermine, auch am Wochenende",
    ],
    pricingHeading: "Einfache monatliche Preise",
    pricingBody:
      "Die Pläne beginnen ab 35 $/Monat — wählen Sie 2, 3 oder 5 Stunden pro Woche. Beginnen Sie mit einer kostenlosen Probestunde, ohne Zahlungsdaten.",
    pricingCta: "Preise ansehen",
    trialCta: "Kostenlose Probestunde buchen",
    faqHeading: "Fragen zu diesem Kurs",
    faqEyebrow: "FAQ",
    faqs: [
      {
        q: "Ist das modernes Hocharabisch oder ein Dialekt?",
        a: "Wir unterrichten modernes Hocharabisch (Fusha) — die Sprache des Korans, der Bücher und der Medien in der gesamten arabischen Welt — mit koranischem Wortschatz. Alltagsausdrücke sind enthalten, damit Sie Arabisch auch im Gespräch nutzen können.",
      },
      {
        q: "Wie lange dauert es, bis ich ein einfaches Gespräch führen kann?",
        a: "Die meisten Anfänger können nach 6–9 Monaten regelmäßigen Unterrichts einfache Alltagsgespräche führen. Das Lesen geht meist schneller — viele Schüler lesen arabische Wörter schon in den ersten Monaten sicher.",
      },
      {
        q: "Sind Lernmaterialien enthalten?",
        a: "Ja — Ihre Lehrkraft stellt für jede Stunde digitale Arbeitsblätter, Vokabellisten und Leseübungen zur Verfügung, ohne zusätzliche Kosten.",
      },
    ],
    relatedEyebrow: "Weiterlernen",
    relatedHeading: "Passende Kurse",
  },
} as const;

const relatedSlugs = ["tafseer", "noorani-qaida"] as const;

export default function ArabicPage() {
  const { locale } = useLocale();
  const t = content[locale];
  const ui = uiDict[locale];
  const course = getCourse("arabic")!;
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
            <h2 className="font-serif text-3xl font-bold text-brand">{t.overviewHeading}</h2>
            <div className="gold-rule mt-4" />
            {t.overview.map((para) => (
              <p key={para.slice(0, 24)} className="mt-5 text-lg leading-relaxed text-ink/75">
                {para}
              </p>
            ))}

            <h2 className="mt-12 font-serif text-3xl font-bold text-brand">{t.learnHeading}</h2>
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

            <h2 className="mt-12 font-serif text-3xl font-bold text-brand">{t.whoHeading}</h2>
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
            <div className="rounded-3xl bg-brand p-6 text-white shadow-card lg:sticky lg:top-24">
              <h3 className="font-serif text-2xl font-bold">{t.formatHeading}</h3>
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
              <h3 className="font-serif text-2xl font-bold text-brand">{t.pricingHeading}</h3>
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
                <summary className="cursor-pointer list-none font-serif text-xl font-bold text-brand">
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
                  <h3 className="mt-1 font-serif text-2xl font-bold text-brand">
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
