import { faAngular, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import {
    faAngleLeftRight,
  faAngleRight,
  faDesktop,
  faLanguage,
  faMobile,
  faSlash,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Service = () => {
  return (
    <div className="projectMain">
      <div className="project-title">
        <h1>SERVICES</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 box">
            <div className="videoEdit">
              <div className="videoTitle ">
                <span>
                  <FontAwesomeIcon icon={faVideo} />
                </span>
                <h2>VIDEO EDTING</h2>
              </div>
              <div className="videoDeatils">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempore architecto minima enim. Nisi laborum officiis aperiam
                  neque fugit hic cumque. Distinctio fuga optio commodi, ad
                  provident officia accusantium rerum asperiores quia accusamus
                  cum possimus eos nisi voluptate placeat rem quam amet mollitia
                  eius eligendi dolore. Distinctio provident minima nihil
                  assumenda.
                </p>
              </div>
            </div>
          </div>
          {/* box-2 */}
          <div className="col-6 box">
            <div className="videoEdit">
              <div className="videoTitle ">
                <span>
                  <FontAwesomeIcon icon={faMobile} />
                </span>
                <h2> MOBILE APP DEVELOPMENT</h2>
              </div>
              <div className="videoDeatils">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempore architecto minima enim. Nisi laborum officiis aperiam
                  neque fugit hic cumque. Distinctio fuga optio commodi, ad
                  provident officia accusantium rerum asperiores quia accusamus
                  cum possimus eos nisi voluptate placeat rem quam amet mollitia
                  eius eligendi dolore. Distinctio provident minima nihil
                  assumenda.
                </p>
              </div>
            </div>
          </div>
          {/* box-3 */}
          <div className="col-6 box">
            <div className="videoEdit">
              <div className="videoTitle ">
                <span>
                  <FontAwesomeIcon icon={faDesktop} />
                </span>
                <h2>DESKTOP APP DEVELOPMENT</h2>
              </div>
              <div className="videoDeatils">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempore architecto minima enim. Nisi laborum officiis aperiam
                  neque fugit hic cumque. Distinctio fuga optio commodi, ad
                  provident officia accusantium rerum asperiores quia accusamus
                  cum possimus eos nisi voluptate placeat rem quam amet mollitia
                  eius eligendi dolore. Distinctio provident minima nihil
                  assumenda.
                </p>
              </div>
            </div>
          </div>
          {/* box-4 */}
          <div className="col-6 box">
            <div className="videoEdit">
              <div className="videoTitle ">
                <span>
               &lt;/&gt;
                </span>
                
                <h2>PROGRAMMING LANGUAGES</h2>
              </div>
              <div className="videoDeatils">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempore architecto minima enim. Nisi laborum officiis aperiam
                  neque fugit hic cumque. Distinctio fuga optio commodi, ad
                  provident officia accusantium rerum asperiores quia accusamus
                  cum possimus eos nisi voluptate placeat rem quam amet mollitia
                  eius eligendi dolore. Distinctio provident minima nihil
                  assumenda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
