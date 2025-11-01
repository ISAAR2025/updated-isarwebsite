// src/components/Institute.jsx
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/instituteshort.css";

// Replace with real images
import imgPilot from "../assets/images/c1.webp";
import imgSurvey from "../assets/images/c2.webp";
import imgResearch from"../assets/images/c3.webp";

const CourseCard = ({ img, title, bullets = [], applyHref = "#",  delay = 0 }) => (
  <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={delay}>
    <div className="card h-100 border-0 shadow-sm course-card">
      <div className="ratio ratio-16x9">
        <img src={img} alt={title} className="img-cover rounded-top" />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-2">{title}</h5>
        <ul className="list-unstyled small text-muted mb-3">
          {bullets.map((line, i) => (
            <li key={i} className="mb-1">• {line}</li>
          ))}
        </ul>
        <div className="mt-auto d-flex gap-2 flex-wrap">
          <a href={applyHref} className="btn btn-primary btn-sm">Apply Now</a>
          
        </div>
      </div>
    </div>
  </div>
);

export default function Institute() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out", once: false, mirror: true, offset: 80 });
  }, []);

  return (
    <div id="our-institute" className="institute-wrap section-instiute border-top">
      <div className="container">
           <div className="text-center align-items-center flex-wrap flex-direction-column">

        <div className="sub-title-round">Our Institute</div>
        <h3 className="main-title-dark">Train with experts. Earn certifications.<br/> Launch a career in drones.</h3>
        <p className="pararaph-small">
          At ISAR Institute, the next generation of drone professionals receive hands‑on training,<br/> globally recognized certifications, and placement support—spanning pilot licensing, aerial survey, and industry R&D projects.
        </p>
            

        {/* Three main course cards */}
        <div className="row g-4 mt-1">
          <CourseCard
            img={imgPilot}
            title="Master Certificate in Industry-Oriented Drone Applications"
            bullets={[
             
              "3D mapping, site inspections, and progress monitoring for safer, data-driven decision making.",
             
            ]}
            applyHref="courses/master-certificate-in-advanced-drone-applications-and-technologies"
            brochureHref="/brochure/drone-pilot.pdf"
            delay={0}
          />
          <CourseCard
            img={imgSurvey}
            title="Professional Certificate in Unmanned Aerial Vehicle"
            bullets={[
              "Advanced Flight Dynamics: UAV stability, control algorithms, and environmental effects.",
            ]}
            applyHref="courses/professional-certificate-in-unmanned-aerial-systems-uas-operations"
            brochureHref="/brochure/aerial-survey.pdf"
            delay={80}
          />
          <CourseCard
            img={imgResearch}
            title="Advance Certificate in Unmanned Aerial Vehicle"
            bullets={[
              "Advanced Flight Dynamics: UAV stability, control algorithms, and environmental effects.",
              
            ]}
            applyHref="courses/advanced-certificate-in-drone-technology-and-applications"
            brochureHref="/brochure/research-labs.pdf"
            delay={160}
          />
        </div>

        {/* View all + Visit CTA row */}
        <div className="row mt-4 align-items-center" data-aos="fade-up">
          <div className="col-md">
            <a href="/institute" className="btn btn-primary btn-lg">View All Courses</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
