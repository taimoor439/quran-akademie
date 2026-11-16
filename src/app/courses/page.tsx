import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "https://onlinekoran.de/courses" },
};

export default function CoursesPage() {
  return <Content />;
}
