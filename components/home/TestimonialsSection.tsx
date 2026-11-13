"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const testimonials = [
  {
    quote: "From the initial foundation work to final handover, the transparency of Sudhakara Rao garu and team was exceptional. Our flat at Thirumala Towers was delivered right on schedule with remarkable structural quality and detailing.",
    name: "R. K. Sharma & Family",
    role: "Homeowner · 3 BHK",
    project: "Thirumala Towers, Ramanthapur",
    rating: 5,
    tag: "Residential"
  },
  {
    quote: "Building a custom independent home can be stressful, but Thirumala made every stage effortless. Their technical background in civil engineering, strict material quality checks, and constant site updates gave us complete peace of mind.",
    name: "Dr. M. Venkat Reddy",
    role: "Homeowner",
    project: "Independent House, Yapral",
    rating: 5,
    tag: "Custom Home"
  },
  {
    quote: "We have lived in our home for over four years now without a single dampness or plumbing problem. The ventilation planning, natural light and durable construction speak for themselves. Truly built to last.",
    name: "P. Sridhar & Lakshmi",
    role: "Homeowners",
    project: "Kesava Residency, Boduppal",
    rating: 5,
    tag: "Apartment"
  },
  {
    quote: "For our commercial space requirement, Thirumala Developers demonstrated outstanding professionalism. Prompt documentation, sturdy commercial-grade engineering, and prime execution that easily attracts high-value tenants.",
    name: "K. Srinivas Rao",
    role: "Commercial Partner",
    project: "SV's Manik Arcade, Ameerpet",
    rating: 5,
    tag: "Commercial"
  }
];

export default function TestimonialsSection() {
  const [slide, setSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="testimonials section-pad" id="testimonials">
      <div className="section-kicker"><span>05</span> / REPUTATION & TRUST</div>
      <div className="testimonials-heading">
        <Reveal>
          <p className="eyebrow">CLIENT VOICES</p>
          <h2>Stories from families<br /><em>who call our work home.</em></h2>
        </Reveal>
        <div className="slider-controls-wrap">
          <div className="slider-nav">
            <span className="slider-counter">
              <strong>0{slide + 1}</strong> / 0{testimonials.length}
            </span>
            <div className="slider-buttons">
              <button
                type="button"
                className="slider-btn"
                onClick={() => setSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="slider-btn"
                onClick={() => setSlide((prev) => (prev + 1) % testimonials.length)}
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="testimonials-slider"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="testimonials-track"
          style={{ transform: `translateX(calc(-${slide} * var(--step, calc(520px + 28px))))` }}
        >
          {testimonials.map((t, i) => (
            <article className={`testimonial-card ${slide === i ? "active" : ""}`} key={i}>
              <div className="testimonial-top">
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} size={15} fill="var(--gold)" color="var(--gold)" />
                  ))}
                </div>
                <span className="testimonial-tag">{t.tag}</span>
              </div>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.name[0]}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                  <small className="testimonial-project">{t.project}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="slider-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`slider-dot ${slide === i ? "active" : ""}`}
            onClick={() => setSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
