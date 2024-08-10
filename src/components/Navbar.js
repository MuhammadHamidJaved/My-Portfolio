import "./NavbarStyles.css";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };

  window.addEventListener('scroll', changeNavbarColor);

  return (
  <div className={colorChange ? "header header-bg" : "header"}>
   <Link to="/">
   <h1>Portfolio</h1>
   </Link>
   <ul className={ click ? "nav-menu active" : "nav-menu" }>
   <Link to="/">
    <li>Home</li>
    </Link>
    <Link to="/about">
    <li>About</li>
    </Link>
    <Link to="/project">
    <li>Projects</li>
    </Link>
    <Link to="/contact">
    <li>Contact</li>
    </Link>
   </ul>
   <div className="hamburger"  >
    {click ? <FaTimes size={20} style={{ color: "#fff"}} onClick={handleClick}/> : <FaBars size={20} style={{ color: "#fff"}} onClick={handleClick}/>}
   
   </div>
    
  </div>
  );
};

export default Navbar;
