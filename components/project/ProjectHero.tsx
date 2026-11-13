"use client";

import Link from "next/link";
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { ProjectDetail } from "@/data/projects";

interface Props {
  project: ProjectDetail;
  whatsappUrl: string;
}

export default function ProjectHero({ project, whatsappUrl }: Props) {
  return (
    <section className="project-hero">
      <div
        className="project-hero-bg"
        style={{ backgroundImage: `url(${project.bannerImage || project.image})` }}
      />
      <div className="project-hero-overlay" />
      <div className="project-hero-content">
        <div className="project-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/#projects">Projects</Link>
          <span>/</span>
          <span className="current">{project.name}</span>
        </div>

        <div className="project-meta-badges">
          <span
            className={`project-status-badge ${
              project.status === "Ongoing" ? "status-ongoing" : "status-completed"
            }`}
          >
            <span className="badge-dot" />
            {project.status === "Ongoing" ? "Under Construction" : "Completed & Delivered"}
          </span>
          <span className="project-category-badge">{project.category}</span>
          <span className="project-year-badge">{project.year}</span>
        </div>

        <h1 className="project-hero-title">{project.name}</h1>
        <p className="project-hero-tagline">{project.tagline}</p>
        <p className="project-hero-location">{project.location}</p>

        <div className="project-hero-cta-group">
          <a href="#enquiry" className="button button-gold">
            Schedule Site Visit <ArrowUpRight size={16} />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-glass"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
          <a href="tel:+919849306675" className="button button-ghost">
            <Phone size={15} />
            +91 98493 06675
          </a>
        </div>
      </div>
    </section>
  );
}

