"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  isDetailPage?: boolean;
  activeNav?: "home" | "about" | "expertise" | "projects" | "testimonials";
}

export default function Header({ isDetailPage = false, activeNav }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/", id: "home" },
    { label: "About", href: "/about", id: "about" },
    { label: "Expertise", href: "/#expertise", id: "expertise" },
    { label: "Projects", href: "/projects", id: "projects" },
    { label: "Testimonials", href: "/testimonials", id: "testimonials" },
  ];

  return (
    <>
      <header className="header">
        <Link className="brand" href="/" aria-label="Thirumala home">
          <img
            src="/logo.svg"
            alt="Thirumala Constructions & Developers"
            className="brand-logo"
            width="160"
            height="54"
          />
        </Link>

        <nav className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeNav ? activeNav === link.id : (isDetailPage && link.id === "projects");
            return (
              <Link
                key={link.label}
                href={link.href}
                className={isActive ? "active-nav-link" : ""}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {isDetailPage ? (
          <div className="header-right-actions">
            <Link href="/projects" className="header-back-link">
              <ArrowLeft size={16} />
              <span>All Projects</span>
            </Link>
            <a
              className="header-cta"
              href="https://wa.me/919849306675?text=Hello%20Thirumala%20Team%2C%20I%20would%20like%20to%20enquire%20about%20your%20projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire Now <ArrowUpRight size={16} />
            </a>
          </div>
        ) : (
          <a className="header-cta" href="/#contact">
            Contact Us <ArrowUpRight size={16} />
          </a>
        )}

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {isDetailPage ? (
              <a
                href="#enquiry"
                className="mobile-cta"
                onClick={() => setMenuOpen(false)}
              >
                Enquire About Project <ArrowUpRight size={16} />
              </a>
            ) : (
              <a
                href="/#contact"
                className="mobile-cta"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us <ArrowUpRight size={16} />
              </a>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
