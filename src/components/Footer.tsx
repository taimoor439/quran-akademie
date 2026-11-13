"use client";

import Link from "next/link";
import { useLocale, uiDict } from "@/lib/i18n";
import { courses } from "@/lib/courses";
import Logo from "./Logo";

const CONTACT_EMAIL = "contact@onlinekoran.de";

export default function Footer() {
  const { locale } = useLocale();
  const t = uiDict[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep text-white">
      <div className="pattern-star-light">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Logo dark height={40} />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
                {t.footerTagline}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-wide text-gold">
                {t.footerAcademy}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                <li><Link className="hover:text-white" href="/about">{t.navAbout}</Link></li>
                <li><Link className="hover:text-white" href="/online-quran-classes-germany">{locale === "de" ? "Koranunterricht in Deutschland" : "Quran Classes in Germany"}</Link></li>
                <li><Link className="hover:text-white" href="/quran-classes-for-kids">{locale === "de" ? "Koranunterricht für Kinder" : "Quran Classes for Kids"}</Link></li>
                <li><Link className="hover:text-white" href="/teachers">{t.navTeachers}</Link></li>
                <li><Link className="hover:text-white" href="/testimonials">{t.navTestimonials}</Link></li>
                <li><Link className="hover:text-white" href="/pricing">{t.navPricing}</Link></li>
                <li><Link className="hover:text-white" href="/faq">{t.navFaq}</Link></li>
                <li><Link className="hover:text-white" href="/blog">{t.navBlog}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-wide text-gold">
                {t.footerCourses}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                {courses.map((c) => (
                  <li key={c.slug}>
                    <Link className="hover:text-white" href={`/courses/${c.slug}`}>
                      {c.name[locale]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-wide text-gold">
                {t.footerLegal}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                <li><Link className="hover:text-white" href="/privacy">Privacy / Datenschutz</Link></li>
                <li><Link className="hover:text-white" href="/terms">Terms / AGB</Link></li>
                <li><Link className="hover:text-white" href="/impressum">Impressum</Link></li>
                <li><Link className="hover:text-white" href="/safeguarding">Safeguarding / Kinderschutz</Link></li>
              </ul>
              <h3 className="mt-8 text-sm font-bold tracking-wide text-gold">
                {t.footerContact}
              </h3>
              <p className="mt-4 text-sm text-white/75">
                <a className="hover:text-white" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="mt-2 text-sm text-white/60">
                {locale === "de"
                  ? "Antwort innerhalb von 24 Stunden (Mo–Fr, deutsche Zeit)"
                  : "We reply within 24 hours (Mon–Fri, Germany time)"}
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
            <p>
              © {year} Online Quran. {t.footerRights}
            </p>
            <p className="font-arabic text-sm text-gold-light/80" dir="rtl">
              خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
