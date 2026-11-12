"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, BadgeCheck, Building2, Check, ChevronDown, ChevronLeft, ChevronRight, Clock3, Compass, Facebook, Handshake, HardHat, HeartHandshake, Home as HomeIcon, Instagram, Layers3, Linkedin, Mail, MapPin, Menu, MessageCircle, Phone, ShieldCheck, Star, Trees, Users, X, Youtube } from "lucide-react";

const completed = [
  ["Thirumala Towers", "Indira Nagar, Ramanthapur", "Residential"],
  ["D-Mart", "Ramanthapur", "Commercial"],
  ["Thirumala Apartments", "Balaji Hills, Boduppal", "Residential"],
  ["Thirumala Towers", "Medipally", "Residential"],
  ["Thirumala Towers", "Boduppal", "Residential"],
  ["Hasini Enclave", "Chilakanagar, Boduppal", "Residential"],
  ["Kesava Residency", "Boduppal", "Residential"],
  ["Sagar Simha Nilayam", "Yapral", "Residential"],
  ["Thirumala Residency", "Chilakanagar, Boduppal", "Residential"],
  ["Thirumala Heights", "Swaroop Nagar, Uppal", "Residential"],
  ["60 Independent Houses", "Balaji Hills & Rajeshekar Colony", "Independent homes"],
  ["SV’s Manik Arcade", "Bulkampet, Ameerpet", "Commercial"],
  ["Kesava Residency", "Near NTR Statue, Boduppal", "Residential"]
];

const ongoing = [
  ["SSV Padma Heights", "Peerzadiguda", "/projects/image7.jpg"],
  ["SV Heights", "Nagole", "/projects/image10.jpg"],
  ["SSV Krishna Heights", "Parvathapur, Peerzadiguda", "/projects/image3.jpg"]
];

const services = [
  { n: "01", title: "Independent Houses", text: "Custom homes shaped around client requirements, lifestyle needs and functional spaces.", icon: HomeIcon, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85" },
  { n: "02", title: "Gated Villas", text: "Thoughtfully planned villa communities designed for comfortable residential living.", icon: Trees, image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85" },
  { n: "03", title: "Apartments", text: "Standalone and gated residential and commercial apartment developments.", icon: Building2, image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85" },
  { n: "04", title: "Open Plot Ventures", text: "Developed residential plots for people planning their future homes.", icon: Compass, image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85" },
  { n: "05", title: "Building Materials", text: "Material supply contracts supporting construction requirements.", icon: Layers3, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85" }
];

const values = [
  { title: "Punctuality", text: "We honour the timelines we commit to.", icon: Clock3 },
  { title: "Commitment", text: "We stay accountable from start to handover.", icon: Handshake },
  { title: "Honesty", text: "We communicate openly at every stage.", icon: BadgeCheck },
  { title: "Trust", text: "We build relationships that last beyond delivery.", icon: ShieldCheck },
  { title: "Courage", text: "We take on challenges with practical confidence.", icon: HeartHandshake },
  { title: "Respect", text: "We value every client, team and community.", icon: Users }
];

const featuredProjects = [
  { name: "Thirumala Towers", location: "Indira Nagar, Ramanthapur", type: "Residential", image: "/projects/image1.jpg", featured: true },
  { name: "SV's Manik Arcade", location: "Bulkampet, Ameerpet", type: "Commercial", image: "/projects/image8.jpg" },
  { name: "Thirumala Apartments", location: "Balaji Hills, Boduppal", type: "Residential", image: "/projects/image5.jpg" },
  { name: "Kesava Residency", location: "Boduppal", type: "Residential", image: "/projects/image6.jpg" }
];

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

const socialLinks = [
  { name: "WhatsApp", href: "https://wa.me/919849306675", icon: MessageCircle, label: "Chat on WhatsApp" },
  { name: "Instagram", href: "https://www.instagram.com", icon: Instagram, label: "Follow on Instagram" },
  { name: "Facebook", href: "https://www.facebook.com", icon: Facebook, label: "Connect on Facebook" },
  { name: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin, label: "Connect on LinkedIn" },
  { name: "YouTube", href: "https://www.youtube.com", icon: Youtube, label: "Watch on YouTube" }
];

const fade = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: .65, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: .12 } } };

function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: .18 }} transition={{ delay }}>{children}</motion.div>;
}

