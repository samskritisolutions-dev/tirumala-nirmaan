"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us Directly",
    detail: "+91 98493 06675",
    sub: "Mon – Sat: 9:30 AM – 7:30 PM",
    href: "tel:+919849306675",
    actionText: "Call Now",
    type: "phone"
  },
  {
    icon: MessageCircle,
    title: "Instant WhatsApp",
    detail: "+91 98493 06675",
    sub: "Fast response for project queries",
    href: "https://wa.me/919849306675?text=Hello%20Thirumala%20Team%2C%20I%20would%20like%20to%20enquire%20about%20your%20projects",
    actionText: "Chat on WhatsApp",
    type: "whatsapp"
  },
  {
    icon: Mail,
    title: "Email Support",
    detail: "thirumalacd2010@gmail.com",
    sub: "Direct enquiries & documents",
    href: "mailto:thirumalacd2010@gmail.com?subject=Enquiry%20via%20Website",
    actionText: "Send Email",
    type: "email"
  },
  {
    icon: MapPin,
    title: "Head Office",
    detail: "Peerzadiguda, Uppal Depot",
    sub: "Above ICICI Bank, 4th Floor, Hyd - 500039",
    href: "https://maps.google.com/?q=Thirumala+Constructions+Peerzadiguda+Hyderabad",
    actionText: "Get Directions",
    type: "office"
  }
];

export default function ContactInfoCards() {
  return (
    <section className="contact-info-cards-section">
      <div className="section-container">
        <div className="contact-cards-grid">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="contact-feature-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                <div className="contact-card-top-row">
                  <div className="contact-card-icon-wrap">
                    <Icon size={22} />
                  </div>
                  <span className="contact-card-arrow-pill">
                    <ArrowUpRight size={14} />
                  </span>
                </div>

                <div className="contact-card-content">
                  <span className="contact-card-sublabel">{card.title}</span>
                  <strong className={`contact-card-detail ${card.type === "email" ? "detail-email" : ""}`}>
                    {card.detail}
                  </strong>
                  <p className="contact-card-hint">{card.sub}</p>
                </div>

                <div className="contact-card-action">
                  <span>{card.actionText}</span>
                  <ArrowUpRight size={14} />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
