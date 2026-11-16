import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "https://onlinekoran.de/courses/tajweed" },
};

export default function TajweedPage() {
  return <Content />;
}
