// React
import React from "react";

// Images
import GamesBG from "../../assets/GamesBG.png";
import ArrowDown from "../../assets/arrow-down.svg";

function Games() {
  return (
    <div>
      <section className="header h-screen">
        <div className="h-full w-full relative">
          <img
            src={GamesBG}
            className="w-full h-full object-cover absolute mix-blend-overlay"
          />
          <div className="p-24 w-full h-full justify-center items-center">
            <h1 className="text-cdln-blue-400 text-9xl font-bold text-center animate__animated animate__jackInTheBox">
              Jogos online do Creme
            </h1>
            <h2 className="text-cdln-blue-300 text-5xl font-light mt-5 text-center animate__animated animate__slideInUp">
              Diversão Garantida!
            </h2>
            <div className="w-full justify-center items-center pt-20 animate__animated animate__fadeIn">
              <a href="#main-section">
                <img src={ArrowDown} className="mx-auto h-10 w-10" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen" id="main-section">
      <div class="hero"> 
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        </div>
      </section>
    </div>
  );
}

export default Games;
