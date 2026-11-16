import type { Metadata } from "next";
import KidsContent from "./content";

export const metadata: Metadata = {
  title: "Online Quran Classes for Kids — 1-on-1 Live Lessons",
  description:
    "Live 1-on-1 Quran classes for kids ages 5+. Certified tutors, female teachers available, monthly progress reports. Book a free 30-minute trial class today.",
  alternates: { canonical: "https://onlinekoran.de/quran-classes-for-kids" },
};

export default function QuranClassesForKidsPage() {
  return <KidsContent />;
}
