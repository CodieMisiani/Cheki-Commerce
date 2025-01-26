import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          {/* Company Info */}
          <h3 className="footer-heading">Cheki Commerce</h3>
          <p>Your trusted partner in e-commerce.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Home</a></li>
            <li><a href="#" className="footer-link">Shop</a></li>
            <li><a href="#" className="footer-link">About Us</a></li>
            <li><a href="#" className="footer-link">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4 className="footer-heading">Contact Us</h4>
          <p className="footer-text">Email: info@chekicommerce.com</p>
          <p className="footer-text">Phone: +123-456-7890</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; {currentYear} Cheki Commerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
