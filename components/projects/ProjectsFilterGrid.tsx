"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Building, Calendar, Layers } from "lucide-react";
import { projectsData, ProjectDetail } from "@/data/projects";

type FilterTab = "all" | "ongoing" | "completed" | "residential" | "commercial";

export default function ProjectsFilterGrid() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const filteredProjects = projectsData.filter((p) => {
    if (activeTab === "all") return true;
    if (activeTab === "ongoing") return p.status === "Ongoing";
    if (activeTab === "completed") return p.status === "Completed";
    if (activeTab === "residential") return p.category === "Residential";
    if (activeTab === "commercial") return p.category === "Commercial";
    return true;
  });

  const tabs: { id: FilterTab; label: string; count: number }[] = [
    { id: "all", label: "All Projects", count: projectsData.length },
    {
      id: "ongoing",
      label: "Ongoing",
      count: projectsData.filter((p) => p.status === "Ongoing").length
    },
    {
      id: "completed",
      label: "Completed",
      count: projectsData.filter((p) => p.status === "Completed").length
    },
    {
      id: "residential",
      label: "Residential",
      count: projectsData.filter((p) => p.category === "Residential").length
    },
    {
      id: "commercial",
      label: "Commercial",
      count: projectsData.filter((p) => p.category === "Commercial").length
    }
  ];

  return (
    <section className="projects-filter-section" id="portfolio">
      <div className="section-container">
        <div className="projects-section-header">
          <div className="projects-header-left">
            <span className="section-tag-gold">DEVELOPMENT PORTFOLIO</span>
            <h2 className="section-title-large">
              Featured <em>Developments</em>
            </h2>
            <p className="section-desc">
              Explore our landmark residential complexes and commercial ventures across Hyderabad, each built with high-grade materials and structural rigor.
            </p>
          </div>

          <div className="projects-filter-tabs" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`projects-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="tab-count">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="projects-cards-grid">
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.article
                layout
                key={project.slug}
                className="project-showcase-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <Link href={`/projects/${project.slug}`} className="showcase-card-link">
                  <div className="showcase-card-image-wrap">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="showcase-card-img"
                      loading="lazy"
                    />
                    <div className="showcase-card-badges">
                      <span className={`status-pill ${project.status.toLowerCase().replace(/\s+/g, "-")}`}>
                        {project.status === "Ongoing" ? "Under Construction" : "Completed"}
                      </span>
                      <span className="category-pill">{project.category}</span>
                    </div>
                  </div>

                  <div className="showcase-card-content">
                    <div className="showcase-card-meta">
                      <span className="showcase-location">
                        <MapPin size={13} />
                        {project.location.split(",")[0]}
                      </span>
                      <span className="showcase-year">
                        <Calendar size={13} />
                        {project.year}
                      </span>
                    </div>

                    <h3 className="showcase-card-title">{project.name}</h3>
                    <p className="showcase-card-tagline">{project.tagline}</p>

                    <div className="showcase-card-specs">
                      <div className="spec-item">
                        <Building size={13} />
                        <span>{project.configurations || project.units}</span>
                      </div>
                      <div className="spec-item">
                        <Layers size={13} />
                        <span>{project.floors}</span>
                      </div>
                    </div>

                    <div className="showcase-card-footer">
                      <span className="view-details-cta">
                        View Project Details
                        <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
