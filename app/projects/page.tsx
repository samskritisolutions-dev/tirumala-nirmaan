import type { Metadata } from "next";
import ProjectsPageView from "@/components/projects/ProjectsPageView";

export const metadata: Metadata = {
  title: "Projects & Portfolio | Thirumala Constructions & Developers",
  description:
    "Explore Thirumala Constructions & Developers' portfolio of residential and commercial landmarks across Hyderabad. Featuring ongoing and completed developments with 100% Vastu compliance, seismic RCC construction, and prime urban locations.",
  openGraph: {
    title: "Projects & Portfolio | Thirumala Constructions & Developers",
    description:
      "A decade of building excellence across Hyderabad. Explore our 13+ delivered landmarks and active ongoing residential developments.",
    type: "website",
    images: [
      {
        url: "/projects/banner.png",
        width: 1200,
        height: 630,
        alt: "Thirumala Constructions & Developers - Projects Portfolio"
      }
    ]
  }
};

export default function ProjectsPage() {
  return <ProjectsPageView />;
}
