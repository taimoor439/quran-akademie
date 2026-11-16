import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "https://onlinekoran.de/contact" },
};

export default function ContactPage() {
  return <Content />;
}
