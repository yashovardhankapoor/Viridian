import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";
import logo from "./images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="links">
        {/* Use the Link component to navigate to the root URL */}
        <Link to="/" className="nav-button">
          Home
        </Link>
        <Link to="/" className="nav-button"></Link>
      </div>
    </div>
  );
};

export default Navbar;
