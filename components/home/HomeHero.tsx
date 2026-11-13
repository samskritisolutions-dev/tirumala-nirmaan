"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="hero" id="top">
      <motion.div
        className="hero-image"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <motion.p
          className="eyebrow light"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          CONSTRUCTION · DEVELOPMENT
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Building trust.<br />
          <em>Creating landmarks.</em>
        </motion.h1>
        <motion.p
          className="hero-copy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          Thoughtfully developed spaces, built on quality, commitment and lasting value.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <a className="button button-gold" href="#projects">
            Explore our work <ArrowUpRight size={17} />
          </a>
          <a className="text-link light-link" href="#about">
            Discover Thirumala <ArrowDown size={15} />
          </a>
        </motion.div>
      </div>
      <div className="hero-bottom">
        <span>DESIGNED FOR LIVING. BUILT TO LAST.</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}
