import {
  AppWindow,
  Bath,
  Boxes,
  Building2,
  DoorClosed,
  Droplets,
  HardHat,
  LayoutGrid,
  Paintbrush,
  Palette,
  Sparkles,
  Utensils,
  Zap,
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
}

export default function ProjectSpecifications({ project }: Props) {
  return (
    <section className="specifications-section section-pad" id="specifications">
      <div className="project-section-head">
        <div className="head-text-group">
          <div className="project-kicker"><span>04</span> / QUALITY STANDARDS</div>
          <p className="eyebrow">SPECIFICATIONS & MATERIALS</p>
          <h2>Built with benchmark<br /><em>materials & methods.</em></h2>
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
  );
}

