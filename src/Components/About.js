import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h3 className="about-title">Redefining Men's Fashion with Style & Elegance</h3>
      <p className="about-description">
        At Chandru Fashions, we believe fashion is more than just clothing—it’s a statement. 
        Our mission is to bring you premium quality, trendy designs, and affordable fashion that enhances your personality.
      </p>

      <h3 className="about-heading">Why Choose Us?</h3>
      <ul className="about-list">
        <li className="about-list-item">Handpicked Trends & Styles</li>
        <li className="about-list-item">Premium Quality Fabrics</li>
        <li className="about-list-item">Affordable Luxury</li>
      </ul>

      <p className="about-footer">Join us on this style journey and redefine your wardrobe!</p>
    </div>
  );
};

export default About;
