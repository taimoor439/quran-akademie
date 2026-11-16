import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "https://onlinekoran.de/courses/noorani-qaida" },
};

export default function NooraniQaidaPage() {
  return <Content />;
}
