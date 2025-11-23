import React from "react";
import Coordonnees from "../coordonnees";

const MentionsLegales = () => {
  return (
    <main className="container">
      <meta name="robots" content="noindex"/>
      <div class="text-center">
        <h1 className="border-bottom  border-3 border-primary pb-2 d-inline-block">Mention légales</h1>
      </div>
      <div class="accordion my-5" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Editeur du site
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>John Doe</strong> 
              <Coordonnees/>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Hébergeur
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>alwaysdata</strong>
              <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
              <i class="bi bi-globe"></i><a href="www.alwaysdata.com"> www.alwaysdata.com</a>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Crédits
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>Crédits</strong> 
              <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/">Centre Européen de formation</a></p>
              <p>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/">Pixabay</a></p>
              <p>La favicon de ce site a été fournie par <a href="https://www.flaticon.com/free-icon/anonymous_10946911?term=john+doe&related_id=10946911">John doe Icons erstellt von Freepik - Flaticon</a></p>
            </div>
          </div>
        </div>
      </div>      
    </main>
  );
};

export default MentionsLegales;