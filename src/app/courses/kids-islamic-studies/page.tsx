import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "https://onlinekoran.de/courses/kids-islamic-studies" },
};

export default function KidsIslamicStudiesPage() {
  return <Content />;
}
