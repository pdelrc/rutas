import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import User from "./components/User";

function App() {
  return (
    <Router>
      <div className="container">
        <div>
          <Link to="/" className="btn btn-dark">
            Home
          </Link>
          <Link to="/nosotros" className="btn btn-dark">
            Nosotros
          </Link>
          <Link to="/contacto" className="btn btn-dark">
            contacto
          </Link>
        </div>
        <Routes>
          <Route path="/nosotros/:id" element={<User />} />
          <Route path="/" element={<Home />} exact />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
