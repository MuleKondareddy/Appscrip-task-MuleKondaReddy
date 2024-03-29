// About.js
import React, { Component } from "react";
import "./About.css"; // Import CSS file for styling

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          gravida massa. Morbi ut risus in tellus fermentum tincidunt. Nulla
          facilisi. Phasellus vel mi nec sem euismod fermentum. Sed sagittis ex
          sed nunc fermentum, ac laoreet odio lacinia. Vestibulum nec accumsan
          lacus, at feugiat lectus. Nam auctor velit et tincidunt tempor.
          Quisque vestibulum felis sit amet eros rhoncus tristique. Donec sit
          amet elit sapien. Cras pharetra pulvinar quam. Duis hendrerit risus
          vel metus ultricies, vitae efficitur velit ultrices. Maecenas ut nisl
          nec lorem pharetra euismod.
        </p>
        <p>
          E-commerce has revolutionized the way we shop. It offers convenience,
          a wide range of products, competitive prices, and doorstep delivery.
          Whether you're shopping for electronics, clothing, groceries, or
          anything else, e-commerce platforms provide a seamless experience that
          caters to your needs.
        </p>
      </div>
    );
  }
}
