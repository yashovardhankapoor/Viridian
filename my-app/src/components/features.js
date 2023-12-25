import React from "react";
import healthcare from "./images/healthcare.jpg";
import wealthcare from "./images/wealthcare.jpg";
import { Link } from "react-router-dom";
import "./features.css"; // Import the CSS file for the button styles

const Features = () => {
  return (
    <div className="outermost-container">
      <div className="title">
        EXPLORE OUR FEATURES!
      </div>
      <div className="outer-container">
        <div className="inner-container healthcare">
          <img src={healthcare} alt="healthcare" width={300} height={300} />
          <div className="feature-description">
            We will provide the right cure to you. Let us know what symptoms you are facing and will will give all the relevant information required to cure those symptoms. We will make sure you are fit and fine again!
          </div>
          <Link to="/healthcare" className="button hc">
            HEALTHCARE
          </Link>
        </div>
        <div className="inner-container wealthcare">
          <img src={wealthcare} alt="wealthcare" width={300} height={300} />
          <p className="feature-description">
            We will provide the right financial plan to you. Give us a brief on how much you are willing to invest. Next step is to just sit back and relax, and plan those vacations to your dream destinations!
          </p>
          <Link to="/investmentBlog" className="button wc">
            WEALTHCARE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
