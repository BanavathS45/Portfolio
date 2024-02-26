import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="aboutdiv">
        <div className="aboutMe">
          <div className="profilePic">
            <img src="./photo.jpg " alt="" />
          </div>
          <h4>ABOUT ME</h4>
          👋 Hi there! I'm [Banavath Prashanth], a passionate full-stack
          developer with a keen eye for crafting clean, efficient, and scalable
          code. With a blend of creativity and technical expertise, I thrive in
          turning ideas into robust digital solutions.
          <br />
          <br />
          <h5>My Journey</h5>
          <p>
          
            My journey into the world of software development began [X years
            ago], sparked by a curiosity for problem-solving and a fascination
            with technology. Since then, I've embarked on a continuous learning
            path, honing my skills across various technologies and
            methodologies.
          </p>
          <h5>Expertise</h5>
          <p>
            {" "}
            As a full-stack developer, I'm proficient in both front-end and
            back-end technologies. On the front end, I specialize in crafting
            responsive and intuitive user interfaces using modern frameworks
            such as React.js and Angular. Leveraging my solid understanding of
            HTML5, CSS3, and JavaScript, I strive to deliver seamless user
            experiences across devices and platforms.
          </p>
          <p>
            On the back end, I'm well-versed in building scalable and efficient
            server-side applications using frameworks like Node.js, Express.js,
            and Django. I have experience designing and implementing RESTful
            APIs, handling data storage with relational and NoSQL databases, and
            ensuring the security and performance of web applications.
          </p>
          <h5>My Approach</h5>
          <p>
            I believe in the power of collaboration and iteration in software
            development. Whether I'm working independently or as part of a team,
            I value open communication, constructive feedback, and continuous
            improvement. I'm passionate about writing clean, maintainable code
            and following best practices in software engineering, such as
            test-driven development and Agile methodologies.
          </p>
          <h5>My Mission</h5>
          <p>
            My mission as a full-stack developer is to leverage technology to
            solve real-world problems and create meaningful experiences for
            users. Whether it's building innovative web applications, optimizing
            existing systems, or exploring emerging technologies, I'm dedicated
            to delivering high-quality solutions that make a positive impact.
          </p>
          <h5>Let's Connect</h5>
          <p>
            I'm always excited to collaborate on new projects, exchange ideas,
            and learn from fellow developers and industry professionals. Feel
            free to reach out to me via [email/LinkedIn/website], and let's turn
            your vision into reality together!
          </p>
          <div className="info-Btn">
            <Link to="/contact" className="btn border-warning project-btn  ">
              HIRE ME
            </Link>

            <Link to="/resume" className="btn border-warning contact-btn ms-3">
              RESUME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
