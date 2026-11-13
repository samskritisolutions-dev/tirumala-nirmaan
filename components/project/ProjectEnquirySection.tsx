import React from "react";
import { ArrowUpRight, Check, FileText, MessageCircle, Phone } from "lucide-react";
import type { ProjectDetail } from "@/data/projects";

interface EnquiryFormData {
  name: string;
  phone: string;
  email: string;
  visitDate: string;
  notes: string;
}

interface ProjectEnquirySectionProps {
  project: ProjectDetail;
  whatsappUrl: string;
  submitted: boolean;
  setSubmitted: (val: boolean) => void;
  enquiryForm: EnquiryFormData;
  setEnquiryForm: React.Dispatch<React.SetStateAction<EnquiryFormData>>;
  handleEnquirySubmit: (e: React.FormEvent) => void;
}

export const ProjectEnquirySection: React.FC<ProjectEnquirySectionProps> = ({
  project,
  whatsappUrl,
  submitted,
  setSubmitted,
  enquiryForm,
  setEnquiryForm,
  handleEnquirySubmit,
}) => {
  return (
    <section className="project-enquiry-section section-pad" id="enquiry">
      <div className="enquiry-card-wrap">
        <div className="enquiry-card-info">
          <p className="eyebrow light">DIRECT DEVELOPER ENQUIRY</p>
          <h2>Interested in<br /><em>{project.name}?</em></h2>
          <p className="enquiry-desc">
            Schedule a personalized site tour, request unit availability, or discuss customized construction requirements directly with our promoter and technical team.
          </p>

          <div className="direct-contacts">
            <a href="tel:+919849306675" className="contact-pill">
              <Phone size={16} />
              <span>+91 98493 06675</span>
            </a>
            <a href="mailto:thirumalacd2010@gmail.com" className="contact-pill">
              <FileText size={16} />
              <span>thirumalacd2010@gmail.com</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill whatsapp-pill"
            >
              <MessageCircle size={16} />
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>
        </div>

        <div className="enquiry-card-form">
          {submitted ? (
            <div className="enquiry-success-message">
              <div className="success-icon-wrap">
                <Check size={28} />
              </div>
              <h3>Thank you for reaching out!</h3>
              <p>Your enquiry for <strong>{project.name}</strong> has been received. Our sales and engineering team will contact you shortly.</p>
              <button type="button" className="button button-gold" onClick={() => setSubmitted(false)}>
                Submit Another Query
              </button>
            </div>
          ) : (
            <>
              <h3>Book a Site Visit / Request Brochure</h3>
              <form onSubmit={handleEnquirySubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    required
                    value={enquiryForm.name}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={enquiryForm.phone}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                      placeholder="+91 Phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      value={enquiryForm.email}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                      placeholder="yourname@gmail.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="date">Preferred Site Visit Date</label>
                  <input
                    id="date"
                    type="date"
                    value={enquiryForm.visitDate}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, visitDate: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Notes / Specific Queries</label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={enquiryForm.notes}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, notes: e.target.value })}
                    placeholder={`Tell us what you'd like to see at ${project.name}...`}
                  />
                </div>

                <button type="submit" className="button button-gold form-submit-btn">
                  Submit Project Enquiry <ArrowUpRight size={17} />
                </button>
                <small className="form-note">
                  Your email application will open ready to send directly to our team.
                </small>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
