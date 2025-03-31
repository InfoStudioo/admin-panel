import React from 'react';
import '../styles/footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <div className="footer">
      {/* Footer Content in Three Horizontal Sections */}
      <div className="footer-sections">
        {/* First Section: Company Name, Tagline, and Social Media Icons */}
        <div className="footer-section">
          <div className="footer-logo">
            <h3 className="company-name">Company Name</h3>
            <p className="tagline">"Empowering your business for a brighter future"</p>
          </div>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>

        {/* Second Section: Contact Us */}
        <div className="footer-section">
          <div className="contact-us">
            <h4>Contact Us</h4>
            <p>Phone: +1 234 567 890</p>
            <p>Email: contact@company.com</p>
          </div>
        </div>

        {/* Third Section: About Us */}
        <div className="footer-section">
          <div className="about-us">
            <h4>About Us</h4>
            <p>Address: 123 Business St, Business City, BC 45678</p>
          </div>
        </div>
      </div>

      <p className="copyright">© 2024 Admin Panel</p>
    </div>
  );
};

export default Footer;
