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
      "Reading the Quran beautifully — with every letter given its right — is the heart of Tajweed. This course takes students who can already read Arabic and refines their recitation, rule by rule, until it flows correctly and confidently.",
      "Your tutor listens to your recitation in every lesson, corrects pronunciation gently, and explains each rule with clear examples from the Quran itself. The goal is not perfection overnight, but steady, lasting improvement.",
    ],
    learnHeading: "What you will learn",
    learn: [
      "Makharij — the exact articulation point of every letter",
      "Rules of Noon Saakinah, Tanween and Meem Saakinah",
      "Madd — the rules of elongation",
      "Qalqalah, Ikhfa, Idgham and Iqlab",
      "Waqf — where to pause and stop while reciting",
      "Fluent recitation of Juz' Amma and beyond",
    ],
    whoHeading: "Who this course is for",
    whoIntro:
      "This course is for anyone who can read Arabic and wants to recite correctly — children continuing after Noorani Qaida, and adults who learned to read years ago and want to polish their recitation.",
    who: [
      "Students who have completed Noorani Qaida",
      "Adults returning to the Quran after a long break",
      "Anyone who wants to recite with confidence in prayer",
      "Students preparing for Hifz",
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
        q: "Do I need to finish Noorani Qaida first?",
        a: "You should be able to read Arabic words before starting Tajweed. If you are unsure, the free trial class includes a short reading assessment, and your tutor will recommend the right starting point.",
      },
      {
        q: "I learned to read as a child but have forgotten the rules. Is this course right for me?",
        a: "Yes — many of our adult students are in exactly that position. Your tutor will gently rebuild the rules from the beginning while you recite familiar surahs, so nothing feels like starting over.",
      },
      {
        q: "Will I learn to recite like the famous Qaris?",
        a: "Correct recitation comes first — beautiful recitation follows naturally from it. As your Tajweed becomes secure, your tutor will help you develop rhythm and melody (tarteel) in your recitation.",
      },
    ],
    relatedEyebrow: "Keep learning",
    relatedHeading: "Related courses",
  },
  de: {
    eyebrow: "Kurs",
    overviewHeading: "Kursüberblick",
    overview: [
      "Den Koran schön zu lesen — jedem Buchstaben sein Recht zu geben — ist das Herz des Tadschwid. Dieser Kurs nimmt Schüler, die bereits Arabisch lesen können, und verfeinert ihre Rezitation Regel für Regel, bis sie korrekt und sicher fließt.",
      "Ihre Lehrkraft hört in jeder Stunde Ihre Rezitation, korrigiert die Aussprache einfühlsam und erklärt jede Regel mit klaren Beispielen aus dem Koran selbst. Das Ziel ist nicht Perfektion über Nacht, sondern stetige, dauerhafte Verbesserung.",
    ],
    learnHeading: "Was Sie lernen werden",
    learn: [
      "Macharidsch — der genaue Artikulationspunkt jedes Buchstabens",
      "Regeln von Nun Sakina, Tanwin und Mim Sakina",
      "Madd — die Regeln der Dehnung",
      "Qalqala, Ichfa, Idgham und Iqlab",
      "Waqf — wo man beim Rezitieren pausiert und anhält",
      "Flüssiges Rezitieren von Dschuz' Amma und darüber hinaus",
    ],
    whoHeading: "Für wen dieser Kurs ist",
    whoIntro:
      "Dieser Kurs ist für alle, die Arabisch lesen können und korrekt rezitieren möchten — Kinder, die nach Noorani Qaida weitermachen, und Erwachsene, die vor Jahren lesen gelernt haben und ihre Rezitation verbessern möchten.",
    who: [
      "Schüler, die Noorani Qaida abgeschlossen haben",
      "Erwachsene, die nach langer Pause zum Koran zurückkehren",
      "Alle, die im Gebet sicher rezitieren möchten",
      "Schüler, die sich auf Hifz vorbereiten",
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
        q: "Muss ich zuerst Noorani Qaida abschließen?",
        a: "Sie sollten arabische Wörter lesen können, bevor Sie mit Tadschwid beginnen. Wenn Sie unsicher sind, enthält die kostenlose Probestunde eine kurze Leseprüfung, und Ihre Lehrkraft empfiehlt den richtigen Einstieg.",
      },
      {
        q: "Ich habe als Kind lesen gelernt, aber die Regeln vergessen. Ist dieser Kurs richtig für mich?",
        a: "Ja — viele unserer erwachsenen Schüler sind genau in dieser Situation. Ihre Lehrkraft baut die Regeln behutsam von Anfang an wieder auf, während Sie vertraute Suren rezitieren, sodass sich nichts wie ein Neuanfang anfühlt.",
      },
      {
        q: "Werde ich lernen, wie die berühmten Qaris zu rezitieren?",
        a: "Korrekte Rezitation kommt zuerst — schöne Rezitation folgt ganz natürlich daraus. Sobald Ihr Tadschwid sicher ist, hilft Ihnen Ihre Lehrkraft, Rhythmus und Melodie (Tartil) in Ihrer Rezitation zu entwickeln.",
      },
    ],
    relatedEyebrow: "Weiterlernen",
    relatedHeading: "Passende Kurse",
  },
} as const;

const relatedSlugs = ["noorani-qaida", "hifz"] as const;

export default function TajweedPage() {
  const { locale } = useLocale();
  const t = content[locale];
  const ui = uiDict[locale];
  const course = getCourse("tajweed")!;
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
