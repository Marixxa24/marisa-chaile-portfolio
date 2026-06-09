import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaDownload,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import "../styles/Home.css";

// Tecnologías flotantes en el fondo
const FLOATING_TECHS = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "React Native",
  "Firebase",
  "REST API",
  "JWT",
  "Git",
  "Tailwind",
  "MUI",
  "WordPress",
  "Postman",
  "Scrum",
];

// Habilidades por categoría
const SKILLS_CATEGORIES = {
frontend: [
  "React",
  "Next.js", 
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "Material UI (MUI)",
  "Bootstrap",
  "HTML5 / CSS3",
  "Vite",
],
  backend: [
    "Node.js",
    "Express",
    "Java / Spring Boot",
    "Python",
    "REST APIs",
    "JWT",
  ],
database: [
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Mongoose",
],
  tools: [
    "Git / GitHub",
    "Vercel / Railway",
    "Cloudinary",
    "WordPress",
    "Figma",
    "UML",
    "OpenAI API",
    "Scrum / Agile",
  ],
};

// Experiencia laboral
const EXPERIENCES = [
  {
    title: "Becaria en Desarrollo Web",
    company: "Organización y Desarrollo",
    date: "2024 – 2025",
    location: "La Rioja, Argentina",
    achievements: [
      "Desarrollo y despliegue de sitios en WordPress para clientes reales y Apps Android con WebView",
      "Integración de herramientas de IA Generativa para acelerar el refactorizado de código y la depuración",
      "Trabajo en entornos Ágiles para garantizar la entrega continua de funcionalidades",
    ],
  },
  {
    title: "Proyecto Educativo YacuRAl",
    company: "Universidad Nacional de La Rioja",
    date: "Mayo 2024",
    location: "La Rioja, Argentina",
    achievements: [
      "Colaboración en desarrollo e implementación de soluciones basadas en IA Generativa para entornos educativos",
      "Contribución con ideas para optimizar procesos de implementación",
      "Trabajo en equipo con investigadores y desarrolladores",
    ],
  },
  {
    title: "Congreso Argentino de Ciencias de la Computación (CACIC)",
    company: "Universidad Nacional de La Rioja",
    date: "Octubre 2022",
    location: "La Rioja, Argentina",
    achievements: [
      "Coordinación de aspectos logísticos para la realización exitosa del evento científico",
      "Asistencia y orientación a los asistentes durante todo el congreso",
    ],
  },
];

// Certificaciones
const CERTIFICATIONS = [
  "Proyecto PILAR TECNO 6ta Edición - MERN STACK",
  "Argentina Programa - Introducción a la programación",
  "Desarrollo web con React js - UTN",
  "Mujeres Programadoras - Núcleo del conocimiento",
  "Git - GitHub_TodoCode",
  "PYTHON - FRONT END 2024",
  "WordPress - Canvas",
  "Testing QA (en curso)",
];

// Proyectos destacados
const PROJECTS = [
  {
    name: "Fut Rioja",
    description: "Sistema B2B / SAAS + E-commerce para gestión comercial",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    features: [
      "Autenticación JWT",
      "Panel de administración",
      "Carrito de compras",
      "Pasarela de pagos",
    ],
  },
  {
    name: "Portfolio Personal",
    description: "Portfolio interactivo con stack MERN y diseño femenino/tech",
    tech: ["React", "Node.js", "Express", "MongoDB", "Framer Motion"],
    features: [
      "Cursor personalizado",
      "Animaciones",
      "Tecnologías flotantes",
      "Formulario de contacto",
    ],
  },
];

