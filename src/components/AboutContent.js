  import { Link } from "react-router-dom";
  import "./AboutContentStyles.css";

  import React from "react";

  const AboutContent = () => {
    return <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am a passionate Computer Science student at FAST NUCES Lahore with a strong foundation in programming and web development. I have hands-on experience in developing both front-end and back-end systems, including dynamic web applications and ticket management platforms. My projects showcase my ability to apply Object-Oriented Programming principles, data structures, and algorithms to solve real-world problems. I am continuously improving my skills in web technologies, particularly in React, and am driven by a desire to excel in the field of science and technology.</p>
        <Link to="/contact" className="btn">Contact Me</Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src="https://itechnolabs.ca/wp-content/uploads/2022/07/describe-the-mern-stack-itechnolabs.jpg" className="img" alt="React" />
          </div>
          
          <div className="img-stack bottom">
            <img src="https://i.ytimg.com/vi/B31LgI4Y4DQ/maxresdefault.jpg" className="img" alt="React1" /></div>
            </div>
        </div>
    </div>;
  };

  export default AboutContent;
