"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
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
  );
}
