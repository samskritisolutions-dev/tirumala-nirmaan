import { Building2, Compass, Home as HomeIcon, Layers } from "lucide-react";
import { ProjectDetail } from "@/data/projects";

interface Props {
  project: ProjectDetail;
}

export default function ProjectStatsBar({ project }: Props) {
  return (
    <section className="project-stats-bar">
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon-wrap"><Building2 size={20} /></div>
          <div className="stat-info">
            <span className="stat-label">CONFIGURATION</span>
            <strong className="stat-val">{project.configurations}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrap"><Layers size={20} /></div>
          <div className="stat-info">
            <span className="stat-label">TOTAL UNITS</span>
            <strong className="stat-val">{project.units}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrap"><HomeIcon size={20} /></div>
          <div className="stat-info">
            <span className="stat-label">BUILT-UP AREA</span>
            <strong className="stat-val">{project.builtUpArea}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrap"><Compass size={20} /></div>
          <div className="stat-info">
            <span className="stat-label">STRUCTURE</span>
            <strong className="stat-val">{project.floors}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

