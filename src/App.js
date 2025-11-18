import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Accueil from "./components/Accueil";
import Services from "./components/Services";
import Realisations from "./components/Realisations";
import Contact from "./components/Contact";
import MentionsLegales from "./components/Mentions_legales";
import Header from "./components/Header";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Accueil />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Realisations" element={<Realisations />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Mentions_legales" element={<MentionsLegales />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
