"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Compass, Home as HomeIcon, Layers3, MessageCircle, Trees } from "lucide-react";

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

function AnimatedServiceIcon({ Icon, delay }: { Icon: typeof HomeIcon; delay: number }) {
  return (
    <motion.span
      className="service-icon"
      animate={{ y: [0, -4, 0], rotate: [0, 2, 0, -2, 0] }}
      transition={{ duration: 3.6, delay, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.16, rotate: 0 }}
    >
      <Icon size={24} strokeWidth={1.35} />
    </motion.span>
  );
}

const services = [
  { n: "01", title: "Independent Houses", text: "Custom homes shaped around client requirements, lifestyle needs and functional spaces.", icon: HomeIcon, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85" },
  { n: "02", title: "Gated Villas", text: "Thoughtfully planned villa communities designed for comfortable residential living.", icon: Trees, image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85" },
  { n: "03", title: "Apartments", text: "Standalone and gated residential and commercial apartment developments.", icon: Building2, image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85" },
  { n: "04", title: "Open Plot Ventures", text: "Developed residential plots for people planning their future homes.", icon: Compass, image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85" },
  { n: "05", title: "Building Materials", text: "Material supply contracts supporting construction requirements.", icon: Layers3, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85" }
];

export default function ExpertiseSection() {
  return (
    <section className="expertise section-pad" id="expertise">
      <div className="section-kicker"><span>02</span> / WHAT WE DO</div>
      <div className="section-heading">
        <Reveal>
          <p className="eyebrow">OUR EXPERTISE</p>
          <h2>Spaces for every<br /><em>way of life.</em></h2>
        </Reveal>
        <Reveal className="heading-note" delay={0.12}>
          From individual homes to larger developments, our work is guided by practical thinking, quality and a commitment to doing things right.
        </Reveal>
      </div>

      <motion.div
        className="service-grid"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {services.map((s, i) => (
          <motion.article className="service-card" key={s.n} variants={fade} whileHover={{ y: -5 }}>
            <div className="service-image" style={{ backgroundImage: `url(${s.image})` }} />
            <div className="service-top">
              <span>{s.n}</span>
              <AnimatedServiceIcon Icon={s.icon} delay={i * 0.25} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <span className="service-line" />
          </motion.article>
        ))}

        <motion.article className="service-card service-card-cta" variants={fade} whileHover={{ y: -5 }}>
          <div
            className="service-image"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1000&q=85')`
            }}
          />
          <div className="service-top">
            <span>06</span>
            <AnimatedServiceIcon Icon={MessageCircle} delay={1.25} />
          </div>
          <div className="service-cta-body">
            <span className="service-cta-tag">PARTNER WITH US</span>
            <h3>Have a Project in Mind?</h3>
            <p>Let&apos;s build your dream property together with engineering precision and transparent execution.</p>
            <a className="service-cta-btn" href="#contact">
              Discuss Your Project <ArrowUpRight size={15} />
            </a>
          </div>
          <span className="service-line" />
        </motion.article>
      </motion.div>
    </section>
  );
}
