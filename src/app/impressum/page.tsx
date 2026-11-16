import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "https://onlinekoran.de/impressum" },
};

export default function ImpressumPage() {
  return <Content />;
}
