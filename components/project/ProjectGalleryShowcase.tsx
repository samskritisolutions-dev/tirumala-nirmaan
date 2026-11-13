"use client";

import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { ProjectDetail } from "@/data/projects";

interface Props {
  project: ProjectDetail;
  images: string[];
  activeImage: number;
  setActiveImage: React.Dispatch<React.SetStateAction<number>>;
  setLightboxOpen: (open: boolean) => void;
}

export default function ProjectGalleryShowcase({
  project,
  images,
  activeImage,
  setActiveImage,
  setLightboxOpen,
}: Props) {
  return (
    <section className="project-gallery-section section-pad" id="gallery">
      <div className="project-section-head">
        <div className="head-text-group">
          <div className="project-kicker"><span>01</span> / VISUAL SHOWCASE</div>
          <p className="eyebrow">GALLERY & ELEVATION</p>
          <h2>Architecture built for<br /><em>lasting impression.</em></h2>
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
              <Maximize2 size={14} />
              <span>Full View</span>
            </button>
          </div>
        </div>
      </div>

      <div className="showcase-container">
        <div className="showcase-main" onClick={() => setLightboxOpen(true)}>
          <img
            src={images[activeImage]}
            alt={`${project.name} Elevation ${activeImage + 1}`}
            className="showcase-img"
          />
          <div className="showcase-overlay-bar">
            <div className="showcase-caption">
              <strong>{project.name}</strong>
              <span>Architectural Elevation · Photo 0{activeImage + 1} of 0{images.length}</span>
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
  );
}

