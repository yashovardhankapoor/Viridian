import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import Routes instead of Switch
import "./App.css";
import Navbar from "./components/Navbar";
import BigDiv from "./components/bigDiv";
import Features from "./components/features";

function HealthcareFeature() {
  return (
    <div>
      <h2>Healthcare Feature</h2>
      {/* Add healthcare feature content here */}
    </div>
  );
}

function WealthcareFeature() {
  return (
    <div>
      <h2>Wealthcare Feature</h2>
      {/* Add wealthcare feature content here */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <BigDiv />
        <hr />
        <Features />

        {/* Define routes using Routes */}
        <Routes>
          <Route path="/healthcare" element={<HealthcareFeature />} />
          <Route path="/wealthcare" element={<WealthcareFeature />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
