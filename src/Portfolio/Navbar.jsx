import { faBarcode, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(true);
  const handleBar = () => {
   
    setShow(!show);
    const bars = document.querySelector(".Nav-menu");
    const listItem = document.querySelectorAll("li");
    for (let i = 0; i < listItem.length; i++) {
      console.log(listItem[i]);
      {
        show ? bars.classList.add("hide") : bars.classList.remove("hide");
      }
      
      listItem[i].addEventListener("click",(i)=>{
        setShow(true);
        bars.classList.remove("hide")
         
      })
    }
   
   
  };
  return (
    <div>
      <nav className="navbar " id="top">
        <div className="headerBar ">
          <Link to="/">
            <img src="./haanvikaLogo1.png" alt="" width={"70%"} />
          </Link>
          {show ? (
            <FontAwesomeIcon
              icon={faBars}
              className="bars"
              onClick={handleBar}
            />
          ) : (
            <FontAwesomeIcon
              icon={faTimes}
              className="bars"
              onClick={handleBar}
            />
          )}
        </div>
        <ul className="Nav-menu  ">
          <NavLink to="/">
            <li className="listitem " >HOME</li>
          </NavLink>
          <NavLink to="/about">
            <li className="listitem">ABOUT ME</li>
          </NavLink>
          <NavLink to="/portfolio">
            <li className="listitem">PORTFOLIO</li>
          </NavLink>
          <NavLink to="/service">
            <li className="listitem">SERVICES</li>
          </NavLink>
          <NavLink to="/experience">
            <li className="listitem">EXPERIENCE</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="listitem">CONTACT</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
