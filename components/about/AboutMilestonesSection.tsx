"use client";

import { Building2, Calendar, CheckCircle2, Flag, Milestone, TrendingUp } from "lucide-react";

const milestones = [
  {
    year: "2014",
    title: "Foundation of Thirumala Constructions",
    subtitle: "Hyderabad Inception",
    desc: "Established by civil engineering alumnus G V Sudhakara Rao and co-promoter G Prashanthi with a clear mandate: high-integrity residential construction with direct technical supervision.",
    icon: Flag
  },
  {
    year: "2016",
    title: "Balaji Hills & Boduppal Landmark Deliveries",
    subtitle: "Residential Community Growth",
    desc: "Delivered Thirumala Apartments in Balaji Hills and Thirumala Towers in Indira Nagar, Ramanthapur, setting regional standards for cross-ventilation, robust RCC engineering, and Vastu compliance.",
    icon: Building2
  },
  {
    year: "2019",
    title: "Commercial Infrastructure Expansion",
    subtitle: "Retail & Commercial Scale",
    desc: "Expanded capabilities into high-footfall commercial developments, completing the landmark D-Mart facility in Ramanthapur and multi-tenant commercial structures with heavy-duty structural specifications.",
    icon: TrendingUp
  },
  {
    year: "2021",
    title: "Portfolio Diversification Across Hyderabad",
    subtitle: "Multi-Location Execution",
    desc: "Successfully delivered Kesava Residency in Boduppal, Hasini Enclave in Chilakanagar, and Sagar Simha Nilayam in Yapral, alongside custom residential developments.",
    icon: CheckCircle2
  },
  {
    year: "2024 & Beyond",
    title: "13+ Landmarks Delivered & Ongoing Expansion",
    subtitle: "Shaping Hyderabad's Future",
    desc: "13 completed developments with 100% happy families, and 3 active ongoing projects (SSV Padma Heights, SV Heights, and SSV Krishna Heights) across Peerzadiguda, Nagole, and Parvathapur.",
    icon: Milestone
  }
];

export default function AboutMilestonesSection() {
  return (
    <section className="about-milestones-section section-pad" id="milestones">
      <div className="section-kicker"><span>04</span> / OUR JOURNEY</div>

      <div className="section-heading">
        <div>
          <p className="eyebrow">A DECADE OF DELIVERIES</p>
          <h2>Milestones shaped by<br /><em>consistent execution.</em></h2>
        </div>
        <p className="heading-note">
          From our very first residential pour to multi-storey complexes and commercial landmarks across Hyderabad.
        </p>
      </div>

      <div className="milestones-timeline">
        {milestones.map((item, idx) => (
          <div className="milestone-row" key={item.year}>
            <div className="milestone-year-box">
              <span className="milestone-badge-year">{item.year}</span>
              <span className="milestone-bullet">
                <item.icon size={16} className="gold-icon" />
              </span>
            </div>

            <div className="milestone-card">
              <div className="milestone-card-top">
                <span className="milestone-sub">{item.subtitle}</span>
                <span className="milestone-index">0{idx + 1}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
