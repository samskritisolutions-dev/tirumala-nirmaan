"use client";

import Link from "next/link";
import { Phone, Mail, ArrowUpRight, Calendar, MapPin } from "lucide-react";

export default function ProjectsCtaSection() {
  return (
    <section className="projects-cta-section">
      <div className="section-container">
        <div className="projects-cta-card">
          <div className="projects-cta-content">
            <span className="projects-cta-tag">PLAN YOUR VISIT</span>
            <h2 className="projects-cta-title">
              Ready to experience our <em>developments in person?</em>
            </h2>
            <p className="projects-cta-desc">
              Whether you are looking for an ongoing 2 or 3 BHK flat, a custom independent house, or a commercial space in Hyderabad, our engineering team is ready to guide you on-site.
            </p>

            <div className="projects-cta-actions">
              <a
                href="tel:+919849306675"
                className="button button-gold cta-action-btn"
              >
                <Phone size={17} />
                Call +91 98493 06675
              </a>
              <a
                href="mailto:thirumalacd2010@gmail.com?subject=Enquiry%20regarding%20Thirumala%20Projects"
                className="button button-outline-light cta-action-btn"
              >
                <Mail size={17} />
                Email Our Team
              </a>
              <Link href="/#contact" className="button button-dark cta-action-btn">
                <span>Book Site Visit</span>
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="projects-cta-location-box">
            <div className="location-box-inner">
              <MapPin size={22} className="gold-icon" />
              <h4>Head Office & Experience Desk</h4>
              <p>
                H No. 1-17/2, 4th Floor, above ICICI Bank, near Uppal Depot, Peerzadiguda, Medipally (M), Hyderabad – 500039.
              </p>
              <div className="location-timings">
                <Calendar size={14} />
                <span>Mon – Sat: 9:30 AM – 7:30 PM | Sunday by Appointment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
