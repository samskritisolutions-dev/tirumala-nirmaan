"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import {
  AppWindow,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BadgeCheck,
  Bath,
  Boxes,
  Building2,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Compass,
  DoorClosed,
  Droplets,
  ExternalLink,
  FileText,
  HardHat,
  Home as HomeIcon,
  Layers,
  LayoutGrid,
  MapPin,
  Maximize2,
  MessageCircle,
  Paintbrush,
  Palette,
  Phone,
  ShieldCheck,
  Sparkles,
  Sun,
  Utensils,
  Wind,
  X,
  Zap
} from "lucide-react";
import { ProjectDetail } from "@/data/projects";

const getSpecificationIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("rcc") || t.includes("foundation") || t.includes("structural") || t.includes("engineer")) return HardHat;
  if (t.includes("super structure") || t.includes("brick") || t.includes("masonry") || t.includes("block")) return Boxes;
  if (t.includes("plaster") || t.includes("wall finish") || t.includes("walls")) return Paintbrush;
  if (t.includes("floor") || t.includes("corridor") || t.includes("lobby") || t.includes("tile")) return LayoutGrid;
  if (t.includes("door") || t.includes("wood") || t.includes("joinery") || t.includes("hardware")) return DoorClosed;
  if (t.includes("window") || t.includes("upvc") || t.includes("glass") || t.includes("façade") || t.includes("cladding")) return AppWindow;
  if (t.includes("kitchen") || t.includes("cooking")) return Utensils;
  if (t.includes("bath") || t.includes("sanitary") || t.includes("plumbing") || t.includes("piping") || t.includes("diverter")) return Bath;
  if (t.includes("electric") || t.includes("wiring") || t.includes("smart") || t.includes("cable") || t.includes("power")) return Zap;
  if (t.includes("paint") || t.includes("finishing") || t.includes("interior") || t.includes("putty")) return Palette;
  if (t.includes("water") || t.includes("harvesting") || t.includes("borewell") || t.includes("tank")) return Droplets;
  if (t.includes("elevator") || t.includes("lift")) return Building2;
  return Sparkles;
};

interface Props {
  project: ProjectDetail;
  prevProject?: ProjectDetail;
  nextProject?: ProjectDetail;
}

