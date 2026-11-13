"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Check, Clock3, Handshake, HeartHandshake, ShieldCheck, Users } from "lucide-react";

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

const values = [
  { title: "Punctuality", text: "We honour the timelines we commit to.", icon: Clock3 },
  { title: "Commitment", text: "We stay accountable from start to handover.", icon: Handshake },
  { title: "Honesty", text: "We communicate openly at every stage.", icon: BadgeCheck },
  { title: "Trust", text: "We build relationships that last beyond delivery.", icon: ShieldCheck },
  { title: "Courage", text: "We take on challenges with practical confidence.", icon: HeartHandshake },
  { title: "Respect", text: "We value every client, team and community.", icon: Users }
];

export default function StatementSection() {
  return (
    <>
      <section className="statement">
        <motion.div
          className="statement-image"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        />
        <div className="statement-shade" />
        <Reveal className="statement-content">
          <p className="eyebrow light">OUR PROMISE</p>
          <h2>Quality is not an extra.<br /><em>It is the foundation.</em></h2>
          <p>Our mission is to deliver work of international-standard quality within the committed timeline.</p>
          <a className="text-link light-link" href="#contact">
            Build with us <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </section>

      <section className="principles section-pad">
        <div className="section-kicker"><span>03</span> / WHAT GUIDES US</div>
        <div className="principles-grid">
          <Reveal>
            <p className="eyebrow">OUR VISION</p>
            <h2>Setting a benchmark<br />in <em>development.</em></h2>
            <p>To become a benchmark civil contractor and real estate developer in buildings, roads and industries, including commercial complexes, residential apartments and villas.</p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="eyebrow">OUR QUALITY POLICY</p>
            <h2>Right people.<br /><em>Right work.</em></h2>
            <p>Trained, committed people, suitable materials and honest value for money — with every job done right the first time.</p>
          </Reveal>
        </div>

        <Reveal className="principles-feature">
          <div className="principles-image" />
          <div className="principles-feature-copy">
            <p className="eyebrow">HOW WE WORK</p>
            <h3>Every detail<br />has a <em>purpose.</em></h3>
            <p>From first conversation to final handover, our teams bring care, clarity and accountability to every stage of the build.</p>
            <div className="principles-promises">
              <span><Check size={15} /> Clear communication</span>
              <span><Check size={15} /> Quality-led execution</span>
              <span><Check size={15} /> On-time delivery</span>
            </div>
          </div>
        </Reveal>

        <motion.div
          className="values"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="eyebrow">OUR VALUES</span>
          {values.map((value, i) => (
            <motion.div className="value" key={value.title} variants={fade} whileHover={{ y: -5 }}>
              <div className="value-top">
                <span>0{i + 1}</span>
                <motion.span
                  className="value-icon"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2.8, delay: i * 0.16, repeat: Infinity, ease: "easeInOut" }}
                >
                  <value.icon size={18} />
                </motion.span>
              </div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
              <Check className="value-check" size={15} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
