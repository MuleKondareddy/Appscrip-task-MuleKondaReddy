// ContactUs.js
import React, { Component } from "react";
import "./ContactUs.css"; // Import CSS file for styling

export default class ContactUs extends Component {
  render() {
    return (
      <div className="contact-us-container">
        <h2>Contact Us</h2>
        <p>
          Feel free to reach out to us with any questions, feedback, or
          inquiries. We're here to help you!
        </p>
        <div className="contact-info">
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Street, City, Country</p>
        </div>
      </div>
    );
  }
}
