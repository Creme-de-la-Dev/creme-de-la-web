// React
import React from "react";

// Images
import GamesBG from "../../assets/GamesBG.png";
import GamesBGsm from "../../assets/GamesBG-sm.png";
import ArrowDown from "../../assets/arrow-down.svg";
import LoraxKart from "../../assets/LORAX-KART-PROMO.png";

// Icons
import { IoGameController } from "react-icons/io5";

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
            <div className="flex flex-col md:flex-row p-10">
              <article className="relative max-w-md group shadow-md mx-auto transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    className="w-full h-auto transform hover:scale-110 duration-200"
                    src={LoraxKart}
                    alt="Lorax Kart"
                  />
                </div>
                <div className="p-7 my-auto pb-12 bg-cdln-blue-50">
                  <h1 className="text-4xl font-semibold text-gray-800 mt-4">
                    Lorax Kart
                  </h1>
                  <p className="text-2xl text-gray-400 mt-4 leading-relaxed">
                    Aperte os cintos! Embarque com Lorax nesse grande desafio
                    cheio de adrenalina na grande São Paulo e busque o Flávio no
                    aeroporto de Guarulhos a tempo.
                  </p>
                </div>
                <div className="flex gap-3 justify-center border-t py-8 items-center text-cdln-blue-200 group-hover:text-cdln-blue-50 bg-cdln-blue-600 hover:bg-cdln-blue-700">
                  <IoGameController size={"1.5em"}/>
                  <h2 className="text-center text-xl tracking-widest uppercase">Jogar</h2>
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