const Home = () => {
  const canvasRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const [activeSkill, setActiveSkill] = useState("frontend");
  const location = useLocation();

  // Scroll to section on landing
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const id = location.state.scrollTo.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const fullText = "INGENIERÍA EN SISTEMAS · FULL STACK · QA LEARNING";

  // Efecto de escritura
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Canvas: tecnologías flotantes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const techs = FLOATING_TECHS.map((tech) => ({
      text: tech,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      size: 11 + Math.random() * 6,
      opacity: 0.12 + Math.random() * 0.15,
      hue: Math.random() > 0.5 ? 330 : 260,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      techs.forEach((tech) => {
        ctx.font = `${tech.size}px 'Space Mono', monospace`;
        ctx.fillStyle = `hsla(${tech.hue}, 75%, 65%, ${tech.opacity})`;
        ctx.fillText(tech.text, tech.x, tech.y);
        tech.x += tech.vx;
        tech.y += tech.vy;
        if (tech.x < -80) tech.x = canvas.width + 50;
        if (tech.x > canvas.width + 80) tech.x = -80;
        if (tech.y < -40) tech.y = canvas.height + 40;
        if (tech.y > canvas.height + 40) tech.y = -40;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div className="home">
        <canvas ref={canvasRef} className="pf-canvas" />
        <div className="pf-grid-overlay" />
        <div className="pf-scanline" />

        {/* ──────────────────────────────────────── */}
        {/* HERO SECTION */}
        {/* ──────────────────────────────────────── */}
        <section id="hero" className="pf-hero">
          <div className="pf-hero-left">
            <div className="pf-badge">
              <span className="pf-badge-dot" />
              full-stack developer · open to work
            </div>

            <h1 className="pf-title">
              <span className="pf-title-plain">Hola, soy</span>
              <span className="pf-title-grad">Marisa Chaile</span>
              <span className="pf-title-italic">
                Construyendo experiencias digitales modernas y funcionales.
              </span>
            </h1>

            <p className="pf-sub">
              {typedText}
              <span className="pf-cursor-blink">_</span>
            </p>

            <p className="pf-desc">
              Estudiante avanzada de Ingeniería y Licenciatura en Sistemas de
              Información, actualmente capacitándome en Testing QA y tecnologías
              multiplataforma.
              <span className="pf-asasas">
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }} 
                  className="pf-sub"
                >
                  
                </a>{" "}
              </span>
            </p>

            <div className="pf-btn-row">
              <Link to="/projects" className="pf-btn-main">
                Ver proyectos →
              </Link>
              <Link to="/contact" className="pf-btn-outline">
                Contactarme
              </Link>
              <a href="/cv-marisa-chaile.pdf" download className="pf-btn-pdf">
                <FaDownload /> Descargar CV
              </a>
            </div>

            <div className="pf-info-links">
              <div className="pf-info-item">
                <span className="pf-info-label">
                  <FaEnvelope />
                </span>
                <a href="mailto:marisasolchaille@gmail.com">
                  marisasolchaille@gmail.com
                </a>
              </div>
              <div className="pf-info-item">
                <span className="pf-info-label">
                  <FaMapMarkerAlt />
                </span>
                <span>La Rioja, Argentina</span>
              </div>
              <div className="pf-info-item">
                <span className="pf-info-label">
                  <FaCalendarAlt />
                </span>
                <span>Disponible desde 2025</span>
              </div>
            </div>

            <div className="pf-social-row">
              <a
                href="https://github.com/marisa-chaile"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/marisa-chaile"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          <div className="pf-hero-right">
            <div className="pf-character-container">
              {/* Floating tech icons */}
              <div className="pf-floating-icon fi-react" title="React"><FaReact /></div>
              <div className="pf-floating-icon fi-node" title="Node.js"><FaNodeJs /></div>
              <div className="pf-floating-icon fi-git" title="Git"><FaGitAlt /></div>
              <div className="pf-floating-icon fi-figma" title="Figma"><FaFigma /></div>
              <div className="pf-floating-icon fi-python" title="Python"><FaPython /></div>
              
              <div className="pf-character-image-wrapper">
                <img 
                  src="/assets/girl_standing.png " 
                  alt="Marisa Chaile - 3D Avatar" 
                  className="pf-character-img" 
                />
              </div>
            </div>

            <div className="pf-stats">
              <div className="pf-stat-card">
                <span className="pf-stat-number">+2</span>
                <span className="pf-stat-label">años de experiencia</span>
              </div>
              <div className="pf-stat-card">
                <span className="pf-stat-number">proyectos realizados</span>
                <span className="pf-stat-label">+ por realizar</span>
              </div>
              <div className="pf-stat-card">
                <span className="pf-stat-number">∞</span>
                <span className="pf-stat-label">Mate 🧉 · código</span>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────── */}
        {/* ABOUT ME SECTION */}
        {/* ──────────────────────────────────────── */}
        <section id="about" className="pf-about-section">
          <div className="section-container">
            <div className="about-grid">
              <div className="about-left">
                <div className="about-character-wrapper">
                  <img 
                    src="/assets/girl_sitting.png" 
                    alt="Marisa Chaile - 3D Sitting Avatar" 
                    className="about-char-img" 
                  />
                </div>
              </div>
              
              <div className="about-right">
                <div className="about-card">
                  <h2 className="about-title">Sobre mí</h2>
                  <ul className="about-list">
                    <li>
                      <span className="about-bullet" />
                      <div>
                        <strong>Estudiante Avanzada de Sistemas:</strong> Cursando Ingeniería en Sistemas de Información en la Universidad Nacional de La Rioja, apasionada por la tecnología, el código y la computación.
                      </div>
                    </li>
                    <li>
                      <span className="about-bullet" />
                      <div>
                        <strong>Enfoque Full Stack & Calidad:</strong> Comprometida con la creación de experiencias web completas y robustas, desde el backend hasta el frontend, asegurando siempre altos estándares con QA Testing.
                      </div>
                    </li>
                    <li>
                      <span className="about-bullet" />
                      <div>
                        <strong>Aprendizaje Continuo:</strong> Explorando nuevas fronteras tecnológicas como la integración de Inteligencia Artificial Generativa y desarrollo móvil para ofrecer soluciones de vanguardia.
                      </div>
                    </li>
                  </ul>
                  <div className="about-card-action">
                    <Link to="/contact" className="about-btn-gold">
                      Contactarme →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────── */}
        {/* SKILLS SECTION */}
        {/* ──────────────────────────────────────── */}
        <section id="skills" className="pf-skills-section">
          <div className="section-container">
            <div className="section-header">
              <span className="section-badge">01</span>
              <h2 className="section-title">Habilidades Técnicas</h2>
              <div className="section-line" />
            </div>
            <p className="section-desc">
              Tecnologías y herramientas que domino para construir aplicaciones
              escalables y modernas.
            </p>

            <div className="skills-tabs">
              {Object.keys(SKILLS_CATEGORIES).map((cat) => (
                <button
                  key={cat}
                  className={`skill-tab ${activeSkill === cat ? "active" : ""}`}
                  onClick={() => setActiveSkill(cat)}
                >
                  {cat === "frontend" && "🎨 Frontend"}
                  {cat === "backend" && "⚙️ Backend"}
                  {cat === "database" && "🗄️ Base de Datos"}
                  {cat === "tools" && "🛠️ Herramientas"}
                </button>
              ))}
            </div>

            <div className="skills-grid">
              {SKILLS_CATEGORIES[activeSkill].map((skill, idx) => (
                <div key={idx} className="skill-card">
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────── */}
        {/* EXPERIENCE SECTION */}
        {/* ──────────────────────────────────────── */}
        <section className="pf-experience-section">
          <div className="section-container">
            <div className="section-header">
              <span className="section-badge">02</span>
              <h2 className="section-title">Experiencia Laboral</h2>
              <div className="section-line" />
            </div>

            <div className="timeline">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>{exp.title}</h3>
                      <span className="timeline-date">{exp.date}</span>
                    </div>
                    <p className="timeline-company">
                      {exp.company} · {exp.location}
                    </p>
                    <ul className="timeline-list">
                      {exp.achievements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="education-note">
              <p>
                🎓 <strong>Educación:</strong> Ingeniería en Sistemas de
                Información · Lic. en Sistemas de Información (UNLaR - en curso)
                <br />
                📚 Cursando adicionalmente: Testing QA
              </p>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────── */}
        {/* PROJECTS SECTION */}
        {/* ──────────────────────────────────────── */}
        <section className="pf-projects-section">
          <div className="section-container">
            <div className="section-header">
              <span className="section-badge">03</span>
              <h2 className="section-title">Proyectos Destacados</h2>
              <div className="section-line" />
            </div>

            <div className="projects-grid">
              {PROJECTS.map((project, idx) => (
                <div key={idx} className="project-card">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t, i) => (
                      <span key={i} className="project-tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="project-features">
                    {project.features.map((f, i) => (
                      <li key={i}>✓ {f}</li>
                    ))}
                  </ul>
                  <Link to="/projects" className="project-link">
                    Ver más →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────── */}
        {/* CERTIFICATIONS SECTION */}
        {/* ──────────────────────────────────────── */}
        <section className="pf-certifications-section">
          <div className="section-container">
            <div className="section-header">
              <span className="section-badge">04</span>
              <h2 className="section-title">Certificaciones</h2>
              <div className="section-line" />
            </div>

            <div className="certifications-grid">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="cert-card">
                  <span className="cert-icon">📜</span>
                  <span className="cert-name">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────── */}
        {/* QUOTE & AVAILABILITY */}
        {/* ──────────────────────────────────────── */}
        <div className="pf-quote">
          <p className="pf-quote-text">
            "El detalle no es el lujo. Es la diferencia entre lo que funciona y
            lo que emociona."
          </p>
          <span className="pf-quote-author">— Marisa Chaile</span>
        </div>

        <div className="pf-avail-bar">
          <span className="pf-avail-ping" />
          <span className="pf-avail-txt">
            disponible para freelance · La Rioja, Argentina · 2026
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
