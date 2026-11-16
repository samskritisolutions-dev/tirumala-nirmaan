"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "Can I inspect the construction quality before booking an ongoing flat?",
    a: "Yes, absolutely. We welcome all prospective homebuyers to visit our active sites in Peerzadiguda, Nagole, and Parvathapur. You can inspect column curing, brickwork, rebar tying, and plumbing setups firsthand with our civil engineering supervisors."
  },
  {
    q: "Are all Thirumala residences 100% Vastu compliant?",
    a: "Yes. Every apartment and independent home layout is planned strictly in accordance with Vastu Shastra principles — including main door entry orientations, northeast open zones, southeast (Agni) kitchen positioning, and southwest master bedrooms."
  },
  {
    q: "What documentation and legal approvals do you provide?",
    a: "We maintain complete title transparency. Every project comes with clear link documents spanning 30+ years, sanctioned building plans from GHMC / HMDA, RERA registrations where applicable, and occupancy / fire safety certificates upon completion."
  },
  {
    q: "Do you facilitate home loans with nationalized and private banks?",
    a: "Yes. All our ongoing and completed projects are pre-approved by leading financial institutions including SBI, HDFC, ICICI, and LIC Housing Finance, enabling quick loan appraisals and hassle-free disbursements."
  },
  {
    q: "What after-sales or handover support is provided once we move in?",
    a: "We provide dedicated handover assistance including joint snag checks before possession, utility account transitions (electricity meters, water supply), and guidance to the resident welfare association for smooth building maintenance."
  }
];

export default function TestimonialsFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="testimonials-faq-section" id="faq">
      <div className="section-container">
        <div className="section-header-centered">
          <span className="section-tag-gold">
            <HelpCircle size={13} />
            COMMON QUESTIONS
          </span>
          <h2 className="section-title-large">
            Frequently Asked <em>Questions</em>
          </h2>
          <p className="section-desc-center">
            Everything you need to know about our construction standards, documentation, and buying process.
          </p>
        </div>

        <div className="faq-accordion-wrap">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`faq-item-card ${isOpen ? "open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <span className="faq-icon-arrow">
                    <ChevronDown size={18} />
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer-pane">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
