import React, { useState } from 'react';
import '../assets/contacto.css';

const Contacto = () => {
  const [showAlert, setShowAlert] = useState(false);

  const copyEmailToClipboard = async () => {
    const email = 'luisrafaelc.r.27@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      showCustomAlert();
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showCustomAlert();
    }
  };

  const showCustomAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const contactLinks = [
    {
      name: "GitHub",
      url: "https://github.com/LC2020429",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"/>
        </svg>
      ),
      description: "Revisa mis repositorios",
      color: "#333"
    },
    {
      name: "LinkedIn",
      url: "www.linkedin.com/in/luis-rafael-cordova-ruiz-391a86375",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      description: "Conecta conmigo profesionalmente",
      color: "#0077B5"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/luisrafaelc.r.27/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      description: "Sígueme en Instagram",
      color: "#E4405F"
    },
    {
      name: "Computrabajo",
      url: "https://computrabajo.com.co/candidatos/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 6h-2V4c0-1.11-.89-2-2-2H8c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11h20V8c0-1.11-.89-2-2-2zM8 4h8v2H8V4zm12 13H4V8h16v9z"/>
          <path d="M8 10v6h8v-6H8zm2 4v-2h4v2h-4z"/>
        </svg>
      ),
      description: "Perfil profesional",
      color: "#FF6B35"
    }
  ];

  return (
    <section id="contacto" className="contacto-section">
      {showAlert && (
        <div className="custom-alert">
          <div className="alert-content">
            <svg className="alert-icon" viewBox="0 0 24 24" fill="none">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>¡Correo copiado exitosamente!</span>
          </div>
        </div>
      )}

      <div className="contacto-container">
        <div className="contacto-header">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">
            ¡Conectemos! Puedes encontrarme en estas plataformas o descargar mi CV
          </p>
        </div>

        <div className="contacto-content">
          <div className="contact-cards">
            <button className="contact-card email-card" onClick={copyEmailToClipboard}>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="card-content">
                <h3 className="card-title">Email</h3>
                <p className="card-description">luisrafaelc.r.27@gmail.com</p>
                <span className="card-action">Copiar email</span>
              </div>
            </button>

            {contactLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                style={{'--card-color': link.color}}
              >
                <div className="card-icon">
                  {link.icon}
                </div>
                <div className="card-content">
                  <h3 className="card-title">{link.name}</h3>
                  <p className="card-description">{link.description}</p>
                  <span className="card-action">Visitar perfil</span>
                </div>
              </a>
            ))}

            <a 
              href="/cv.pdf" 
              download="Luis_Rafael_CV.pdf"
              className="contact-card cv-card"
            >
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="card-content">
                <h3 className="card-title">Descargar CV</h3>
                <p className="card-description">Curriculum Vitae en PDF</p>
                <span className="card-action">Descargar</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
