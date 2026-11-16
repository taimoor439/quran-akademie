import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "https://onlinekoran.de/privacy" },
};

export default function PrivacyPage() {
  return <Content />;
}
