// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home"; // Import the Home component
import Healthcare from "./pages/Healthcare";
import WealthcareFeature from "./Home"; // Import the WealthcareFeature from Home.js
import PreHealth from "./pages/preHealth";
import Tracker from "./pages/Tracker";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/healthcare" element={<PreHealth />} />
        <Route exact path="/healthcare/info" element={<Healthcare />} />
        <Route exact path="/healthcare/tracker" element={<Tracker />} />
        <Route exact path="/wealthcare" element={<WealthcareFeature />} />
      </Routes>
    </Router>
  );
}

export default App;
