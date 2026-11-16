"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const contactFaqs: FaqItem[] = [
  {
    q: "Do I need an appointment before visiting the head office or construction sites?",
    a: "While walk-ins are always welcome at our Peerzadiguda office during business hours (9:30 AM – 7:30 PM), booking an appointment in advance allows us to arrange dedicated time with promoter G V Sudhakara Rao and provide personal transportation for site walk-throughs."
  },
  {
    q: "Can I bring my own structural engineer or Vastu consultant for inspection?",
    a: "Absolutely. We encourage prospective buyers to bring their independent structural engineers, architects, or family Vastu consultants. We maintain full open-book transparency on all blueprints, rebar grades, and concrete cube test results."
  },
  {
    q: "How soon can I expect a response after submitting the enquiry form?",
    a: "Our customer advisory team guarantees a direct phone or WhatsApp response within 2 business hours. If you submit outside business hours, we contact you early the following morning."
  },
  {
    q: "Are site visits and technical consultations completely free of charge?",
    a: "Yes. All our project visits, Vastu floor plan briefings, and title deed reviews are complimentary with zero sales pressure or obligation."
  }
];

export default function ContactFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="contact-faq-section">
      <div className="section-container">
        <div className="section-header-centered">
          <span className="section-tag-gold">
            <HelpCircle size={13} />
            HAVE QUESTIONS?
          </span>
          <h2 className="section-title-large">
            Contact & Visit <em>FAQs</em>
          </h2>
          <p className="section-desc-center">
            Common questions regarding office visits, site inspections, and developer consultations.
          </p>
        </div>

        <div className="faq-accordion-wrap">
          {contactFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.q} className={`faq-item-card ${isOpen ? "open" : ""}`}>
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
