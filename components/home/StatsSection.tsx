"use client";

import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

export default function StatsSection() {
  return (
    <motion.section
      className="stats"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div className="stats-intro" variants={fade}>
        <span className="eyebrow">OUR JOURNEY IN NUMBERS</span>
        <p>Experience measured in <br /> every space we build.</p>
      </motion.div>
      <motion.div className="stat" variants={fade}>
        <strong>10<span>+</span></strong>
        <small>Years of experience</small>
      </motion.div>
      <motion.div className="stat" variants={fade}>
        <strong>13</strong>
        <small>Completed projects</small>
      </motion.div>
      <motion.div className="stat" variants={fade}>
        <strong>03</strong>
        <small>Ongoing projects</small>
      </motion.div>
    </motion.section>
  );
}
