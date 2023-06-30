import React from 'react';
import "./testominal.css";
import customerImage1 from "../../Avtar1.jpg";
import customerImage2 from "../../Avtar2.jpg";

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              "Cred has helped me manage my finances effectively and save
              money. Highly recommended!"
            </p>
            <div className="testimonial-info">
              <img src={customerImage1} alt="John Doe" />
              <div>
                <h4>John Doe</h4>
                <p>CEO, ABC Company</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              "The services provided by Cred are top-notch. I'm impressed with
              their professionalism and expertise."
            </p>
            <div className="testimonial-info">
              <img src={customerImage2} alt="Jane Smith" />
              <div>
                <h4>Jane Smith</h4>
                <p>Designer, XYZ Agency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
