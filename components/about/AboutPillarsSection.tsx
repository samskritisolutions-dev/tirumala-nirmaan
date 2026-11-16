"use client";

import { Clock3, Compass, HardHat, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Engineering Rigor & IS Compliance",
    icon: HardHat,
    desc: "We build strictly in compliance with Indian Standards (IS 456 & IS 1893) for earthquake-resistant RCC frame structures. Every foundation is engineered according to certified geotechnical soil reports with premium Fe 550D TMT steel and controlled-grade concrete.",
    highlight: "Zero structural shortcuts"
  },
  {
    num: "02",
    title: "Direct Promoter Supervision",
    icon: ShieldCheck,
    desc: "Unlike large corporate builders who leave site execution entirely to third-party subcontractors, our promoter, G V Sudhakara Rao (civil engineer), personally inspects reinforcement cages, shuttering alignment, and concrete pours on site.",
    highlight: "Hands-on accountability"
  },
  {
    num: "03",
    title: "Vastu Harmony & Daylight Flow",
    icon: Compass,
    desc: "Every floor plan is aligned with authentic Vedic Vastu principles, orienting kitchens to southeast (Agneya) and master bedrooms to southwest (Nairuthi). Apertures are positioned to harvest cross-breezes and generous natural morning light.",
    highlight: "100% Vastu compliant"
  },
  {
    num: "04",
    title: "Timely Delivery & Clear Titles",
    icon: Clock3,
    desc: "We honor committed handover schedules through disciplined phase-wise milestone planning. Every property comes with 100% clear legal documentation, sanctioned building permits, and comprehensive occupancy support for absolute peace of mind.",
    highlight: "On-time handover track record"
  }
];

export default function AboutPillarsSection() {
  return (
    <section className="about-pillars-section section-pad" id="pillars">
      <div className="section-kicker"><span>02</span> / GUIDING PRINCIPLES</div>

      <div className="section-heading">
        <div>
          <p className="eyebrow">THE THIRUMALA STANDARD</p>
          <h2>The four pillars behind<br /><em>every landmark.</em></h2>
        </div>
        <p className="heading-note">
          Our practice is anchored in engineering excellence, genuine accountability, and respect for the people who make our buildings their home.
        </p>
      </div>

      <div className="pillars-cards-grid">
        {pillars.map((pillar) => (
          <div className="about-pillar-card" key={pillar.num}>
            <div className="pillar-card-top">
              <div className="pillar-icon-box">
                <pillar.icon size={22} className="gold-icon" />
              </div>
              <span className="pillar-card-num">{pillar.num}</span>
            </div>
            <h3>{pillar.title}</h3>
            <p>{pillar.desc}</p>
            <div className="pillar-card-footer">
              <span className="pillar-highlight-tag">{pillar.highlight}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
