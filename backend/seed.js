const mongoose = require('mongoose');
require('dotenv').config();

const Project = require('./models/Project');
const Skill = require('./models/Skill');

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico completa con carrito de compras y pasarela de pago',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/tuusuario/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    category: 'fullstack',
    featured: true
  },
  {
    title: 'Task Manager App',
    description: 'Aplicación para gestionar tareas con autenticación y tiempo real',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com/tuusuario/taskmanager',
    liveUrl: 'https://tasks-demo.com',
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