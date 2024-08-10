import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./FooterStyles.css";

import React from "react";

const Footer = () => {
  return <div className="footer">
    <div className="footer-container">
      <div className="left">
      <div className="location">
      <FaHome size={20} style={{color: "#fff" ,marginRight: "2rem"}} />
        <p>House No E19/7F Millat Road Link Ghazi Road.</p>
        <p>Lahore.</p>
      </div>
      <div className="phone">
        <h4>
        <FaPhone size={20} style={{color: "#fff" ,marginRight: "2rem"}} />  
        0321-1418038
        </h4>
      </div>
      <div className="email">
        <h4>
        <FaMailBulk size={20} style={{color: "#fff" ,marginRight: "2rem"}} />  
        hamidrana1975@gmail.com
        </h4>
      </div>
      </div>
      <div className="right">
      <h4>About Me</h4>
      <p>
        I am a Computer Science Student. I am a Full Stack Developer. I have a passion for learning and sharing my knowledge with others as publicly as possible. If you found value in something I have created, please feel free to send me a message. I would love to hear from you. 
      </p>
      <div className="social">
      <a href="https://www.facebook.com/profile.php?id=100013190042392" target="_blank" rel="noreferrer">
      <FaFacebook size={30} style={{color: "#fff" ,marginRight: "1rem"}} /> 
      </a>
      <a href="https://x.com/RanaHam08451438?t=2Z9ROuvjdxOzVX1DOvzngg&s=08" target="_blank" rel="noreferrer">
      <FaTwitter size={30} style={{color: "#fff" ,marginRight: "1rem"}} />
      </a>
      <a href="https://www.instagram.com/ranahamid18/?igsh=azRwc2Ixam9tMmdl&utm_source=qr" target="_blank" rel="noreferrer">
      <FaInstagram size={30} style={{color: "#fff" ,marginRight: "1rem"}} />  
      </a>
      <a href="https://www.linkedin.com/in/rana-hamid-6aa8412b1/" target="_blank" rel="noreferrer">
      <FaLinkedin size={30} style={{color: "#fff" ,marginRight: "1rem"}} />
      </a>
       
      </div>
      </div>
    </div>
     
  </div>;
};

export default Footer;
