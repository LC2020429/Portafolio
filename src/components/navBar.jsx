import React, { useState, useEffect } from 'react';
import '../assets/navbar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2>ようこそ</h2>
        </div>
        
        <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a 
                href="#inicio" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('inicio');
                }}
              >
                inicio
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#sobre-mi" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('sobre-mi');
                }}
              >
                sobre mí
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#conocimientos" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('conocimientos');
                }}
              >
                lenguajes
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#proyectos" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('proyectos');
                }}
              >
                proyectos
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#contacto" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contacto');
                }}
              >
                contactame
              </a>
            </li>
          </ul>
        </div>

        <div 
          className={`navbar-burger ${isMenuOpen ? 'is-active' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;