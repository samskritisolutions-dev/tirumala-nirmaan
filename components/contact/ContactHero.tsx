"use client";

import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="about-breadcrumb-banner contact-breadcrumb-banner">
      <div className="about-banner-bg contact-banner-bg" />
      <div className="about-banner-overlay contact-banner-overlay" />
      <div className="about-banner-content">
        <h1 className="about-banner-title">Contact Us</h1>
        <nav className="about-banner-breadcrumb" aria-label="Breadcrumb">
          <Link href="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-slash">/</span>
          <span className="breadcrumb-current" aria-current="page">Contact Us</span>
        </nav>
      </div>
    </section>
  );
}
