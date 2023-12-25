// import React from "react";
// import "./Navbar.css";
// import logo from "./images/logo.png";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="logo">
//         <img src={logo} alt="Company Logo" />
//       </div>
//       <div className="links">
//         <button className="nav-button">Home</button>
//         <button className="nav-button">About</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-left">
      <div className="logo">
        <Link to="/">
          VIRIDIAN
        </Link>
      </div>
    </div>
      <div className="navbar-right">
        <div className="nav-item">About</div>
        <div className="nav-item">Enquiry</div>
      </div>
    </nav>
  );
};

export default Navbar;

