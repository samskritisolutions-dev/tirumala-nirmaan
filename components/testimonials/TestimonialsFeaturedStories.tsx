"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, Building, MapPin } from "lucide-react";

const spotlights = [
  {
    quote:
      "From the initial foundation work to final handover, the transparency of Sudhakara Rao garu and the Thirumala team was exceptional. Having a civil engineering graduate actively supervising the reinforcement and concrete pours gave us immense confidence. Our flat was delivered right on schedule with remarkable structural quality, zero plumbing hiccups, and genuine Vastu compliance.",
    name: "R. K. Sharma & Family",
    role: "Senior IT Director · Homeowner",
    project: "Thirumala Towers",
    location: "Indira Nagar, Ramanthapur",
    image: "/projects/image1.jpg",
    unit: "3 BHK Luxury Residence",
    year: "Delivered 2021",
    tag: "Residential Landmark"
  },
  {
    quote:
      "Building a custom independent home in Hyderabad often comes with unmonitored material compromises and endless delays, but Thirumala made every phase effortless. Their strict adherence to red clay brick masonry, top-grade steel, and constant WhatsApp progress updates made the whole journey a pleasure. Four years in, our home is as pristine and structurally sound as day one.",
    name: "Dr. M. Venkat Reddy & Family",
    role: "Consultant Physician",
    project: "Independent House",
    location: "Balaji Hills, Boduppal",
    image: "/projects/image6.jpg",
    unit: "Custom G+2 Duplex Home",
    year: "Delivered 2020",
    tag: "Custom Home"
  }
];

export default function TestimonialsFeaturedStories() {
  return (
    <section className="featured-stories-section">
      <div className="section-container">
        <div className="section-header-centered">
          <span className="section-tag-gold">CLIENT SPOTLIGHTS</span>
          <h2 className="section-title-large">
            Enduring Quality, <em>Proven in Daily Living</em>
          </h2>
          <p className="section-desc-center">
            Hear directly from the families and commercial partners who experience Thirumala&apos;s civil engineering standards year after year.
          </p>
        </div>

        <div className="featured-stories-grid">
          {spotlights.map((item, idx) => (
            <motion.article
              key={item.name}
              className="featured-story-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
            >
              <div className="story-card-image-wrap">
                <img src={item.image} alt={item.project} className="story-card-img" />
                <div className="story-card-image-overlay" />
                <div className="story-card-pill-wrap">
                  <span className="story-pill-tag">{item.tag}</span>
                  <span className="story-pill-verified">
                    <CheckCircle2 size={12} />
                    Verified Homeowner
                  </span>
                </div>
              </div>

              <div className="story-card-body">
                <div className="story-card-top-meta">
                  <div className="story-rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="#c49b5c" color="#c49b5c" />
                    ))}
                  </div>
                  <Quote size={24} className="story-quote-icon" />
                </div>

                <blockquote className="story-quote-text">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <div className="story-project-info">
                  <div className="story-info-item">
                    <Building size={14} />
                    <span>{item.project} · {item.unit}</span>
                  </div>
                  <div className="story-info-item">
                    <MapPin size={14} />
                    <span>{item.location} ({item.year})</span>
                  </div>
                </div>

                <div className="story-author-row">
                  <div className="story-author-avatar">
                    {item.name.charAt(0)}
                  </div>
                  <div className="story-author-details">
                    <strong className="story-author-name">{item.name}</strong>
                    <span className="story-author-role">{item.role}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
