import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const data = [
  {
    image: "./P_assets/project1.png",
    title: "title",
    para: "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt illum repellat eaque aliquid tenetur, sapiente deserunt ad delectus temporibus!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt illum repellat eaque aliquid tenetur, sapiente deserunt ad delectus temporibus!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt illum repellat eaque aliquid tenetur, sapiente deserunt ad delectus temporibus!",
  },
  {
    image: "./P_assets/project2.png",
    title: "title",
    para: "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt illum repellat eaque aliquid tenetur, sapiente deserunt ad delectus temporibus!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt illum repellat eaque aliquid tenetur, sapiente deserunt ad delectus temporibus!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt illum repellat eaque aliquid tenetur, sapiente deserunt ad delectus temporibus!",
  },
  {
    image: "./P_assets/project3.png",
    title: "title",
    para: "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt illum repellat eaque aliquid tenetur, sapiente deserunt ad delectus temporibus!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt illum repellat eaque aliquid tenetur, sapiente deserunt ad delectus temporibus!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt illum repellat eaque aliquid tenetur, sapiente deserunt ad delectus temporibus!",
  },
  {
    image: "./P_assets/project1.png",
    title: "title",
    para: "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt illum repellat eaque aliquid tenetur, sapiente deserunt ad delectus temporibus!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt illum repellat eaque aliquid tenetur, sapiente deserunt ad delectus temporibus!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt illum repellat eaque aliquid tenetur, sapiente deserunt ad delectus temporibus!",
  },
];
const Project = () => {
  const [show, setShow] = useState(true);
  const [showTitle, setShowTitle] = useState(true);
  const handleShow = () => {
    setShow(!show);
    setShowTitle(!showTitle);
  };
  const firsttwo = data.slice(0, 2);
  console.log(firsttwo);
  return (
    <div className="projectMain">
      <div className="project-title">
        <h1>PROJECTS</h1>
      </div>
      <div className="routers">
        <NavLink to="portfolio">Portfolio</NavLink>
        <NavLink to="mobileapp">Mobile</NavLink>
        <Link to="website">Website</Link>
        <Link to="desktop">Desktop</Link>
        <Link to="other">Other Projects</Link>
      </div>
      {show ? (
        <div id="project">
          {firsttwo.map((items, index) => {
            const { image, title, para } = items;
            return (
              <div className="projectdiv" key={index}>
                <div
                  className="prodiv"
                  style={{
                    flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                  }}
                >
                  <div className="projectPic">
                    <img src={image} alt="" />
                  </div>

                  <div className="projectDetails">
                    <h4>{title}</h4>
                    <p>{para}</p>
                    <p>
                      <FontAwesomeIcon icon={faArrowRight} />
                      &nbsp;&nbsp; Readmore ...
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div id="project">
          {data.map((items, index) => {
            const { image, title, para } = items;
            console.log(data);
            return (
              <div className="projectdiv" key={index}>
                <div
                  className="prodiv"
                  style={{
                    flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                  }}
                >
                  <div className="projectPic">
                    <img src={image} alt="" />
                  </div>

                  <div className="projectDetails">
                    <h4>{title}</h4>
                    <p>{para}</p>
                    <p className="readmoreArrow">
                      <FontAwesomeIcon icon={faArrowRight}  />
                      &nbsp;&nbsp; Readmore ...
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="showMore-btn">
        <Link
          className="btn border-warning project-btn text-white"
          onClick={handleShow}
        >
          {showTitle ? " SHOW MORE" : " SHOW LESS"}
        </Link>
      </div>
    </div>
  );
};

export default Project;
