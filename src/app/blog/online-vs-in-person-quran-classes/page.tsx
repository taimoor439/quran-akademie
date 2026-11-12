import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "Online vs In-Person Quran Classes: Honest Comparison",
  description:
    "Online 1-on-1 lessons, mosque school or a home tutor — which fits your family? An honest comparison of cost, flexibility, personal attention and community.",
};

export default function OnlineVsInPersonPage() {
  return <Content />;
}
