import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, LayoutGrid } from "lucide-react";
import type { ProjectDetail } from "@/data/projects";

interface ProjectPaginationProps {
  prevProject: ProjectDetail | null;
  nextProject: ProjectDetail | null;
}

export const ProjectPagination: React.FC<ProjectPaginationProps> = ({ prevProject, nextProject }) => {
  return (
    <section className="project-pagination-section">
      <div className="pagination-top-bar">
        <div className="pagination-kicker-group">
          <span className="pagination-kicker">PORTFOLIO NAVIGATION</span>
          <p className="pagination-subhead">Explore adjacent residential & commercial developments</p>
        </div>
        <Link href="/#projects" className="all-projects-capsule">
          <LayoutGrid size={15} />
          <span>All 13 Projects</span>
          <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="pagination-grid">
        {prevProject ? (
          <Link href={`/projects/${prevProject.slug}`} className="nav-tile prev-tile">
            <div className="nav-tile-thumb">
              <img src={prevProject.image} alt={prevProject.name} />
              <div className="nav-tile-overlay" />
            </div>
            <div className="nav-tile-body">
              <div className="nav-tile-direction">
                <span className="nav-arrow-bubble">
                  <ArrowLeft size={16} />
                </span>
                <span className="direction-label">PREVIOUS PROJECT</span>
              </div>
              <h4 className="nav-tile-title">{prevProject.name}</h4>
              <div className="nav-tile-meta">
                <span className="nav-tile-loc">{prevProject.location}</span>
                <span className="nav-tile-sep">•</span>
                <span className="nav-tile-cfg">{prevProject.configurations}</span>
              </div>
            </div>
          </Link>
        ) : (
          <div className="nav-tile-placeholder">
            <span>Start of Featured Developments</span>
          </div>
        )}

        {nextProject ? (
          <Link href={`/projects/${nextProject.slug}`} className="nav-tile next-tile">
            <div className="nav-tile-thumb">
              <img src={nextProject.image} alt={nextProject.name} />
              <div className="nav-tile-overlay" />
            </div>
            <div className="nav-tile-body">
              <div className="nav-tile-direction">
                <span className="direction-label">NEXT PROJECT</span>
                <span className="nav-arrow-bubble">
                  <ArrowRight size={16} />
                </span>
              </div>
              <h4 className="nav-tile-title">{nextProject.name}</h4>
              <div className="nav-tile-meta">
                <span className="nav-tile-loc">{nextProject.location}</span>
                <span className="nav-tile-sep">•</span>
                <span className="nav-tile-cfg">{nextProject.configurations}</span>
              </div>
            </div>
          </Link>
        ) : (
          <div className="nav-tile-placeholder">
            <span>End of Featured Developments</span>
          </div>
        )}
      </div>
    </section>
  );
};
