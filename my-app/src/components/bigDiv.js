import React from "react";
import elderlyCare from "./images/elderly-care.jpg";
import "./bigDiv.css";

const bigDiv = () => {
  return (
    <div className="outerDiv">
      <div className="bigDiv">
        <img src={elderlyCare} alt="elderly-care" className="bigImage1"></img>
      </div>
      <div className="text-center">
        <div className="heading animated-text">WE ARE VIRIDIAN</div>
        <div className="oneLine animated-text">
          <p className="para1">A</p>
          <p className="para">Holistic</p>
          <p className="para">Platform</p>
          <p className="para">For</p>
          <p className="para">Your</p>
          <p className="para">Healthcare & Wealthcare</p>
          {/* <p className="para">And</p>
          <p className="para">Wealthcare.</p> */}
        </div>
      </div>
    </div>
  );
};

export default bigDiv;
