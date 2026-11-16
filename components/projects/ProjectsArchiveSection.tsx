"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, CheckCircle2, Search, ArrowUpRight, MapPin } from "lucide-react";

interface ArchiveProject {
  id: string;
  name: string;
  location: string;
  type: string;
  slug?: string;
}

const archiveList: ArchiveProject[] = [
  { id: "01", name: "Thirumala Towers", location: "Indira Nagar, Ramanthapur", type: "Residential", slug: "thirumala-towers" },
  { id: "02", name: "D-Mart", location: "Ramanthapur", type: "Commercial" },
  { id: "03", name: "Thirumala Apartments", location: "Balaji Hills, Boduppal", type: "Residential", slug: "thirumala-apartments" },
  { id: "04", name: "Thirumala Towers", location: "Medipally", type: "Residential" },
  { id: "05", name: "Thirumala Towers", location: "Boduppal", type: "Residential" },
  { id: "06", name: "Hasini Enclave", location: "Chilakanagar, Boduppal", type: "Residential" },
  { id: "07", name: "Kesava Residency", location: "Boduppal", type: "Residential", slug: "kesava-residency" },
  { id: "08", name: "Sagar Simha Nilayam", location: "Yapral", type: "Residential" },
  { id: "09", name: "Thirumala Residency", location: "Chilakanagar, Boduppal", type: "Residential" },
  { id: "10", name: "Thirumala Heights", location: "Swaroop Nagar, Uppal", type: "Residential" },
  { id: "11", name: "60 Independent Houses", location: "Balaji Hills & Rajeshekar Colony", type: "Independent Homes" },
  { id: "12", name: "SV’s Manik Arcade", location: "Bulkampet, Ameerpet", type: "Commercial", slug: "svs-manik-arcade" },
  { id: "13", name: "Kesava Residency", location: "Near NTR Statue, Boduppal", type: "Residential" }
];

export default function ProjectsArchiveSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<"all" | "residential" | "commercial" | "independent">("all");

  const filtered = archiveList.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;
    if (selectedType === "residential") return item.type.toLowerCase().includes("residential");
    if (selectedType === "commercial") return item.type.toLowerCase().includes("commercial");
    if (selectedType === "independent") return item.type.toLowerCase().includes("independent");
    return true;
  });

  return (
    <section className="projects-archive-section" id="archive">
      <div className="section-container">
        <div className="archive-header-row">
          <div>
            <span className="section-tag-gold">DELIVERED TRACK RECORD</span>
            <h2 className="section-title-large">
              Complete Completed <em>Directory</em>
            </h2>
            <p className="section-desc">
              Every project delivered on time with 100% clear titles, rigorous civil engineering oversight, and lasting structural quality across Hyderabad.
            </p>
          </div>

          <div className="archive-controls">
            <div className="archive-search-box">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search by name or area..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="archive-search-input"
              />
            </div>

            <div className="archive-type-filter">
              <button
                className={`type-pill ${selectedType === "all" ? "active" : ""}`}
                onClick={() => setSelectedType("all")}
              >
                All (13)
              </button>
              <button
                className={`type-pill ${selectedType === "residential" ? "active" : ""}`}
                onClick={() => setSelectedType("residential")}
              >
                Residential
              </button>
              <button
                className={`type-pill ${selectedType === "commercial" ? "active" : ""}`}
                onClick={() => setSelectedType("commercial")}
              >
                Commercial
              </button>
            </div>
          </div>
        </div>

        <div className="archive-table-card">
          <div className="archive-table-header">
            <span>#</span>
            <span>PROJECT NAME</span>
            <span>CATEGORY</span>
            <span>LOCATION</span>
            <span>STATUS</span>
          </div>

          <div className="archive-table-body">
            {filtered.map((item) => (
              <div key={item.id} className="archive-row">
                <span className="archive-col-num">{item.id}</span>
                <div className="archive-col-name">
                  {item.slug ? (
                    <Link href={`/projects/${item.slug}`} className="archive-name-link">
                      <strong>{item.name}</strong>
                      <ArrowUpRight size={14} />
                    </Link>
                  ) : (
                    <strong>{item.name}</strong>
                  )}
                </div>
                <div className="archive-col-type">
                  <span className={`archive-badge ${item.type.toLowerCase().includes("commercial") ? "badge-comm" : "badge-res"}`}>
                    {item.type}
                  </span>
                </div>
                <div className="archive-col-loc">
                  <MapPin size={13} />
                  <span>{item.location}</span>
                </div>
                <div className="archive-col-status">
                  <span className="status-delivered">
                    <CheckCircle2 size={13} />
                    Delivered
                  </span>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="archive-empty">
                <Building2 size={32} />
                <p>No projects match your search filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
