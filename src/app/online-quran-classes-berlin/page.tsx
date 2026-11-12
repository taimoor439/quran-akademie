import type { Metadata } from "next";
import BerlinContent from "./content";

export const metadata: Metadata = {
  title: "Online Quran Classes in Berlin — 1-on-1 Live Lessons",
  description:
    "Live 1-on-1 Quran classes for families in Berlin — Neukölln, Kreuzberg, Wedding, Moabit & Spandau. After-school times in Berlin time, free trial class.",
};

export default function OnlineQuranClassesBerlinPage() {
  return <BerlinContent />;
}
