"use client";

import { motion } from "framer-motion";
import { HardHat, Compass, FileCheck, Banknote } from "lucide-react";

const visitSteps = [
  {
    step: "01",
    icon: Compass,
    title: "Vastu & Layout Orientation",
    desc: "Detailed review of floor plans, spatial circulation, natural airflow, and cardinal directional alignment for optimal living harmony."
  },
  {
    step: "02",
    icon: HardHat,
    title: "Structural Rigor Inspection",
    desc: "Inspect live column curing, red brick masonry, seismic framing, and certified laboratory test reports for rebar and cement."
  },
  {
    step: "03",
    icon: FileCheck,
    title: "100% Legal Title Verification",
    desc: "Direct verification of 30+ year link documents, sanctioned GHMC / HMDA municipal plans, and zero-encumbrance certificates."
  },
  {
    step: "04",
    icon: Banknote,
    title: "Transparent Financial Plan",
    desc: "Clear milestone-linked construction payment schedules with no hidden charges, backed by leading bank loan approvals."
  }
];

export default function ContactVisitGuide() {
  return (
    <section className="contact-visit-guide-section">
      <div className="section-container">
        <div className="section-header-centered">
          <span className="section-tag-gold">PERSONALIZED CONSULTATION</span>
          <h2 className="section-title-large">
            What to Expect During Your <em>Site Consultation</em>
          </h2>
          <p className="section-desc-center">
            We believe an informed homebuyer is our best customer. Here is what you experience when you visit our developments.
          </p>
        </div>

        <div className="visit-steps-grid">
          {visitSteps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                className="visit-step-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                <div className="visit-step-top">
                  <span className="visit-step-num">{s.step}</span>
                  <div className="visit-step-icon">
                    <Icon size={20} />
                  </div>
                </div>
                <h3 className="visit-step-title">{s.title}</h3>
                <p className="visit-step-desc">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
