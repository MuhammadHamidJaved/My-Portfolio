import "./WorkCardStyles.css";
import React from "react";
import ProjectCardData from "./WorkCardData";
import WorkCard from "./WorkCard";

const Work = (props) => {
  return <div className="project-card">
    <h1 className="project-heading">
     Projects
    </h1>
    <div className="project-container">
      {ProjectCardData.map((project, index) => {
        return <WorkCard key={index} image={project.image} title={project.title} description={project.description} link={project.link} />;
      })}

  </div>;
  </div>;
};

export default Work;
