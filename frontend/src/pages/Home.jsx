import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaDownload,
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
    "React Native",
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Material UI (MUI)",
    "Vite",
  ],
  backend: [
    "Node.js",
    "Express",
    "Java",
    "Python",
    "REST APIs",
    "JWT",
    "Mongoose",
    "Postman",
  ],
  database: ["MongoDB", "Firebase Auth", "Firestore"],
  tools: [
    "Git/GitHub",
    "WordPress",
    "IA Generativa (OpenAI API)",
    "GitHub Copilot",
    "Prompt Engineering",
    "Metodologías Ágiles/Scrum",
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
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const [activeSkill, setActiveSkill] = useState("frontend");

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

  // Cursor personalizado
  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;
    const move = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      setTimeout(() => {
        ring.style.left = e.clientX + "px";
        ring.style.top = e.clientY + "px";
      }, 50);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="pf-cursor" />
      <div ref={ringRef} className="pf-cursor-ring" />

      <div className="home">
        <canvas ref={canvasRef} className="pf-canvas" />
        <div className="pf-grid-overlay" />
        <div className="pf-scanline" />

        {/* ──────────────────────────────────────── */}
        {/* HERO SECTION */}
        {/* ──────────────────────────────────────── */}
        <section className="pf-hero">
          <div className="pf-hero-left">
            <div className="pf-badge">
              <span className="pf-badge-dot" />
              full-stack developer · open to work
            </div>

            <h1 className="pf-title">
              <span className="pf-title-plain">Hola, soy</span>
              <span className="pf-title-grad">Marisa Chaile</span>
              <span className="pf-title-italic">
                Construyendo experiencias digitales modernas, funcionales y
                pensadas para personas reales.
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
                <Link to="/" className="pf-sub">
                  sobre mi.. →
                </Link>{" "}
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
            <div className="pf-hero-right">
              <div className="pf-orb-wrapper">
                {/* Solo los anillos giran */}
                <div className="pf-orb-ring2" />
                <div className="pf-orb-ring1" />

                {/* El círculo principal NO gira */}
                <div className="pf-orb">
                  <div className="pf-orb-inner">
  <img src="/assets/Marisa.jpg" alt="Marisa Chaile" className="pf-orb-img" />
  <span className="pf-orb-letter">M</span>
  <span className="pf-orb-sub">creadora · dev</span>
</div>
                </div>
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
        {/* SKILLS SECTION */}
        {/* ──────────────────────────────────────── */}
        <section className="pf-skills-section">
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
