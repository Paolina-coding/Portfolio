import React from "react";
import Coordonnees from "../coordonnees";

const Contact = () => {
  return (
    <main className="container">
      <h1>Contact</h1>
      <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
      <div>
        <h2>Formulaire de contact</h2>
        <ul>
          <li>Votre nom</li>
          <li>Votre adresse email</li>
          <li>Votre numéro de téléphone</li>
          <li>Sujet</li>
          <li>Votre message</li>
          <p class="btn btn-primary">Envoyer</p>
        </ul>
      </div>
      <div>
        <h2>Mes coordonnées</h2>
        <h3>John Doe</h3>
        <Coordonnees/>
        <p>maps</p>
      </div>
    </main>
  );
};

export default Contact;