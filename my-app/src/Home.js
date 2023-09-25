import React from "react";
import Navbar from "./components/Navbar";
import BigDiv from "./components/bigDiv";
import Features from "./components/features";
import "./Home.css"; // Import the CSS file for homepage styles
import { Carousel } from "./Carousel/Carousel";

function Home() {
  return (
    <div>
      <Navbar />
      <BigDiv />
      <hr />
      <Features />
      <hr />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Carousel />
      </div>
    </div>
  );
}

export default Home;
