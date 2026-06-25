const mongoose = require('mongoose');
require('dotenv').config();

const Project = require('./models/Project');
const Skill = require('./models/Skill');

const projects = [
  {
    title: 'Fut Rioja',
    description: 'Plataforma SaaS para gestión de canchas de fútbol en La Rioja — reservas, torneos, equipos y generación automática de fixtures.',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/Marixxa24/fut-rioja',
    liveUrl: 'https://fut-rioja.vercel.app/',
    category: 'fullstack',
    featured: true
  },
  {
    title: 'Portfolio Personal',
    description: 'Portfolio interactivo full stack con diseño dark/tech, tecnologías flotantes animadas y formulario de contacto.',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/Marixxa24/marisa-chaile-portfolio',
    liveUrl: null,
    category: 'fullstack',
    featured: true
  }
];

const skills = [
  { name: 'React', level: 90, category: 'frontend', icon: '⚛️' },
  { name: 'Node.js', level: 85, category: 'backend', icon: '🚀' },
  { name: 'MongoDB', level: 80, category: 'database', icon: '🍃' },
  { name: 'Express', level: 85, category: 'backend', icon: '📦' },
  { name: 'JavaScript', level: 90, category: 'frontend', icon: '📜' },
  { name: 'HTML/CSS', level: 95, category: 'frontend', icon: '🎨' }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    await Project.deleteMany();
    await Skill.deleteMany();
    
    await Project.insertMany(projects);
    await Skill.insertMany(skills);
    
    console.log('✅ Datos insertados correctamente');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

seedDatabase();