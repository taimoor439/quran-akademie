"use client";

import Link from "next/link";
import { useLocale, uiDict } from "@/lib/i18n";
import { courses } from "@/lib/courses";
import { CtaBand, PageHero, SectionHeading } from "@/components/Shared";

const content = {
  en: {
    eyebrow: "Our Courses",
    title: "Courses for every age and level",
    subtitle:
      "From first letters to full memorisation — every course is taught live, 1-to-1, by a certified tutor, at times that fit life in Germany.",
    howEyebrow: "How it works",
    howTitle: "How classes work",
    howSubtitle:
      "Simple, flexible and built around your family — here is what every course includes.",
    howItems: [
      {
        title: "1-to-1 live lessons",
        body: "Your own dedicated tutor in every class, teaching at your pace.",
      },
      {
        title: "30 minutes per class",
        body: "Focused, friendly sessions that fit around school and work.",
      },
      {
        title: "Zoom or Google Meet",
        body: "Join from home — the class link arrives before every lesson.",
      },
      {
        title: "Germany time (CET/CEST)",
        body: "After-school and evening slots, including weekends.",
      },
    ],
  },
  de: {
    eyebrow: "Unsere Kurse",
    title: "Kurse für jedes Alter und jede Stufe",
    subtitle:
      "Von den ersten Buchstaben bis zum vollständigen Auswendiglernen — jeder Kurs wird live und 1-zu-1 von einer zertifizierten Lehrkraft unterrichtet, zu Zeiten, die zu Ihrem Leben in Deutschland passen.",
    howEyebrow: "So funktioniert es",
    howTitle: "So funktioniert der Unterricht",
    howSubtitle:
      "Einfach, flexibel und auf Ihre Familie abgestimmt — das ist in jedem Kurs enthalten.",
    howItems: [
      {
        title: "Live-Unterricht 1-zu-1",
        body: "Ihre eigene Lehrkraft in jeder Stunde — in Ihrem Tempo.",
      },
      {
        title: "30 Minuten pro Stunde",
        body: "Konzentrierte, freundliche Stunden, die zu Schule und Beruf passen.",
      },
      {
        title: "Zoom oder Google Meet",
        body: "Von zu Hause teilnehmen — der Link kommt vor jeder Stunde.",
      },
      {
        title: "Deutsche Zeit (MEZ/MESZ)",
        body: "Nachmittags- und Abendtermine, auch am Wochenende.",
      },
    ],
  },
} as const;

/** Small inline icons for the "how classes work" strip. */
const icons = [
  // person
  <path
    key="p"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.8}
    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
  />,
  // clock
  <path
    key="c"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.8}
    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
  />,
  // video camera
  <path
    key="v"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.8}
    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
  />,
  // globe
  <path
    key="g"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.8}
    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
  />,
];

export default function CoursesPage() {
  const { locale } = useLocale();
  const t = content[locale];
  const ui = uiDict[locale];

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        arabic="خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ"
      />

      {/* Course cards */}
      <section className="bg-cream pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="group overflow-hidden rounded-3xl bg-white shadow-card transition hover:shadow-lift"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.name[locale]}
                    loading="lazy"
                    className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand">
                    {course.level[locale]}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-right font-arabic text-xl text-gold-dark" dir="rtl">
                    {course.arabic}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-brand">
                    {course.name[locale]}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{course.tagline[locale]}</p>
                  <p className="mt-4 text-sm font-semibold text-brand/70">
                    {course.ages[locale]}
                  </p>
                  <p className="mt-3 font-bold text-brand transition group-hover:text-gold-dark">
                    {ui.learnMore} &rarr;
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How classes work */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t.howEyebrow}
            title={t.howTitle}
            subtitle={t.howSubtitle}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.howItems.map((item, i) => (
              <div
                key={item.title}
                className="rounded-3xl bg-cream p-6 text-center shadow-card"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-gold-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-7 w-7"
                    aria-hidden="true"
                  >
                    {icons[i]}
                  </svg>
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-brand">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
