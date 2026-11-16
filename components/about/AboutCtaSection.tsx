"use client";

import Link from "next/link";
import { ArrowUpRight, FileText, MessageCircle, Phone } from "lucide-react";

export default function AboutCtaSection() {
  const whatsappUrl = `https://wa.me/919849306675?text=${encodeURIComponent(
    "Hello Thirumala Constructions team, I would like to enquire about your projects and development opportunities."
  )}`;

  return (
    <section className="about-cta-section section-pad" id="contact-cta">
      <div className="about-cta-card">
        <div className="about-cta-content">
          <p className="eyebrow light">DIRECT DEVELOPER ENGAGEMENT</p>
          <h2>
            Looking to build your dream home or<br />
            <em>explore a development partnership?</em>
          </h2>
          <p className="about-cta-desc">
            Speak directly with our founder, civil engineer G V Sudhakara Rao, and our technical execution team.
            Whether you are evaluating residential apartments, looking for commercial spaces, or discussing joint venture developments, we welcome your inquiry.
          </p>

          <div className="about-cta-contacts">
            <a href="tel:+919849306675" className="contact-pill">
              <Phone size={16} />
              <span>+91 98493 06675</span>
            </a>
            <a href="mailto:thirumalacd2010@gmail.com" className="contact-pill">
              <FileText size={16} />
              <span>thirumalacd2010@gmail.com</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill whatsapp-pill"
            >
              <MessageCircle size={16} />
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>

          <div className="about-cta-actions">
            <Link href="/#projects" className="button button-gold">
              View Our Completed &amp; Ongoing Projects <ArrowUpRight size={16} />
            </Link>
            <Link href="/#contact" className="button button-glass">
              Send an Enquiry Form <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