export default function ProjectDetailView({ project, prevProject, nextProject }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePlan, setActivePlan] = useState(0);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
    email: "",
    visitDate: "",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Enquiry for ${project.name}%0AName: ${enquiryForm.name}%0APhone: ${enquiryForm.phone}%0AEmail: ${enquiryForm.email}%0APreferred Visit Date: ${enquiryForm.visitDate}%0ANotes: ${enquiryForm.notes}`;
    window.location.href = `mailto:thirumalacd2010@gmail.com?subject=Project%20Enquiry:%20${encodeURIComponent(project.name)}&body=${body}`;
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/919849306675?text=${encodeURIComponent(`Hello, I am interested in knowing more about ${project.name} (${project.location}). Please share details.`)}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${project.name} ${project.address || project.location}`)}`;

  return (
    <div className="project-page">
      {/* Shared Modular Header */}
      <Header isDetailPage={true} />

      <main>
        {/* Project Hero Header */}
        <section className="project-hero">
          <div
            className="project-hero-bg"
            style={{ backgroundImage: `url(${project.bannerImage || project.image})` }}
          />
          <div className="project-hero-overlay" />
          <div className="project-hero-content">
            <div className="project-breadcrumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/#projects">Projects</Link>
              <span>/</span>
              <span className="current">{project.name}</span>
            </div>

            <div className="project-meta-badges">
              <span className={`project-status-badge ${project.status === "Ongoing" ? "status-ongoing" : "status-completed"}`}>
                <span className="badge-dot" />
                {project.status === "Ongoing" ? "Under Construction" : "Completed & Delivered"}
              </span>
              <span className="project-category-badge">{project.category}</span>
              <span className="project-year-badge">{project.year}</span>
            </div>

            <h1 className="project-hero-title">
              {project.name}
            </h1>

            <p className="project-hero-tagline">
              <em>{project.tagline}</em>
            </p>

            <div className="project-hero-location">
              <MapPin size={17} className="gold-icon" />
              <span>{project.address || project.location}</span>
            </div>

            {/* Quick Hero Actions */}
            <div className="project-hero-cta-group">
              <a href="#enquiry" className="button button-gold">
                Schedule a Site Visit <ArrowUpRight size={16} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-glass"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
              <a href="tel:+919849306675" className="button button-ghost">
                <Phone size={15} />
                +91 98493 06675
              </a>
            </div>
          </div>
        </section>

        {/* Project Fast Stats Bar */}
        <section className="project-stats-bar">
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-icon-wrap"><Building2 size={20} /></div>
              <div className="stat-info">
                <span className="stat-label">CONFIGURATION</span>
                <strong className="stat-val">{project.configurations}</strong>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrap"><Layers size={20} /></div>
              <div className="stat-info">
                <span className="stat-label">TOTAL UNITS</span>
                <strong className="stat-val">{project.units}</strong>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrap"><HomeIcon size={20} /></div>
              <div className="stat-info">
                <span className="stat-label">BUILT-UP AREA</span>
                <strong className="stat-val">{project.builtUpArea}</strong>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrap"><Compass size={20} /></div>
              <div className="stat-info">
                <span className="stat-label">STRUCTURE</span>
                <strong className="stat-val">{project.floors}</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery & Showcase Section */}
        <section className="project-gallery-section section-pad" id="gallery">
          <div className="project-section-head">
            <div className="head-text-group">
              <div className="project-kicker"><span>01</span> / VISUAL SHOWCASE</div>
              <p className="eyebrow">GALLERY & ELEVATION</p>
              <h2>Architecture built for<br/><em>lasting impression.</em></h2>
            </div>
            <div className="head-note-group">
              <p className="head-desc">
                High-resolution exterior elevations, architectural angles and community spaces of {project.name}.
              </p>
              <div className="gallery-view-controls">
                <span className="photo-count-pill">{images.length} Photographs</span>
                <button
                  type="button"
                  className="view-fullscreen-btn"
                  onClick={() => setLightboxOpen(true)}
                >
                  <Maximize2 size={14} /> Fullscreen Lightbox
                </button>
              </div>
            </div>
          </div>

          <div className="showcase-container">
            {/* Main Featured View with Ambient Backdrop */}
            <div className="showcase-main" onClick={() => setLightboxOpen(true)}>
              <div
                className="showcase-ambient-bg"
                style={{ backgroundImage: `url(${images[activeImage]})` }}
              />
              <img
                src={images[activeImage]}
                alt={`${project.name} - View ${activeImage + 1}`}
                className="showcase-main-img"
              />
              <div className="showcase-badge-top">
                <span>VIEW {activeImage + 1} OF {images.length}</span>
              </div>
              <div className="showcase-overlay-bar">
                <div className="showcase-caption">
                  <strong>{project.name}</strong>
                  <span>{project.location}</span>
                </div>
                <div className="showcase-hint">
                  <Maximize2 size={16} />
                  <span>Click to Expand</span>
                </div>
              </div>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    className="showcase-slider-arrow prev"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImage((prev) => (prev - 1 + images.length) % images.length);
                    }}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    className="showcase-slider-arrow next"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImage((prev) => (prev + 1) % images.length);
                    }}
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {images.length > 1 && (
              <div className="showcase-thumbs">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`showcase-thumb-btn ${activeImage === idx ? "active" : ""}`}
                    onClick={() => setActiveImage(idx)}
                    aria-label={`Select photo ${idx + 1}`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} />
                    <span className="thumb-num">0{idx + 1}</span>
                    <span className="thumb-indicator" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Project Story & Highlights */}
        <section className="project-details-section section-pad" id="development">
          <div className="project-section-head">
            <div className="head-text-group">
              <div className="project-kicker"><span>02</span> / THE DEVELOPMENT</div>
              <p className="eyebrow">ABOUT THE PROJECT</p>
              <h2>Thoughtfully conceived.<br/><em>Masterfully executed.</em></h2>
            </div>
            <div className="head-note-group">
              <p className="head-desc">
                An architectural overview of design intent, structural integrity, and everyday living experience at {project.name}.
              </p>
              <div className="dev-meta-pills">
                <span className="dev-meta-pill">
                  <BadgeCheck size={13} className="gold-icon" />
                  {project.status === "Ready to Move" ? "Ready for Possession" : project.status}
                </span>
                <span className="dev-meta-pill">
                  <MapPin size={13} className="gold-icon" />
                  {project.location}
                </span>
              </div>
            </div>
          </div>

          <div className="project-story-grid">
            <div className="project-story-left">
              {project.overview.length > 0 && (
                <div className="story-lead-quote">
                  <div className="quote-bar" />
                  <p className="quote-text">{project.overview[0]}</p>
                </div>
              )}

              {project.overview.length > 1 && (
                <div className="story-copy">
                  {project.overview.slice(1).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}

              {/* 3 Core Architectural Pillars */}
              <div className="story-pillars-grid">
                <div className="pillar-item">
                  <div className="pillar-card-top">
                    <div className="pillar-icon-badge">
                      <Compass size={18} className="pillar-icon" />
                    </div>
                    <span className="pillar-num">01</span>
                  </div>
                  <div className="pillar-header">
                    <h4>100% Vastu Harmonized</h4>
                  </div>
                  <p>Oriented along natural cardinal axes with scientifically balanced entrances, kitchens, and living spaces.</p>
                </div>
                <div className="pillar-item">
                  <div className="pillar-card-top">
                    <div className="pillar-icon-badge">
                      <Wind size={18} className="pillar-icon" />
                    </div>
                    <span className="pillar-num">02</span>
                  </div>
                  <div className="pillar-header">
                    <h4>Daylight & Cross-Ventilation</h4>
                  </div>
                  <p>Expansive balcony apertures and window placements engineered for generous natural airflow and morning sun.</p>
                </div>
                <div className="pillar-item">
                  <div className="pillar-card-top">
                    <div className="pillar-icon-badge">
                      <ShieldCheck size={18} className="pillar-icon" />
                    </div>
                    <span className="pillar-num">03</span>
                  </div>
                  <div className="pillar-header">
                    <h4>Direct Promoter Oversight</h4>
                  </div>
                  <p>Supervised at every concrete pour and structural milestone by experienced civil engineering leadership.</p>
                </div>
              </div>
            </div>

            <div className="project-story-right">
              <div className="highlights-card">
                <div className="highlights-header">
                  <div className="highlights-title-wrap">
                    <Sparkles size={18} className="gold-icon" />
                    <h3>Project Highlights</h3>
                  </div>
                  <span className="highlights-count-pill">{project.highlights.length} Features</span>
                </div>

                <ul className="highlights-list">
                  {project.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="highlight-check">
                        <Check size={14} />
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="promoter-guarantee-seal">
                  <div className="seal-badge">
                    <ShieldCheck size={22} className="gold-icon" />
                  </div>
                  <div className="seal-text">
                    <strong>Direct Promoter Supervision</strong>
                    <p>Engineered under the leadership of G V Sudhakara Rao, civil engineering alumnus with 15+ years of Hyderabad construction excellence.</p>
                  </div>
                </div>

                <div className="highlights-card-footer">
                  <a href="#enquiry" className="button button-gold button-full-width">
                    Schedule a Private Site Visit <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floor Plans Section (if available) */}
        {project.floorPlans && project.floorPlans.length > 0 && (
          <section className="floor-plans-section section-pad" id="plans">
            <div className="project-section-head">
              <div className="head-text-group">
                <div className="project-kicker"><span>03</span> / UNIT LAYOUTS</div>
                <p className="eyebrow">FLOOR PLANS & SIZES</p>
                <h2>Space optimized for<br/><em>effortless living.</em></h2>
              </div>
              <div className="head-note-group">
                <p className="head-desc">
                  Thoughtfully planned configurations providing privacy, cross ventilation, and 100% Vastu compliance.
                </p>
              </div>
            </div>

            <div className="floor-plans-container">
              <div className="plan-tabs">
                {project.floorPlans.map((plan, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`plan-tab-btn ${activePlan === i ? "active" : ""}`}
                    onClick={() => setActivePlan(i)}
                  >
                    <span>{plan.type}</span>
                    <small>{plan.area}</small>
                  </button>
                ))}
              </div>

              <div className="active-plan-display">
                <div className="plan-meta-card">
                  <div className="plan-meta-header">
                    <h3>{project.floorPlans[activePlan].type}</h3>
                    <span className="plan-facing-tag">
                      <Compass size={14} />
                      {project.floorPlans[activePlan].facing}
                    </span>
                  </div>
                  <div className="plan-size-callout">
                    <span className="size-label">Super Built-Up Area</span>
                    <strong className="size-num">{project.floorPlans[activePlan].area}</strong>
                  </div>
                  <div className="plan-features-list">
                    <span className="features-label">Layout Specifications:</span>
                    <ul>
                      {project.floorPlans[activePlan].features.map((feat, idx) => (
                        <li key={idx}>
                          <Check size={14} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href="#enquiry" className="button button-gold plan-enquire-btn">
                    Request Floor Plan PDF <ArrowUpRight size={15} />
                  </a>
                </div>

                <div className="plan-visual-card">
                  <img
                    src={project.image}
                    alt={`${project.name} Layout`}
                    className="plan-preview-img"
                  />
                  <div className="plan-visual-overlay">
                    <p>Detailed architectural working CAD drawings available on request</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Engineering Specifications Grid */}
        <section className="specifications-section section-pad" id="specifications">
          <div className="project-section-head">
            <div className="head-text-group">
              <div className="project-kicker"><span>04</span> / QUALITY STANDARDS</div>
              <p className="eyebrow">SPECIFICATIONS & MATERIALS</p>
              <h2>Built with benchmark<br/><em>materials & methods.</em></h2>
            </div>
            <div className="head-note-group">
              <p className="head-desc">
                From deep foundation engineering to certified electrical cables and sanitary ware, every detail is verified.
              </p>
            </div>
          </div>

          <div className="specs-grid">
            {project.specifications.map((spec, i) => {
              const SpecIcon = getSpecificationIcon(spec.title);
              return (
                <div className="spec-card" key={i}>
                  <div className="spec-card-top">
                    <div className="spec-icon-badge">
                      <SpecIcon size={20} className="spec-icon" />
                      <span className="spec-icon-ring" />
                    </div>
                    <span className="spec-num">0{i + 1}</span>
                  </div>
                  <h3>{spec.title}</h3>
                  <p>{spec.description}</p>
                  <span className="spec-card-rule" />
                </div>
              );
            })}
          </div>
        </section>

        {/* Location Advantage */}
        {project.locationAdvantages && project.locationAdvantages.length > 0 && (
          <section className="location-section section-pad" id="location">
            <div className="project-section-head">
              <div className="head-text-group">
                <div className="project-kicker"><span>04</span> / THE LOCATION</div>
                <p className="eyebrow">CONNECTIVITY & NEIGHBORHOOD</p>
                <h2>Close to everything<br/><em>that matters.</em></h2>
              </div>
              <div className="head-note-group">
                <p className="head-desc">
                  Strategically situated with rapid access to metro corridors, top schools, multi-specialty healthcare, and key ring roads.
                </p>
              </div>
            </div>
            <div className="location-layout">
              <div className="location-copy">
                <p className="location-intro">
                  {project.name} is ideally placed within {project.location}, balancing tranquil suburban living with swift connectivity to major transport and commercial nodes across Hyderabad.
                </p>
                <div className="location-address-box">
                  <MapPin size={18} className="gold-icon" />
                  <div>
                    <strong>Site Address:</strong>
                    <p>{project.address || project.location}</p>
                  </div>
                </div>

                <div className="location-actions">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-gold map-link-btn"
                  >
                    <MapPin size={15} />
                    Open in Google Maps <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="location-table-card">
                <div className="table-header">
                  <span>KEY LANDMARK</span>
                  <span>APPROX DISTANCE</span>
                </div>
                <div className="table-body">
                  {project.locationAdvantages.map((adv, idx) => (
                    <div className="table-row" key={idx}>
                      <span className="landmark-name">
                        <MapPin size={14} />
                        {adv.landmark}
                      </span>
                      <strong className="landmark-dist">{adv.distance}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Project Next / Prev Navigation */}
        <section className="project-pagination-section">
          <div className="pagination-top-bar">
            <div className="pagination-kicker-group">
              <span className="pagination-kicker">PORTFOLIO NAVIGATION</span>
              <p className="pagination-subhead">Explore adjacent residential & commercial developments</p>
            </div>
            <Link href="/#projects" className="all-projects-capsule">
              <LayoutGrid size={15} />
              <span>All 13 Projects</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="pagination-grid">
            {prevProject ? (
              <Link href={`/projects/${prevProject.slug}`} className="nav-tile prev-tile">
                <div className="nav-tile-thumb">
                  <img src={prevProject.image} alt={prevProject.name} />
                  <div className="nav-tile-overlay" />
                </div>
                <div className="nav-tile-body">
                  <div className="nav-tile-direction">
                    <span className="nav-arrow-bubble">
                      <ArrowLeft size={16} />
                    </span>
                    <span className="direction-label">PREVIOUS PROJECT</span>
                  </div>
                  <h4 className="nav-tile-title">{prevProject.name}</h4>
                  <div className="nav-tile-meta">
                    <span className="nav-tile-loc">{prevProject.location}</span>
                    <span className="nav-tile-sep">•</span>
                    <span className="nav-tile-cfg">{prevProject.configurations}</span>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="nav-tile-placeholder">
                <span>Start of Featured Developments</span>
              </div>
            )}

            {nextProject ? (
              <Link href={`/projects/${nextProject.slug}`} className="nav-tile next-tile">
                <div className="nav-tile-thumb">
                  <img src={nextProject.image} alt={nextProject.name} />
                  <div className="nav-tile-overlay" />
                </div>
                <div className="nav-tile-body">
                  <div className="nav-tile-direction">
                    <span className="direction-label">NEXT PROJECT</span>
                    <span className="nav-arrow-bubble">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                  <h4 className="nav-tile-title">{nextProject.name}</h4>
                  <div className="nav-tile-meta">
                    <span className="nav-tile-loc">{nextProject.location}</span>
                    <span className="nav-tile-sep">•</span>
                    <span className="nav-tile-cfg">{nextProject.configurations}</span>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="nav-tile-placeholder">
                <span>End of Featured Developments</span>
              </div>
            )}
          </div>
        </section>

        {/* Project Enquiry & Site Visit Booking (Placed directly before Footer) */}
        <section className="project-enquiry-section section-pad" id="enquiry">
          <div className="enquiry-card-wrap">
            <div className="enquiry-card-info">
              <p className="eyebrow light">DIRECT DEVELOPER ENQUIRY</p>
              <h2>Interested in<br/><em>{project.name}?</em></h2>
              <p className="enquiry-desc">
                Schedule a personalized site tour, request unit availability, or discuss customized construction requirements directly with our promoter and technical team.
              </p>

              <div className="direct-contacts">
                <a href="tel:+919849306675" className="contact-pill">
                  <Phone size={16} />
                  <span>+91 98493 06675</span>
                </a>
                <a href="mailto:thirumalacd2010@gmail.com" className="contact-pill">
                  <FileText size={16} />
                  <span>thirumalacd2010@gmail.com</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-pill whatsapp-pill"
                >
                  <MessageCircle size={16} />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>

            <div className="enquiry-card-form">
              {submitted ? (
                <div className="enquiry-success-message">
                  <div className="success-icon-wrap">
                    <Check size={28} />
                  </div>
                  <h3>Thank you for reaching out!</h3>
                  <p>Your enquiry for <strong>{project.name}</strong> has been received. Our sales and engineering team will contact you shortly.</p>
                  <button type="button" className="button button-gold" onClick={() => setSubmitted(false)}>
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <>
                  <h3>Book a Site Visit / Request Brochure</h3>
                  <form onSubmit={handleEnquirySubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        id="name"
                        required
                        value={enquiryForm.name}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={enquiryForm.phone}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                          placeholder="+91 Phone number"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          id="email"
                          type="email"
                          value={enquiryForm.email}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                          placeholder="yourname@gmail.com"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="date">Preferred Site Visit Date</label>
                      <input
                        id="date"
                        type="date"
                        value={enquiryForm.visitDate}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, visitDate: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="notes">Notes / Specific Queries</label>
                      <textarea
                        id="notes"
                        rows={3}
                        value={enquiryForm.notes}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, notes: e.target.value })}
                        placeholder={`Tell us what you'd like to see at ${project.name}...`}
                      />
                    </div>

                    <button type="submit" className="button button-gold form-submit-btn">
                      Submit Project Enquiry <ArrowUpRight size={17} />
                    </button>
                    <small className="form-note">
                      Your email application will open ready to send directly to our team.
                    </small>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close image viewer"
            >
              <X size={24} />
            </button>
            <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
              <img
                src={images[activeImage]}
                alt={`${project.name} Full View`}
                className="lightbox-img"
              />
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    className="lightbox-nav-btn prev"
                    onClick={() => setActiveImage((prev) => (prev - 1 + images.length) % images.length)}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    type="button"
                    className="lightbox-nav-btn next"
                    onClick={() => setActiveImage((prev) => (prev + 1) % images.length)}
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shared Modular Footer */}
      <Footer />

      {/* Shared Modular Scroll To Top */}
      <ScrollToTop />
    </div>
  );
}
