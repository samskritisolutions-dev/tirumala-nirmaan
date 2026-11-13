"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", interest: "Residential construction", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0AInterest: ${form.interest}%0AMessage: ${form.message}`;
    window.location.href = `mailto:thirumalacd2010@gmail.com?subject=Website%20Enquiry&body=${body}`;
  };

  return (
    <section className="contact section-pad" id="contact">
      <div className="section-kicker"><span>06</span> / START A CONVERSATION</div>
      <div className="contact-grid">
        <Reveal className="contact-copy">
          <p className="eyebrow">LET&apos;S BUILD SOMETHING MEANINGFUL</p>
          <h2>Your next chapter<br />starts <em>here.</em></h2>
          <p>Have a residential or commercial construction requirement? Connect with our team to discuss your next project.</p>

          <div className="contact-details">
            <a href="tel:+919849306675">
              <Phone size={17} />
              <span><small>CALL US</small>+91 98493 06675</span>
              <ArrowUpRight size={15} />
            </a>
            <a href="mailto:thirumalacd2010@gmail.com">
              <Mail size={17} />
              <span><small>EMAIL US</small>thirumalacd2010@gmail.com</span>
              <ArrowUpRight size={15} />
            </a>
            <div>
              <MapPin size={17} />
              <span>
                <small>VISIT US</small>
                H No. 1-17/2, 4th Floor, above ICICI Bank, near Uppal Depot, Peerzadiguda, Medipally (M), Medchal-Malkajgiri District – 500039.
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <form className="contact-form" onSubmit={submit}>
            <p className="eyebrow">ENQUIRY FORM</p>
            <h3>Tell us what you&apos;re looking for.</h3>

            <label>
              Your name
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your name"
              />
            </label>

            <label>
              Phone number
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 Phone number"
              />
            </label>

            <label>
              I&apos;m interested in
              <select
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
              >
                <option>Residential construction</option>
                <option>Commercial construction</option>
                <option>Independent house</option>
                <option>Villa development</option>
                <option>Open plots</option>
                <option>Other enquiry</option>
              </select>
            </label>

            <label>
              Message
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us a little about your project"
              />
            </label>

            <button className="button button-dark" type="submit">
              Send enquiry <ArrowUpRight size={17} />
            </button>
            <small className="form-note">Your email app will open with the enquiry details ready to send.</small>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
