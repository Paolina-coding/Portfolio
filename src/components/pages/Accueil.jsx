import React from "react";
import Modale from "../Modale";

const Accueil = () => {
  return (
    <main class="Accueil">
      <title>John Doe, développeur web full stack</title>
      <div className="container-fluid p-0 ">
        <div className="hero-bg text-white p-5">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button type="button" className="btn btn-danger m-5" data-bs-toggle="modal" data-bs-target="#githubProfile">En savoir plus</button>
          <Modale/>
        </div>
      </div>
      <div className="container p-5">
        <div className="p-5 shadow rounded row">
          <div className="col-md-6">
            <h3 className="border-bottom border-3 border-primary pb-2">A propos</h3>
            <img src="/images/john-doe-about.jpg" alt="john doe" className="img-fluid mb-2"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate dictum ipsum, id vestibulum metus finibus sagittis. Vivamus sed imperdiet eros, in molestie turpis. Morbi placerat, ligula eu congue semper, ante augue rhoncus arcu, quis imperdiet ligula lacus sed nisi.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate dictum ipsum, id vestibulum metus finibus sagittis. Vivamus sed imperdiet eros, in molestie turpis. Morbi placerat, ligula eu congue semper, ante augue rhoncus arcu, quis imperdiet ligula lacus sed nisi.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate dictum ipsum, id vestibulum metus finibus sagittis. Vivamus sed imperdiet eros, in molestie turpis. Morbi placerat, ligula eu congue semper, ante augue rhoncus arcu, quis imperdiet ligula lacus sed nisi.</p>
          </div>
          <div className="col-md-6">
            <h3 className="border-bottom  border-3 border-primary pb-2">Mes compétences</h3>
            <h4>HTML 90%</h4>
            <div className="progress mb-2">
              <div className="progress-bar bg-danger" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4>CSS 80%</h4>
            <div className="progress mb-2">
              <div className="progress-bar bg-info" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4>JAVASCRIPT 70%</h4>
            <div className="progress mb-2">
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4>PHP 60%</h4>
            <div className="progress mb-2">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4>REACT 50%</h4>
            <div className="progress mb-2">
              <div className="progress-bar bg-primary" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Accueil;