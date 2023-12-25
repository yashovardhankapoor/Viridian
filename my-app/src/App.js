import React from "react";
import Wealthcare from "./Wealthcare";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PreHealth from "./pages/preHealth";
import Tracker from "./pages/Tracker";
import Healthcare from "./pages/Healthcare";
import InvestmentBlog from "./components/Blog";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route exact path="/investmentBlog" element={<InvestmentBlog />} />
        <Route exact path="/healthcare" element={<PreHealth />} />
        <Route exact path="/healthcare/info" element={<Healthcare />} />
        <Route exact path="/healthcare/tracker" element={<Tracker />} />
        <Route exact path="/wealthcare" element={<Wealthcare />} />
      </Routes>
    </Router>
  );
}

export default App;
