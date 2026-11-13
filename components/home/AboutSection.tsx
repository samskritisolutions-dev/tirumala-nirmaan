"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

export default function AboutSection() {
  return (
    <section className="about section-pad" id="about">
      <div className="section-kicker"><span>01</span> / WHO WE ARE</div>
      <div className="about-grid">
        <Reveal>
          <p className="eyebrow">A FOUNDATION OF TRUST</p>
          <h2>We build more<br />than <em>structures.</em></h2>
        </Reveal>
        <Reveal className="about-copy" delay={0.12}>
          <p className="lead">We build relationships, communities and places people are proud to call their own.</p>
          <p>
            Thirumala Constructions & Developers is a Hyderabad-based construction and real estate development company
            promoted by G V Sudhakara Rao and G Prashanthi. The company undertakes residential, commercial, retail, villa and
            hospitality developments.
          </p>
          <p>
            Backed by experienced professionals and technically qualified teams, we focus on quality construction,
            cost-effective ideas and optimum use of resources.
          </p>
          <a className="text-link" href="#contact">
            Get to know us <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>

      <motion.div
        className="leadership"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="leader-card" variants={fade}>
          <span className="leader-index">LEADERSHIP / 01</span>
          <h3>G V Sudhakara Rao</h3>
          <span className="leader-role">Founder & Promoter</span>
          <p>
            A civil engineering graduate from Acharya Nagarjuna University and a first-generation entrepreneur,
            bringing a decade of construction experience across Hyderabad.
          </p>
        </motion.div>

        <motion.div className="leader-card" variants={fade}>
          <span className="leader-index">LEADERSHIP / 02</span>
          <h3>G Prashanthi</h3>
          <span className="leader-role">Co-Promoter</span>
          <p>Continuously supporting the company&apos;s development and operations.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
