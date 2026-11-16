"use client";

import Link from "next/link";

export default function ProjectsHero() {
  return (
    <section className="about-breadcrumb-banner projects-breadcrumb-banner">
      <div className="about-banner-bg projects-banner-bg" />
      <div className="about-banner-overlay projects-banner-overlay" />
      <div className="about-banner-content">
        <h1 className="about-banner-title">Our Projects</h1>
        <nav className="about-banner-breadcrumb" aria-label="Breadcrumb">
          <Link href="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-slash">/</span>
          <span className="breadcrumb-current" aria-current="page">Projects</span>
        </nav>
      </div>
    </section>
  );
}
