import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "https://onlinekoran.de/free-trial" },
};

export default function FreeTrialPage() {
  return <Content />;
}
