import type { Metadata } from "next";
import GermanyContent from "./content";

export const metadata: Metadata = {
  title: "Online Quran Classes in Germany — 1-on-1 Live Lessons",
  description:
    "Live 1-on-1 Quran classes for families in Germany. Certified tutors, after-school times in CET/CEST, free 30-minute trial class. Book your free lesson today.",
};

export default function OnlineQuranClassesGermanyPage() {
  return <GermanyContent />;
}
