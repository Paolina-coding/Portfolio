import React from "react";



const Realisations = () => {
  return (
    <main className="container">
      <h1>Portfolio</h1>
      <h2>Voici quelques-unes de mes réalisations</h2>
      <div>
        <div class="card text-center">
          <img src="/images/portfolio/fresh-food.jpg" class="card-img-top" alt="fresh food"/>
          <div class="card-body">
            <h5 class="card-title">Fresh Food</h5>
            <p class="card-text">Site de vente de produits frais</p>
            <a href="#" class="btn btn-primary">Voir le site</a>
          </div>
          <div class="card-footer text-body-secondary">
            Site réalisé avec PHP et MySQL
          </div>
        </div>
      </div>
      <div>
        <div class="card text-center">
          <img src="/images/portfolio/restaurant-japonais.jpg" class="card-img-top" alt="restaurant japonais"/>
          <div class="card-body">
            <h5 class="card-title">Restaurant Akira</h5>
            <p class="card-text">Site de vente de produits frais</p>
            <a href="#" class="btn btn-primary">Voir le site</a>
          </div>
          <div class="card-footer text-body-secondary">
            Site réalisé avec WordPress
          </div>
        </div>
      </div>
      <div>
        <div class="card text-center">
          <img src="/images/portfolio/espace-bien-etre.jpg" class="card-img-top" alt="espace bien être"/>
          <div class="card-body">
            <h5 class="card-title">Espace bien-être</h5>
            <p class="card-text">Site de vente de produits frais</p>
            <a href="#" class="btn btn-primary">Voir le site</a>
          </div>
          <div class="card-footer text-body-secondary">
            Site réalisé avec LARAVEL
          </div>
        </div>
      </div>
      <div>
        <div class="card text-center">
          <img src="/images/portfolio/seo.jpg" class="card-img-top" alt="SEO"/>
          <div class="card-body">
            <h5 class="card-title">SEO</h5>
            <p class="card-text">Amélioration du référencement d'un site e-commerce</p>
            <a href="#" class="btn btn-primary">Voir le site</a>
          </div>
          <div class="card-footer text-body-secondary">
            Utilisation des outils SEO
          </div>
        </div>
      </div>
      <div>
        <div class="card text-center">
          <img src="/images/portfolio/coder.jpg" class="card-img-top" alt="coder"/>
          <div class="card-body">
            <h5 class="card-title">Création d'une API</h5>
            <p class="card-text">Création d'une API RESTFULL publique</p>
            <a href="#" class="btn btn-primary">Voir le site</a>
          </div>
          <div class="card-footer text-body-secondary">
            PHP - SYMFONY
          </div>
        </div>
      </div>
      <div>
        <div class="card text-center">
          <img src="/images/portfolio/screens.jpg" class="card-img-top" alt="écrans"/>
          <div class="card-body">
            <h5 class="card-title">Maquette d'un site web</h5>
            <p class="card-text">Création du prototype d'un site</p>
            <a href="#" class="btn btn-primary">Voir le site</a>
          </div>
          <div class="card-footer text-body-secondary">
            Réalisé avec Figma
          </div>
        </div>
      </div>
    </main>
  );
};

export default Realisations;