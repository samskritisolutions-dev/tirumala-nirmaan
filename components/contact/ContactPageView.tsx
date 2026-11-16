"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactMapSection from "@/components/contact/ContactMapSection";
import ContactVisitGuide from "@/components/contact/ContactVisitGuide";
import ContactFaqSection from "@/components/contact/ContactFaqSection";

export default function ContactPageView() {
  return (
    <div className="contact-page">
      {/* Shared Modular Header */}
      <Header activeNav="contact" />

      <main>
        {/* Breadcrumb banner styled matching About page */}
        <ContactHero />

        {/* Main 2-Column Enquiry & Consultation Form */}
        <ContactFormSection />

        {/* 4 Direct Contact Cards (Phone, WhatsApp, Email, Head Office) */}
        <ContactInfoCards />

        {/* Head Office Map & Transit Connectivity Section */}
        <ContactMapSection />

        {/* 4-Step Site Consultation Experience Guide */}
        <ContactVisitGuide />

        {/* Frequently Asked Questions */}
        <ContactFaqSection />
      </main>

      {/* Shared Modular Footer */}
      <Footer />

      {/* Floating Scroll To Top */}
      <ScrollToTop />
    </div>
  );
}
