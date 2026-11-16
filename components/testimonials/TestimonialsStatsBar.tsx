"use client";

import { motion } from "framer-motion";
import { Star, Users, ShieldCheck, Award } from "lucide-react";

const stats = [
  {
    icon: Star,
    num: "4.9 / 5",
    label: "Client Satisfaction Rating",
    sub: "Based on 150+ delivered homes"
  },
  {
    icon: Users,
    num: "150+",
    label: "Families Housed",
    sub: "Across Hyderabad prime localities"
  },
  {
    icon: ShieldCheck,
    num: "100%",
    label: "Clear Legal Titles",
    sub: "Zero litigation in 10+ years"
  },
  {
    icon: Award,
    num: "10+ Yrs",
    label: "On-Time Delivery",
    sub: "Accountable promoter oversight"
  }
];

export default function TestimonialsStatsBar() {
  return (
    <section className="testimonials-stats-bar-section">
      <div className="section-container">
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
