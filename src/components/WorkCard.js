import "./WorkCardStyles.css";
import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return( 
      <div className="project-card">
        <img src={props.image} alt="project1" />
        <h2 className="project-title">{props.title}</h2>
        <div className="project-description">
          <p>{props.description}</p>
          <div className="pro-btns">
            <NavLink to={props.link} className="btn">Details</NavLink>  
            <NavLink to="/contact" className="btn btn-light">Contact</NavLink>
          </div>
      </div>
  </div>
);
  
};

export default WorkCard;
