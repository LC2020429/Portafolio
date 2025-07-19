import React, { useEffect, useState } from 'react';
import TarjetaLenguaje from './lenguajes';
import { lenguajesData } from '../data/data';
import '../assets/seccion-lenguajes.css';

const SeccionLenguajes = () => {
  const [animarBarras, setAnimarBarras] = useState(false);

  useEffect(() => {
    // Observador para animar las barras cuando la sección sea visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animarBarras) {
            setAnimarBarras(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const seccion = document.getElementById('conocimientos');
    if (seccion) {
      observer.observe(seccion);
    }

    return () => observer.disconnect();
  }, [animarBarras]);

  return (
    <section id="conocimientos" className="seccion-lenguajes">
      <div className="lenguajes-container">
        <div className="seccion-header">
          <h2 className="seccion-titulo">Mis Conocimientos</h2>
          <p className="seccion-descripcion">
            Tecnologías y lenguajes con los que trabajo para crear soluciones innovadoras
          </p>
        </div>

        <div className="lenguajes-grid">
          {lenguajesData.map((lenguaje) => (
            <div 
              key={lenguaje.id} 
              className={`tarjeta-wrapper ${animarBarras ? 'animado' : ''}`}
              style={{ 
                animationDelay: `${lenguaje.id * 0.1}s` 
              }}
            >
              <TarjetaLenguaje lenguaje={lenguaje} />
            </div>
          ))}
        </div>

        <div className="stats-summary">
          <div className="stat-item">
            <span className="stat-numero">{lenguajesData.length}+</span>
            <span className="stat-texto">Tecnologías</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-numero">1+</span>
            <span className="stat-texto">Años de Experiencia</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-numero">15+</span>
            <span className="stat-texto">Proyectos Completados</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeccionLenguajes;
