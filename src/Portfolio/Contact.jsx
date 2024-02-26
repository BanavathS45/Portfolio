import React from "react";
import {
  faAddressCard,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { faFacebook, faInstagram, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  const form = useRef();
  const handlesubmit = (e) => {
    alert("form submitted");

    e.preventDefault();

    emailjs
      .sendForm("service_96x6r1u", "template_n4ghlyo", form.current, {
        publicKey: "CBOIAGyBpGzdM93XU",
      })

      .then(
        () => {
          alert("SUCCESS!");
          console.log("SUCCESS!");
        },
        (error) => {
          alert("FAILED...", error.text);
          console.log("FAILED...", error.text);
        }
      );
    form.current.reset();
  };
  return (
    <div className="projectMain">
      <div className="project-title">
        <h1>CONTACT</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div className="dropmsg">
              <h2>Drop Me a Message</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, ipsum?
              </p>
              <div className="phone">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                &nbsp;&nbsp;
                <a href="tel:7842259803">+91 7842259803</a>
              </div>
              <div className="email">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                &nbsp;&nbsp;
                <a href="mailto:prashanthr803@gmail.com">
                  prashanthr803@gmail.com
                </a>
              </div>
              <div className="adress">
                <FontAwesomeIcon icon={faAddressCard} className="icon" />
                &nbsp;&nbsp;
                <p>
                  H.No:5-13,&nbsp; Bhagath Singh Nagar,&nbsp; Goleti,
                  &nbsp;Rebbana, &nbsp;&nbsp; Kumaram Bheem (Asf),
                  &nbsp;Telangana-India, &nbsp;504292
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <form id="form" ref={form}>
              <div className="container">
                <div className="row">
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Name"
                    // value="name"
                    name="name"
                  />
                  {/* <label htmlFor="name" className="namec">
                    Name
                  </label> */}
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                  />
                  <textarea
                    name="message"
                    id="area"
                    cols="5"
                    rows="5"
                    placeholder="Massage"
                    className="form-control"
                  ></textarea>
                  <Link className="submit-Btn1" onClick={handlesubmit}>
                    Submit
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <footer>
          <div className="headerBar ">
            <Link to="/">
              <img src="./haanvikaLogo1.png" alt="" width={"70%"} />
            </Link>
          </div>
          <p>2024-Haanvika Technologies, All Rights Reserved</p>
          <div className="socialIcons">
            <div className="facebook">
            <a  href="https://www.facebook.com" target="_blank" className="facebook">
              <FontAwesomeIcon  icon={faFacebook} className="icon" title="Facebook"/>
            </a>
            </div>
            <div className="insta">
            <a  href="https://www.instagram.com" target="_blank" className="facebook">
            <FontAwesomeIcon icon={faInstagram} className="icon" title="Instagram"/>
            </a>
            
            </div>
            <div className="linked">
            <a  href="https://www.linkedin.com" target="_blank" className="facebook">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" title="LinkedIn"/>
            </a>
             
            </div>
            <div className="whats">
            <a  href="https://www.whatsup.com" target="_blank" className="facebook">
            <FontAwesomeIcon icon={faWhatsapp} className="icon" title="WhatsUp"/>
            </a>
            
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
