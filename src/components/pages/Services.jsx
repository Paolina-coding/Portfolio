import React from "react";

const Services = () => {
  return (
    <main className="container">
      <h1>Mon offre de services</h1>
      <p>Voici les prestations sur lesquelles je peux intervenir</p>
      <div class="card">
        <img src="..." class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">UX Design</h5>
          <p class="card-text">
            L'Ux Design est une discipline qui consiste à concevoir des porduits (sites web, applications mobiles, logiciels, objets 
            connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur 
            la plus fluide et agréable possible
          </p>
        </div>
      </div>
    <div class="card">
      <img src="..." class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Développement web</h5>
        <p class="card-text">
          Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, 
          JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc)
        </p>
      </div>
    </div>
    <div class="card">
      <img src="..." class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Référencement</h5>
        <p class="card-text">
          Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats
           des moteurs de recherche (Google, Bing, Yahoo, etc). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
        </p>
      </div>
    </div>
    </main>
  );
};

export default Services;