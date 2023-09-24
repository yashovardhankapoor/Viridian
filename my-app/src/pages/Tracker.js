import React from "react";
import "./css/Tracker.css";

function Tracker() {
  return (
    <div>
      {/* Transparent Navbar */}
      <div className="navbar">
        <span className="brand"></span>
      </div>
      
      {/* Widget Content */}
      <div className="widget-container">
        <iframe
          src="https://www.health.gov/myhealthfinder?widget=true"
          name="myhealthfinderframe"
          frameBorder="0"
          id="myhealthfinderframe"
          scrolling="yes"
          title="okokok"
          style={{ border: "none", width: "100%", height: "100vh" }}
        >
          Your browser does not support iframes.
        </iframe>
      </div>
    </div>
  );
}

export default Tracker;