function AnimatedServiceIcon({ Icon, delay }: { Icon: typeof HomeIcon; delay: number }) {
  return <motion.span className="service-icon" animate={{ y: [0, -4, 0], rotate: [0, 2, 0, -2, 0] }} transition={{ duration: 3.6, delay, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.16, rotate: 0 }}><Icon size={24} strokeWidth={1.35}/></motion.span>;
}

export default function Site() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", interest: "Residential construction", message: "" });
  const nav = [["Home", "#top"], ["About", "#about"], ["Expertise", "#expertise"], ["Projects", "#projects"], ["Testimonials", "#testimonials"]];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 280);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sliderCards = [...testimonials, testimonials[0]];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0AInterest: ${form.interest}%0AMessage: ${form.message}`;
    window.location.href = `mailto:thirumalacd2010@gmail.com?subject=Website%20Enquiry&body=${body}`;
  };

  return <MotionConfig reducedMotion="user"><main>
    <header className="header">
      <a className="brand" href="#top" aria-label="Thirumala home"><span className="brand-mark">T<span>.</span></span><span className="brand-name">THIRUMALA<small>CONSTRUCTIONS & DEVELOPERS</small></span></a>
      <nav className="desktop-nav">{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
      <a className="header-cta" href="#contact">Contact Us <ArrowUpRight size={16}/></a>
      <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>
    <AnimatePresence>
      {menuOpen && (
        <motion.nav 
          className="mobile-nav" 
          initial={{ opacity: 0, y: -12 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -12 }} 
          transition={{ duration: .2 }}
        >
          {nav.map(([label, href], i) => (
            <motion.a 
              key={label} 
              href={href} 
              onClick={() => setMenuOpen(false)} 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: i * .05 }}
            >
              {label}
            </motion.a>
          ))}
          <motion.a 
            href="#contact" 
            onClick={() => setMenuOpen(false)} 
            className="mobile-cta"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: nav.length * .05 }}
          >
            Contact Us <ArrowUpRight size={16}/>
          </motion.a>
        </motion.nav>
      )}
    </AnimatePresence>

    <section className="hero" id="top">
      <motion.div className="hero-image" initial={{ scale: 1.12 }} animate={{ scale: 1.02 }} transition={{ duration: 1.5, ease: "easeOut" }} />
      <div className="hero-shade" />
      <div className="hero-content">
        <motion.p className="eyebrow light" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>HYDERABAD · CONSTRUCTION · DEVELOPMENT</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}>Building trust.<br/><em>Creating landmarks.</em></motion.h1>
        <motion.p className="hero-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }}>Thoughtfully developed spaces, built on quality, commitment and lasting value.</motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}>
          <a className="button button-gold" href="#projects">Explore our work <ArrowUpRight size={17}/></a>
          <a className="text-link light-link" href="#about">Discover Thirumala <ArrowDown size={15}/></a>
        </motion.div>
      </div>
      <div className="hero-bottom"><span>DESIGNED FOR LIVING. BUILT TO LAST.</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <motion.section className="stats" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: .35 }}>
      <motion.div className="stats-intro" variants={fade}><span className="eyebrow">OUR JOURNEY IN NUMBERS</span><p>Experience measured in <br/> every space we build.</p></motion.div>
      <motion.div className="stat" variants={fade}><strong>10<span>+</span></strong><small>Years of experience</small></motion.div>
      <motion.div className="stat" variants={fade}><strong>13</strong><small>Completed projects</small></motion.div>
      <motion.div className="stat" variants={fade}><strong>03</strong><small>Ongoing projects</small></motion.div>
    </motion.section>

    <section className="about section-pad" id="about">
      <div className="section-kicker"><span>01</span> / WHO WE ARE</div>
      <div className="about-grid">
        <Reveal><p className="eyebrow">A FOUNDATION OF TRUST</p><h2>We build more<br/>than <em>structures.</em></h2></Reveal>
        <Reveal className="about-copy" delay={.12}><p className="lead">We build relationships, communities and places people are proud to call their own.</p><p>Thirumala Constructions & Developers is a Hyderabad-based construction and real estate development company promoted by G V Sudhakara Rao and G Prashanthi. The company undertakes residential, commercial, retail, villa and hospitality developments.</p><p>Backed by experienced professionals and technically qualified teams, we focus on quality construction, cost-effective ideas and optimum use of resources.</p><a className="text-link" href="#contact">Get to know us <ArrowUpRight size={16}/></a></Reveal>
      </div>
      <motion.div className="leadership" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }}>
        <motion.div className="leader-card" variants={fade}><span className="leader-index">LEADERSHIP / 01</span><h3>G V Sudhakara Rao</h3><span className="leader-role">Founder & Promoter</span><p>A civil engineering graduate from Acharya Nagarjuna University and a first-generation entrepreneur, bringing a decade of construction experience across Hyderabad.</p></motion.div>
        <motion.div className="leader-card" variants={fade}><span className="leader-index">LEADERSHIP / 02</span><h3>G Prashanthi</h3><span className="leader-role">Co-Promoter</span><p>Continuously supporting the company's development and operations.</p></motion.div>
      </motion.div>
    </section>

    <section className="expertise section-pad" id="expertise">
      <div className="section-kicker"><span>02</span> / WHAT WE DO</div>
      <div className="section-heading"><Reveal><p className="eyebrow">OUR EXPERTISE</p><h2>Spaces for every<br/><em>way of life.</em></h2></Reveal><Reveal className="heading-note" delay={.12}>From individual homes to larger developments, our work is guided by practical thinking, quality and a commitment to doing things right.</Reveal></div>
      <motion.div className="service-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }}>
        {services.map((s, i) => (
          <motion.article className="service-card" key={s.n} variants={fade} whileHover={{ y: -5 }}>
            <div className="service-image" style={{ backgroundImage: `url(${s.image})` }}/>
            <div className="service-top">
              <span>{s.n}</span>
              <AnimatedServiceIcon Icon={s.icon} delay={i * .25}/>
            </div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <span className="service-line"/>
          </motion.article>
        ))}
        <motion.article className="service-card service-card-cta" variants={fade} whileHover={{ y: -5 }}>
          <div className="service-image" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1000&q=85')` }}/>
          <div className="service-top">
            <span>06</span>
            <AnimatedServiceIcon Icon={MessageCircle} delay={1.25}/>
          </div>
          <div className="service-cta-body">
            <h3>Have a Custom Project?</h3>
            <p>Looking to construct a custom home, commercial space, or partner on development? Let's discuss your requirements.</p>
            <a href="#contact" className="service-cta-btn">
              Contact Us <ArrowUpRight size={15}/>
            </a>
          </div>
          <span className="service-line"/>
        </motion.article>
      </motion.div>
    </section>

    <section className="statement">
      <motion.div className="statement-image" initial={{ scale: 1.08 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.3, ease: "easeOut" }}/>
      <Reveal className="statement-content"><p className="eyebrow light">OUR PROMISE</p><h2>Quality is not an extra.<br/><em>It is the foundation.</em></h2><p>Our mission is to deliver work of international-standard quality within the committed timeline.</p><a className="text-link light-link" href="#contact">Build with us <ArrowUpRight size={16}/></a></Reveal>
    </section>

    <section className="principles section-pad">
      <div className="section-kicker"><span>03</span> / WHAT GUIDES US</div>
      <div className="principles-grid">
        <Reveal><p className="eyebrow">OUR VISION</p><h2>Setting a benchmark<br/>in <em>development.</em></h2><p>To become a benchmark civil contractor and real estate developer in buildings, roads and industries, including commercial complexes, residential apartments and villas.</p></Reveal>
        <Reveal delay={.12}><p className="eyebrow">OUR QUALITY POLICY</p><h2>Right people.<br/><em>Right work.</em></h2><p>Trained, committed people, suitable materials and honest value for money — with every job done right the first time.</p></Reveal>
      </div>
      <Reveal className="principles-feature">
        <div className="principles-image"/>
        <div className="principles-feature-copy"><p className="eyebrow">HOW WE WORK</p><h3>Every detail<br/>has a <em>purpose.</em></h3><p>From first conversation to final handover, our teams bring care, clarity and accountability to every stage of the build.</p><div className="principles-promises"><span><Check size={15}/> Clear communication</span><span><Check size={15}/> Quality-led execution</span><span><Check size={15}/> On-time delivery</span></div></div>
      </Reveal>
      <motion.div className="values" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }}><span className="eyebrow">OUR VALUES</span>{values.map((value, i) => <motion.div className="value" key={value.title} variants={fade} whileHover={{ y: -5 }}><div className="value-top"><span>0{i+1}</span><motion.span className="value-icon" animate={{ y: [0, -3, 0] }} transition={{ duration: 2.8, delay: i * .16, repeat: Infinity, ease: "easeInOut" }}><value.icon size={18}/></motion.span></div><h3>{value.title}</h3><p>{value.text}</p><Check className="value-check" size={15}/></motion.div>)}</motion.div>
    </section>

    <section className="projects section-pad" id="projects">
      <div className="section-kicker"><span>04</span> / OUR WORK</div>
      <div className="section-heading"><Reveal><p className="eyebrow">A GROWING PORTFOLIO</p><h2>Built across<br/><em>Hyderabad.</em></h2></Reveal><Reveal className="heading-note" delay={.12}>A track record of residential and commercial developments across Uppal, Boduppal, Ramanthapur, Medipally, Yapral and Ameerpet.</Reveal></div>
      <Reveal className="project-toolbar"><span>SELECTED COMPLETED PROJECTS</span><span>13 PROJECTS</span></Reveal>
      <motion.div className="project-gallery" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: .1 }}>{featuredProjects.map((project, i) => <motion.article className={`project-tile ${project.featured ? "project-tile-featured" : ""}`} key={project.name} variants={fade} whileHover={{ y: -6 }}><div className="project-tile-image" style={{ backgroundImage: `url(${project.image})` }}/><div className="project-tile-overlay"/><div className="project-tile-copy"><span>0{i + 1} / {project.type}</span><h3>{project.name}</h3><p><MapPin size={13}/>{project.location}</p></div><ArrowUpRight className="project-tile-arrow" size={19}/></motion.article>)}</motion.div>
      <motion.div className="project-directory" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: .12 }}>{completed.map(([name, location, type], i) => <motion.div className="project-directory-row" key={`${name}-${i}`} variants={fade}><span>{String(i + 1).padStart(2, "0")}</span><strong>{name}</strong><small>{location}</small><em>{type}</em></motion.div>)}</motion.div>
      <Reveal className="ongoing-head"><div><p className="eyebrow">IN PROGRESS</p><h2>Looking <em>ahead.</em></h2></div><span>03 ONGOING PROJECTS</span></Reveal>
      <motion.div className="ongoing-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }}>{ongoing.map(([name, location, image], i) => <motion.article className="ongoing-card" key={name} variants={fade} whileHover={{ y: -5 }}><div className="ongoing-image" style={{ backgroundImage: `url(${image})` }}/><div className="ongoing-content"><span>0{i+1} / ONGOING</span><h3>{name}</h3><p><MapPin size={14}/>{location}</p></div><div className="ongoing-rule"/></motion.article>)}</motion.div>
    </section>

    <section className="testimonials section-pad" id="testimonials">
      <div className="section-kicker"><span>05</span> / CLIENT STORIES</div>
      <div className="section-heading testimonials-heading">
        <Reveal>
          <p className="eyebrow">WHAT OUR CLIENTS SAY</p>
          <h2>Trust earned through<br/><em>every build.</em></h2>
        </Reveal>
        <div className="slider-controls-wrap">
          <Reveal className="heading-note" delay={.12}>
            Hear from homeowners, families and business partners who trusted Thirumala Constructions to build their spaces across Hyderabad.
          </Reveal>
          <div className="slider-nav">
            <span className="slider-counter">0{slide + 1} <span>/ 0{testimonials.length}</span></span>
            <div className="slider-buttons">
              <button 
                type="button" 
                className="slider-btn" 
                onClick={() => setSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)} 
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18}/>
              </button>
              <button 
                type="button" 
                className="slider-btn" 
                onClick={() => setSlide((prev) => (prev + 1) % testimonials.length)} 
                aria-label="Next testimonial"
              >
                <ChevronRight size={18}/>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div 
        className="testimonials-slider"
        style={{ "--slide-index": slide } as React.CSSProperties}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="testimonials-track">
          {sliderCards.map((t, i) => (
            <article className="testimonial-card" key={`${t.name}-${i}`}>
              <div className="testimonial-top">
                <div className="testimonial-stars" aria-label={`${t.rating} out of 5 stars`}>
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} size={15} fill="var(--gold)" color="var(--gold)"/>
                  ))}
                </div>
                <span className="testimonial-tag">{t.tag}</span>
              </div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">
                  {t.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <h4>{t.name}</h4>
                  <p className="testimonial-project">{t.role} · <span>{t.project}</span></p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="slider-dots" aria-label="Testimonial slides pagination">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`slider-dot ${slide === i ? "active" : ""}`}
            onClick={() => setSlide(i)}
            aria-label={`Go to testimonial slide ${i + 1}`}
          />
        ))}
      </div>
    </section>

    <section className="contact section-pad" id="contact">
      <div className="section-kicker"><span>06</span> / START A CONVERSATION</div>
      <div className="contact-grid">
        <Reveal className="contact-copy"><p className="eyebrow">LET'S BUILD SOMETHING MEANINGFUL</p><h2>Your next chapter<br/>starts <em>here.</em></h2><p>Have a residential or commercial construction requirement? Connect with our team to discuss your next project.</p>
          <div className="contact-details"><a href="tel:+919849306675"><Phone size={17}/><span><small>CALL US</small>+91 98493 06675</span><ArrowUpRight size={15}/></a><a href="mailto:thirumalacd2010@gmail.com"><Mail size={17}/><span><small>EMAIL US</small>thirumalacd2010@gmail.com</span><ArrowUpRight size={15}/></a><div><MapPin size={17}/><span><small>VISIT US</small>H No. 1-17/2, 4th Floor, above ICICI Bank, near Uppal Depot, Peerzadiguda, Medipally (M), Medchal-Malkajgiri District – 500039.</span></div></div>
        </Reveal>
        <Reveal delay={.12}><form className="contact-form" onSubmit={submit}><p className="eyebrow">ENQUIRY FORM</p><h3>Tell us what you're looking for.</h3><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Enter your name"/></label><label>Phone number<input required type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="+91"/></label><label>I'm interested in<select value={form.interest} onChange={e=>setForm({...form,interest:e.target.value})}><option>Residential construction</option><option>Commercial construction</option><option>Independent house</option><option>Villa development</option><option>Open plots</option><option>Other enquiry</option></select></label><label>Message<textarea rows={3} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us a little about your project"/></label><button className="button button-dark" type="submit">Send enquiry <ArrowUpRight size={17}/></button><small className="form-note">Your email app will open with the enquiry details ready to send.</small></form></Reveal>
      </div>
    </section>

    <footer className="footer">
      <div className="footer-top">
        <a className="brand brand-footer" href="#top">
          <span className="brand-mark">T<span>.</span></span>
          <span className="brand-name">THIRUMALA<small>CONSTRUCTIONS & DEVELOPERS</small></span>
        </a>
        <p>Building trust. Creating landmarks. Shaping tomorrow.</p>
      </div>

      <div className="footer-middle">
        <div className="footer-social-wrap">
          <span className="footer-social-label">CONNECT WITH US</span>
          <div className="footer-social">
            {socialLinks.map((s) => (
              <a 
                key={s.name} 
                href={s.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link" 
                aria-label={s.label}
              >
                <s.icon size={16}/>
                <span>{s.name}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="footer-contact-summary">
          <span>Hyderabad, Telangana</span>
          <a href="tel:+919849306675">+91 98493 06675</a>
          <a href="mailto:thirumalacd2010@gmail.com">thirumalacd2010@gmail.com</a>
        </div>
      </div>

      <div className="footer-big-brand" aria-hidden="true">
        <span>NIRMAAN<sup>®</sup></span>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Thirumala Constructions & Developers</span>
        <span>HYDERABAD, TELANGANA, INDIA</span>
        <span>BUILT ON TRUST.</span>
      </div>
    </footer>

    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
        >
          <svg className="scroll-progress-ring" viewBox="0 0 48 48" aria-hidden="true">
            <circle
              className="scroll-progress-bg"
              cx="24"
              cy="24"
              r="21"
            />
            <circle
              className="scroll-progress-bar"
              cx="24"
              cy="24"
              r="21"
              style={{
                strokeDasharray: 2 * Math.PI * 21,
                strokeDashoffset: 2 * Math.PI * 21 * (1 - Math.min(Math.max(scrollProgress / 100, 0), 1)),
              }}
            />
          </svg>
          <span className="scroll-top-inner">
            <ArrowUp size={19} strokeWidth={2.4} />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  </main></MotionConfig>;
}
