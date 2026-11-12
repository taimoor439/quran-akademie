"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { tutors } from "@/lib/teachers";
import { PageHero, SectionHeading, CtaBand } from "@/components/Shared";

const content = {
  en: {
    eyebrow: "Our Teachers",
    title: "Tutors your family can trust",
    subtitle:
      "Certified, patient and kind — every tutor teaches live, one-to-one, in Germany time (CET/CEST). Get to know the people behind the lessons.",
    yearsExp: "years of experience",
    vettingTitle: "Checked, trained and supervised",
    vettingBody:
      "Every tutor passes an identity check, provides references and completes safeguarding training before teaching. Lessons follow our safeguarding policy: a parent stays nearby during children's lessons, and tutors never contact children privately outside approved channels.",
    vettingLink: "Read our safeguarding policy",
    femaleEyebrow: "For girls and sisters",
    femaleTitle: "Looking for a female teacher?",
    femaleBody:
      "We have qualified female tutors (Hafiza) for girls and sisters. Simply request a female teacher when you book your free trial class and we will match you with one of them.",
    femaleCta: "Book a free trial class",
  },
  de: {
    eyebrow: "Unsere Lehrer",
    title: "Lehrer, denen Ihre Familie vertrauen kann",
    subtitle:
      "Zertifiziert, geduldig und freundlich — jede Lehrkraft unterrichtet live im Einzelunterricht, nach deutscher Zeit (MEZ/MESZ). Lernen Sie die Menschen hinter dem Unterricht kennen.",
    yearsExp: "Jahre Erfahrung",
    vettingTitle: "Geprüft, geschult und betreut",
    vettingBody:
      "Jede Lehrkraft durchläuft eine Identitätsprüfung, legt Referenzen vor und absolviert eine Schulung zum Kinderschutz, bevor sie unterrichtet. Der Unterricht folgt unserer Kinderschutzrichtlinie: Ein Elternteil bleibt während der Kinderstunden in der Nähe, und Lehrer kontaktieren Kinder niemals privat außerhalb genehmigter Kanäle.",
    vettingLink: "Unsere Kinderschutzrichtlinie lesen",
    femaleEyebrow: "Für Mädchen und Schwestern",
    femaleTitle: "Suchen Sie eine Lehrerin?",
    femaleBody:
      "Wir haben qualifizierte Lehrerinnen (Hafiza) für Mädchen und Schwestern. Wünschen Sie bei der Buchung Ihrer kostenlosen Probestunde einfach eine Lehrerin, und wir vermitteln Ihnen eine von ihnen.",
    femaleCta: "Kostenlose Probestunde buchen",
  },
} as const;

export default function TeachersPage() {
  const { locale } = useLocale();
  const t = content[locale];

  return (
    <main>
      <PageHero eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      {/* TUTOR GRID — monogram avatars only, never photos of named people */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tutors.map((tutor) => (
              <div
                key={tutor.firstName}
                className="flex flex-col rounded-3xl bg-cream p-8 text-center shadow-card transition hover:shadow-lift"
              >
                <span className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand font-serif text-3xl font-bold text-gold-light ring-4 ring-gold-soft">
                  {tutor.initials}
                </span>
                <h2 className="mt-5 font-serif text-2xl font-bold text-brand">
                  {tutor.firstName}
                </h2>
                <p className="mt-1 text-sm font-semibold text-gold-dark">
                  {tutor.role[locale]}
                </p>
                <ul className="mt-5 flex-1 space-y-2">
                  {tutor.qualifications[locale].map((qual) => (
                    <li key={qual} className="text-sm leading-relaxed text-ink/75">
                      {qual}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-brand/10 pt-5">
                  <p className="text-sm font-semibold text-brand">
                    {tutor.experienceYears} {t.yearsExp}
                  </p>
                  <p className="mt-1 text-sm text-ink/60">
                    {tutor.languages[locale]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VETTING / SAFEGUARDING NOTE */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <SectionHeading eyebrow="" title={t.vettingTitle} />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            {t.vettingBody}
          </p>
          <Link
            href="/safeguarding"
            className="mt-8 inline-block rounded-full border-2 border-brand px-8 py-3 text-base font-bold text-brand transition hover:bg-brand-soft"
          >
            {t.vettingLink}
          </Link>
        </div>
      </section>

      {/* FEMALE TEACHER SECTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="rounded-3xl bg-brand p-10 text-center shadow-card sm:p-12">
            <div className="pattern-star-light -m-10 rounded-3xl p-10 sm:-m-12 sm:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-light">
                {t.femaleEyebrow}
              </p>
              <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                {t.femaleTitle}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
                {t.femaleBody}
              </p>
              <Link
                href="/free-trial"
                className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 text-base font-bold text-brand-deep transition hover:bg-gold-light"
              >
                {t.femaleCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
