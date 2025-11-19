import React from "react";
import Coordonnees from "../coordonnees";

const MentionsLegales = () => {
  return (
    <main className="container">
      <h1>Mention légales</h1>
      <h2>Editeur du site</h2>
      <h3>John Doe</h3>
      <Coordonnees/>
      <h2>Hébergeur</h2>
      <h3>alwaysdata</h3>
      <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
      <a href="www.alwaysdata.com">www.alwaysdata.com</a>
      <h2>Crédits</h2>
      <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/">Centre Européen de formation</a></p>
      <p>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/">Pixabay</a></p>
      <p>La favicon de ce site a été fournie par <a href="https://www.flaticon.com/free-icon/anonymous_10946911?term=john+doe&related_id=10946911">John doe Icons erstellt von Freepik - Flaticon</a></p>
    </main>
  );
};

export default MentionsLegales;