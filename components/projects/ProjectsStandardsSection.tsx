"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Compass, HardHat, FileCheck } from "lucide-react";

const standards = [
  {
    icon: HardHat,
    title: "Civil Engineering Rigor",
    desc: "Every project is supervised directly by promoter G V Sudhakara Rao, B.Tech (Civil), ensuring high-grade cement, tested steel and seismic design standards."
  },
  {
    icon: Compass,
    title: "100% Vastu Compliance",
    desc: "Optimal alignment for natural cross-ventilation, ample sunlight, and strict adherence to traditional Vastu Shastra principles for family prosperity."
  },
  {
    icon: FileCheck,
    title: "Clear Titles & Approvals",
    desc: "Legally verified documentation, GHMC / HMDA sanctioned building layouts, and strict regulatory compliance from foundation to completion."
  },
  {
    icon: ShieldCheck,
    title: "Timely Handover Commitment",
    desc: "A proven decade-long track record of delivering 13+ residential and commercial landmarks on time without compromising finish or safety."
  }
];

export default function ProjectsStandardsSection() {
  return (
    <section className="projects-standards-section">
      <div className="section-container">
        <div className="standards-heading-center">
          <span className="section-tag-gold">UNCOMPROMISING QUALITY</span>
          <h2 className="section-title-large">
            The Thirumala <em>Standard</em>
          </h2>
          <p className="section-desc-center">
            Every square foot is engineered with certified materials, disciplined structural practices, and genuine accountability.
          </p>
        </div>

        <div className="standards-grid-four">
          {standards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="standard-feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <div className="standard-icon-circle">
                  <Icon size={24} />
                </div>
                <h3 className="standard-card-title">{item.title}</h3>
                <p className="standard-card-desc">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
