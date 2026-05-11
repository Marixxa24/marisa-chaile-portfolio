import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt, 
  FaJs, FaGit, FaDocker, FaAws, FaDatabase, FaFigma 
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiPostgresql, SiMysql, 
  SiTypescript, SiRedux, SiNextdotjs, SiTailwindcss 
} from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/skills');
      setSkills(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching skills:', error);
      setLoading(false);
    }
  };

  // Mapa de iconos por tecnología
  const getIcon = (skillName) => {
    const iconMap = {
      'React': <FaReact className="skill-icon react" />,
      'Node.js': <FaNodeJs className="skill-icon node" />,
      'Express': <SiExpress className="skill-icon express" />,
      'MongoDB': <SiMongodb className="skill-icon mongodb" />,
      'JavaScript': <FaJs className="skill-icon javascript" />,
      'HTML': <FaHtml5 className="skill-icon html" />,
      'CSS': <FaCss3Alt className="skill-icon css" />,
      'Python': <FaPython className="skill-icon python" />,
      'Java': <FaJava className="skill-icon java" />,
      'Git': <FaGit className="skill-icon git" />,
      'Docker': <FaDocker className="skill-icon docker" />,
      'AWS': <FaAws className="skill-icon aws" />,
      'PostgreSQL': <SiPostgresql className="skill-icon postgresql" />,
      'MySQL': <SiMysql className="skill-icon mysql" />,
      'TypeScript': <SiTypescript className="skill-icon typescript" />,
      'Redux': <SiRedux className="skill-icon redux" />,
      'Next.js': <SiNextdotjs className="skill-icon next" />,
      'Tailwind': <SiTailwindcss className="skill-icon tailwind" />,
      'Figma': <FaFigma className="skill-icon figma" />
    };
    
    return iconMap[skillName] || <FaDatabase className="skill-icon default" />;
  };

  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Bases de Datos' },
    { id: 'tools', name: 'Herramientas' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  if (loading) {
    return (
      <div className="skills-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Cargando habilidades...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="skills-page">
      <div className="skills-header">
        <h1 className="page-title">Mis Habilidades</h1>
        <p className="skills-subtitle">
          Tecnologías y herramientas que utilizo para crear aplicaciones increíbles
        </p>
      </div>

      {/* Filtros por categoría */}
      <div className="skills-filter">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Grid de habilidades */}
      <div className="skills-grid">
        {filteredSkills.map(skill => (
          <div key={skill._id} className="skill-card">
            <div className="skill-card-header">
              {getIcon(skill.name)}
              <h3 className="skill-name">{skill.name}</h3>
            </div>
            
            <div className="skill-level-container">
              <div className="skill-level-info">
                <span className="skill-level-text">Nivel</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-progress-bg">
                <div 
                  className="skill-progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>

            <div className="skill-category-tag">
              {categories.find(c => c.id === skill.category)?.name || skill.category}
            </div>
          </div>
        ))}
      </div>

      {/* Estadísticas adicionales */}
      <div className="skills-stats">
        <div className="stat-card">
          <h3>{skills.length}</h3>
          <p>Tecnologías Dominadas</p>
        </div>
        <div className="stat-card">
          <h3>
            {skills.filter(s => s.level >= 80).length}
          </h3>
          <p>Expertise Principal</p>
        </div>
        <div className="stat-card">
          <h3>
            {skills.filter(s => s.category === 'frontend').length}
          </h3>
          <p>Frontend</p>
        </div>
        <div className="stat-card">
          <h3>
            {skills.filter(s => s.category === 'backend').length}
          </h3>
          <p>Backend</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;