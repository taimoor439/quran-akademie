import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "https://onlinekoran.de/pricing" },
};

export default function PricingPage() {
  return <Content />;
}
