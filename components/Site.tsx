"use client";

import { MotionConfig } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import HomeHero from "@/components/home/HomeHero";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import StatementSection from "@/components/home/StatementSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";

export default function Site() {
  return (
    <MotionConfig reducedMotion="user">
      <main>
        <Header />
        <HomeHero />
        <StatsSection />
        <AboutSection />
        <ExpertiseSection />
        <StatementSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
