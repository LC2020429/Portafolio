import React, { useState } from 'react';
import '../assets/inicio.css';

const Inicio = () => {
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

  return (
    <section id="inicio" className="inicio-section">
      {showAlert && (
        <div className="custom-alert">
          <div className="alert-content">
            <svg className="alert-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>¡Correo copiado exitosamente!</span>
          </div>
        </div>
      )}

      <div className="inicio-container">
        <div className="profile-wrapper">
          <div className="profile-image-container">
            <img
              src="/me.png"
              alt="No se encontró la imagen"
              className="profile-image"
            />
            <div className="code-pin">
              <span>&lt;/&gt;</span>
            </div>
          </div>
        </div>

        <div className="intro-content">
          <h1 className="greeting">Hola, Soy Luis Rafael</h1>
          <h2 className="title">Desarrollador Full Stack</h2>
          <p className="description">
            Apasionado por crear experiencias digitales excepcionales,
            confiables y seguras con tecnologías modernas y diseño innovador.
          </p>
          
          <div className="action-buttons">
            <button className="btn-contact" onClick={copyEmailToClipboard}>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Contacto
            </button>
            
            <a 
              href="https://github.com/LC2020429" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-github"
            >
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;