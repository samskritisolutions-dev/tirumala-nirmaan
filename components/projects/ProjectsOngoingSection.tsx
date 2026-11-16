"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, Hammer } from "lucide-react";

const ongoingProjects = [
  {
    name: "SSV Padma Heights",
    location: "Peerzadiguda, Hyderabad",
    tagline: "Exclusive 2 & 3 BHK residences with stilt parking and earthquake-resistant framework.",
    image: "/projects/image7.jpg",
    slug: "ssv-padma-heights",
    floors: "Stilt + 5 Floors",
    units: "20 Units",
    progress: "Super Structure In Progress"
  },
  {
    name: "SV Heights",
    location: "Nagole, Hyderabad",
    tagline: "Modern apartments offering seamless connectivity to metro rail and outer ring road.",
    image: "/projects/image10.jpg",
    slug: "sv-heights",
    floors: "Stilt + 5 Floors",
    units: "15 Units",
    progress: "Finishing & Brickwork"
  },
  {
    name: "SSV Krishna Heights",
    location: "Parvathapur, Peerzadiguda",
    tagline: "Spacious homes with 100% Vastu compliance, natural daylight and quality joinery.",
    image: "/projects/image3.jpg",
    slug: "ssv-krishna-heights",
    floors: "Stilt + 5 Floors",
    units: "25 Units",
    progress: "Brick Masonry & Electrical"
  }
];

export default function ProjectsOngoingSection() {
  return (
    <section className="projects-ongoing-section" id="ongoing">
      <div className="section-container">
        <div className="ongoing-section-header">
          <div className="ongoing-header-left">
            <span className="section-tag-gold">
              <Hammer size={13} />
              IN THE MAKING
            </span>
            <h2 className="section-title-large">
              Ongoing <em>Developments</em>
            </h2>
            <p className="section-desc">
              Current residential landmarks under active construction across Peerzadiguda, Nagole, and Parvathapur.
            </p>
          </div>
          <span className="ongoing-count-badge">03 SITES ACTIVE</span>
        </div>

        <div className="ongoing-cards-grid">
          {ongoingProjects.map((proj, idx) => (
            <motion.article
              key={proj.slug}
              className="ongoing-feature-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.45 }}
            >
              <Link href={`/projects/${proj.slug}`} className="ongoing-card-inner">
                <div
                  className="ongoing-card-bg"
                  style={{ backgroundImage: `url(${proj.image})` }}
                >
                  <div className="ongoing-card-shade" />
                </div>

                <div className="ongoing-card-content">
                  <div className="ongoing-card-top">
                    <span className="ongoing-status-tag">UNDER CONSTRUCTION</span>
                    <span className="ongoing-progress-note">{proj.progress}</span>
                  </div>

                  <div className="ongoing-card-bottom">
                    <h3 className="ongoing-card-title">{proj.name}</h3>
                    <p className="ongoing-card-location">
                      <MapPin size={14} />
                      {proj.location}
                    </p>
                    <p className="ongoing-card-desc">{proj.tagline}</p>

                    <div className="ongoing-card-cta-row">
                      <span className="ongoing-specs-text">{proj.floors} · {proj.units}</span>
                      <span className="ongoing-cta-btn">
                        Explore <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
