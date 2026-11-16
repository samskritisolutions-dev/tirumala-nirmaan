"use client";

import { Award, Briefcase, GraduationCap, Quote, ShieldCheck } from "lucide-react";

export default function AboutLeadershipSection() {
  return (
    <section className="about-leadership-section section-pad" id="leadership">
      <div className="section-kicker"><span>03</span> / EXECUTIVE LEADERSHIP</div>

      <div className="section-heading">
        <div>
          <p className="eyebrow">FOUNDERS &amp; DIRECTORS</p>
          <h2>Civil engineering leadership<br /><em>at the helm.</em></h2>
        </div>
        <p className="heading-note">
          Guided by academic engineering credentials and over a decade of hands-on construction experience across Hyderabad.
        </p>
      </div>

      <div className="about-leadership-grid">
        {/* Founder Card */}
        <div className="leader-profile-card">
          <div className="leader-card-header">
            <div className="leader-badge-pill">
              <GraduationCap size={14} className="gold-icon" />
              <span>B.Tech Civil Engineering</span>
            </div>
            <span className="leader-index-num">01</span>
          </div>

          <div className="leader-bio-wrap">
            <h3 className="leader-name">G V Sudhakara Rao</h3>
            <span className="leader-designation">Founder &amp; Managing Promoter</span>

            <div className="leader-credentials-list">
              <div className="credential-item">
                <GraduationCap size={15} className="gold-icon" />
                <span>Alumnus of Acharya Nagarjuna University</span>
              </div>
              <div className="credential-item">
                <Briefcase size={15} className="gold-icon" />
                <span>15+ Years of Structural Construction &amp; Development</span>
              </div>
              <div className="credential-item">
                <Award size={15} className="gold-icon" />
                <span>Direct Site Supervision on All 13+ Projects</span>
              </div>
            </div>

            <p className="leader-description">
              As a first-generation entrepreneur with a solid foundation in civil engineering, Sudhakara Rao established
              Thirumala Constructions to bring technical rigor and transparent business ethics to Hyderabad&apos;s real estate landscape.
              His direct involvement in every stage—from structural drafting and foundation inspection to final quality checks—has
              earned the firm enduring trust among clients and partners.
            </p>

            <div className="leader-quote-box">
              <Quote size={20} className="gold-icon quote-glyph" />
              <p>
                &ldquo;A building&apos;s true quality is not judged on the day of handover, but ten and twenty years later—in how strong the foundation remains, how well the plaster holds, and how proudly families live inside it.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Co-Promoter Card */}
        <div className="leader-profile-card">
          <div className="leader-card-header">
            <div className="leader-badge-pill">
              <ShieldCheck size={14} className="gold-icon" />
              <span>Operations &amp; Governance</span>
            </div>
            <span className="leader-index-num">02</span>
          </div>

          <div className="leader-bio-wrap">
            <h3 className="leader-name">G Prashanthi</h3>
            <span className="leader-designation">Co-Promoter &amp; Operations Director</span>

            <div className="leader-credentials-list">
              <div className="credential-item">
                <Briefcase size={15} className="gold-icon" />
                <span>Executive Operations &amp; Project Administration</span>
              </div>
              <div className="credential-item">
                <Award size={15} className="gold-icon" />
                <span>Grade-A Material Sourcing &amp; Vendor Management</span>
              </div>
              <div className="credential-item">
                <ShieldCheck size={15} className="gold-icon" />
                <span>Transparent Buyer Communication &amp; Handover Protocol</span>
              </div>
            </div>

            <p className="leader-description">
              G Prashanthi plays a pivotal role in the operational strength, resource allocation, and sustained growth of Thirumala
              Constructions. She oversees procurement of certified construction materials, financial governance, and client relations,
              ensuring that buyers receive transparent updates, clear legal documentation, and attentive support throughout their home-buying journey.
            </p>

            <div className="leader-quote-box">
              <Quote size={20} className="gold-icon quote-glyph" />
              <p>
                &ldquo;Every client entrusts us with their lifetime savings. Our responsibility is to ensure that trust is rewarded with complete clarity, high-grade materials, and on-time delivery.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
