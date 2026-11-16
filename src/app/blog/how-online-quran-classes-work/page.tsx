import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "How Do Online Quran Classes Work? Step by Step",
  description:
    "Live 1-on-1 Quran lessons on Zoom or Google Meet, in Germany time. Book a free trial, meet your tutor, get a learning plan — here's exactly how it works.",
  alternates: { canonical: "https://onlinekoran.de/blog/how-online-quran-classes-work" },
};

export default function Page() {
  return <Content />;
}
