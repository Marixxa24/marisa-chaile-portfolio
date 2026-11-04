import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  // eslint-disable-next-line no-unused-vars
  FaCalendarAlt,
  FaDownload,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaPython,
  FaAws,
  FaProjectDiagram,
  FaSyncAlt,
  FaLayerGroup,
  FaExchangeAlt,
  FaUserShield,
  FaRobot,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiHtml5,
  SiVite,
  SiTypescript,
  SiShadcnui,
  SiLeaflet,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiPython,
  SiJsonwebtokens,
  SiTrpc,
  SiSocketdotio,
  SiZod,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiMongoose,
  SiDrizzle,
  SiSelenium,
  SiPytest,
  SiVitest,
  SiGithub,
  SiVercel,
  SiDocker,
  SiCloudinary,
  SiPostman,
  SiAxios,
  SiWordpress,
  SiFigma,
  SiOpenai,
  SiGooglegemini,
} from "react-icons/si";
import "../styles/Home.css";
import { PROJECTS } from "../data/projects";

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
  "tRPC",
  "Docker",
  "Selenium",
  "Pytest",
  "Gemini AI",
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
    "TypeScript",
    "Context API / Hooks",
    "shadcn/ui (Radix UI)",
    "Leaflet / mapas",
  ],
  backend: [
    "Node.js",
    "Express",
    "Java / Spring Boot",
    "Python",
    "REST APIs",
    "JWT",
    "tRPC",
    "Socket.io",
    "Zod (validaciones)",
    "Autenticación y roles",
  ],
  database: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose", "Drizzle ORM"],
  testing: [
    "Selenium",
    "Pytest",
    "Vitest",
    "Automatización web",
    "Testing funcional",
  ],
  tools: [
    "Git / GitHub",
    "Vercel / Railway",
    "Docker",
    "Cloudinary",
    "AWS S3",
    "Postman",
    "Axios",
    "WordPress",
    "Figma",
    "UML",
    "OpenAI API",
    "Google Gemini API",
    "Scrum / Agile",
  ],
};

