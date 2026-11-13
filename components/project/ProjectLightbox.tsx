import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProjectLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  activeImage: number;
  setActiveImage: React.Dispatch<React.SetStateAction<number>>;
  projectName: string;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  isOpen,
  onClose,
  images,
  activeImage,
  setActiveImage,
  projectName,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={onClose}
            aria-label="Close image viewer"
          >
            <X size={24} />
          </button>
          <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[activeImage]}
              alt={`${projectName} Full View`}
              className="lightbox-img"
            />
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className="lightbox-nav-btn prev"
                  onClick={() => setActiveImage((prev) => (prev - 1 + images.length) % images.length)}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  className="lightbox-nav-btn next"
                  onClick={() => setActiveImage((prev) => (prev + 1) % images.length)}
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
