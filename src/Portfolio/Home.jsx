import React from "react";
 
import { Link } from "react-router-dom";
import About from './About';
import Project from './Project'
import Service from './Service'
import Experience from './Experience'
import Contact from './Contact'
const Home = () => {
  return (
    <>
      <div id="hero-page" >
        <div className="info">
          <div className="details">
            <p>HI, I AM BANAVATH PRASHANTH</p>
            <h1>FULL STACK DEVELOPER</h1>
            <div className="info-Btn">
              <Link to="/portfolio" className="btn border-warning project-btn  mx-3">
                PROJECT
              </Link>
              <Link to="/contact" className="btn border-warning contact-btn">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="components">
        <About/>
        <Project/>
        <Service/>
        <Experience/>
        <Contact/>
      </div>
      
    </>
  );
};

export default Home;
