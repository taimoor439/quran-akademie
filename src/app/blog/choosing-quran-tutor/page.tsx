import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "https://onlinekoran.de/blog/choosing-quran-tutor" },
};

export default function BlogPostPage() {
  return <Content />;
}
