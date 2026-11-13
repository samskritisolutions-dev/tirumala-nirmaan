import { ArrowUpRight, Check, Compass } from "lucide-react";
import { ProjectDetail } from "@/data/projects";

interface Props {
  project: ProjectDetail;
  activePlan: number;
  setActivePlan: (index: number) => void;
}

export default function ProjectFloorPlans({ project, activePlan, setActivePlan }: Props) {
  if (!project.floorPlans || project.floorPlans.length === 0) return null;

  return (
    <section className="floor-plans-section section-pad" id="plans">
      <div className="project-section-head">
        <div className="head-text-group">
          <div className="project-kicker"><span>03</span> / UNIT LAYOUTS</div>
          <p className="eyebrow">FLOOR PLANS & SIZES</p>
          <h2>Space optimized for<br /><em>effortless living.</em></h2>
        </div>
        <div className="head-note-group">
          <p className="head-desc">
            Thoughtfully planned configurations providing privacy, cross ventilation, and 100% Vastu compliance.
          </p>
        </div>
      </div>

      <div className="floor-plans-container">
        <div className="plan-tabs">
          {project.floorPlans.map((plan, i) => (
            <button
              key={i}
              type="button"
              className={`plan-tab-btn ${activePlan === i ? "active" : ""}`}
              onClick={() => setActivePlan(i)}
            >
              <span>{plan.type}</span>
              <small>{plan.area}</small>
            </button>
          ))}
        </div>

        <div className="active-plan-display">
          <div className="plan-meta-card">
            <div className="plan-meta-header">
              <h3>{project.floorPlans[activePlan].type}</h3>
              <span className="plan-facing-tag">
                <Compass size={14} />
                {project.floorPlans[activePlan].facing}
              </span>
            </div>
            <div className="plan-size-callout">
              <span className="size-label">Super Built-Up Area</span>
              <strong className="size-num">{project.floorPlans[activePlan].area}</strong>
            </div>
            <div className="plan-features-list">
              <span className="features-label">Layout Specifications:</span>
              <ul>
                {project.floorPlans[activePlan].features.map((feat, idx) => (
                  <li key={idx}>
                    <Check size={14} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="#enquiry" className="button button-gold plan-enquire-btn">
              Request Floor Plan PDF <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="plan-visual-card">
            <img
              src={project.image}
              alt={`${project.name} Layout`}
              className="plan-preview-img"
            />
            <div className="plan-visual-overlay">
              <p>Detailed architectural working CAD drawings available on request</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

