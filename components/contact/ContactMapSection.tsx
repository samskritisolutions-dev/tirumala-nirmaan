"use client";

import { MapPin, Navigation, Compass, ExternalLink } from "lucide-react";

export default function ContactMapSection() {
  const officeAddress =
    "H No. 1-17/2, 4th Floor, above ICICI Bank, near Uppal Depot, Peerzadiguda, Medipally (M), Medchal-Malkajgiri District – 500039.";

  const mapsSearchUrl =
    "https://www.google.com/maps/search/?api=1&query=Thirumala+Constructions+Peerzadiguda+Hyderabad";

  const landmarks = [
    { title: "Uppal Metro Station (Blue Line)", distance: "5 mins drive" },
    { title: "Uppal Central Bus Depot", distance: "2 mins walk" },
    { title: "Outer Ring Road (ORR) Ghatkesar Exit", distance: "8 mins drive" },
    { title: "Rajiv Gandhi International Cricket Stadium", distance: "6 mins drive" }
  ];

  return (
    <section className="contact-map-section">
      <div className="section-container">
        <div className="map-section-header">
          <div>
            <span className="section-tag-gold">
              <Navigation size={13} />
              FIND OUR LOCATION
            </span>
            <h2 className="section-title-large">
              Visit Our <em>Head Office</em>
            </h2>
            <p className="section-desc">
              Conveniently situated on the main arterial corridor of Peerzadiguda near Uppal Depot, easily accessible from all parts of Hyderabad.
            </p>
          </div>

          <a
            href={mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-gold map-open-link"
          >
            <span>Open in Google Maps</span>
            <ExternalLink size={15} />
          </a>
        </div>

        <div className="map-embed-layout">
          {/* Map Frame */}
          <div className="map-frame-wrapper">
            <iframe
              title="Thirumala Constructions Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15227.185790691456!2d78.5830919!3d17.4215286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9ebf66bb63a3%3A0xe1084b39b33a598c!2sPeerzadiguda%2C%20Hyderabad%2C%20Telangana%20500039!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-iframe"
            />
          </div>

          {/* Location Details Side Card */}
          <div className="map-details-card">
            <div className="office-address-block">
              <div className="address-icon-wrap">
                <MapPin size={22} />
              </div>
              <div>
                <h4>Main Office & Experience Desk</h4>
                <p>{officeAddress}</p>
              </div>
            </div>

            <div className="transit-connectivity-block">
              <div className="transit-title-row">
                <Compass size={16} />
                <span>KEY TRANSIT CONNECTIVITY</span>
              </div>
              <ul className="transit-list">
                {landmarks.map((l) => (
                  <li key={l.title}>
                    <span className="transit-name">{l.title}</span>
                    <strong className="transit-dist">{l.distance}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="office-hours-block">
              <span className="hours-label">VISITING HOURS</span>
              <p>Monday – Saturday: 9:30 AM – 7:30 PM</p>
              <small>Sunday visits available by prior appointment</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
