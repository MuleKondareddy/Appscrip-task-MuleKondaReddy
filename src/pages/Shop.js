// Shop.js
import React, { Component } from "react";
import "./Shop.css"; // Import CSS file for styling

export default class Shop extends Component {
  render() {
    return (
      <div className="shop-container">
        <h2>Shop</h2>
        <p>
          Welcome to our shop! Browse our collection of products and find great
          deals.
        </p>
        <div className="product-list">
          <div className="product-item">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              className="product-image"
            />
            <p className="product-name">Product 1</p>
            <p className="product-price">$10.99</p>
          </div>
          <div className="product-item">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              className="product-image"
            />
            <p className="product-name">Product 2</p>
            <p className="product-price">$19.99</p>
          </div>
          <div className="product-item">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              className="product-image"
            />
            <p className="product-name">Product 3</p>
            <p className="product-price">$14.99</p>
          </div>
          {/* Add more product items as needed */}
        </div>
      </div>
    );
  }
}
