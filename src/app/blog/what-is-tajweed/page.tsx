import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "What Is Tajweed? Rules, Meaning & How to Learn",
  description:
    "Tajweed is the art of reciting the Quran correctly: every letter from its right place, with its right sound and length. Learn the rules and how to start.",
};

export default function WhatIsTajweedPage() {
  return <Content />;
}
