import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "https://onlinekoran.de/blog" },
};

export default function BlogPage() {
  return <Content />;
}
