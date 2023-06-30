import React, { useEffect } from 'react';
import "./Feature.css";
import featureImage1 from "../../Feature1 image.webp";
import featureImage2 from "../../feature2.jpeg";
import featureImage3 from "../../Feature1 image.webp";

const FeaturesSection = () => {
  useEffect(() => {
    const featureCards = document.querySelectorAll('.feature-card');
    let currentIndex = 0;

    const showCard = (index) => {
      featureCards.forEach((card, i) => {
        if (i === index) {
          card.style.transform = 'translateX(0)';
        } else {
          card.style.transform = 'translateX(100%)';
        }
      });
    };

    const nextCard = () => {
      currentIndex = (currentIndex + 1) % featureCards.length;
      showCard(currentIndex);
    };

    setInterval(nextCard, 1000);
    showCard(currentIndex);
  }, []);

  return (
    <section className="features-section">
      <div className="container">
        <h2>Our Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src={featureImage1} alt="Feature 1" />
            <h3>Feature 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="feature-card">
            <img src={featureImage2} alt="Feature 2" />
            <h3>Feature 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="feature-card">
            <img src={featureImage3} alt="Feature 3" />
            <h3>Feature 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
