import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li><Link to="/" class="nav-link">Home</Link></li>
        <li><Link to="/Services" class="nav-link">Services</Link></li>
        <li><Link to="/Realisations" class="nav-link">Portfolio</Link></li>
        <li><Link to="/Contact" class="nav-link">Contact</Link></li>
        <li><Link to="/Mentions_legales" class="nav-link">Mentions légales</Link></li>
    </ul>  

  );
};

export default Nav;
