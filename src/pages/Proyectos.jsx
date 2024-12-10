import React from "react";
import "./proyectos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projectos() {
  const projects = [
    {
      title: "CRUD",
      image: "/img/proyecto2.png",
      github: "https://github.com/IES-EMILIDARDER/bloc1-php-projecte-alexgragera",
    },
    {
      title: "Portafolio personal",
      image: "/img/proyecto1.png",
      github: "https://github.com/alexgragera/portfolio",
    },
    {
      title: "Netflix",
      image: "/img/netflix.png",
      github: "https://github.com/alexgragera",
    },
  ];

  return (
    <div className="container text-center py-2">
      <h1 className="my-3">Mis Proyectos</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card h-100">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="card-body">
                <h2 className="card-title mt-2">{project.title}</h2>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FontAwesomeIcon icon={faGithub} size="1x" /> Ver en GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}