"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, uiDict, type Locale } from "@/lib/i18n";
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
  const rawPathname = usePathname();
  // usePathname() includes the basePath on the GitHub Pages preview
  // (e.g. "/quran-akademie/courses"), so strip it for active-link checks.
  const pathname =
    rawPathname?.replace(/^\/quran-akademie(?=\/|$)/, "") || "/";
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-brand/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => (
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
          ))}
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
            onClick={() => setOpen((v) => !v)}
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
          {NAV_ITEMS.map((item) => (
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
          ))}
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
