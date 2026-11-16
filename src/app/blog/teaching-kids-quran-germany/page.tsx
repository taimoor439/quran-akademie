import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "https://onlinekoran.de/blog/teaching-kids-quran-germany" },
};

export default function BlogPostPage() {
  return <Content />;
}
