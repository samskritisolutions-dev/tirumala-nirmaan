"use client";

import { Check, Compass, HardHat, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function AboutStorySection() {
  return (
    <section className="about-story-section section-pad" id="story">
      <div className="section-kicker"><span>01</span> / OUR STORY &amp; VISION</div>

      <div className="about-story-grid">
        <div className="about-story-left">
          <p className="eyebrow">FOUNDED ON INTEGRITY</p>
          <h2>A decade of building with<br /><em>purpose &amp; pride.</em></h2>

          <div className="story-lead-card">
            <div className="quote-bar" />
            <p className="quote-text">
              &ldquo;We don&apos;t just construct concrete frames. We create spaces where families live with peace of mind,
              where every wall, foundation, and finishing detail reflects uncompromising engineering discipline.&rdquo;
            </p>
          </div>

          <div className="about-story-text">
            <p>
              Thirumala Constructions &amp; Developers was founded by <strong>G V Sudhakara Rao</strong>, a civil engineering
              graduate from Acharya Nagarjuna University, alongside co-promoter <strong>G Prashanthi</strong>. Rooted in Hyderabad,
              the company emerged from a clear vision: to bridge the gap between architectural ambition and reliable structural execution.
            </p>
            <p>
              Over the past decade, our journey has been defined by steady, quality-first expansion. We began with thoughtfully planned
              residential communities in Boduppal and Balaji Hills, and have progressively expanded into high-traffic commercial hubs
              such as the D-Mart infrastructure in Ramanthapur and SV&apos;s Manik Arcade in Ameerpet.
            </p>
            <p>
              Unlike mass volume builders who delegate critical milestones entirely to subcontractors, Thirumala maintains direct promoter supervision
              on every project site. From soil bearing capacity evaluations and concrete slump tests to structural curing periods and MEP ducting, our
              engineering leadership remains directly involved.
            </p>
          </div>

          <div className="story-key-commitments">
            <div className="commitment-pill">
              <Check size={15} className="gold-icon" />
              <span>Direct Civil Engineering Promoter Oversight</span>
            </div>
            <div className="commitment-pill">
              <Check size={15} className="gold-icon" />
              <span>100% Clear Title &amp; RERA/GHMC Compliance</span>
            </div>
            <div className="commitment-pill">
              <Check size={15} className="gold-icon" />
              <span>Zero Common Walls on Selected Residential Layouts</span>
            </div>
          </div>
        </div>

        <div className="about-story-right">
          <div className="about-visual-card">
            <div
              className="about-visual-image"
              style={{ backgroundImage: "url('/projects/image1.jpg')" }}
            />
            <div className="about-visual-overlay" />
            <div className="about-experience-badge">
              <strong>10+</strong>
              <span>Years of Hyderabad Construction Leadership</span>
            </div>
          </div>

          <div className="about-promoter-seal">
            <div className="seal-icon-box">
              <HardHat size={24} className="gold-icon" />
            </div>
            <div className="seal-details">
              <h4>Engineering-First Heritage</h4>
              <p>
                Every project is supervised by qualified civil engineering graduates, adhering strictly to Indian Standards (IS) codes for seismic and structural safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
