"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Clock, MapPin, ShieldCheck, Phone, Mail } from "lucide-react";

export default function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Ongoing Residential Projects (2 & 3 BHK)",
    consultationMode: "Site Visit & Inspection",
    preferredDate: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AInterest: ${form.interest}%0AConsultation Mode: ${form.consultationMode}%0APreferred Date: ${form.preferredDate}%0AMessage: ${form.message}`;
    window.location.href = `mailto:thirumalacd2010@gmail.com?subject=New%20Project%20Enquiry%20from%20${encodeURIComponent(form.name)}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="contact-main-section" id="enquiry">
      <div className="section-container">
        <div className="contact-layout-grid">
          {/* Left Column: Direct Consultation Context */}
          <div className="contact-left-info">
            <span className="section-tag-gold">CONNECT WITH US</span>
            <h2 className="section-title-large">
              Let&apos;s discuss your <em>next landmark.</em>
            </h2>
            <p className="section-desc">
              Whether you are planning to purchase a new 2 or 3 BHK flat, construct a bespoke independent house, or explore a joint-development venture, our promoters and engineering team are available for direct consultation.
            </p>

            <div className="contact-commitments-box">
              <div className="commitment-item">
                <div className="commitment-icon">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <strong>Direct Promoter Interaction</strong>
                  <p>Engage directly with G V Sudhakara Rao, B.Tech (Civil), for authentic technical and pricing transparency.</p>
                </div>
              </div>

              <div className="commitment-item">
                <div className="commitment-icon">
                  <Clock size={18} />
                </div>
                <div>
                  <strong>Guaranteed Prompt Response</strong>
                  <p>Our team responds to all site visit requests and project enquiries within 2 hours during business hours.</p>
                </div>
              </div>

              <div className="commitment-item">
                <div className="commitment-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <strong>Accompanied Site Tours</strong>
                  <p>Personalized walk-throughs of our ongoing projects in Peerzadiguda, Nagole, and Parvathapur.</p>
                </div>
              </div>
            </div>

            <div className="direct-contact-strip">
              <a href="tel:+919849306675" className="strip-link">
                <Phone size={16} />
                <span>+91 98493 06675</span>
              </a>
              <span className="strip-sep">•</span>
              <a href="mailto:thirumalacd2010@gmail.com" className="strip-link">
                <Mail size={16} />
                <span>thirumalacd2010@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact & Visit Form */}
          <div className="contact-right-form-wrap">
            <div className="contact-form-card">
              {submitted ? (
                <div className="contact-success-state">
                  <div className="success-icon-badge">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3>Thank you for reaching out!</h3>
                  <p>
                    Your enquiry has been prepared. Our civil engineering and sales team will connect with you shortly at <strong>{form.phone}</strong>.
                  </p>
                  <button
                    type="button"
                    className="button button-gold"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <>
                  <div className="form-card-header">
                    <span className="form-eyebrow">ENQUIRY & SITE VISIT</span>
                    <h3>Send a message to our team</h3>
                    <p>Fill out the form below and we will get back to you promptly.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="custom-contact-form">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                      />
                    </div>

                    <div className="form-row-two">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                          id="phone"
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 98490 XXXXX"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="name@gmail.com"
                        />
                      </div>
                    </div>

                    <div className="form-row-two">
                      <div className="form-group">
                        <label htmlFor="interest">Area of Interest</label>
                        <select
                          id="interest"
                          value={form.interest}
                          onChange={(e) => setForm({ ...form, interest: e.target.value })}
                        >
                          <option>Ongoing Residential Projects (2 & 3 BHK)</option>
                          <option>SSV Padma Heights (Peerzadiguda)</option>
                          <option>SV Heights (Nagole)</option>
                          <option>SSV Krishna Heights (Parvathapur)</option>
                          <option>Custom Independent House Construction</option>
                          <option>Commercial Property / Space</option>
                          <option>Joint Venture / Land Development</option>
                          <option>General Enquiry</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="consultationMode">Consultation Mode</label>
                        <select
                          id="consultationMode"
                          value={form.consultationMode}
                          onChange={(e) => setForm({ ...form, consultationMode: e.target.value })}
                        >
                          <option>Site Visit & Inspection</option>
                          <option>Office Meeting at Peerzadiguda</option>
                          <option>Phone / WhatsApp Call</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="preferredDate">Preferred Visit Date (Optional)</label>
                      <input
                        id="preferredDate"
                        type="date"
                        value={form.preferredDate}
                        onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Your Message or Requirements</label>
                      <textarea
                        id="message"
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your space requirements, budget, or preferred project..."
                      />
                    </div>

                    <button type="submit" className="button button-gold form-submit-btn">
                      Submit Enquiry <ArrowUpRight size={17} />
                    </button>
                    <small className="form-footnote">
                      Your enquiry opens directly in your email client addressed to thirumalacd2010@gmail.com.
                    </small>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
