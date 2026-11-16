"use client";

import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="about-breadcrumb-banner">
      <div className="about-banner-bg" />
      <div className="about-banner-overlay" />
      <div className="about-banner-content">
        <h1 className="about-banner-title">About Us</h1>
        <nav className="about-banner-breadcrumb" aria-label="Breadcrumb">
          <Link href="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-slash">/</span>
          <span className="breadcrumb-current" aria-current="page">About Us</span>
        </nav>
      </div>
    </section>
  );
}
