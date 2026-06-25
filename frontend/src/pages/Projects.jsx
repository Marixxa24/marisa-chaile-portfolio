import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/projects`,
      );
      setProjects(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setLoading(false);
    }
  };

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  if (loading) {
    return <div className="loading">Cargando proyectos...</div>;
  }

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
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project._id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
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
        ))}
      </div>
    </div>
  );
};

export default Projects;
