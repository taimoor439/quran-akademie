import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "https://onlinekoran.de/about" },
};

export default function AboutPage() {
  return <Content />;
}
