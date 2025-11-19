import React from "react";

const Accueil = () => {
  return (
    <main className="container">
      <div>
        <h1>Bonjour je suis John Doe</h1>
        <h2>Développeur web full stack</h2>
        <p>Bouton En savoir plus</p>
      </div>
      <div>
        <div>
          <h3>A propos</h3>
          <img src="/images/john-doe-about.jpg" alt="john doe" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate dictum ipsum, id vestibulum metus finibus sagittis. Vivamus sed imperdiet eros, in molestie turpis. Morbi placerat, ligula eu congue semper, ante augue rhoncus arcu, quis imperdiet ligula lacus sed nisi.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate dictum ipsum, id vestibulum metus finibus sagittis. Vivamus sed imperdiet eros, in molestie turpis. Morbi placerat, ligula eu congue semper, ante augue rhoncus arcu, quis imperdiet ligula lacus sed nisi.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate dictum ipsum, id vestibulum metus finibus sagittis. Vivamus sed imperdiet eros, in molestie turpis. Morbi placerat, ligula eu congue semper, ante augue rhoncus arcu, quis imperdiet ligula lacus sed nisi.</p>
        </div>
        <div>
          <h3>Mes compétences</h3>
          <ul>
            <li>HTML 90%</li>
            <li>CSS 80%</li>
            <li>JAVASCRIPT 70%</li>
            <li>PHP 60%</li>
            <li>REACT 50%</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Accueil;