import type { Metadata } from "next";
import HamburgContent from "./content";

export const metadata: Metadata = {
  title: "Online Quran Classes in Hamburg — 1-on-1 Live Lessons",
  description:
    "Live 1-on-1 Quran classes for families in Hamburg — Altona, Wilhelmsburg, Harburg & St. Georg. After-school times in Hamburg time, free trial class.",
};

export default function OnlineQuranClassesHamburgPage() {
  return <HamburgContent />;
}