// Logos de cada tecnología (con su color de marca)
const SKILL_ICONS = {
  // Frontend
  React: { Icon: SiReact, color: "#38bdf8" },
  "Next.js": { Icon: SiNextdotjs, color: "var(--icon-black)" },
  "JavaScript (ES6+)": { Icon: SiJavascript, color: "#d4b106" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06b6d4" },
  "Material UI (MUI)": { Icon: SiMui, color: "#007fff" },
  Bootstrap: { Icon: SiBootstrap, color: "#7952b3" },
  "HTML5 / CSS3": { Icon: SiHtml5, color: "#e34f26" },
  Vite: { Icon: SiVite, color: "#646cff" },
  TypeScript: { Icon: SiTypescript, color: "#3178c6" },
  "Context API / Hooks": { Icon: FaLayerGroup, color: "#7c5cbf" },
  "shadcn/ui (Radix UI)": { Icon: SiShadcnui, color: "var(--icon-black)" },
  "Leaflet / mapas": { Icon: SiLeaflet, color: "#199900" },
  // Backend
  "Node.js": { Icon: SiNodedotjs, color: "#5fa04e" },
  Express: { Icon: SiExpress, color: "var(--icon-black)" },
  "Java / Spring Boot": { Icon: SiSpringboot, color: "#6db33f" },
  Python: { Icon: SiPython, color: "#3776ab" },
  "REST APIs": { Icon: FaExchangeAlt, color: "#e0679a" },
  JWT: { Icon: SiJsonwebtokens, color: "#d63aff" },
  tRPC: { Icon: SiTrpc, color: "#398ccb" },
  "Socket.io": { Icon: SiSocketdotio, color: "var(--icon-black)" },
  "Zod (validaciones)": { Icon: SiZod, color: "#3068b7" },
  "Autenticación y roles": { Icon: FaUserShield, color: "#7c5cbf" },
  // Base de datos
  MongoDB: { Icon: SiMongodb, color: "#47a248" },
  PostgreSQL: { Icon: SiPostgresql, color: "#336791" },
  MySQL: { Icon: SiMysql, color: "#4479a1" },
  Mongoose: { Icon: SiMongoose, color: "#880000" },
  "Drizzle ORM": { Icon: SiDrizzle, color: "#8bb800" },
  // Testing QA
  Selenium: { Icon: SiSelenium, color: "#43b02a" },
  Pytest: { Icon: SiPytest, color: "#0a9edc" },
  Vitest: { Icon: SiVitest, color: "#6e9f18" },
  "Automatización web": { Icon: FaRobot, color: "#e0679a" },
  "Testing funcional": { Icon: FaCheckCircle, color: "#4caf82" },
  // Herramientas
  "Git / GitHub": { Icon: SiGithub, color: "var(--icon-black)" },
  "Vercel / Railway": { Icon: SiVercel, color: "var(--icon-black)" },
  Docker: { Icon: SiDocker, color: "#2496ed" },
  Cloudinary: { Icon: SiCloudinary, color: "#3448c5" },
  "AWS S3": { Icon: FaAws, color: "#ff9900" },
  Postman: { Icon: SiPostman, color: "#ff6c37" },
  Axios: { Icon: SiAxios, color: "#5a29e4" },
  WordPress: { Icon: SiWordpress, color: "#21759b" },
  Figma: { Icon: SiFigma, color: "#f24e1e" },
  UML: { Icon: FaProjectDiagram, color: "#7c5cbf" },
  "OpenAI API": { Icon: SiOpenai, color: "#412991" },
  "Google Gemini API": { Icon: SiGooglegemini, color: "#4285f4" },
  "Scrum / Agile": { Icon: FaSyncAlt, color: "#e0679a" },
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
  {
    name: "Proyecto PILAR TECNO 6ta Edición - MERN STACK",
    image:
      "https://drive.google.com/thumbnail?id=1LWHny5CtG4AyZeyDoX61XXt97oWvGqVX&sz=w400",
    link: "https://drive.google.com/file/d/1LWHny5CtG4AyZeyDoX61XXt97oWvGqVX/view?usp=sharing",
  },
  {
    name: "Polo Tecnologico - Introducción a la programación",
    image:
      "https://drive.google.com/thumbnail?id=1I44W7m_3pG4W-RhXaUFJvV5M_II3IpCK&sz=w400",
    link: "https://drive.google.com/file/d/1I44W7m_3pG4W-RhXaUFJvV5M_II3IpCK/view?usp=sharing",
  },
  {
    name: "UTN - Desarrollo web con React js",
    image:
      "https://drive.google.com/thumbnail?id=1eQ0zmqmLSy4IQUFTnjrVXqYherjCY591&sz=w400",
    link: "https://drive.google.com/file/d/1eQ0zmqmLSy4IQUFTnjrVXqYherjCY591/view?usp=sharing",
  },
  {
    name: "Núcleo del conocimiento - Mujeres Programadoras",
    image:
      "https://drive.google.com/thumbnail?id=1GsS83DyS8Pi36cLvdFkjBzMZpF1z7Dug&sz=w400",
    link: "https://drive.google.com/file/d/17gzN5l_NnmnhlsODYXcyDG5Juubi5iRS/view?usp=sharing",
  },
  {
    name: "TodoCode - Git - GitHub",
    image:
      "https://drive.google.com/thumbnail?id=1VRrhEFSTqzcnZd0mckO3BeWx3By0SuLM&sz=w400",
    link: "https://drive.google.com/file/d/1VRrhEFSTqzcnZd0mckO3BeWx3By0SuLM/view?usp=sharing",
  },
  {
    name: "TodoCode - HTML5 y CSS3",
    image:
      "https://drive.google.com/thumbnail?id=1V7kHnx4xijEqLRDoNDbme8KcwSHrLwMg&sz=w400",
    link: "https://drive.google.com/file/d/1V7kHnx4xijEqLRDoNDbme8KcwSHrLwMg/view?usp=sharing",
  },
  {
    name: "PYTHON - FRONT END 2024",
    image:
      "https://drive.google.com/thumbnail?id=14hEDaiY_q3v2Ru3k2uSnv5RJCJFr5E3p&sz=w400",
    link: "https://drive.google.com/file/d/1PykHXJ5TXL60lzI_aG9jnncsJ9mqWGBv/view?usp=sharing",
  },
  {
    name: "WordPress - Canvas",
    image:
      "https://drive.google.com/thumbnail?id=1O8nt_6wIkXUb8jcBOZum8b22qrYxc3ZX&sz=w400",
    link: "https://drive.google.com/file/d/1O8nt_6wIkXUb8jcBOZum8b22qrYxc3ZX/view?usp=sharing",
  },
  {
    name: "Centro Universitario de Idiomas - CUI.UBA - Ingles A 1.2 ",
    image:
      "https://drive.google.com/thumbnail?id=18D2IEX3e1PJ191y9w4gSwcpC-_tCifcC&sz=w400",
    link: "https://drive.google.com/file/d/1-ZrVu66l_AYy-LdYES5TK7CFl32g6H05/view?usp=sharing",
  },
  {
    name: "Congreso Argentino de Ciencias de la Computacion - Deep Learning",
    image:
      "https://drive.google.com/thumbnail?id=1NoojP2ratOtO8yXitZQeM9FtDIljNAid&sz=w400",
    link: "https://drive.google.com/file/d/1l8N_55DlDcmIY9mWZO5V_z9AtX6YBPJn/view?usp=sharing",
  },
  {
    name: "Testing QA (en curso)",
    image: "https://drive.google.com/thumbnail?id=8VWX234YZA567&sz=w400",
    link: "https://drive.google.com/file/d/8VWX234YZA567/view",
  },
];

// ── Componente CertCard con manejo de error de imagen ──
const CertCard = ({ cert }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="cert-card"
    >
      <div className="cert-image-wrapper">
        {!imgError ? (
          <img
            src={cert.image}
            alt={cert.name}
            className="cert-image"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="cert-fallback">🎓</div>
        )}
      </div>
      <span className="cert-name">{cert.name}</span>
      <span className="cert-view">Ver certificado →</span>
    </a>
  );
};

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

    // En celulares y con "reducir movimiento" no se anima el fondo: ahorra batería y carga
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isSmallScreen || prefersReducedMotion) return;
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
        ctx.fillStyle = `hsla(${tech.hue}, 60%, 62%, ${tech.opacity + 0.1})`;
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
            </h1>

            <p className="pf-sub">
              {typedText}
              <span className="pf-cursor-blink">_</span>
            </p>

            <p className="pf-tagline">
              Construyendo experiencias digitales modernas y funcionales.
            </p>

            <p className="pf-desc">
              Estudiante avanzada de Ingeniería y Licenciatura en Sistemas de
              Información, actualmente capacitándome en Testing QA y tecnologías
              multiplataforma.{" "}
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="pf-link-about"
              >
                Sobre mí &rarr;
              </a>
            </p>

            <div className="pf-btn-row">
              <Link to="/projects" className="pf-btn-main">
                Ver proyectos →
              </Link>
              <Link to="/contact" className="pf-btn-outline">
                Contactarme
              </Link>
              <a href="https://drive.google.com/file/d/1E_qaztdh7bmwQo6siWDqtgBA8v1-lnfl/view?usp=sharing" download className="pf-btn-pdf">
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
            </div>

            <div className="pf-social-row">
              <a
                href="https://github.com/Marixxa24"
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
              <div className="pf-floating-icon fi-react" title="React">
                <FaReact />
              </div>
              <div className="pf-floating-icon fi-node" title="Node.js">
                <FaNodeJs />
              </div>
              <div className="pf-floating-icon fi-git" title="Git">
                <FaGitAlt />
              </div>
              <div className="pf-floating-icon fi-figma" title="Figma">
                <FaFigma />
              </div>
              <div className="pf-floating-icon fi-python" title="Python">
                <FaPython />
              </div>

              <div className="pf-character-image-wrapper">
                <img
                  src="/assets/girl_standing.webp"
                  alt="Marisa Chaile - 3D Avatar"
                  className="pf-character-img"
                  width="820"
                  height="820"
                  fetchPriority="high"
                />
              </div>
            </div>

            <div className="pf-stats">
              <div className="pf-stat-card">
                <span className="pf-stat-number">3+</span>
                <span className="pf-stat-label">años de experiencia</span>
              </div>
              <div className="pf-stat-card">
                <span className="pf-stat-number">{PROJECTS.length}</span>
                <span className="pf-stat-label">proyectos</span>
              </div>
              <div className="pf-stat-card">
                <span className="pf-stat-number">10+</span>
                <span className="pf-stat-label">certificaciones</span>
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
                    src="/assets/girl_sitting.webp"
                    alt="Marisa Chaile - 3D Sitting Avatar"
                    className="about-char-img"
                    width="700"
                    height="1245"
                    loading="lazy"
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
                        <strong>🎓 Estudiante avanzada:</strong> cursando
                        Licenciatura en Sistemas de Información (UNLaR), con
                        Ingeniería en Sistemas en paralelo. Apasionada por la
                        tecnología, el código y la computación.
                      </div>
                    </li>
                    <li>
                      <span className="about-bullet" />
                      <div>
                        <strong>🔬 Investigación & Gestión:</strong> participo
                        en un proyecto de IA Generativa aplicada a educación en
                        la UNLaR y formo parte del Consejo Consultivo de mi
                        carrera.
                      </div>
                    </li>
                    <li>
                      <span className="about-bullet" />
                      <div>
                        <strong>⚙️ Enfoque Full Stack & Calidad:</strong>{" "}
                        comprometida con experiencias web robustas, desde el
                        backend hasta el frontend, siempre con altos estándares
                        de QA Testing.
                      </div>
                    </li>
                    <li>
                      <span className="about-bullet" />
                      <div>
                        <strong>📚 Aprendizaje Continuo:</strong> explorando IA
                        Generativa y desarrollo móvil para ofrecer soluciones de
                        vanguardia.
                      </div>
                    </li>
                    <li>
                      <span className="about-bullet" />
                      <div>
                        <strong>🎯 Busco rol trainee o junior</strong> en
                        desarrollo full stack, frontend o QA Testing — área en
                        la que me especializo actualmente. Abierta a freelance o
                        relación de dependencia.
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
                  {cat === "testing" && "🧪 Testing QA"}
                  {cat === "tools" && "🛠️ Herramientas"}
                </button>
              ))}
            </div>

            <div className="skills-grid">
              {SKILLS_CATEGORIES[activeSkill].map((skill, idx) => {
                const brand = SKILL_ICONS[skill];
                return (
                  <div
                    key={idx}
                    className="skill-card"
                    style={brand ? { "--brand": brand.color } : undefined}
                  >
                    <div className="skill-card-header">
                      {brand && (
                        <brand.Icon
                          className="skill-icon"
                          style={{ color: brand.color }}
                          aria-hidden="true"
                        />
                      )}
                      <span className="skill-name">{skill}</span>
                    </div>
                  </div>
                );
              })}
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
                🎓 <strong>Educación:</strong> Licenciatura en Sistemas de
                Información (avanzada) · Ingeniería en Sistemas (en curso) —
                UNLaR
                <br />
                📚 Especialización en curso: Testing QA
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
                  {project.img ? (
                    <div className="project-image">
                      <img
                        src={project.img}
                        alt={project.name}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="project-image project-image-placeholder">
                      <span>{project.name}</span>
                      {project.badge && <small>{project.badge}</small>}
                    </div>
                  )}
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
                  <div className="project-links">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        Ver proyecto →
                      </a>
                    )}
                    <Link to="/projects" className="project-link-secondary">
                      Ver más →
                    </Link>
                  </div>
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
                <CertCard key={idx} cert={cert} />
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
