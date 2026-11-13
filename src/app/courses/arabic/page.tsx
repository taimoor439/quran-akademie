"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale } from "@/lib/i18n";
import { PageHero, CtaBand } from "@/components/Shared";

// This course is no longer offered. The page is kept as a friendly redirect
// (the snapshot push cannot delete files) so old links land on /courses.
const content = {
  en: {
    eyebrow: "Course No Longer Offered",
    title: "Arabic Language",
    subtitle:
      "This course is no longer offered. Please browse our current courses — every course is taught live, 1-to-1, by a certified tutor.",
    redirectNote: "You will be taken to our courses in a moment.",
    cta: "Browse our courses",
  },
  de: {
    eyebrow: "Kurs wird nicht mehr angeboten",
    title: "Arabische Sprache",
    subtitle:
      "Dieser Kurs wird nicht mehr angeboten. Bitte stöbern Sie in unseren aktuellen Kursen — jeder Kurs wird live und 1-zu-1 von einer zertifizierten Lehrkraft unterrichtet.",
    redirectNote: "Sie werden gleich zu unseren Kursen weitergeleitet.",
    cta: "Kurse entdecken",
  },
} as const;

export default function ArabicPage() {
  const { locale } = useLocale();
  const t = content[locale];
  const router = useRouter();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      router.replace("/courses");
    }, 2500);
    return () => window.clearTimeout(timer);
  }, [router]);

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        arabic="اللغة العربية"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-ink/70">{t.redirectNote}</p>
          <Link
            href="/courses"
            className="mt-8 inline-block rounded-full bg-brand px-8 py-3.5 text-base font-bold text-white transition hover:bg-brand-light"
          >
            {t.cta} →
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
