import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCode, FaHome, FaFolderOpen, FaCodeBranch, FaEnvelope, FaTimes, FaBars, FaUser } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname !== '/') return;

      const sectionIds = ['hero', 'about', 'skills'];
      const scrollPos = window.scrollY + 160;
      let currentSection = 'hero';

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && scrollPos >= section.offsetTop) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Cerrar menú al cambiar de página
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Inicio', path: '/', hash: '#hero', id: 'hero', icon: <FaHome /> },
    { name: 'Sobre mí', path: '/', hash: '#about', id: 'about', icon: <FaUser /> },
    { name: 'Proyectos', path: '/projects', icon: <FaFolderOpen /> },
    { name: 'Habilidades', path: '/', hash: '#skills', id: 'skills', icon: <FaCodeBranch /> },
    { name: 'Contacto', path: '/contact', icon: <FaEnvelope /> },
  ];

  const handleNavClick = (e, item) => {
    if (item.hash && location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    setMenuOpen(false);
  };

  const isLinkActive = (item) => {
    if (item.hash) {
      if (location.pathname !== '/') return false;
      return activeSection === item.id;
    }
    return location.pathname === item.path;
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" onClick={(e) => handleNavClick(e, navItems[0])} className="navbar-logo">
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
                state={item.hash ? { scrollTo: item.hash } : null}
                onClick={(e) => handleNavClick(e, item)}
                className={`nav-link ${isLinkActive(item) ? 'active' : ''}`}
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
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menú"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
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
                    state={item.hash ? { scrollTo: item.hash } : null}
                    className={`mobile-nav-link ${isLinkActive(item) ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item)}
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
                <a href="mailto:marisasolchaile@gmail.com">marisasolchaile@gmail.com</a>
              </div>
              <div className="mobile-social">
                <a href="https://github.com/Marixxa24" target="_blank" rel="noreferrer">GH</a>
                <a href="https://linkedin.com/in/marisa-chaile" target="_blank" rel="noreferrer">IN</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;