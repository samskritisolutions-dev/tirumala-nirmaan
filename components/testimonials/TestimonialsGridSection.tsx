"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, CheckCircle2, MapPin, Building2 } from "lucide-react";

interface TestimonialItem {
  id: string;
  category: "apartment" | "independent" | "commercial" | "nri";
  categoryLabel: string;
  name: string;
  role: string;
  project: string;
  location: string;
  rating: number;
  date: string;
  quote: string;
}

const testimonialsList: TestimonialItem[] = [
  {
    id: "1",
    category: "apartment",
    categoryLabel: "Apartment Community",
    name: "P. Sridhar & Lakshmi",
    role: "Government Executive & Homemaker",
    project: "Kesava Residency",
    location: "Boduppal, Hyderabad",
    rating: 5,
    date: "2023 Review",
    quote:
      "We have lived in our home for over four years now without a single dampness, electrical tripping or plumbing problem. The ventilation planning, natural morning light, and durable joinery speak for themselves. Truly built to last."
  },
  {
    id: "2",
    category: "commercial",
    categoryLabel: "Commercial Landmark",
    name: "K. Srinivas Rao",
    role: "Managing Director, Retail & Logistics",
    project: "SV's Manik Arcade",
    location: "Bulkampet, Ameerpet",
    rating: 5,
    date: "2022 Review",
    quote:
      "For our commercial property investment, Thirumala Developers demonstrated outstanding professionalism. Prompt documentation, sturdy commercial-grade engineering, and prime floor loading capacity that easily commands high-value corporate tenants."
  },
  {
    id: "3",
    category: "nri",
    categoryLabel: "NRI Homebuyer",
    name: "Suresh & Deepthi K.",
    role: "Software Architect (Dallas, USA)",
    project: "Thirumala Apartments",
    location: "Balaji Hills, Boduppal",
    rating: 5,
    date: "2024 Review",
    quote:
      "Managing a property purchase from abroad can be terrifying, but Sudhakara Rao garu sent bi-weekly video walk-throughs, material lab test certificates, and clear payment milestones. The final handover was exactly what was promised in the brochure."
  },
  {
    id: "4",
    category: "independent",
    categoryLabel: "Independent House",
    name: "B. Prabhakar Reddy",
    role: "Retired Bank Official",
    project: "Independent House Project",
    location: "Rajeshekar Colony, Hyderabad",
    rating: 5,
    date: "2021 Review",
    quote:
      "Unlike conventional contractors who cut corners on foundation depth or cement ratios, Thirumala adhered 100% to structural drawings and soil test recommendations. Their transparent approach to billing and changes made the construction completely stress-free."
  },
  {
    id: "5",
    category: "apartment",
    categoryLabel: "Apartment Community",
    name: "Anand & Shailaja Mohan",
    role: "Pharma Research Scientist",
    project: "Thirumala Towers",
    location: "Medipally, Hyderabad",
    rating: 5,
    date: "2023 Review",
    quote:
      "100% Vastu compliance was a non-negotiable requirement for my parents. Thirumala designed our flat with zero compromises on entry orientation, kitchen agni corner, or master bedroom placement while maintaining ultra-modern aesthetics."
  },
  {
    id: "6",
    category: "apartment",
    categoryLabel: "Apartment Community",
    name: "M. Rajesh Kumar",
    role: "Chartered Accountant",
    project: "Hasini Enclave",
    location: "Chilakanagar, Boduppal",
    rating: 5,
    date: "2022 Review",
    quote:
      "From a financial and legal perspective, their documentation is faultless. Clear link documents, GHMC approvals, and swift bank loan clearances through SBI and HDFC made our registration completely smooth."
  },
  {
    id: "7",
    category: "independent",
    categoryLabel: "Independent House",
    name: "K. Madhusudhan Rao",
    role: "Civil Engineering Consultant (Retd.)",
    project: "60 Independent Houses Venture",
    location: "Balaji Hills, Hyderabad",
    rating: 5,
    date: "2020 Review",
    quote:
      "Being an engineer myself, I personally checked their column curing, rebar binding, and mortar ratios during surprise site visits. I was genuinely impressed by their discipline. Sudhakara Rao garu maintains high professional standards."
  },
  {
    id: "8",
    category: "commercial",
    categoryLabel: "Commercial Partner",
    name: "T. Narayana Swamy",
    role: "Business Investor",
    project: "D-Mart Commercial Facility",
    location: "Ramanthapur, Hyderabad",
    rating: 5,
    date: "2021 Review",
    quote:
      "Timely completion of commercial facilities is crucial for retail ROI. Thirumala handed over the building ahead of the committed deadline with all electrical transformer and fire safety provisions in pristine order."
  }
];

export default function TestimonialsGridSection() {
  const [filter, setFilter] = useState<"all" | "apartment" | "independent" | "commercial" | "nri">("all");

  const filtered = testimonialsList.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  const filterTabs = [
    { id: "all", label: "All Reviews", count: testimonialsList.length },
    {
      id: "apartment",
      label: "Apartment Living",
      count: testimonialsList.filter((t) => t.category === "apartment").length
    },
    {
      id: "independent",
      label: "Custom Homes",
      count: testimonialsList.filter((t) => t.category === "independent").length
    },
    {
      id: "commercial",
      label: "Commercial",
      count: testimonialsList.filter((t) => t.category === "commercial").length
    },
    {
      id: "nri",
      label: "NRI Clients",
      count: testimonialsList.filter((t) => t.category === "nri").length
    }
  ];

  return (
    <section className="testimonials-grid-section" id="reviews">
      <div className="section-container">
        <div className="projects-section-header">
          <div className="projects-header-left">
            <span className="section-tag-gold">COMMUNITY VOICES</span>
            <h2 className="section-title-large">
              Genuine Reviews from <em>Homeowners</em>
            </h2>
            <p className="section-desc">
              Real experiences from clients who invested in our residential communities and commercial spaces across Hyderabad.
            </p>
          </div>

          <div className="projects-filter-tabs">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                className={`projects-tab-btn ${filter === tab.id ? "active" : ""}`}
                onClick={() => setFilter(tab.id as any)}
              >
                <span>{tab.label}</span>
                <span className="tab-count">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="testimonials-cards-wall">
          <AnimatePresence>
            {filtered.map((item, idx) => (
              <motion.article
                layout
                key={item.id}
                className="review-masonry-card"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
              >
                <div className="review-card-top">
                  <div className="review-stars-row">
                    {[...Array(item.rating)].map((_, s) => (
                      <Star key={s} size={14} fill="#c49b5c" color="#c49b5c" />
                    ))}
                    <span className="review-rating-num">5.0</span>
                  </div>
                  <span className="review-badge-category">{item.categoryLabel}</span>
                </div>

                <blockquote className="review-card-quote">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <div className="review-project-badge">
                  <Building2 size={13} />
                  <span>{item.project} · {item.location}</span>
                </div>

                <div className="review-card-footer">
                  <div className="review-avatar-circle">
                    {item.name.charAt(0)}
                  </div>
                  <div className="review-author-info">
                    <div className="author-name-row">
                      <strong>{item.name}</strong>
                      <span className="verified-check" title="Verified Homeowner">
                        <CheckCircle2 size={13} />
                      </span>
                    </div>
                    <span className="author-role-text">{item.role}</span>
                    <small className="review-date-text">{item.date}</small>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
