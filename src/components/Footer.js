// components/Footer.js
import React, { Component } from "react";
import "./Footer.css"; // Import CSS file for styling

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__section">
          <div className="footer__sectionTitle">ABOUT US</div>
          <p>Learn more about our company and values.</p>
        </div>
        <div className="footer__section">
          <div className="footer__sectionTitle">CUSTOMER CARE</div>
          <ul className="footer__list">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Shipping Information</li>
            <li>Returns & Exchanges</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer__section">
          <div className="footer__sectionTitle">POLICIES</div>
          <ul className="footer__list">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="footer__section">
          <div className="footer__sectionTitle">CONNECT WITH US</div>
          <ul className="footer__social">
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-linkedin"></i>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <div className="footer__sectionTitle">CONTACT INFO</div>
          <p>123 Street, City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
