import type { Locale } from "./i18n";

/**
 * SAMPLE TESTIMONIALS — placeholder reviews for the preview website.
 * Replace with real parent reviews (with their permission) before launch.
 * These are illustrative only and must not be presented as verified reviews.
 */
export interface Testimonial {
  quote: Record<Locale, string>;
  name: Record<Locale, string>;
  detail: Record<Locale, string>;
}

export const testimonials: Testimonial[] = [
  {
    quote: {
      en: "Our son looks forward to every lesson. His teacher is patient, and after three months he reads on his own — we can hear the difference at home.",
      de: "Unser Sohn freut sich auf jede Stunde. Sein Lehrer ist geduldig, und nach drei Monaten liest er schon selbstständig — man hört den Unterschied zu Hause.",
    },
    name: { en: "Sana, mother of two", de: "Sana, Mutter von zwei Kindern" },
    detail: { en: "Berlin", de: "Berlin" },
  },
  {
    quote: {
      en: "The free trial class made the decision easy. We met the teacher first, saw how kind she is with our daughter, and enrolled the same week.",
      de: "Die kostenlose Probestunde hat uns die Entscheidung leicht gemacht. Wir haben die Lehrerin zuerst kennengelernt, gesehen, wie liebevoll sie mit unserer Tochter umgeht, und uns noch in derselben Woche angemeldet.",
    },
    name: { en: "Imran, father of one", de: "Imran, Vater eines Kindes" },
    detail: { en: "Munich", de: "München" },
  },
  {
    quote: {
      en: "Evening slots after school are perfect for us. The monthly progress report shows exactly which surahs our children have learned.",
      de: "Die Abendtermine nach der Schule passen perfekt zu uns. Der monatliche Fortschrittsbericht zeigt genau, welche Suren unsere Kinder gelernt haben.",
    },
    name: { en: "Ayesha, mother of three", de: "Ayesha, Mutter von drei Kindern" },
    detail: { en: "Hamburg", de: "Hamburg" },
  },
  {
    quote: {
      en: "As an adult beginner I was nervous, but my tutor goes at my pace. I can finally read the Quran with proper Tajweed.",
      de: "Als erwachsener Anfänger war ich nervös, aber mein Lehrer geht in meinem Tempo vor. Ich kann den Koran jetzt endlich mit richtigem Tadschwid lesen.",
    },
    name: { en: "Omar, adult student", de: "Omar, erwachsener Schüler" },
    detail: { en: "Frankfurt", de: "Frankfurt" },
  },
];
