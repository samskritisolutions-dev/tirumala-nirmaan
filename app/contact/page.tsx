import type { Metadata } from "next";
import ContactPageView from "@/components/contact/ContactPageView";

export const metadata: Metadata = {
  title: "Contact Us & Schedule a Site Visit | Thirumala Constructions & Developers",
  description:
    "Connect directly with Thirumala Constructions & Developers in Peerzadiguda, Hyderabad. Schedule a personalized site visit to our ongoing residential projects, request floor plans, or speak directly with our civil engineering promoters.",
  openGraph: {
    title: "Contact Us & Schedule a Site Visit | Thirumala Constructions & Developers",
    description:
      "Visit our head office in Peerzadiguda near Uppal Depot or book an accompanied tour of our ongoing residential developments across Hyderabad.",
    type: "website",
    images: [
      {
        url: "/projects/banner.png",
        width: 1200,
        height: 630,
        alt: "Thirumala Constructions & Developers - Contact Us"
      }
    ]
  }
};

export default function ContactPage() {
  return <ContactPageView />;
}
