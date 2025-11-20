import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <main className="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">John Doe</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse navbar-nav ms-auto" id="navbarNavAltMarkup" >
            <Nav/>
          </div>
        </div>
      </nav>   
    </main>
  );
};

export default Header;




