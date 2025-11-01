import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Testimonials.css";

const testimonialsPrimary = [
  {
    quote:
      "The hands-on training at ISAR gave me the confidence to pursue a career in drone piloting. The instructors were supportive and knowledgeable.",
    author: "Ravi Kumar",
    title: "Drone Pilot Trainee",
  },
  {
    quote:
      "Collaborating with ISAR on 3D printing projects helped our startup bring products to market faster and smarter.",
    author: "Ananya Mehta",
    title: "Entrepreneur",
  },
  {
    quote:
      "The internship program at ISAR was a turning point in my career. I gained both technical expertise and industry exposure.",
    author: "Shivam Patel",
    title: "Intern",
  },
];

function TestimonialCard({ quote, author, title }) {
  return (
    <div className="testimonial-card">
      <div className="">
       
        <p className="testimonial-text mb-3">{quote}</p>
   
        <div className="testimonial-author">
          <div className="author-name">{author}</div>
          <div className="author-title text-muted small">{title}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (

    <div className="testimonial-section-for-home">
      {/* Hero header */}
      <section className="testimonials-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={10} className="mx-auto text-center">
             <div className="sub-title-round">TESTIMONIALS</div>
              <h3 className="main-title-dark">What learners and partners say</h3>
                
              
              <p className="pararaph-small">
                Stories from trainees, interns, and collaborators who built skills and shipped innovation with ISAR.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Primary highlights (3-up) */}
      <div>
        <Container>
          <Row className="g-4">
            {testimonialsPrimary.map((t, i) => (
              <Col key={i} md={6} lg={4}>
                <TestimonialCard {...t} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>

     
    </div>
  
  );
}
