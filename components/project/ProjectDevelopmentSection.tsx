import { ArrowUpRight, BadgeCheck, Check, Compass, MapPin, ShieldCheck, Sparkles, Wind } from "lucide-react";
import { ProjectDetail } from "@/data/projects";

interface Props {
  project: ProjectDetail;
}

export default function ProjectDevelopmentSection({ project }: Props) {
  return (
    <section className="project-details-section section-pad" id="development">
      <div className="project-section-head">
        <div className="head-text-group">
          <div className="project-kicker"><span>02</span> / THE DEVELOPMENT</div>
          <p className="eyebrow">ABOUT THE PROJECT</p>
          <h2>Thoughtfully conceived.<br /><em>Masterfully executed.</em></h2>
        </div>
        <div className="head-note-group">
          <p className="head-desc">
            An architectural overview of design intent, structural integrity, and everyday living experience at {project.name}.
          </p>
          <div className="dev-meta-pills">
            <span className="dev-meta-pill">
              <BadgeCheck size={13} className="gold-icon" />
              {project.status === "Ready to Move" ? "Ready for Possession" : project.status}
            </span>
            <span className="dev-meta-pill">
              <MapPin size={13} className="gold-icon" />
              {project.location}
            </span>
          </div>
        </div>
      </div>

      <div className="project-story-grid">
        <div className="project-story-left">
          {project.overview.length > 0 && (
            <div className="story-lead-quote">
              <div className="quote-bar" />
              <p className="quote-text">{project.overview[0]}</p>
            </div>
          )}

          {project.overview.length > 1 && (
            <div className="story-copy">
              {project.overview.slice(1).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}

          {/* 3 Core Architectural Pillars */}
          <div className="story-pillars-grid">
            <div className="pillar-item">
              <div className="pillar-card-top">
                <div className="pillar-icon-badge">
                  <Compass size={18} className="pillar-icon" />
                </div>
                <span className="pillar-num">01</span>
              </div>
              <div className="pillar-header">
                <h4>100% Vastu Harmonized</h4>
              </div>
              <p>Oriented along natural cardinal axes with scientifically balanced entrances, kitchens, and living spaces.</p>
            </div>

            <div className="pillar-item">
              <div className="pillar-card-top">
                <div className="pillar-icon-badge">
                  <Wind size={18} className="pillar-icon" />
                </div>
                <span className="pillar-num">02</span>
              </div>
              <div className="pillar-header">
                <h4>Daylight & Cross-Ventilation</h4>
              </div>
              <p>Expansive balcony apertures and window placements engineered for generous natural airflow and morning sun.</p>
            </div>

            <div className="pillar-item">
              <div className="pillar-card-top">
                <div className="pillar-icon-badge">
                  <ShieldCheck size={18} className="pillar-icon" />
                </div>
                <span className="pillar-num">03</span>
              </div>
              <div className="pillar-header">
                <h4>Direct Promoter Oversight</h4>
              </div>
              <p>Supervised at every concrete pour and structural milestone by experienced civil engineering leadership.</p>
            </div>
          </div>
        </div>

        <div className="project-story-right">
          <div className="highlights-card">
            <div className="highlights-header">
              <div className="highlights-title-wrap">
                <Sparkles size={18} className="gold-icon" />
                <h3>Project Highlights</h3>
              </div>
              <span className="highlights-count-pill">{project.highlights.length} Features</span>
            </div>

            <ul className="highlights-list">
              {project.highlights.map((h, i) => (
                <li key={i}>
                  <span className="highlight-check">
                    <Check size={14} />
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="promoter-guarantee-seal">
              <div className="seal-badge">
                <ShieldCheck size={22} className="gold-icon" />
              </div>
              <div className="seal-text">
                <strong>Direct Promoter Supervision</strong>
                <p>Engineered under the leadership of G V Sudhakara Rao, civil engineering alumnus with 15+ years of Hyderabad construction excellence.</p>
              </div>
            </div>

            <div className="highlights-card-footer">
              <a href="#enquiry" className="button button-gold button-full-width">
                Schedule a Private Site Visit <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

