import React, { useState } from 'react';
import '../scss/layout/_navbar.scss';

export const Menu = () => {
  // Lógica para el menú de hamburguesa en móviles
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="menu">
      <div className="menu-logo">
        <a href="#">    </a>
      </div>

      <div className="menu-hamburguesa" id="menu-hamburguesa" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </div>

      {/* Si isOpen es true, añadimos una clase 'active' para mostrarlo en móvil */}
      <div className={`menu-links ${isOpen ? 'active' : ''}`}>
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#skills">Habilidades</a>
        <a href="#contact">Contacto</a>
      </div>
    </nav>
  );
};

export default Menu;