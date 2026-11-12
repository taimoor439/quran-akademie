"use client";

import Link from "next/link";
import { useLocale, uiDict, type Locale } from "@/lib/i18n";
import { courses } from "@/lib/courses";
import { plans } from "@/lib/plans";
import { tutors } from "@/lib/teachers";
import { testimonials } from "@/lib/testimonials";
import { faqs } from "@/lib/faqs";
import { SectionHeading, CtaBand } from "@/components/Shared";
import HeroTrialForm from "@/components/HeroTrialForm";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=1600&q=80";
const WHY_IMAGE =
  "https://images.pexels.com/photos/6937687/pexels-photo-6937687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const content = {
  en: {
    heroEyebrow: "Live 1-to-1 Quran classes · Online",
    heroTitle: "Learn the Quran, from home, at Germany time.",
    heroSub:
      "Certified tutors, gentle teaching, and after-school slots that fit family life in Germany. Book a free trial class and meet your tutor first.",
    heroCta1: "Book a Free Trial Class",
    heroCta2: "Explore Courses",
    heroNote: "No payment needed for the trial · 30 minutes · Zoom or Google Meet",
    heroCardTitle:
      "The best of you are those who learn the Quran and teach it.",
    heroCardSub: "Hadith, Sahih al-Bukhari",
    trust: [
      "Live 1-to-1 classes",
      "Certified tutors",
      "Female teachers available",
      "Germany-time scheduling",
    ],
    howEyebrow: "How it works",
    howTitle: "Three simple steps to your first lesson",
    steps: [
      {
        title: "Book a free trial",
        body: "Choose a course and a time in Germany time — booked in two minutes.",
      },
      {
        title: "Meet your tutor",
        body: "In the trial class you meet your tutor and we find the right level for you.",
      },
      {
        title: "Learn weekly, at your time",
        body: "Regular lessons, 4–5 times a week, with a monthly progress report for parents.",
      },
    ],
    coursesEyebrow: "Our courses",
    coursesTitle: "A course for every age and every level",
    coursesSub:
      "From a child's first Arabic letters to Hifz and Tafseer for adults — every course is taught live, 1-to-1, by a certified tutor.",
    whyEyebrow: "Why Quran Akademie",
    whyTitle: "Why families in Germany choose us",
    whyPoints: [
      {
        title: "Qualified, vetted tutors",
        body: "Every tutor is Hifz-qualified, Tajweed-certified, background-checked and safeguarding-trained.",
      },
      {
        title: "Safeguarding first",
        body: "Parents stay nearby during kids' lessons, and tutors never contact children privately.",
      },
      {
        title: "Germany-time scheduling",
        body: "After-school and evening slots, 3–8pm CET/CEST, plus weekend mornings.",
      },
      {
        title: "Progress you can see",
        body: "Monthly reports show exactly what your child has learned — surahs, pages, and next steps.",
      },
    ],
    pricingEyebrow: "Pricing",
    pricingTitle: "Simple monthly plans",
    pricingSub:
      "No lock-in. Sibling discount 10%. Prices in USD — the EUR equivalent is charged at checkout.",
    perMonth: "per month",
    popular: "Most popular",
    classesWeek: "classes / week",
    teachersEyebrow: "Our tutors",
    teachersTitle: "Meet our tutors",
    teachersSub:
      "Hifz-qualified and Tajweed-certified, with years of experience teaching children and adults online.",
    teachersCta: "Meet all tutors",
    yearsExp: "years experience",
    testiEyebrow: "What parents say",
    testiTitle: "Families learning with us",
    testiCta: "Read all reviews",
    faqEyebrow: "Questions",
    faqTitle: "Frequently asked questions",
    faqCta: "See all questions",
  },
  de: {
    heroEyebrow: "Live-Quranunterricht 1-zu-1 · Online",
    heroTitle: "Den Koran lernen — von zu Hause, zur deutschen Zeit.",
    heroSub:
      "Zertifizierte Lehrkräfte, einfühlsamer Unterricht und Nachmittags- und Abendtermine, die zum Familienalltag in Deutschland passen. Buchen Sie eine kostenlose Probestunde und lernen Sie Ihren Lehrer zuerst kennen.",
    heroCta1: "Kostenlose Probestunde buchen",
    heroCta2: "Kurse entdecken",
    heroNote: "Keine Zahlung für die Probestunde nötig · 30 Minuten · Zoom oder Google Meet",
    heroCardTitle:
      "Die Besten unter euch sind die, die den Koran lernen und lehren.",
    heroCardSub: "Hadith, Sahih al-Buchari",
    trust: [
      "Live-Unterricht 1-zu-1",
      "Zertifizierte Lehrkräfte",
      "Lehrerinnen verfügbar",
      "Termine nach deutscher Zeit",
    ],
    howEyebrow: "So funktioniert es",
    howTitle: "In drei einfachen Schritten zur ersten Stunde",
    steps: [
      {
        title: "Kostenlose Probestunde buchen",
        body: "Wählen Sie einen Kurs und einen Termin nach deutscher Zeit — in zwei Minuten gebucht.",
      },
      {
        title: "Lehrer kennenlernen",
        body: "In der Probestunde lernen Sie Ihren Lehrer kennen und wir bestimmen das passende Niveau.",
      },
      {
        title: "Wöchentlich lernen, zu Ihrer Zeit",
        body: "Regelmäßige Stunden, 4–5 Mal pro Woche, mit monatlichem Fortschrittsbericht für Eltern.",
      },
    ],
    coursesEyebrow: "Unsere Kurse",
    coursesTitle: "Ein Kurs für jedes Alter und jedes Niveau",
    coursesSub:
      "Von den ersten arabischen Buchstaben eines Kindes bis zu Hifz und Tafsir für Erwachsene — jeder Kurs wird live und 1-zu-1 von einer zertifizierten Lehrkraft unterrichtet.",
    whyEyebrow: "Warum Quran Akademie",
    whyTitle: "Warum Familien in Deutschland uns wählen",
    whyPoints: [
      {
        title: "Qualifizierte, geprüfte Lehrkräfte",
        body: "Jede Lehrkraft ist Hifz-qualifiziert, Tadschwid-zertifiziert, hintergrundgeprüft und im Kinderschutz geschult.",
      },
      {
        title: "Kinderschutz zuerst",
        body: "Eltern bleiben während der Kinderstunden in der Nähe, und Lehrer kontaktieren Kinder niemals privat.",
      },
      {
        title: "Termine nach deutscher Zeit",
        body: "Nachmittags- und Abendtermine, 15–20 Uhr MEZ/MESZ, sowie vormittags am Wochenende.",
      },
      {
        title: "Fortschritt, den man sieht",
        body: "Monatliche Berichte zeigen genau, was Ihr Kind gelernt hat — Suren, Seiten und nächste Schritte.",
      },
    ],
    pricingEyebrow: "Preise",
    pricingTitle: "Einfache Monatstarife",
    pricingSub:
      "Keine Mindestlaufzeit. Geschwisterrabatt 10 %. Preise in USD — der Euro-Gegenwert wird an der Kasse berechnet.",
    perMonth: "pro Monat",
    popular: "Beliebteste Wahl",
    classesWeek: "Stunden / Woche",
    teachersEyebrow: "Unsere Lehrer",
    teachersTitle: "Lernen Sie unsere Lehrer kennen",
    teachersSub:
      "Hifz-qualifiziert und Tadschwid-zertifiziert, mit langjähriger Erfahrung im Online-Unterricht für Kinder und Erwachsene.",
    teachersCta: "Alle Lehrer ansehen",
    yearsExp: "Jahre Erfahrung",
    testiEyebrow: "Was Eltern sagen",
    testiTitle: "Familien, die mit uns lernen",
    testiCta: "Alle Bewertungen lesen",
    faqEyebrow: "Fragen",
    faqTitle: "Häufige Fragen",
    faqCta: "Alle Fragen ansehen",
  },
} as const;

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-gold" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function HomePage() {
  const { locale } = useLocale();
  const t = content[locale];
  const ui = uiDict[locale];

  return (
    <>
      {/* HERO */}
      <section className="pattern-star bg-cream">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
              {t.heroEyebrow}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] text-brand sm:text-5xl lg:text-[3.4rem]">
              {t.heroTitle}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">{t.heroSub}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#trial-form"
                className="rounded-full bg-brand px-8 py-3.5 text-center text-base font-bold text-white shadow-card transition hover:bg-brand-light"
              >
                {t.heroCta1}
              </Link>
              <Link
                href="/courses"
                className="rounded-full border-2 border-brand px-8 py-3.5 text-center text-base font-bold text-brand transition hover:bg-brand-soft"
              >
                {t.heroCta2}
              </Link>
            </div>
            <p className="mt-5 text-sm font-medium text-ink/60">{t.heroNote}</p>
          </div>
          <HeroTrialForm />
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip bg-brand">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 sm:px-6 lg:grid-cols-4 lg:px-8">
          {t.trust.map((item) => (
            <div key={item} className="trust-item flex items-center gap-2.5 text-white">
              <CheckIcon />
              <span className="text-sm font-semibold">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading eyebrow={t.howEyebrow} title={t.howTitle} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.steps.map((step, i) => (
              <div key={step.title} className="rounded-3xl bg-cream p-8 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold font-serif text-xl font-bold text-brand-deep">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold text-brand">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/70">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES PREVIEW */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={t.coursesEyebrow}
            title={t.coursesTitle}
            subtitle={t.coursesSub}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="group overflow-hidden rounded-3xl bg-white shadow-card transition hover:shadow-lift"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.name[locale]}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                  <span className="absolute right-4 top-4 rounded-full bg-brand/90 px-3 py-1 font-arabic text-sm text-gold-light">
                    {course.arabic}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-brand">
                    {course.name[locale]}
                  </h3>
                  <p className="mt-2 min-h-[3.5rem] leading-relaxed text-ink/70">
                    {course.tagline[locale]}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-gold-dark">
                    {course.ages[locale]}
                  </p>
                  <span className="mt-4 inline-block text-sm font-bold text-brand group-hover:underline">
                    {ui.learnMore} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QURAN IMAGE BAND — moved here from the hero (2026-11-12): the hero
          now holds the trial form, and the Quran photo + hadith card live on
          as one visual band after the courses preview. */}
      <section className="bg-brand-deep">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border-2 border-gold/60" aria-hidden="true" />
            <img
              src={HERO_IMAGE}
              alt={locale === "de" ? "Aufgeschlagener Koran" : "Open Quran"}
              loading="lazy"
              className="relative aspect-[16/9] w-full rounded-[2rem] object-cover shadow-lift"
            />
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-brand p-5 text-white shadow-lift sm:left-8 sm:right-auto sm:max-w-sm">
              <p className="font-arabic text-xl leading-relaxed text-gold-light" dir="rtl">
                خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                {t.heroCardTitle}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold-light">
                {t.heroCardSub}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div className="order-2 lg:order-1">
            <img
              src={WHY_IMAGE}
              alt={locale === "de" ? "Koranlehrer im Live-Online-Unterricht" : "Quran tutor teaching a live online lesson"}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
              {t.whyEyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-brand sm:text-4xl">
              {t.whyTitle}
            </h2>
            <div className="mt-8 space-y-6">
              {t.whyPoints.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <span className="mt-0.5">
                    <CheckIcon />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-brand">{point.title}</h3>
                    <p className="mt-1 leading-relaxed text-ink/70">{point.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={t.pricingEyebrow}
            title={t.pricingTitle}
            subtitle={t.pricingSub}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 shadow-card ${
                  plan.popular ? "bg-brand text-white ring-4 ring-gold" : "bg-white"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-deep">
                    {t.popular}
                  </span>
                )}
                <h3 className={`font-serif text-xl font-bold ${plan.popular ? "text-white" : "text-brand"}`}>
                  {plan.name[locale]}
                </h3>
                <p className="mt-4">
                  <span className={`font-serif text-5xl font-bold ${plan.popular ? "text-white" : "text-brand"}`}>
                    ${plan.priceUsd}
                  </span>
                  <span className={`ml-2 text-sm font-semibold ${plan.popular ? "text-white/70" : "text-ink/60"}`}>
                    / {t.perMonth}
                  </span>
                </p>
                <p className={`mt-2 text-sm font-bold ${plan.popular ? "text-gold-light" : "text-gold-dark"}`}>
                  {plan.classesPerWeek} {t.classesWeek} · {plan.minutesPerClass} min
                </p>
                <ul className={`mt-6 space-y-2.5 text-sm leading-relaxed ${plan.popular ? "text-white/85" : "text-ink/70"}`}>
                  {plan.features[locale].map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-gold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/free-trial"
                  className={`mt-8 block rounded-full py-3 text-center text-sm font-bold transition ${
                    plan.popular
                      ? "bg-gold text-brand-deep hover:bg-gold-light"
                      : "bg-brand text-white hover:bg-brand-light"
                  }`}
                >
                  {t.heroCta1}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHERS PREVIEW */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={t.teachersEyebrow}
            title={t.teachersTitle}
            subtitle={t.teachersSub}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {tutors.slice(0, 3).map((tutor) => (
              <div key={tutor.firstName} className="rounded-3xl bg-cream p-8 text-center shadow-card">
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand font-serif text-2xl font-bold text-gold-light">
                  {tutor.initials}
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold text-brand">{tutor.firstName}</h3>
                <p className="mt-1 text-sm font-semibold text-gold-dark">{tutor.role[locale]}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {tutor.qualifications[locale].join(" · ")}
                </p>
                <p className="mt-2 text-sm text-ink/60">
                  {tutor.experienceYears} {t.yearsExp} · {tutor.languages[locale]}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/teachers"
              className="inline-block rounded-full border-2 border-brand px-8 py-3 text-base font-bold text-brand transition hover:bg-brand-soft"
            >
              {t.teachersCta}
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading eyebrow={t.testiEyebrow} title={t.testiTitle} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.slice(0, 2).map((item) => (
              <figure key={item.name.en} className="rounded-3xl bg-white p-8 shadow-card">
                <span className="font-serif text-5xl leading-none text-gold" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="mt-2 text-lg leading-relaxed text-ink/80">
                  {item.quote[locale]}
                </blockquote>
                <figcaption className="mt-6 border-t border-brand/10 pt-4">
                  <p className="font-bold text-brand">{item.name[locale]}</p>
                  <p className="text-sm text-ink/60">{item.detail[locale]}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/testimonials"
              className="inline-block rounded-full border-2 border-brand px-8 py-3 text-base font-bold text-brand transition hover:bg-brand-soft"
            >
              {t.testiCta}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading eyebrow={t.faqEyebrow} title={t.faqTitle} />
          <div className="mt-12 space-y-4">
            {faqs.slice(0, 3).map((faq) => (
              <div key={faq.q.en} className="rounded-2xl bg-cream p-6">
                <h3 className="font-serif text-lg font-bold text-brand">{faq.q[locale]}</h3>
                <p className="mt-2 leading-relaxed text-ink/70">{faq.a[locale]}</p>
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
    </>
  );
}
