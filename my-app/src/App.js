// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home"; // Import the Home component
import Healthcare from "./pages/Healthcare";
import WealthcareFeature from "./Home"; // Import the WealthcareFeature from Home.js

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/healthcare" element={<Healthcare />} />
        <Route exact path="/wealthcare" element={<WealthcareFeature />} />
      </Routes>
    </Router>
  );
}

export default App;
