import React from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h3 className="contact-title">Have Questions? We’re Here to Help!</h3>
      <p className="contact-description">
        Need assistance with sizing, orders, or styling tips? Reach out to us!
      </p>

      <address className="contact-info">
        <ul className="contact-list">
          <li className="contact-list-item">
            <strong>Address:</strong> Thannuthu 8/32, Tenkasi, Tamil Nadu
          </li>
          <li className="contact-list-item">
            <strong>Phone:</strong> 8838238122
          </li>
          <li className="contact-list-item">
            <strong>Email:</strong> chandru@gmail.com
          </li>
        </ul>
      </address>
    </div>
  );
};

export default Contact;
