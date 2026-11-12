import type { Metadata } from "next";
import FrankfurtContent from "./content";

export const metadata: Metadata = {
  title: "Online Quran Classes in Frankfurt — 1-on-1 Live Lessons",
  description:
    "Live 1-on-1 Quran classes for families in Frankfurt — Gallus, Höchst & Nordweststadt. After-school times in Frankfurt time, free trial class.",
};

export default function OnlineQuranClassesFrankfurtPage() {
  return <FrankfurtContent />;
}
