"use client";

import Link from "next/link";
import { Phone, Mail, ArrowUpRight, MessageCircle } from "lucide-react";

export default function TestimonialsCtaSection() {
  return (
    <section className="testimonials-cta-section">
      <div className="section-container">
        <div className="testimonials-cta-card">
          <div className="testimonials-cta-body">
            <span className="section-tag-gold" style={{ color: "#e2c28b" }}>
              JOIN OVER 150+ HYDERABAD FAMILIES
            </span>
            <h2 className="section-title-large" style={{ color: "#ffffff" }}>
              Experience the peace of mind of an <em>engineered home.</em>
            </h2>
            <p className="testimonials-cta-desc">
              Schedule a personalized site consultation or discuss your dream residential or commercial project directly with our promoters.
            </p>

            <div className="testimonials-cta-buttons">
              <a
                href="tel:+919849306675"
                className="button button-gold cta-action-btn"
              >
                <Phone size={17} />
                Call +91 98493 06675
              </a>
              <a
                href="https://wa.me/919849306675?text=Hello%20Thirumala%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20projects"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-outline-light cta-action-btn"
              >
                <MessageCircle size={17} />
                Chat on WhatsApp
              </a>
              <Link href="/projects" className="button button-dark cta-action-btn">
                <span>View All Projects</span>
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
