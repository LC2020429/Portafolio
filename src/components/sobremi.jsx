import React from 'react';
import '../assets/sobremi.css';

const SobreMi = () => {
  return (
    <section id="sobre-mi" className="sobremi-section">
      <div className="sobremi-container">
        <div className="content-wrapper">
          <h2 className="section-title">Sobre Mí</h2>
          
          <div className="content-grid">
            <div className="text-content">
              <p className="intro-text">
                Soy un desarrollador, con conocimientos en tecnologias habiles y conocimientos de SCRUM en trabajos grupales
                tengo un año de experiencia en el desarrollo de software tanto como en BackEnd como end Front.
                Soy autodidacta y he participado en cursos y proyectos con extranjeros.
              </p>
            </div>
            
            <div className="info-cards">
              <div className="info-card">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Ubicación</h3>
                  <p className="card-text">Guatemala, ciudad capital</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Email</h3>
                  <p className="card-text">luisrafaelc.r.27@gmail.com</p>
                </div>
              </div>
              
              <div className="info-card status-card">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Estado</h3>
                  <p className="card-text">Continuando con mi crecimiento profesional.</p>
                  <div className="status-indicator"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;