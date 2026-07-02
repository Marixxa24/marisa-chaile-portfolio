const mongoose = require('mongoose');
const Project = require('./models/Project');
require('dotenv').config();

console.log('MONGO_URI:', process.env.MONGODB_URI); // para verificar

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
    description: "Portfolio desarrollado con MERN Stack, diseño dark/tech con estética femenina, animaciones en canvas y secciones de proyectos, experiencia y certificaciones.",
    image: "/assets/portfolio-2.jpeg",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Marixxa24/marisa-chaile-portfolio",
    liveUrl: "https://marisa-chaile-portfolio.vercel.app/",
    category: "fullstack",
    featured: false,
  },
];

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Conectado a MongoDB');
    await Project.deleteMany();
    await Project.insertMany(projects);
    console.log('Proyectos insertados correctamente');
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });