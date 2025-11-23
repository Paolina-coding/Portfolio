import React from "react";
import Nav from "./Nav";
import Coordonnees from "./coordonnees";

const Footer = () => {
  return (
    <footer className="container-fluid row bg-dark text-light p-4">
      <div className="col-md-4">
        <h3>John Doe</h3>
        <Coordonnees />
        <div className="d-flex justify-content-center gap-3 mt-3">
          <a href="https://github.com/github-john-doe" className="text-light">
              <i class="bi bi-github"></i>
          </a>
          <a href="https://x.com/" className="text-light">
              <i class="bi bi-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/" className="text-light">
            <i class="bi bi-linkedin"></i>
          </a>              
        </div>
      </div>
      <div className="col-md-4">
        <h3>Liens utiles</h3>
        <Nav />
      </div>
      <div className="col-md-4">
        <h3>Mes dernières réalisations</h3>
        <ul>
            <li>Fresh Food</li>
            <li>Restaurant Akira</li>
            <li>Espace bien-être</li>
            <li>SEO</li>
            <li>Création d'une API</li>
            <li>Maquette d'un site</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;