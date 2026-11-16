import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "https://onlinekoran.de/blog/tajweed-basics" },
};

export default function BlogPostPage() {
  return <Content />;
}
