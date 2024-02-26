import React from "react";
import "./port.css";
import { Route, Routes } from "react-router-dom";
import Project from "./Project";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Website from "./Website";
import Desktop from "./Desktop";
import OtherProject from "./OtherProject";
import MobileApp from "./MobileApp";
import Resume from "./Resume";
import Service from "./Service";
import Experience from "./Experience";

const Rourtingpage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Project />} />
        <Route>
        
          <Route path="/portfolio/website" element={<Website />} />
          <Route path="/portfolio/desktop" element={<Desktop />} />
          <Route path="/portfolio/other" element={<OtherProject />} />
          <Route path="/portfolio/mobileapp" element={<MobileApp />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
};

export default Rourtingpage;
