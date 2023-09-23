import React from "react";
import "./features.css";
import healthcare from "./images/healthcare.jpg";
import wealthcare from "./images/wealthcare.jpg";
import { Link } from "react-router-dom";
import "./features.css"; // Import the CSS file for the button styles

const Features = () => {
  return (
    <div className="outermost-container">
      <div className="title">
        <h1>OUR FEATURES</h1>
      </div>
      <div className="outer-container">
        <div className="inner-container healthcare">
          <img src={healthcare} alt="healthcare" width={300} height={300} />
          <Link to="/healthcare" className="button hc">
            HEALTHCARE
          </Link>
          <p className="feature-description">
            We will provide you the right cure
          </p>
        </div>
        <div className="inner-container wealthcare">
          <img src={wealthcare} alt="wealthcare" width={300} height={300} />
          <Link to="/wealthcare" className="button wc">
            WEALTHCARE
          </Link>
          <p className="feature-description">
            We will provide you the right financial plan
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
