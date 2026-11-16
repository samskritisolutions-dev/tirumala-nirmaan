"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import AboutHero from "@/components/about/AboutHero";
import AboutStorySection from "@/components/about/AboutStorySection";
import AboutPillarsSection from "@/components/about/AboutPillarsSection";
import AboutLeadershipSection from "@/components/about/AboutLeadershipSection";
import AboutMilestonesSection from "@/components/about/AboutMilestonesSection";
import AboutStandardsSection from "@/components/about/AboutStandardsSection";
import AboutCtaSection from "@/components/about/AboutCtaSection";

export default function AboutPageView() {
  return (
    <div className="about-page">
      {/* Shared Modular Header */}
      <Header activeNav="about" />

      <main>
        {/* About Hero with Breadcrumb Navigation */}
        <AboutHero />

        {/* Founding Story & Vision */}
        <AboutStorySection />

        {/* The 4 Core Practice Pillars */}
        <AboutPillarsSection />

        {/* Executive Leadership & Director Profiles */}
        <AboutLeadershipSection />

        {/* Milestones & Journey Timeline */}
        <AboutMilestonesSection />

        {/* Construction Standards & Materials Benchmarks */}
        <AboutStandardsSection />

        {/* Direct Developer Engagement CTA */}
        <AboutCtaSection />
      </main>

      {/* Shared Modular Footer */}
      <Footer />

      {/* Floating Scroll To Top with Progress Ring */}
      <ScrollToTop />
    </div>
  );
}
