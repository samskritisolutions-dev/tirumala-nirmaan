"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

const completed = [
  ["Thirumala Towers", "Indira Nagar, Ramanthapur", "Residential"],
  ["D-Mart", "Ramanthapur", "Commercial"],
  ["Thirumala Apartments", "Balaji Hills, Boduppal", "Residential"],
  ["Thirumala Towers", "Medipally", "Residential"],
  ["Thirumala Towers", "Boduppal", "Residential"],
  ["Hasini Enclave", "Chilakanagar, Boduppal", "Residential"],
  ["Kesava Residency", "Boduppal", "Residential"],
  ["Sagar Simha Nilayam", "Yapral", "Residential"],
  ["Thirumala Residency", "Chilakanagar, Boduppal", "Residential"],
  ["Thirumala Heights", "Swaroop Nagar, Uppal", "Residential"],
  ["60 Independent Houses", "Balaji Hills & Rajeshekar Colony", "Independent homes"],
  ["SV’s Manik Arcade", "Bulkampet, Ameerpet", "Commercial"],
  ["Kesava Residency", "Near NTR Statue, Boduppal", "Residential"]
];

const ongoing = [
  ["SSV Padma Heights", "Peerzadiguda", "/projects/image7.jpg", "thirumala-apartments"],
  ["SV Heights", "Nagole", "/projects/image10.jpg", "sv-heights"],
  ["SSV Krishna Heights", "Parvathapur, Peerzadiguda", "/projects/image3.jpg", "kesava-residency"]
];

const featuredProjects = [
  { name: "Thirumala Towers", location: "Indira Nagar, Ramanthapur", type: "Residential", image: "/projects/image1.jpg", featured: true, slug: "thirumala-towers" },
  { name: "SV's Manik Arcade", location: "Bulkampet, Ameerpet", type: "Commercial", image: "/projects/image8.jpg", slug: "svs-manik-arcade" },
  { name: "Thirumala Apartments", location: "Balaji Hills, Boduppal", type: "Residential", image: "/projects/image5.jpg", slug: "thirumala-apartments" },
  { name: "Kesava Residency", location: "Boduppal", type: "Residential", image: "/projects/image6.jpg", slug: "kesava-residency" }
];

export default function ProjectsSection() {
  return (
    <section className="projects section-pad" id="projects">
      <div className="section-kicker"><span>04</span> / OUR WORK</div>
      <div className="section-heading">
        <Reveal>
          <p className="eyebrow">A GROWING PORTFOLIO</p>
          <h2>Built across<br /><em>Hyderabad.</em></h2>
        </Reveal>
        <Reveal className="heading-note" delay={0.12}>
          A track record of residential and commercial developments across Uppal, Boduppal, Ramanthapur, Medipally, Yapral and Ameerpet.
        </Reveal>
      </div>

      <Reveal className="project-toolbar">
        <span>SELECTED COMPLETED PROJECTS</span>
        <span>13 PROJECTS</span>
      </Reveal>

      <motion.div
        className="project-gallery"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {featuredProjects.map((project, i) => (
          <motion.article
            className={`project-tile ${project.featured ? "project-tile-featured" : ""}`}
            key={project.name}
            variants={fade}
            whileHover={{ y: -6 }}
          >
            <Link href={`/projects/${project.slug}`} className="project-tile-link">
              <div className="project-tile-image" style={{ backgroundImage: `url(${project.image})` }} />
              <div className="project-tile-overlay" />
              <div className="project-tile-copy">
                <span>0{i + 1} / {project.type}</span>
                <h3>{project.name}</h3>
                <p><MapPin size={13} />{project.location}</p>
              </div>
              <ArrowUpRight className="project-tile-arrow" size={19} />
            </Link>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        className="project-directory"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        {completed.map(([name, location, type], i) => (
          <motion.div className="project-directory-row" key={`${name}-${i}`} variants={fade}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <strong>{name}</strong>
            <em>{type}</em>
            <small>{location}</small>
          </motion.div>
        ))}
      </motion.div>

      <Reveal className="ongoing-head">
        <div>
          <p className="eyebrow">IN PROGRESS</p>
          <h2>Looking <em>ahead.</em></h2>
        </div>
        <span>03 ONGOING PROJECTS</span>
      </Reveal>

      <motion.div
        className="ongoing-grid"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {ongoing.map(([name, location, image, slug], i) => (
          <motion.article className="ongoing-card" key={name} variants={fade} whileHover={{ y: -5 }}>
            <Link href={`/projects/${slug}`} className="ongoing-card-link">
              <div className="ongoing-image" style={{ backgroundImage: `url(${image})` }} />
              <div className="ongoing-content">
                <span>0{i + 1} / ONGOING</span>
                <h3>{name}</h3>
                <p><MapPin size={14} />{location}</p>
              </div>
              <div className="ongoing-rule" />
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
