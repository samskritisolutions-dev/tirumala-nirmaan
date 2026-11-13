import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageCircle, Youtube } from "lucide-react";

export const socialLinks = [
  { name: "WhatsApp", href: "https://wa.me/919849306675", icon: MessageCircle, label: "Chat on WhatsApp" },
  { name: "Instagram", href: "https://www.instagram.com/thirumala_constructions", icon: Instagram, label: "Follow on Instagram" },
  { name: "Facebook", href: "https://www.facebook.com/thirumalaconstructions", icon: Facebook, label: "Like on Facebook" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/thirumala-constructions", icon: Linkedin, label: "Connect on LinkedIn" },
  { name: "YouTube", href: "https://www.youtube.com/@thirumalaconstructions", icon: Youtube, label: "Watch on YouTube" }
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link className="brand brand-footer" href="/" aria-label="Thirumala home">
          <img
            src="/logo-white.svg"
            alt="Thirumala Constructions & Developers"
            className="brand-logo brand-logo-footer"
            width="175"
            height="60"
          />
        </Link>
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
                <s.icon size={16} />
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
  );
}
