import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "What Age Should a Child Start Learning the Quran?",
  description:
    "Most children can start learning the Quran at age 4–5, and 5–7 is the ideal window. Learn the readiness signs, age-by-age stages, and what to expect first.",
  alternates: { canonical: "https://onlinekoran.de/blog/what-age-should-a-child-start-learning-quran" },
};

export default function AgeGuidePage() {
  return <Content />;
}
