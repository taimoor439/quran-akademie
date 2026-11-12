import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "How to Memorize Quran: A Beginner's Hifz Guide",
  description:
    "How to memorize the Quran step by step: start with Juz Amma, use the sabaq–sabqi–manzil method, and revise daily. Realistic timelines and a system that works.",
};

export default function Page() {
  return <Content />;
}
