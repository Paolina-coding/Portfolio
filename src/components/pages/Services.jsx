import React from "react";

const Services = () => {
  return (
    <main >
      <title>Offres de services de John Doe</title>
      <div className="container-fluid p-0 ">
        <div className="banner-bg"></div>
      </div>
      <div class="text-center">
        <h1>Mon offre de services</h1>
        <h2 className="border-bottom  border-3 border-primary pb-2 d-inline-block">Voici les prestations sur lesquelles je peux intervenir</h2>
      </div>
      <div className="container">
        <div className="row g-5 my-5 justify-content-center">
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <i class="bi bi-brush text-primary big-icons"></i>
              <div className="card-body">
                <h5 className="card-title">UX Design</h5>
                <p className="card-text">
                  L'Ux Design est une discipline qui consiste à concevoir des porduits (sites web, applications mobiles, logiciels, objets 
                  connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur 
                  la plus fluide et agréable possible
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <i class="bi bi-code-slash text-primary big-icons"></i>
              <div className="card-body">
                <h5 className="card-title">Développement web</h5>
                <p className="card-text">
                  Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, 
                  JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc)
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <i class="bi bi-search text-primary big-icons"></i>
              <div className="card-body">
                <h5 className="card-title">Référencement</h5>
                <p className="card-text">
                  Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats
                  des moteurs de recherche (Google, Bing, Yahoo, etc). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;