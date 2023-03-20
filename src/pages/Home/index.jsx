// React
import React from "react";

// Icons
import { BsArrowDownCircleFill } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import { HiFilm, HiShoppingBag } from "react-icons/hi";

// Images
import Logo from "../../assets/ale-logo.png";
import Game from "../../assets/Game.png";
import Shows from "../../assets/Shows.png";
import Store from "../../assets/Store.png";

// Animations
import "animate.css";

function Home() {
  return (
    <div>
      <section className="bg-gradient-to-b from-[#265881] to-[#2D679C] h-screen">
        <div className="flex flex-col md:flex-row md:p-8 lg:p-4 justify-between w-full items-center">
          <div className="flex flex-col gap-5 p-10 sm:p-15 xl:p-20">
            <h1 className="text-5xl w-full sm:text-7xl lg:text-8xl text-cdln-blue-100 font-medium text-center animate__animated animate__fadeInLeft">
              Creme de la Web
            </h1>
            <h2 className="lg:text-3xl sm:text-2xl text-lg justify-center text-slate-400 font-light animate__animated animate__fadeInLeft">
              Todo conteúdo do Creme que você adora,
              <br />
              agora em um só lugar
            </h2>
            <div className="pt-5 justify-center self-center md:self-auto animate__animated animate__fadeIn">
              <a href="#main-section">
                <button className="bg-cdln-blue-50 hover:bg-cdln-blue-100 text-cdln-blue-800 font-bold py-4 px-6 border-2 border-cdln-blue-400 rounded-3xl shadow-lg flex flex-row items-center gap-2 text-2xl">
                  <BsArrowDownCircleFill />
                  Explorar conteúdo
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:p-20 mt-10 lg:mt-0 animate__animated animate__pulse justify-center">
            <img
              className="h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 xl:h-full xl:w-full rounded-full border-2 border-solid border-white shadow-xl"
              src={Logo}
              alt="Logo"
            />
          </div>
        </div>
      </section>
      <section className="bg-cdln-blue-900" id="main-section">
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        {/* GAMES */}
        <div class="pt-44">
          <div className="games animate__animated animate__zoomIn">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly p-4 sm:p-0">
              <img
                className="w-64 md:w-80 lg:w-96 self-center"
                src={Game}
                alt="Game"
              />
              <div className="flex flex-col gap-7">
                <h1 className="font-semibold text-5xl w-full md:text-xl xl:text-8xl text-cdln-blue-100 text-center">
                  Jogos Divertidos
                </h1>
                <h2 className="lg:text-3xl md:text-2xl text-lg justify-center text-slate-400 font-light text-center">
                  Jogos fantásticos totalmente pensados e feitos pela equipe{" "}
                  <strong>Creme de la Nage</strong> estão disponíveis,
                  <br />
                  sendo estes <strong>Flappy Catito</strong>,{" "}
                  <strong>Lorax Kart</strong> e futuramente contará com diversos
                  jogos incríveis!
                </h2>
                <div className="pt-5 self-center animate__animated animate__fadeIn">
                  <button
                    className="bg-cdln-blue-50 hover:bg-cdln-blue-100 text-cdln-blue-800 font-bold py-4 px-6 border-2 border-cdln-blue-400 rounded-3xl shadow-lg flex flex-row items-center gap-3 text-2xl"
                    href="/"
                  >
                    <IoGameController size={30} />
                    Conferir os jogos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SHOWS */}
        <div class="pt-44">
          <div className="shows animate__animated animate__zoomIn">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly p-4 sm:p-0">
              <img
                className="w-64 md:w-80 lg:w-96 self-center sm:hidden"
                src={Shows}
                alt="Shows"
              />
              <div className="flex flex-col gap-7 w-full">
                <h1 className="font-semibold text-5xl w-full md:text-7xl lg:text-8xl text-cdln-blue-100 text-center">
                  Séries Aclamadas
                </h1>
                <h2 className="w-10/12 self-center lg:text-3xl md:text-2xl text-lg justify-center text-slate-400 font-light text-center">
                  Webshows do grupo <strong>Creme de la Nage</strong> já estão
                  disponíveis na plataforma, sendo estes{" "}
                  <strong>Luan’s Revolution (2015)</strong>,
                  <strong>Creme de la Nage TV (2016)</strong>,{" "}
                  <strong>Turma da Válvula (2021)</strong> e{" "}
                  <strong>Luan's Revolution: Aftermath (2023)</strong>.
                </h2>
                <div className="pt-5 self-center animate__animated animate__fadeIn">
                  <button
                    className="bg-cdln-blue-50 hover:bg-cdln-blue-100 text-cdln-blue-800 font-bold py-4 px-6 border-2 border-cdln-blue-400 rounded-3xl shadow-lg flex flex-row items-center gap-3 text-2xl"
                    href="/"
                  >
                    <HiFilm size={30} />
                    Conferir as séries
                  </button>
                </div>
              </div>
              <img
                className="w-64 md:w-80 lg:w-96 self-center sm:block hidden p-4"
                src={Shows}
                alt="Shows"
              />
            </div>
          </div>
        </div>
        {/* STORE */}
        <div class="py-44">
          <div className="store animate__animated animate__zoomIn">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly p-4 sm:p-0">
              <img
                className="w-64 md:w-80 lg:w-96 self-center"
                src={Store}
                alt="Store"
              />
              <div className="flex flex-col gap-7">
                <h1 className="font-semibold text-5xl w-full md:text-7xl lg:text-8xl text-cdln-blue-100 text-center">
                  Creme Store
                </h1>
                <h2 className="lg:text-3xl md:text-2xl text-lg justify-center text-slate-400 font-light text-center">
                  Compre já nossos itens, camisetas, canecas e brinquedos do
                  Creme de la Nage
                  <br />
                  com frete grátis para todo o Brasil!
                </h2>
                <div className="pt-5 self-center animate__animated animate__fadeIn">
                  <button
                    className="bg-cdln-blue-50 hover:bg-cdln-blue-100 text-cdln-blue-800 font-bold py-4 px-6 border-2 border-cdln-blue-400 rounded-3xl shadow-lg flex flex-row items-center gap-3 text-2xl"
                    href="/"
                  >
                    <HiShoppingBag size={30} />
                    Conferir Loja
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
