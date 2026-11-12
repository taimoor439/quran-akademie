import type { Metadata } from "next";
import MunichContent from "./content";

export const metadata: Metadata = {
  title: "Online Quran Classes in Munich — 1-on-1 Live Lessons",
  description:
    "Live 1-on-1 Quran classes for families in Munich — Sendling, Neuperlach & Hasenbergl. After-school times in Munich time, free trial class.",
};

export default function OnlineQuranClassesMunichPage() {
  return <MunichContent />;
}
