"use client";

import Link from "next/link";

export default function TestimonialsHero() {
  return (
    <section className="about-breadcrumb-banner testimonials-breadcrumb-banner">
      <div className="about-banner-bg testimonials-banner-bg" />
      <div className="about-banner-overlay testimonials-banner-overlay" />
      <div className="about-banner-content">
        <h1 className="about-banner-title">Client Testimonials</h1>
        <nav className="about-banner-breadcrumb" aria-label="Breadcrumb">
          <Link href="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-slash">/</span>
          <span className="breadcrumb-current" aria-current="page">Testimonials</span>
        </nav>
      </div>
    </section>
  );
}
