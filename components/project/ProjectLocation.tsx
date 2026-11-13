import React from "react";
import { MapPin, ExternalLink } from "lucide-react";
import type { ProjectDetail } from "@/data/projects";

interface ProjectLocationProps {
  project: ProjectDetail;
  mapsUrl: string;
}

export const ProjectLocation: React.FC<ProjectLocationProps> = ({ project, mapsUrl }) => {
  if (!project.locationAdvantages || project.locationAdvantages.length === 0) {
    return null;
  }

  return (
    <section className="location-section section-pad" id="location">
      <div className="project-section-head">
        <div className="head-text-group">
          <div className="project-kicker"><span>04</span> / THE LOCATION</div>
          <p className="eyebrow">CONNECTIVITY & NEIGHBORHOOD</p>
          <h2>Close to everything<br /><em>that matters.</em></h2>
        </div>
        <div className="head-note-group">
          <p className="head-desc">
            Strategically situated with rapid access to metro corridors, top schools, multi-specialty healthcare, and key ring roads.
          </p>
        </div>
      </div>
      <div className="location-layout">
        <div className="location-copy">
          <p className="location-intro">
            {project.name} is ideally placed within {project.location}, balancing tranquil suburban living with swift connectivity to major transport and commercial nodes across Hyderabad.
          </p>
          <div className="location-address-box">
            <MapPin size={18} className="gold-icon" />
            <div>
              <strong>Site Address:</strong>
              <p>{project.address || project.location}</p>
            </div>
          </div>

          <div className="location-actions">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-gold map-link-btn"
            >
              <MapPin size={15} />
              Open in Google Maps <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="location-table-card">
          <div className="table-header">
            <span>KEY LANDMARK</span>
            <span>APPROX DISTANCE</span>
          </div>
          <div className="table-body">
            {project.locationAdvantages.map((adv, idx) => (
              <div className="table-row" key={idx}>
                <span className="landmark-name">
                  <MapPin size={14} />
                  {adv.landmark}
                </span>
                <strong className="landmark-dist">{adv.distance}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
