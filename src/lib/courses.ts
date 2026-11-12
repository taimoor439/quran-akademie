import type { Locale } from "./i18n";

export interface CourseMeta {
  slug: string;
  name: Record<Locale, string>;
  tagline: Record<Locale, string>;
  arabic: string;
  ages: Record<Locale, string>;
  level: Record<Locale, string>;
  /** Remote free-stock image URL (Unsplash/Pexels). Verified 200 on 2026-11-12. */
  image: string;
}

export const courses: CourseMeta[] = [
  {
    slug: "noorani-qaida",
    name: { en: "Noorani Qaida", de: "Noorani Qaida" },
    tagline: {
      en: "First steps in reading Arabic — letters, sounds and joining, for complete beginners.",
      de: "Erste Schritte im arabischen Lesen — Buchstaben, Laute und Verbinden, für absolute Anfänger.",
    },
    arabic: "القاعدة النورانية",
    ages: { en: "Ages 4+ · Beginners", de: "Ab 4 Jahren · Anfänger" },
    level: { en: "Beginner", de: "Anfänger" },
    image:
      "https://www.barakahislamicstore.com/cdn/shop/files/Noorani-Qaeda1_grande_33b8a558-42bc-4bdd-8e32-e9171343fa01.png?v=1706029182",
  },
  {
    slug: "tajweed",
    name: { en: "Quran Reading with Tajweed", de: "Koranlesen mit Tadschwid" },
    tagline: {
      en: "Fluent, beautiful recitation with correct pronunciation and the rules of Tajweed.",
      de: "Flüssiges, schönes Rezitieren mit korrekter Aussprache und den Regeln des Tadschwid.",
    },
    arabic: "التجويد",
    ages: { en: "Ages 6+ · All levels", de: "Ab 6 Jahren · Alle Stufen" },
    level: { en: "All levels", de: "Alle Stufen" },
    image:
      "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "hifz",
    name: { en: "Hifz-ul-Quran", de: "Hifz-ul-Koran" },
    tagline: {
      en: "Structured memorisation with revision cycles, guided by an experienced Hafiz or Hafiza.",
      de: "Strukturiertes Auswendiglernen mit Wiederholungszyklen, begleitet von einem erfahrenen Hafiz oder einer Hafiza.",
    },
    arabic: "حفظ القرآن",
    ages: {
      en: "Ages 7+ · With Tajweed basics",
      de: "Ab 7 Jahren · Mit Tadschwid-Grundlagen",
    },
    level: { en: "Intermediate", de: "Fortgeschritten" },
    image:
      "https://images.pexels.com/photos/5801003/pexels-photo-5801003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    slug: "tafseer",
    name: { en: "Tafseer & Understanding", de: "Tafsir & Verständnis" },
    tagline: {
      en: "Understand what you recite — meanings, context and lessons from the Quran, in plain language.",
      de: "Verstehen, was man rezitiert — Bedeutungen, Kontext und Lehren aus dem Koran, in einfacher Sprache.",
    },
    arabic: "التفسير",
    ages: { en: "Teens & adults", de: "Jugendliche & Erwachsene" },
    level: { en: "Intermediate", de: "Mittelstufe" },
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "kids-islamic-studies",
    name: { en: "Islamic Studies for Kids", de: "Islamkunde für Kinder" },
    tagline: {
      en: "Salah, duas, seerah stories and good manners — gentle Islamic learning for children.",
      de: "Salah, Duas, Sira-Geschichten und gute Manieren — sanftes islamisches Lernen für Kinder.",
    },
    arabic: "الدراسات الإسلامية",
    ages: { en: "Ages 5–12", de: "5–12 Jahre" },
    level: { en: "Beginner", de: "Anfänger" },
    image:
      "https://images.pexels.com/photos/7155575/pexels-photo-7155575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export function getCourse(slug: string): CourseMeta | undefined {
  return courses.find((c) => c.slug === slug);
}
