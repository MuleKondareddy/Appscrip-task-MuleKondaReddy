// Stories.js
import React, { Component } from "react";
import "./Stories.css"; // Import CSS file for styling

export default class Stories extends Component {
  render() {
    return (
      <div className="stories-container">
        <h2>Stories</h2>
        <p>
          Explore inspiring stories from our customers, partners, and team
          members.
        </p>
        <div className="story-list">
          <div className="story-item">
            <h3>Customer Success</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              vitae risus id lacus hendrerit posuere at ac metus. Sed
              ullamcorper, justo sed ultricies blandit.
            </p>
          </div>
          <div className="story-item">
            <h3>Team Achievements</h3>
            <p>
              Integer tincidunt tortor nec tortor mattis, non consequat urna
              tincidunt. Ut maximus, nisi in tincidunt pharetra, tortor arcu
              venenatis nulla.
            </p>
          </div>
          <div className="story-item">
            <h3>Partnerships</h3>
            <p>
              Fusce hendrerit nisl vitae justo facilisis, vel ullamcorper lorem
              fermentum. Ut malesuada urna ut nibh suscipit, eget ultrices est
              efficitur.
            </p>
          </div>
          {/* Add more story items as needed */}
        </div>
      </div>
    );
  }
}
