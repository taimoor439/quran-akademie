import type { Locale } from "./i18n";
import { MUHAMMAD_SHAHID_PHOTO } from "./tutor-photos";

/**
 * TUTOR PROFILES.
 * Real tutors (e.g. Muhammad Shahid) carry real names, real subjects and a
 * real photo. The remaining profiles are SAMPLE placeholders for the preview
 * website — replace with real tutors (real first names, real qualifications,
 * real languages) before launch. Sample profiles show monogram avatars only,
 * so nothing here presents a fake person as real.
 *
 * qualifications / languages / experienceYears are optional: a real tutor is
 * listed with only the facts we actually know — never invent credentials.
 */
export interface Tutor {
  firstName: string;
  initials: string;
  female: boolean;
  role: Record<Locale, string>;
  qualifications?: Record<Locale, string[]>;
  languages?: Record<Locale, string>;
  experienceYears?: number;
  photo?: string;
}

export const tutors: Tutor[] = [
  {
    firstName: "Muhammad Shahid",
    initials: "MS",
    female: false,
    role: {
      en: "Qaida, Nazra & Islamic Studies Tutor",
      de: "Lehrer für Qaida, Nazra & Islamkunde",
    },
    photo: MUHAMMAD_SHAHID_PHOTO,
  },
  {
    firstName: "Ahmed",
    initials: "AH",
    female: false,
    role: { en: "Quran & Tajweed Tutor", de: "Koran- & Tadschwid-Lehrer" },
    qualifications: {
      en: ["Hifz-ul-Quran", "Ijazah in Hafs recitation", "Tajweed certification"],
      de: ["Hifz-ul-Koran", "Ijazah in Hafs-Rezitation", "Tadschwid-Zertifikat"],
    },
    languages: { en: "English · Urdu · Arabic", de: "Englisch · Urdu · Arabisch" },
    experienceYears: 8,
  },
  {
    firstName: "Fatima",
    initials: "FA",
    female: true,
    role: { en: "Quran Tutor for Kids & Sisters", de: "Koranlehrerin für Kinder & Schwestern" },
    qualifications: {
      en: ["Hafiza", "Tajweed certification", "6 years teaching children online"],
      de: ["Hafiza", "Tadschwid-Zertifikat", "6 Jahre Online-Unterricht für Kinder"],
    },
    languages: { en: "English · Urdu · Arabic", de: "Englisch · Urdu · Arabisch" },
    experienceYears: 6,
  },
  {
    firstName: "Bilal",
    initials: "BI",
    female: false,
    role: { en: "Senior Qari & Hifz Tutor", de: "Erfahrener Qari & Hifz-Lehrer" },
    qualifications: {
      en: ["Hifz-ul-Quran", "Ijazah in Hafs recitation", "10 years teaching Hifz students"],
      de: ["Hifz-ul-Koran", "Ijazah in Hafs-Rezitation", "10 Jahre Hifz-Unterricht"],
    },
    languages: { en: "English · Urdu · Arabic", de: "Englisch · Urdu · Arabisch" },
    experienceYears: 10,
  },
  {
    firstName: "Maryam",
    initials: "MA",
    female: true,
    role: { en: "Quran & Islamic Studies Tutor", de: "Koran- & Islamkunde-Lehrerin" },
    qualifications: {
      en: ["Hafiza", "MA in Islamic Studies", "Tajweed certification"],
      de: ["Hafiza", "Master in Islamwissenschaften", "Tadschwid-Zertifikat"],
    },
    languages: { en: "English · German · Urdu", de: "Englisch · Deutsch · Urdu" },
    experienceYears: 5,
  },
  {
    firstName: "Usman",
    initials: "US",
    female: false,
    role: { en: "Quran & Arabic Tutor", de: "Koran- & Arabisch-Lehrer" },
    qualifications: {
      en: ["Hifz-ul-Quran", "Tajweed certification", "Arabic language diploma"],
      de: ["Hifz-ul-Koran", "Tadschwid-Zertifikat", "Diplom in arabischer Sprache"],
    },
    languages: { en: "English · Urdu · Arabic", de: "Englisch · Urdu · Arabisch" },
    experienceYears: 7,
  },
  {
    firstName: "Aisha",
    initials: "AI",
    female: true,
    role: { en: "Quran Tutor for Kids & Sisters", de: "Koranlehrerin für Kinder & Schwestern" },
    qualifications: {
      en: ["Hafiza", "Tajweed certification", "Noorani Qaida specialist"],
      de: ["Hafiza", "Tadschwid-Zertifikat", "Spezialistin für Noorani Qaida"],
    },
    languages: { en: "English · Arabic", de: "Englisch · Arabisch" },
    experienceYears: 4,
  },
];
