import React from 'react';
import '../assets/lenguajes.css';
import { iconos } from '../data/iconos.jsx';

const TarjetaLenguaje = ({ lenguaje }) => {
  const { nombre, porcentaje, color } = lenguaje;

  return (
    <div className="tarjeta-lenguaje">
      <div className="tarjeta-contenido">
        <div className="logo-container">
          {/* Usar iconos SVG internos */}
          {iconos[nombre] ? (
            <div className="icono-svg">
              {iconos[nombre]}
            </div>
          ) : (
            <div className="logo-fallback" style={{ backgroundColor: color }}>
              {nombre.charAt(0)}
            </div>
          )}
        </div>
        
        <div className="lenguaje-info">
          <h3 className="lenguaje-nombre">{nombre}</h3>
          
          <div className="porcentaje-container">
            <div className="porcentaje-texto">
              <span>{porcentaje}%</span>
            </div>
            
            <div className="barra-progreso">
              <div 
                className="progreso-fill"
                style={{ 
                  width: `${porcentaje}%`,
                  backgroundColor: color 
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="tarjeta-overlay" style={{ backgroundColor: `${color}15` }}></div>
    </div>
  );
};

export default TarjetaLenguaje;