import React from 'react';
import "./patnersction.css";
import partnerLogo1 from "../../partner 1.jpg";
import partnerLogo2 from "../../Partner2.png";
import partnerLogo3 from "../../Partner2.png";

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <div className="container">
        <h2>Our Partners</h2>
        <div className="partner-logos">
          <img src={partnerLogo1} alt="Partner 1" />
          <img src={partnerLogo2} alt="Partner 2" />
          <img src={partnerLogo3} alt="Partner 3" />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
