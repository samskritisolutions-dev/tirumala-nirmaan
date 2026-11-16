"use client";

import { motion } from "framer-motion";
import { Building2, Clock, CheckCircle2, MapPin } from "lucide-react";

const stats = [
  {
    icon: Building2,
    num: "13+",
    label: "Completed Landmarks",
    sub: "Across Hyderabad prime locations"
  },
  {
    icon: Clock,
    num: "03",
    label: "Ongoing Developments",
    sub: "Active residential construction"
  },
  {
    icon: CheckCircle2,
    num: "10+",
    label: "Years of Excellence",
    sub: "Civil engineering-led discipline"
  },
  {
    icon: MapPin,
    num: "100%",
    label: "GHMC & Vastu Compliant",
    sub: "Clear titles & sanctioned plans"
  }
];

export default function ProjectsStatsBar() {
  return (
    <section className="projects-stats-bar-section">
      <div className="projects-stats-container">
        <div className="projects-stats-grid">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className="projects-stat-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                <div className="stat-card-icon-wrap">
                  <Icon size={22} />
                </div>
                <div className="stat-card-body">
                  <strong className="stat-card-num">{item.num}</strong>
                  <span className="stat-card-title">{item.label}</span>
                  <small className="stat-card-sub">{item.sub}</small>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
