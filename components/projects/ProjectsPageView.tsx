"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsStatsBar from "@/components/projects/ProjectsStatsBar";
import ProjectsOngoingSection from "@/components/projects/ProjectsOngoingSection";
import ProjectsFilterGrid from "@/components/projects/ProjectsFilterGrid";
import ProjectsArchiveSection from "@/components/projects/ProjectsArchiveSection";
import ProjectsStandardsSection from "@/components/projects/ProjectsStandardsSection";
import ProjectsCtaSection from "@/components/projects/ProjectsCtaSection";

export default function ProjectsPageView() {
  return (
    <div className="projects-page">
      {/* Shared Modular Header */}
      <Header activeNav="projects" />

      <main>
        {/* Projects Breadcrumb Banner matching About page */}
        <ProjectsHero />

        {/* Ongoing Developments in Peerzadiguda, Nagole & Parvathapur */}
        <ProjectsOngoingSection />

        {/* Portfolio Stats & Overview Strip */}
        <ProjectsStatsBar />

        {/* Filterable Portfolio Grid (Ongoing, Completed, Residential, Commercial) */}
        <ProjectsFilterGrid />

        {/* Complete Archive & Delivered Directory of all 13+ Projects */}
        <ProjectsArchiveSection />

        {/* Construction Benchmarks & Engineering Standards */}
        <ProjectsStandardsSection />

        {/* Schedule a Site Visit / Consultation CTA */}
        <ProjectsCtaSection />
      </main>

      {/* Shared Modular Footer */}
      <Footer />

      {/* Floating Scroll To Top */}
      <ScrollToTop />
    </div>
  );
}
