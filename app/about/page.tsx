import type { Metadata } from "next";
import AboutPageView from "@/components/about/AboutPageView";

export const metadata: Metadata = {
  title: "About Us | Thirumala Constructions & Developers",
  description:
    "Discover Thirumala Constructions & Developers - Hyderabad's trusted builder led by civil engineering graduate G V Sudhakara Rao and G Prashanthi. 10+ years of building excellence, 13+ delivered landmarks, and unwavering structural integrity.",
  openGraph: {
    title: "About Us | Thirumala Constructions & Developers",
    description:
      "Civil engineering leadership, direct promoter supervision, and a decade of building trust across Hyderabad. Explore our story, leadership, and quality benchmarks.",
    type: "website",
    images: [
      {
        url: "/projects/banner.png",
        width: 1200,
        height: 630,
        alt: "Thirumala Constructions & Developers - About Us"
      }
    ]
  }
};

export default function AboutPage() {
  return <AboutPageView />;
}
