// React
import React from "react";

// Images
import GamesBG from "../../assets/GamesBG.png";
import GamesBGsm from "../../assets/GamesBG-sm.png";
import ArrowDown from "../../assets/arrow-down.svg";
import LoraxKart from "../../assets/LORAX-KART-PROMO.png";

function Games() {
  return (
    <div>
      <section className="header h-screen">
        <div className="h-full w-full relative">
          <img
            src={GamesBG}
            className="hidden md:block w-full h-full object-cover absolute"
          />
          <img
            src={GamesBGsm}
            className="md:hidden w-full h-full object-cover absolute"
          />
          <div className="p-24 w-full h-full justify-center items-center">
            <h1 className="text-cdln-blue-50 text-8xl md:text-9xl font-bold text-center animate__animated animate__jackInTheBox">
              Jogos do Creme
            </h1>
            <h2 className="text-cdln-blue-100 text-2xl md:text-5xl font-light mt-5 text-center animate__animated animate__slideInUp">
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
      <section className="" id="main-section">
        <div className="hero">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div>
            <div className="p-10">
              <article className="shadow-lg mx-auto relative max-w-md group cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    className="w-full h-auto transform hover:scale-110 duration-200"
                    src={LoraxKart}
                    alt="Lorax Kart"
                  />
                </div>
                <div className="p-7 my-auto pb-12 ">
                  <h1 className="text-4xl font-semibold text-gray-800 mt-4">
                    Tropicalia
                  </h1>
                  <p className="text-2xl text-gray-400 mt-4 leading-relaxed">
                    Super creative and colorful illustrations by Matheus Lopes.
                    Check out more of his amazing artworks in his portfolio.
                  </p>
                </div>
                <div className="border-t pt-8 pb-8 text-center text-base text-gray-400 uppercase tracking-widest  group-hover:text-gray-600 bg-gray-50">
                  Matheus Lopes
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Games;
