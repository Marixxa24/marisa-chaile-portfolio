import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS } from "../data/projects";
import "../styles/Projects.css";

// Los proyectos de data/projects.js se muestran al instante y sirven de respaldo
// si el backend no responde; si la API devuelve datos, reemplazan a estos.
const FALLBACK_PROJECTS = PROJECTS.map((p) => ({
  _id: p.name,
  title: p.name,
  description: p.description,
  image: p.img || "",
  technologies: p.tech,
  githubUrl: p.url && p.url.includes("github.com") ? p.url : null,
  liveUrl: p.url && !p.url.includes("github.com") ? p.url : null,
  category: p.category,
}));

const Projects = () => {
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";
      const response = await axios.get(`${apiUrl}/api/projects`, {
        timeout: 8000,
      });
      if (Array.isArray(response.data) && response.data.length > 0) {
        setProjects(response.data);
      }
    } catch (error) {
      // Sin backend se mantienen los proyectos de respaldo
      console.warn("No se pudo cargar /api/projects, se muestran los de respaldo:", error.message);
    }
  };

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="projects-page">
      <h1 className="page-title">Mis Proyectos</h1>

      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          Todos
        </button>
        <button
          className={filter === "frontend" ? "active" : ""}
          onClick={() => setFilter("frontend")}
        >
          Frontend
        </button>
        <button
          className={filter === "fullstack" ? "active" : ""}
          onClick={() => setFilter("fullstack")}
        >
          Full Stack
        </button>
        <button
          className={filter === "qa" ? "active" : ""}
          onClick={() => setFilter("qa")}
        >
          QA
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.length === 0 ? (
          <p className="no-projects">No hay proyectos para mostrar.</p>
        ) : (
          filteredProjects.map((project) => (
            <div key={project._id} className="project-card">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              ) : (
                <div className="project-image project-image-placeholder">
                  <span>{project.title}</span>
                </div>
              )}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <FaGithub /> Código
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;