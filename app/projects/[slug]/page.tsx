import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, getAllProjectSlugs, projectsData } from "@/data/projects";
import ProjectDetailView from "@/components/ProjectDetailView";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: "Project Not Found | Thirumala Constructions & Developers",
      description: "The requested project could not be found."
    };
  }

  return {
    title: `${project.name} | Thirumala Constructions & Developers`,
    description: `${project.name} - ${project.tagline} Located at ${project.location}. Developed by Thirumala Constructions & Developers, Hyderabad.`,
    openGraph: {
      title: `${project.name} | Thirumala Constructions & Developers`,
      description: project.tagline,
      type: "website",
      images: [
        {
          url: project.bannerImage || project.image,
          width: 1200,
          height: 630,
          alt: project.name
        }
      ]
    }
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    notFound();
  }

  const currentIndex = projectsData.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : undefined;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : undefined;

  return (
    <ProjectDetailView
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
