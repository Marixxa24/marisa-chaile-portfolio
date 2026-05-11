import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCode, FaHome, FaFolderOpen, FaCodeBranch, FaEnvelope, FaTimes, FaBars } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú al cambiar de página
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Inicio', path: '/', icon: <FaHome /> },
    { name: 'Proyectos', path: '/projects', icon: <FaFolderOpen /> },
    { name: 'Habilidades', path: '/skills', icon: <FaCodeBranch /> },
    { name: 'Contacto', path: '/contact', icon: <FaEnvelope /> },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-wrapper">
            <FaCode className="logo-icon" />
            <span className="logo-text">
              m<span className="logo-accent">.</span>chaile
              <span className="logo-cursor">_</span>
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu-desktop">
          {navItems.map((item) => (
            <li key={item.name} className="nav-item">
              <Link 
                to={item.path} 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu Overlay */}
        {/* <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-container">
            <div className="mobile-menu-header">
              <span className="mobile-menu-title">Navegación</span>
              <div className="mobile-status">
                <span className="status-dot" />
                disponible
              </div>
            </div>
            <ul className="mobile-nav-items">
              {navItems.map((item) => (
                <li key={item.name} className="mobile-nav-item">
                  <Link 
                    to={item.path} 
                    className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="mobile-nav-icon">{item.icon}</span>
                    <span className="mobile-nav-text">{item.name}</span>
                    <span className="mobile-nav-arrow">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mobile-menu-footer">
              <div className="mobile-contact">
                <a href="mailto:marisasolchaille@gmail.com">marisasolchaille@gmail.com</a>
              </div>
              <div className="mobile-social">
                <a href="https://github.com/marisa-chaile" target="_blank" rel="noreferrer">GH</a>
                <a href="https://linkedin.com/in/marisa-chaile" target="_blank" rel="noreferrer">IN</a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;