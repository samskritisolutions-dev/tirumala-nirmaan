"use client";

import { motion } from "framer-motion";
import { Clock, Handshake, BadgeCheck, ShieldCheck, HeartHandshake, Users, Check } from "lucide-react";

const brandValues = [
  {
    title: "Punctuality",
    text: "We honour the timelines we commit to.",
    icon: Clock
  },
  {
    title: "Commitment",
    text: "We stay accountable from start to handover.",
    icon: Handshake
  },
  {
    title: "Honesty",
    text: "We communicate openly at every stage.",
    icon: BadgeCheck
  },
  {
    title: "Trust",
    text: "We build relationships that last beyond delivery.",
    icon: ShieldCheck
  },
  {
    title: "Courage",
    text: "We take on challenges with practical confidence.",
    icon: HeartHandshake
  },
  {
    title: "Respect",
    text: "We value every client, team and community.",
    icon: Users
  }
];

export default function TestimonialsValuesSection() {
  return (
    <section className="testimonials-values-section">
      <div className="section-container">
        <div className="section-header-centered">
          <span className="section-tag-gold">CORE PRACTICE PRINCIPLES</span>
          <h2 className="section-title-large">
            The Values Behind <em>Every Handover</em>
          </h2>
          <p className="section-desc-center">
            Our reputation has been built over a decade on six non-negotiable professional principles that guide every interaction with our homeowners.
          </p>
        </div>

        <div className="values-horizontal-strip">
          {brandValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                className="value-strip-item"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                <div className="value-strip-head">
                  <div className="value-strip-icon">
                    <Icon size={20} />
                  </div>
                  {idx < brandValues.length - 1 && (
                    <span className="value-strip-tick" aria-hidden="true">
                      <Check size={14} />
                    </span>
                  )}
                </div>
                <h3 className="value-strip-title">{val.title}</h3>
                <p className="value-strip-desc">{val.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
