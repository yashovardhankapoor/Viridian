// Navbar.js
import React from "react";
import "./Navbar.css";
import logo from "./images/company-logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="links">
        <button className="nav-button">Home</button>
        <button className="nav-button">About</button>
      </div>
    </div>
  );
};

export default Navbar;
