import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "https://onlinekoran.de/courses/hifz" },
};

export default function HifzPage() {
  return <Content />;
}
