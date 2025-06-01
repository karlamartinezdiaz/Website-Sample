//import { useState } from "react";
//import { L } from "vitest/dist/chunks/reporters.d.C-cu31ET.js";
import "./App.css";
//import Navbar from "./components/navbar/navMenu";
import ContactMePage from "./pages/ContactMe/contactMe";
import LandingPage from "./pages/landingPage/LandingPage";
import MusicPage from "./pages/musicPage/musicPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/contact" element={<ContactMePage />} />
      </Routes>
    </Router>
  );
}

export default App;
