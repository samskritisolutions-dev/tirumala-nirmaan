import type { Metadata } from "next";
import TestimonialsPageView from "@/components/testimonials/TestimonialsPageView";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews | Thirumala Constructions & Developers",
  description:
    "Read genuine reviews and testimonials from 150+ happy families and commercial partners who trusted Thirumala Constructions & Developers for their residential and commercial properties across Hyderabad.",
  openGraph: {
    title: "Client Testimonials & Reviews | Thirumala Constructions & Developers",
    description:
      "Stories from families who call our work home. Discover how our civil engineering rigor and transparent promoter supervision deliver lasting peace of mind.",
    type: "website",
    images: [
      {
        url: "/projects/banner.png",
        width: 1200,
        height: 630,
        alt: "Thirumala Constructions & Developers - Client Testimonials"
      }
    ]
  }
};

export default function TestimonialsPage() {
  return <TestimonialsPageView />;
}
