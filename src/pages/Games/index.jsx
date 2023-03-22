// React
import React from "react";

// Images
import GamesBG from "../../assets/GamesBG.png";
import GamesBGsm from "../../assets/GamesBG-sm.png";
import ArrowDown from "../../assets/arrow-down.svg";
import FlappyCatito from "../../assets/FLAPPY-CATITO-PROMO.png";
import LoraxKart from "../../assets/LORAX-KART-PROMO.png";
import Akon from "../../assets/AKON-PROMO.png";

// Icons
import { IoGameController } from "react-icons/io5";
import { MdPhonelinkErase } from "react-icons/md";

function Games() {
  return (
    <div>
      <section className="header h-screen">
        <div className="h-full w-full relative">
          <img
            src={GamesBG}
            className="hidden lg:block w-full h-full object-cover absolute"
          />
          <img
            src={GamesBGsm}
            className="lg:hidden w-full h-full object-cover absolute"
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
      <section id="main-section">
        <div className="hero h-auto lg:min-h-screen">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div>
            <div className="flex flex-col lg:flex-row p-5 lg:p-20 gap-8 lg:gap-0">
              <article className="relative max-w-sm group shadow-md mx-auto transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    className="w-full h-auto transform hover:scale-110 duration-200"
                    src={FlappyCatito}
                    alt="Flappy Catito"
                  />
                </div>
                <div className="p-7 my-auto pb-12 bg-cdln-blue-50">
                  <h1 className="text-4xl font-semibold text-gray-800 mt-4">
                    Flappy Catito
                  </h1>
                  <p className="text-lg md:text-2xl text-gray-400 mt-4 leading-relaxed">
                    Ajude o Catito passarinho a atravessar os obstáculos de
                    pernas e chegar no conforto de sua casa para jogar Nintendo
                    Switch. Cuidado ao esbarrar!
                  </p>
                </div>
                <a href="https://flappycatito.herokuapp.com/" target="_blank">
                  <div className="flex gap-3 justify-center border-t py-8 items-center text-cdln-blue-200 group-hover:text-cdln-blue-50 bg-cdln-blue-600 hover:bg-cdln-blue-700">
                    <IoGameController size={"1.5em"} />
                    <h2 className="text-center text-xl tracking-widest uppercase">
                      Jogar
                    </h2>
                  </div>
                </a>
              </article>
              <article className="relative max-w-sm group shadow-md mx-auto transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
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
                  <p className="text-lg md:text-2xl text-gray-400 mt-4 leading-relaxed">
                    Aperte os cintos! Embarque com Lorax nesse grande desafio
                    cheio de adrenalina na grande São Paulo e busque o Flávio no
                    aeroporto de Guarulhos a tempo.
                  </p>
                </div>
                <a href="https://lorax-kart.netlify.app/" target="_blank">
                  <div className="hidden md:flex gap-3 justify-center border-t py-8 items-center text-cdln-blue-200 group-hover:text-cdln-blue-50 bg-cdln-blue-600 hover:bg-cdln-blue-700">
                    <IoGameController size={"1.5em"} />
                    <h2 className="text-center text-xl tracking-widest uppercase">
                      Jogar
                    </h2>
                  </div>
                  <div className="flex md:hidden gap-3 justify-center border-t py-8 items-center text-white bg-gray-500">
                    <MdPhonelinkErase size={"1.5em"} />
                    <h2 className="text-sm tracking-widest uppercase">
                      Indisponível para dispositivos móveis
                    </h2>
                  </div>
                </a>
              </article>
              <article className="relative max-w-sm group shadow-md mx-auto transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    className="w-full h-auto transform hover:scale-110 duration-200"
                    src={Akon}
                    alt="Akon"
                  />
                </div>
                <div className="p-7 my-auto pb-12 bg-cdln-blue-50">
                  <h1 className="text-4xl font-semibold text-gray-800 mt-4">
                    Jogo do AKON
                  </h1>
                  <p className="text-lg md:text-2xl text-gray-400 mt-4 leading-relaxed">
                    Mentalize quem do grupo é o AKON. Descreva. Se prepare. E
                    fique a tento a seu redor. Tenso, Emocionante e muita
                    Adrenalina. <br />
                    <strong>Apenas para dispositivos móveis</strong>
                  </p>
                </div>
                <a href="https://youtu.be/mc5ub3TULqU?t=16" target="_blank">
                  <div className="flex gap-3 justify-center border-t py-8 items-center text-cdln-blue-50 bg-gray-500">
                    <h2 className="text-center text-xl tracking-widest uppercase">
                      Em Breve
                    </h2>
                  </div>
                </a>
              </article>
            </div>
            <h1 className="text-center font-semibold text-cdln-blue-50 text-2xl mb-5 lg:pb-0 md:text-5xl">Mais jogos incríveis em breve!</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Games;
