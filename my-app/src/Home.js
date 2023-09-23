// Home.js
import React from "react";
import Navbar from "./components/Navbar";
import BigDiv from "./components/bigDiv";
import Features from "./components/features";
import "./Home.css"; // Import the CSS file for homepage styles

function Home() {
  return (
    <div>
      <Navbar />
      <BigDiv />
      <hr />
      <Features />
      {/* Add any other content specific to your homepage */}
    </div>
  );
}

export default Home;
