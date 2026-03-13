import React from 'react';
import logo from './logo.svg';
import './css/app.css';
import {PrimerComponente} from './componentes/PrimerComponente';
import {SegundoComponente} from './componentes/SegundoComponente';
import Menu from './componentes/menu';

function App() {
  return (
    <div className="App">
      <Menu />

{/* ----------MAIN---------- */}
      <main>
{/*-----Hero-----*/}
        <section id="hero" className="section-padding">
          <h1>Creative Developer</h1>
          <p>hola</p>
        </section>

        {/*-----About Me-----*/}
        <section id="about" className="section-padding">
          <PrimerComponente />
        </section>

        {/*-----Projects-----*/}
        <section id="projects" className="section-padding">
          <h2>Mis Proyectos</h2>
          <div className="projects-grid">
            <SegundoComponente />
            {/* más proyectos */}
          </div>
        </section>
      </main>

      {/* ----------3.FOOTER---------- */}
      <footer className="portfolio-footer">
        <p>derechos reservados</p>
        <div className="social-links">
          <a href="https://github.com/tu-usuario">GitHub</a>
          <a href="https://linkedin.com/in/tu-usuario">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;