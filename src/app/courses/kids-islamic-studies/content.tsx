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
      "Children learn Islam best through stories, songs and gentle routine — not lectures. This course gives children aged 5–12 a warm, joyful foundation in their faith: salah, duas, the stories of the Prophets, and the manners that shape a good Muslim.",
      "Lessons are interactive and age-appropriate, with stories, activities and short memorisation goals. Parents receive a simple summary after each unit, with duas and activities to practise together at home.",
    ],
    learnHeading: "What you will learn",
    learn: [
      "The five pillars of Islam, explained simply",
      "Salah step by step — wudu, movements and what to say",
      "Daily duas — for eating, sleeping, leaving home and more",
      "Seerah stories — the life of Prophet Muhammad ﷺ for children",
      "Good manners (akhlaq) — kindness, honesty and respect",
      "Islamic months, Ramadan and Eid — what they mean and why we celebrate",
    ],
    whoHeading: "Who this course is for",
    whoIntro:
      "This course is for children aged 5–12 — especially those growing up in Germany, where Islamic learning at home matters most. It pairs beautifully with Noorani Qaida or Tajweed.",
    who: [
      "Children aged 5–12, at any level of prior knowledge",
      "Families who want structured Islamic learning at home",
      "Children preparing for Ramadan or starting salah",
      "Siblings — each child gets their own 1-to-1 class",
    ],
    formatHeading: "Class format",
    format: [
      "1-to-1 live lessons with a dedicated tutor",
      "25–45 minutes per class, depending on your plan",
      "Zoom or Google Meet — link sent before class",
      "Germany time (CET/CEST)",
      "After-school & evening slots, including weekends",
    ],
    pricingHeading: "Simple monthly pricing",
    pricingBody:
      "Plans start from $35/month — choose 4 or 5 classes per week. Start with a free trial class, no payment details needed.",
    pricingCta: "View pricing",
    trialCta: "Book a free trial",
    faqHeading: "Questions about this course",
    faqEyebrow: "FAQ",
    faqs: [
      {
        q: "Is this course fun for children, or is it like school?",
        a: "It is designed to feel like story time, not school. Lessons use stories, questions, drawing activities and short games — children look forward to their class.",
      },
      {
        q: "Does this replace weekend Islamic school?",
        a: "It complements it. Weekend school gives community; our 1-to-1 lessons give your child personal attention and a pace matched exactly to them. Many families do both.",
      },
      {
        q: "Can my two children share one class?",
        a: "Each child has their own 1-to-1 class, so the tutor can match the pace and content to their age. Siblings can be scheduled back-to-back with the same tutor — just mention it when booking.",
      },
    ],
    relatedEyebrow: "Keep learning",
    relatedHeading: "Related courses",
  },
  de: {
    eyebrow: "Kurs",
    overviewHeading: "Kursüberblick",
    overview: [
      "Kinder lernen den Islam am besten durch Geschichten, Lieder und sanfte Routine — nicht durch Vorträge. Dieser Kurs gibt Kindern von 5–12 Jahren ein warmes, fröhliches Fundament in ihrem Glauben: Salah, Duas, die Geschichten der Propheten und die Manieren, die einen guten Muslim prägen.",
      "Die Stunden sind interaktiv und altersgerecht, mit Geschichten, Aktivitäten und kurzen Lernzielen. Eltern erhalten nach jeder Einheit eine einfache Zusammenfassung mit Duas und Aktivitäten zum gemeinsamen Üben zu Hause.",
    ],
    learnHeading: "Was Sie lernen werden",
    learn: [
      "Die fünf Säulen des Islam, einfach erklärt",
      "Salah Schritt für Schritt — Wudu, Bewegungen und was man sagt",
      "Tägliche Duas — für Essen, Schlafen, das Haus verlassen und mehr",
      "Sira-Geschichten — das Leben des Propheten Muhammad ﷺ für Kinder",
      "Gute Manieren (Achlaq) — Freundlichkeit, Ehrlichkeit und Respekt",
      "Islamische Monate, Ramadan und Eid — was sie bedeuten und warum wir feiern",
    ],
    whoHeading: "Für wen dieser Kurs ist",
    whoIntro:
      "Dieser Kurs ist für Kinder von 5–12 Jahren — besonders für diejenigen, die in Deutschland aufwachsen, wo islamisches Lernen zu Hause am wichtigsten ist. Er lässt sich wunderbar mit Noorani Qaida oder Tadschwid kombinieren.",
    who: [
      "Kinder von 5–12 Jahren, mit beliebigen Vorkenntnissen",
      "Familien, die strukturiertes islamisches Lernen zu Hause möchten",
      "Kinder, die sich auf Ramadan vorbereiten oder mit Salah beginnen",
      "Geschwister — jedes Kind bekommt seine eigene 1-zu-1-Stunde",
    ],
    formatHeading: "Unterrichtsformat",
    format: [
      "Live-Unterricht 1-zu-1 mit einer festen Lehrkraft",
      "25–45 Minuten pro Stunde, je nach Tarif",
      "Zoom oder Google Meet — Link kommt vor der Stunde",
      "Deutsche Zeit (MEZ/MESZ)",
      "Nachmittags- und Abendtermine, auch am Wochenende",
    ],
    pricingHeading: "Einfache monatliche Preise",
    pricingBody:
      "Die Pläne beginnen ab 35 $/Monat — wählen Sie 4 oder 5 Stunden pro Woche. Beginnen Sie mit einer kostenlosen Probestunde, ohne Zahlungsdaten.",
    pricingCta: "Preise ansehen",
    trialCta: "Kostenlose Probestunde buchen",
    faqHeading: "Fragen zu diesem Kurs",
    faqEyebrow: "FAQ",
    faqs: [
      {
        q: "Macht dieser Kurs Kindern Spaß, oder ist er wie Schule?",
        a: "Er ist so gestaltet, dass er sich wie eine Geschichtenstunde anfühlt, nicht wie Schule. Die Stunden nutzen Geschichten, Fragen, Malaktivitäten und kurze Spiele — Kinder freuen sich auf ihre Stunde.",
      },
      {
        q: "Ersetzt das die islamische Wochenendschule?",
        a: "Er ergänzt sie. Die Wochenendschule gibt Gemeinschaft; unsere 1-zu-1-Stunden geben Ihrem Kind persönliche Aufmerksamkeit und ein Tempo, das genau zu ihm passt. Viele Familien machen beides.",
      },
      {
        q: "Können meine beiden Kinder eine Stunde teilen?",
        a: "Jedes Kind hat seine eigene 1-zu-1-Stunde, damit die Lehrkraft Tempo und Inhalte an sein Alter anpassen kann. Geschwister können direkt nacheinander bei derselben Lehrkraft eingeplant werden — erwähnen Sie es einfach bei der Buchung.",
      },
    ],
    relatedEyebrow: "Weiterlernen",
    relatedHeading: "Passende Kurse",
  },
} as const;

const relatedSlugs = ["noorani-qaida", "tajweed"] as const;

export default function KidsIslamicStudiesPage() {
  const { locale } = useLocale();
  const t = content[locale];
  const ui = uiDict[locale];
  const course = getCourse("kids-islamic-studies")!;
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
