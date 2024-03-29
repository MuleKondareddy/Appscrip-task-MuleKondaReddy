// Skills.js
import React, { Component } from "react";
import "./Skills.css"; // Import CSS file for styling

export default class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
        <h2>Skills</h2>
        <p>
          Here are some skills that we excel at. Our expertise ensures that we
          deliver top-notch solutions to our clients.
        </p>
        <div className="skills-list">
          <div className="skill-item">
            <h3>Web Development</h3>
            <p>
              We specialize in building responsive and user-friendly websites
              using the latest technologies.
            </p>
          </div>
          <div className="skill-item">
            <h3>Mobile App Development</h3>
            <p>
              Our team creates native and cross-platform mobile applications
              that meet the needs of modern businesses.
            </p>
          </div>
          <div className="skill-item">
            <h3>UI/UX Design</h3>
            <p>
              We focus on creating intuitive and visually appealing designs that
              enhance user experience.
            </p>
          </div>
          {/* Add more skill items as needed */}
        </div>
      </div>
    );
  }
}
