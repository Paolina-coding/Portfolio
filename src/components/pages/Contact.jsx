import React from "react";
import Coordonnees from "../coordonnees";

const Contact = () => {
  return (
    <main className="container">
      <title>Contacter John Doe</title>
      <div className="text-center">
      <h1>Contact</h1>
      <p class="border-bottom border-3 border-primary pb-2 d-inline-block">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
      </div>
      <div className="p-5 shadow rounded row my-5">
        <div className="col-md-6">
          <h2 className="border-bottom border-3 border-primary pb-2">Formulaire de contact</h2>
          <form>
            <div class="mb-3">
              <input type="text" class="form-control" id="name" placeholder="Votre nom"></input>
            </div>
            <div class="mb-3">
              <input type="email" class="form-control" id="email" placeholder="Votre adresse email"></input>
            </div>
            <div class="mb-3">
              <input type="tel" class="form-control" id="phone" placeholder="Votre numéro de téléphone"></input>
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" id="subject" placeholder="Sujet"></input>
            </div>
            <div class="mb-3">
              <textarea class="form-control" id="message" rows="10" placeholder="Votre message"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" class="btn btn-primary">Envoyer</button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <h2 className="border-bottom border-3 border-primary pb-2">Mes coordonnées</h2>
          <strong>John Doe</strong>
          <Coordonnees/>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.627152462178!2d4.796403977099719!3d45.77866197108083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1763911857411!5m2!1sfr!2sfr" 
          width="100%" height="450px" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </main>
  );
};

export default Contact;