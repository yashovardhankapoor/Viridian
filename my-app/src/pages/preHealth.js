/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import "./css/preHealth.css";
import healthfinderImage from "./images/healthfinder.png";
import infoimg from "./images/info.png";
import Navbar from "../components/Navbar";

function PreHealth() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle the click on the "Tracker" section image
  const handleTrackerClick = () => {
    navigate("/healthcare/info");
  };

  const handleTrackerClick1 = () => {
    navigate("/healthcare/tracker");
  };

  return (
    <div className="prehealth-container">
       <Navbar />
      <div className="page-divider">
        <div className="left-section" onClick={handleTrackerClick}>
          <img src={infoimg} alt="Image 1" className="section-image" />
          <h1 className="text"></h1>
        </div>
        <div className="separator"></div>
        <div className="right-section" onClick={handleTrackerClick1}>
          <img
            src={healthfinderImage}
            alt="Image 2"
            className="section-image"
          />
          <h1 className="text"></h1>
        </div>
      </div>
    </div>
  );
}

export default PreHealth;
