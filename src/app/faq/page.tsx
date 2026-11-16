import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "https://onlinekoran.de/faq" },
};

export default function FaqPage() {
  return <Content />;
}
