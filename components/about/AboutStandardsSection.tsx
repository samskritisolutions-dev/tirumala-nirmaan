"use client";

import { Boxes, Droplets, HardHat, LayoutGrid, Paintbrush, Zap } from "lucide-react";

const standards = [
  {
    num: "01",
    title: "Seismic RCC Structural Design",
    icon: HardHat,
    desc: "Engineered to resist seismic forces compliant with IS 1893 guidelines. Utilizes certified high-ductility Fe 550D TMT steel and ready-mix controlled concrete grades."
  },
  {
    num: "02",
    title: "Kiln-Fired Red Clay Masonry",
    icon: Boxes,
    desc: "We prioritize solid red clay brickwork over hollow blocks. 9-inch outer perimeter walls and 4.5-inch internal partitions provide superior thermal buffering and sound isolation."
  },
  {
    num: "03",
    title: "Certified Electrics & Safe Load Wiring",
    icon: Zap,
    desc: "Concealed fire-retardant low-smoke (FRLS) copper wiring from Havells/Finolex, modular switches, MCBs from Legrand/Anchor, and dedicated air conditioner circuits."
  },
  {
    num: "04",
    title: "Double-Coat Sponge Plaster & Finishes",
    icon: Paintbrush,
    desc: "Smooth double-coat internal plastering with double luppam putty, topped with Asian Paints premium emulsion. Exterior surfaces finished with weather-shield elastomeric coatings."
  },
  {
    num: "05",
    title: "Vitrified Flooring & Teak Joinery",
    icon: LayoutGrid,
    desc: "Premium 800x800mm nano-coated vitrified tiles in all living areas. Manufactured teak wood main door frames with designer brass hardware and flush internal doors."
  },
  {
    num: "06",
    title: "Rainwater Harvesting & Water Security",
    icon: Droplets,
    desc: "Dedicated ground water recharge percolation pits, 24/7 dual water lines connecting municipal supply and borewell, backed by overhead and underground sump storage."
  }
];

export default function AboutStandardsSection() {
  return (
    <section className="about-standards-section section-pad" id="standards">
      <div className="section-kicker"><span>05</span> / QUALITY STANDARDS</div>

      <div className="section-heading">
        <div>
          <p className="eyebrow">CONSTRUCTION EXCELLENCE</p>
          <h2>Engineering benchmarks you <em>can see and verify.</em></h2>
        </div>
        <p className="heading-note">
          We never compromise on the unseen structural core. Every material, cable, brick, and diversion valve is certified for long-term durability.
        </p>
      </div>

      <div className="standards-cards-grid">
        {standards.map((std) => (
          <div className="standard-card" key={std.num}>
            <div className="standard-card-top">
              <div className="standard-icon-box">
                <std.icon size={20} className="gold-icon" />
              </div>
              <span className="standard-num">{std.num}</span>
            </div>
            <h3>{std.title}</h3>
            <p>{std.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
