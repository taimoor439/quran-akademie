import type { Locale } from "./i18n";

export interface Plan {
  id: string;
  name: Record<Locale, string>;
  priceUsd: number;
  classesPerWeek: number;
  minutesPerClass: number;
  popular?: boolean;
  features: Record<Locale, string[]>;
}

export const plans: Plan[] = [
  {
    id: "basic",
    name: { en: "Basic", de: "Basis" },
    priceUsd: 35,
    classesPerWeek: 4,
    minutesPerClass: 25,
    features: {
      en: [
        "4 × 25-minute 1-to-1 classes per week",
        "Certified Quran tutor",
        "Monthly progress report for parents",
        "Free trial class included",
      ],
      de: [
        "4 × 25 Minuten Einzelunterricht pro Woche",
        "Zertifizierte Koranlehrkraft",
        "Monatlicher Fortschrittsbericht für Eltern",
        "Kostenlose Probestunde inklusive",
      ],
    },
  },
  {
    id: "standard",
    name: { en: "Standard", de: "Standard" },
    priceUsd: 59,
    classesPerWeek: 5,
    minutesPerClass: 30,
    popular: true,
    features: {
      en: [
        "5 × 30-minute 1-to-1 classes per week",
        "Certified Quran tutor",
        "Monthly progress report + parent check-in",
        "Flexible rescheduling",
        "Free trial class included",
      ],
      de: [
        "5 × 30 Minuten Einzelunterricht pro Woche",
        "Zertifizierte Koranlehrkraft",
        "Monatlicher Fortschrittsbericht + Elterngespräch",
        "Flexible Terminverschiebung",
        "Kostenlose Probestunde inklusive",
      ],
    },
  },
  {
    id: "hifz-intensive",
    name: { en: "Hifz Intensive", de: "Hifz Intensiv" },
    priceUsd: 99,
    classesPerWeek: 5,
    minutesPerClass: 45,
    features: {
      en: [
        "5 × 45-minute 1-to-1 classes per week",
        "Dedicated Hifz tutor (Hafiz / Hafiza)",
        "Weekly memorisation & revision plan",
        "Monthly progress report for parents",
        "Priority scheduling",
      ],
      de: [
        "5 × 45 Minuten Einzelunterricht pro Woche",
        "Persönlicher Hifz-Lehrer (Hafiz / Hafiza)",
        "Wöchentlicher Lern- und Wiederholungsplan",
        "Monatlicher Fortschrittsbericht für Eltern",
        "Bevorzugte Terminvergabe",
      ],
    },
  },
];
