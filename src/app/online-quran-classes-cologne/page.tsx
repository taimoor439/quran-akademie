import type { Metadata } from "next";
import CologneContent from "./content";

export const metadata: Metadata = {
  title: "Online Quran Classes in Cologne — 1-on-1 Live Lessons",
  description:
    "Live 1-on-1 Quran classes for families in Cologne — Ehrenfeld, Kalk & Mülheim. After-school times in Cologne time, free trial class.",
  alternates: { canonical: "https://onlinekoran.de/online-quran-classes-cologne" },
};

export default function OnlineQuranClassesColognePage() {
  return <CologneContent />;
}
