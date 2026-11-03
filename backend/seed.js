const mongoose = require('mongoose');
const Project = require('./models/Project');
require('dotenv').config();

console.log('MONGODB_URI:', process.env.MONGODB_URI ? '✓ DEFINIDA' : '✗ NO DEFINIDA');

const projects = [
  {
    title: "Fut Rioja",
    description: "La plataforma que conecta a jugadores, dueños de canchas y organizadores en La Rioja. Reservá, competí y gestioná el fútbol amateur desde un solo lugar.",
    image: "/assets/homee.jpeg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.io", "Tailwind CSS", "Cloudinary"],
    githubUrl: "https://github.com/Marixxa24/Fut-Rioja",
    liveUrl: "https://fut-rioja.vercel.app/",
    category: "fullstack",
    featured: true,
  },
  {
    title: "LogistiTrack",
    description: "Aplicación web para gestión de órdenes logísticas conectada a una API REST propia. Permite crear, editar, eliminar y filtrar órdenes en tiempo real con cálculo automático de costos de envío.",
    image: "https://github.com/user-attachments/assets/c0fb545a-78a9-41d7-847c-db00d9e71997",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Material UI", "Axios"],
    githubUrl: "https://github.com/Marixxa24/LogistiTrack",
    liveUrl: "https://logistitrack.vercel.app/",
    category: "fullstack",
    featured: false,
  },
  {
    title: "Smart Agenda AI",
    description: "Agenda inteligente que clasifica tus tareas automáticamente con IA. Solo escribís la tarea y Gemini analiza el texto y la categoriza en estudio, trabajo, salud o personal.",
    image: "https://github.com/user-attachments/assets/57170496-a355-4b11-acf8-0276b21a4f03",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Google Gemini AI"],
    githubUrl: "https://github.com/Marixxa24/smart-agenda-ai",
    liveUrl: "https://smart-agenda-ai.vercel.app/",
    category: "fullstack",
    featured: false,
  },
  {
    title: "Portfolio Personal",
    description: "Portfolio desarrollado con MERN Stack, diseño en tonos pastel con modo oscuro, animaciones en canvas y secciones de proyectos, experiencia y certificaciones.",
    image: "/assets/portfolio-2.jpeg",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Marixxa24/marisa-chaile-portfolio",
    liveUrl: "https://marisa-chaile-portfolio.vercel.app/",
    category: "fullstack",
    featured: false,
  },
  {
    title: "NorAl",
    description: "Sistema de gestión para comercios de servicios: agenda de turnos, clientes, profesionales, control de stock, gastos y reportes, con reservas online y chatbot para clientes.",
    image: "",
    technologies: ["React", "TypeScript", "Node.js", "Express", "tRPC", "MySQL", "Drizzle ORM", "Tailwind CSS", "Docker", "Vitest"],
    category: "fullstack",
    featured: true,
  },
  {
    title: "Atelier Boutique",
    description: "E-commerce de indumentaria con estética editorial, carrito lateral interactivo y gestión de stock por talles y colores.",
    image: "",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Marixxa24/atelier-boutique-ecommerce",
    category: "fullstack",
    featured: false,
  },
  {
    title: "Gestión de Inventario",
    description: "Sistema para gestionar el inventario de productos: interfaz web en React conectada a una API REST propia.",
    image: "",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Marixxa24/inventario-frontend-MernStack",
    category: "fullstack",
    featured: false,
  },
  {
    title: "Automatización QA",
    description: "Pruebas automatizadas sobre SauceDemo con Python, Selenium y Pytest.",
    image: "",
    technologies: ["Python", "Selenium", "Pytest"],
    githubUrl: "https://github.com/Marixxa24/pre-entrega-automatizacion-qa",
    category: "qa",
    featured: false,
  },
  {
    title: "Ámbar Estética",
    description: "Sitio web de un centro de estética que muestra tratamientos y servicios. Proyecto en equipo con diseño responsive y minimalista.",
    image: "",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/FLUIDOROSA-GIT/Ambar",
    category: "frontend",
    featured: false,
  },
];

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Conectado a MongoDB');
    // Por seguridad, solo carga si la colección está vacía.
    // Para borrar y recargar todo: node seed.js --reset
    const reset = process.argv.includes('--reset');
    const existing = await Project.countDocuments();

    if (existing > 0 && !reset) {
      console.log(`La colección ya tiene ${existing} proyectos. No se cambió nada (usá --reset para recargar).`);
      process.exit();
    }

    if (reset) await Project.deleteMany();
    await Project.insertMany(projects);
    console.log(`${projects.length} proyectos insertados correctamente`);
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });