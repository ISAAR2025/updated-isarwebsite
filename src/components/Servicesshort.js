import React, { useEffect, useRef, useState } from "react";
import {  Row, Col } from "react-bootstrap";
import "../styles/ServicesShort.css";

import iconTraining from "../assets/icons/training.webp";
import iconSurvey from "../assets/icons/survey.webp";
import iconPrinting from "../assets/icons/printing.webp";
import iconIndustrial from "../assets/icons/industrial.webp";

const SERVICES = [
  {
    key: "training",
    title: "Drone Training & Pilot Certification",
    text: "Hands-on training, licensing guidance, simulators.",
    icon: iconTraining,
  },
  {
    key: "survey",
    title: "Aerial Surveys and Drone Research",
    text: "GIS, photogrammetry, inspection, data analytics.",
    icon: iconSurvey,
  },
  {
    key: "printing",
    title: "Advanced 3D Printing & Prototyping",
    text: "Rapid prototypes to end‑use parts with FDM/resin.",
    icon: iconPrinting,
  },
  {
    key: "industrial",
    title: "Industrial & Aerospace Solutions",
    text: "Custom components, tooling, and field‑ready parts.",
    icon: iconIndustrial,
  },
];

/* Small helper to add .is-visible when a tile enters viewport */
function RevealOnScroll({ children, delayMs = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            // Stagger reveal with an optional delay
            const t = setTimeout(() => setVisible(true), delayMs);
            io.unobserve(el);
            return () => clearTimeout(t);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={`reveal-up ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}

function ServiceTile({ title, text, icon }) {
  return (
    <div className="card border-0 shadow-sm service-tile h-100">
      <div className="tile-inner p-3 p-lg-4">
        <div className="tile-icon-wrap">
          {icon ? (
            <img src={icon} alt={title} className="tile-icon" />
          ) : (
            <div className="tile-icon placeholder" aria-hidden="true">★</div>
          )}
        </div>
        <h5 className="tile-title mb-2">{title}</h5>
        <p className="tile-text mb-0 text-muted small">{text}</p>
      </div>
    </div>
  );
}

export default function ServicesShort() {
  return (
    <div id="our-institute" className="services-wrap section-white border-top">
      <div className="container"></div>
           <div className="text-center align-items-center flex-wrap flex-direction-column">

            <div className="sub-title-round">Our Services</div>
             <h3 className="main-title-dark">Empowering Innovation in Science & Aerospace</h3>
              <p className="pararaph-small">
              ISAR delivers expert drone training, aerial research, and advanced 3D printing solutions<br/> for science and industry. Our innovative services empower clients to achieve precision, safety, and efficiency in every project.
             </p>
        
            <div className="container">
        <Row className="g-4">
          {SERVICES.map((s, idx) => (
            <Col key={s.key} md={6} lg={3}>
              <RevealOnScroll delayMs={80 * idx}>
                <ServiceTile title={s.title} text={s.text} icon={s.icon} />
              </RevealOnScroll>
            </Col>
          ))}
        </Row>
        </div>
        <div className="mt-4 text-center">
           <a href="/services" className="btn btn-primary btn-lg">
            See Full Services
          </a>
        </div>
        </div>
    </div>
  );
}
