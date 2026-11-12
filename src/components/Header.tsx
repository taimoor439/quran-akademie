"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, uiDict, type Locale } from "@/lib/i18n";
import { courses } from "@/lib/courses";
import Logo from "./Logo";

const NAV_ITEMS = [
  { href: "/", key: "navHome" },
  { href: "/about", key: "navAbout" },
  { href: "/courses", key: "navCourses" },
  { href: "/pricing", key: "navPricing" },
  { href: "/teachers", key: "navTeachers" },
  { href: "/testimonials", key: "navTestimonials" },
  { href: "/faq", key: "navFaq" },
  { href: "/blog", key: "navBlog" },
  { href: "/contact", key: "navContact" },
] as const;

const CITY_LINKS = [
  { key: "berlin", href: "/online-quran-classes-berlin" },
  { key: "hamburg", href: "/online-quran-classes-hamburg" },
  { key: "munich", href: "/online-quran-classes-munich" },
  { key: "cologne", href: "/online-quran-classes-cologne" },
  { key: "frankfurt", href: "/online-quran-classes-frankfurt" },
] as const;

type CityKey = (typeof CITY_LINKS)[number]["key"];

const dropdownDict: Record<
  Locale,
  {
    coursesGroup: string;
    allCourses: string;
    locationsGroup: string;
    cities: Record<CityKey, string>;
  }
> = {
  en: {
    coursesGroup: "Our courses",
    allCourses: "All courses",
    locationsGroup: "Locations",
    cities: {
      berlin: "Berlin",
      hamburg: "Hamburg",
      munich: "Munich",
      cologne: "Cologne",
      frankfurt: "Frankfurt am Main",
    },
  },
  de: {
    coursesGroup: "Unsere Kurse",
    allCourses: "Alle Kurse",
    locationsGroup: "Standorte",
    cities: {
      berlin: "Berlin",
      hamburg: "Hamburg",
      munich: "München",
      cologne: "Köln",
      frankfurt: "Frankfurt am Main",
    },
  },
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const langs: Locale[] = ["en", "de"];
  return (
    <div
      className="flex overflow-hidden rounded-full border border-brand/20 bg-cream"
      role="group"
      aria-label="Language / Sprache"
    >
      {langs.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors ${
            locale === l ? "bg-brand text-white" : "text-brand hover:bg-brand-soft"
          }`}
        >
          {l === "en" ? "EN" : "DE"}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const { locale } = useLocale();
  const t = uiDict[locale];
  const dd = dropdownDict[locale];
  const rawPathname = usePathname();
  // usePathname() includes the basePath on the GitHub Pages preview
  // (e.g. "/quran-akademie/courses"), so strip it for active-link checks.
  const pathname =
    rawPathname?.replace(/^\/quran-akademie(?=\/|$)/, "") || "/";
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the desktop Courses dropdown on Escape or outside click.
  useEffect(() => {
    if (!coursesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCoursesOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setCoursesOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [coursesOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  const isCoursesActive =
    pathname?.startsWith("/courses") ||
    CITY_LINKS.some((city) => pathname === city.href);

  return (
    <header className="sticky top-0 z-50 border-b border-brand/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo height={44} />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_ITEMS.map((item) =>
            item.href === "/courses" ? (
              <div
                key={item.href}
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setCoursesOpen(true)}
                onMouseLeave={() => setCoursesOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={coursesOpen}
                  aria-haspopup="true"
                  onClick={() => setCoursesOpen((v) => !v)}
                  className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                    isCoursesActive
                      ? "bg-brand-soft text-brand"
                      : "text-ink/70 hover:bg-cream hover:text-brand"
                  }`}
                >
                  {t[item.key]}
                  <Chevron open={coursesOpen} />
                </button>
                {coursesOpen && (
                  <div className="absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-2">
                    <div className="grid grid-cols-2 gap-8 rounded-3xl border border-brand/10 bg-white p-6 shadow-lift">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                          {dd.coursesGroup}
                        </p>
                        <ul className="mt-4 space-y-1">
                          {courses.map((course) => (
                            <li key={course.slug}>
                              <Link
                                href={`/courses/${course.slug}`}
                                onClick={() => setCoursesOpen(false)}
                                className="block rounded-xl px-3 py-2 text-sm font-semibold text-ink/80 transition-colors hover:bg-brand-soft hover:text-brand"
                              >
                                {course.name[locale]}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link
                              href="/courses"
                              onClick={() => setCoursesOpen(false)}
                              className="block rounded-xl px-3 py-2 text-sm font-bold text-brand transition-colors hover:bg-brand-soft"
                            >
                              {dd.allCourses} →
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                          {dd.locationsGroup}
                        </p>
                        <ul className="mt-4 space-y-1">
                          {CITY_LINKS.map((city) => (
                            <li key={city.key}>
                              <Link
                                href={city.href}
                                onClick={() => setCoursesOpen(false)}
                                className="block rounded-xl px-3 py-2 text-sm font-semibold text-ink/80 transition-colors hover:bg-brand-soft hover:text-brand"
                              >
                                {dd.cities[city.key]}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive(item.href)
                    ? "bg-brand-soft text-brand"
                    : "text-ink/70 hover:bg-cream hover:text-brand"
                }`}
              >
                {t[item.key]}
              </Link>
            )
          )}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            href="/free-trial"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-brand-deep shadow-sm transition hover:bg-gold-dark hover:text-white"
          >
            {t.bookFreeTrial}
          </Link>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => {
              setOpen((v) => !v);
              setMobileCoursesOpen(false);
            }}
            aria-expanded={open}
            aria-label={open ? t.close : t.menu}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 text-brand"
          >
            {open ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {open && (
        <nav
          className="border-t border-brand/10 bg-white px-4 pb-6 pt-2 lg:hidden"
          aria-label="Mobile"
        >
          {NAV_ITEMS.map((item) =>
            item.href === "/courses" ? (
              <div key={item.href}>
                <button
                  type="button"
                  onClick={() => setMobileCoursesOpen((v) => !v)}
                  aria-expanded={mobileCoursesOpen}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-semibold ${
                    isCoursesActive ? "bg-brand-soft text-brand" : "text-ink/80"
                  }`}
                >
                  {t[item.key]}
                  <Chevron open={mobileCoursesOpen} />
                </button>
                {mobileCoursesOpen && (
                  <div className="mb-2 ml-3 border-l-2 border-brand/10 pl-4">
                    <p className="pt-3 text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                      {dd.coursesGroup}
                    </p>
                    {courses.map((course) => (
                      <Link
                        key={course.slug}
                        href={`/courses/${course.slug}`}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-3 py-2.5 text-base font-semibold text-ink/70"
                      >
                        {course.name[locale]}
                      </Link>
                    ))}
                    <Link
                      href="/courses"
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-base font-bold text-brand"
                    >
                      {dd.allCourses} →
                    </Link>
                    <p className="pt-4 text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                      {dd.locationsGroup}
                    </p>
                    {CITY_LINKS.map((city) => (
                      <Link
                        key={city.key}
                        href={city.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-3 py-2.5 text-base font-semibold text-ink/70"
                      >
                        {dd.cities[city.key]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-3 py-3 text-base font-semibold ${
                  isActive(item.href) ? "bg-brand-soft text-brand" : "text-ink/80"
                }`}
              >
                {t[item.key]}
              </Link>
            )
          )}
          <Link
            href="/free-trial"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-gold px-5 py-3 text-center text-base font-bold text-brand-deep"
          >
            {t.bookFreeTrial}
          </Link>
        </nav>
      )}
    </header>
  );
}
