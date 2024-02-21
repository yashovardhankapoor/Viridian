import React from "react";
import Navbar from "./components/Navbar";
import BigDiv from "./components/bigDiv";
import Features from "./components/features";
import {Carousel} from "./components/Carousel.js";
import ContactUsPage from "./components/ContactUsPage";
import Footer from "./components/Footer.js";
import "./Home.css"; // Import the CSS file for homepage styles


function Home() {
  return (
    <div>
      <Navbar />
      <BigDiv />
      <Features />
      <hr />
      <Carousel />
      <hr />
      <ContactUsPage />
      <Footer />
      {/* Add any other content specific to your homepage */}
      <div style={{ display: "flex", justifyContent: "center" }}>
      </div>
    </div>
  );
}

export default Home;
