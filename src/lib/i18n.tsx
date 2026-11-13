"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Locale = "en" | "de";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  setLocale: () => {},
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("qa_locale");
    if (saved === "en" || saved === "de") setLocaleState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem("qa_locale", next);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

/** Shared UI strings for the header, footer and common components. */
export const uiDict = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navCourses: "Courses",
    navLocations: "Locations",
    navPricing: "Pricing",
    navTeachers: "Teachers",
    navTestimonials: "Reviews",
    navFaq: "FAQ",
    navBlog: "Blog",
    navContact: "Contact",
    bookFreeTrial: "Book a Free Trial",
    menu: "Menu",
    close: "Close",
    footerTagline:
      "Live 1-to-1 Quran classes for families in Germany — certified tutors, gentle teaching, and lessons that fit your evenings.",
    footerAcademy: "Academy",
    footerCourses: "Courses",
    footerLegal: "Legal",
    footerContact: "Contact",
    footerRights: "All rights reserved.",
    learnMore: "Learn more",
    viewAllCourses: "View all courses",
    viewPricing: "View pricing",
  },
  de: {
    navHome: "Start",
    navAbout: "Über uns",
    navCourses: "Kurse",
    navLocations: "Standorte",
    navPricing: "Preise",
    navTeachers: "Lehrer",
    navTestimonials: "Bewertungen",
    navFaq: "FAQ",
    navBlog: "Blog",
    navContact: "Kontakt",
    bookFreeTrial: "Kostenlose Probestunde",
    menu: "Menü",
    close: "Schließen",
    footerTagline:
      "Live-Quranunterricht 1-zu-1 für Familien in Deutschland — zertifizierte Lehrkräfte, einfühlsamer Unterricht und Termine, die zu Ihren Abenden passen.",
    footerAcademy: "Akademie",
    footerCourses: "Kurse",
    footerLegal: "Rechtliches",
    footerContact: "Kontakt",
    footerRights: "Alle Rechte vorbehalten.",
    learnMore: "Mehr erfahren",
    viewAllCourses: "Alle Kurse ansehen",
    viewPricing: "Preise ansehen",
  },
} as const;

export type UiDict = (typeof uiDict)["en"];
