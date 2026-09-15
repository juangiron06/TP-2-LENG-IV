import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Contacto from "./paginas/Contacto";
import Servicios from "./paginas/Servicios";
import './App.css';

function App () {
  return(
    <HashRouter>
      <div className="contenedor-principal">
        <div>
          <h1>Empresa X</h1>
        </div>

        <nav className="menu-navegacion">
          <Link to = '/'>Inicio</Link>
          <Link to = '/Servicios'>Servicios</Link>
          <Link to = '/Contacto'>Contacto</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="*" element={<h1>Error 404: Página no encontrada</h1>} />
        </Routes>

        <footer>
          <p>© 2026 Empresa X - Todos los derechos reservados.</p>
        </footer>
      </div>  

    </HashRouter>
  );
};

export default App;
