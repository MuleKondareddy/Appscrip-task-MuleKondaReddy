// components/Header.js
import React, { Component } from "react";
import "./Header.css"; // Import CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faHeart,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <img src="" alt="Logo" />
        </div>
        <div className="header__search">
          <input type="text" placeholder="Search products..." />
          <button>Search</button>
        </div>
        <div className="header__actions">
          <div className="header__action">
            <FontAwesomeIcon icon={faUser} /> Sign In
          </div>
          <div className="header__action">
            <FontAwesomeIcon icon={faHeart} /> Wishlist
          </div>
          <div className="header__action">
            <FontAwesomeIcon icon={faBell} /> Notifications
          </div>
          <div className="header__action">
            <FontAwesomeIcon icon={faShoppingCart} /> Cart
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
