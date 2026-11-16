"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialsStatsBar from "@/components/testimonials/TestimonialsStatsBar";
import TestimonialsFeaturedStories from "@/components/testimonials/TestimonialsFeaturedStories";
import TestimonialsGridSection from "@/components/testimonials/TestimonialsGridSection";
import TestimonialsValuesSection from "@/components/testimonials/TestimonialsValuesSection";
import TestimonialsFaqSection from "@/components/testimonials/TestimonialsFaqSection";
import TestimonialsCtaSection from "@/components/testimonials/TestimonialsCtaSection";

export default function TestimonialsPageView() {
  return (
    <div className="testimonials-page">
      {/* Shared Modular Header */}
      <Header activeNav="testimonials" />

      <main>
        {/* Breadcrumb banner styled matching About page */}
        <TestimonialsHero />

        {/* Reputation & Trust Stats Strip */}
        <TestimonialsStatsBar />

        {/* Detailed Homeowner Spotlight Stories */}
        <TestimonialsFeaturedStories />

        {/* Filterable Testimonials Wall (Apartment, Independent, Commercial, NRI) */}
        <TestimonialsGridSection />

        {/* The 6 Core Values Behind Every Handover */}
        <TestimonialsValuesSection />

        {/* Frequently Asked Questions */}
        <TestimonialsFaqSection />

        {/* Site Consultation & Handover CTA */}
        <TestimonialsCtaSection />
      </main>

      {/* Shared Modular Footer */}
      <Footer />

      {/* Floating Scroll To Top */}
      <ScrollToTop />
    </div>
  );
}
