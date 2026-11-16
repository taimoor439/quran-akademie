import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "https://onlinekoran.de/teachers" },
};

export default function TeachersPage() {
  return <Content />;
}
