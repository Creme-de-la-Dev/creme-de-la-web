// React
import React from "react";

// Images
import GamesBG from "../../assets/GamesBG.png";
import GamesBGsm from "../../assets/GamesBG-sm.png";
import ArrowDown from "../../assets/arrow-down.svg";
import FlappyCatito from "../../assets/FLAPPY-CATITO-PROMO.png";
import LoraxKart from "../../assets/LORAX-KART-PROMO.png";
import Akon from "../../assets/AKON-PROMO.png";

import GameCard from "../../components/GameCard";

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
            <h2 className="text-cdln-blue-100 text-2xl md:text-5xl font-normal mt-5 text-center animate__animated animate__slideInUp">
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
              <GameCard
                image={FlappyCatito}
                name="Flappy Catito"
                gameUrl="https://flappycatito.herokuapp.com/"
                mobile={true}
              >
                Essa não! Catito foi transformado em um passarinho e agora
                precisa voltar para casa antes do pôr do sol, caso contrário
                continuará nessa forma para todo sempre!
              </GameCard>
              <GameCard
                image={LoraxKart}
                name="Lorax Kart"
                gameUrl="https://lorax-kart.netlify.app/"
              >
                Aperte os cintos! Embarque com Lorax nesse grande desafio cheio
                de adrenalina na grande São Paulo e busque o Flávio no aeroporto
                de Congonhas a tempo.
              </GameCard>
              <GameCard
                image={Akon}
                name="Jogo do AKON"
                gameUrl="https://youtu.be/mc5ub3TULqU?t=16"
                available={false}
              >
                Mentalize quem do grupo é o AKON. Descreva. Se prepare. E fique
                a tento a seu redor. Tenso, Emocionante e muita Adrenalina.{" "}
                <br /> <strong>Apenas para dispositivos móveis</strong>
              </GameCard>
            </div>
            <h1 className="text-center font-semibold text-cdln-blue-50 text-2xl mb-5 lg:pb-0 md:text-5xl">
              Mais jogos incríveis em breve!
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Games;
