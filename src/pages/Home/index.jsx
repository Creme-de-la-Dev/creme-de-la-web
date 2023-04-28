// React
import React from "react";

// Icons
import { BsArrowDownCircleFill } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import { HiFilm, HiShoppingBag } from "react-icons/hi";
import ContentBanner from "../../components/ContentBanner";

// Images
import Logo from "../../assets/Logos/ale-logo.png";
import Game from "../../assets/Home/Game.png";
import Shows from "../../assets/Home/Shows.png";
import Store from "../../assets/Home/Store.png";

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
              className="w-64 sm:w-80 lg:w-96 xl:w-auto"
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
        <ContentBanner
          title="Jogos Divertidos"
          imageSrc={Game}
          imageAlt="Game"
          btnText="Conferir os jogos"
          BtnIcon={IoGameController}
          link="/games"
        >
          Jogos fantásticos totalmente pensados e feitos pela equipe{" "}
          <strong>Creme de la Nage</strong> estão disponíveis,
          <br />
          sendo estes <strong>Flappy Catito</strong>,{" "}
          <strong>Lorax Kart</strong> e futuramente contará com diversos jogos
          incríveis!
        </ContentBanner>
        {/* SHOWS */}
        <ContentBanner
          title="Séries Aclamadas"
          imageSrc={Shows}
          imageAlt="Shows"
          btnText="Conferir as séries"
          BtnIcon={HiFilm}
          imageRight={true}
          link="/shows"
        >
          Webshows do grupo <strong>Creme de la Nage</strong> já estão
          disponíveis na plataforma, sendo estes
          <br />
          <strong>Luan’s Revolution (2015)</strong>,
          <strong>Creme de la Nage TV (2016)</strong>,{" "}
          <strong>Turma da Válvula (2021)</strong> e{" "}
          <strong>Luan's Revolution: Aftermath (2023)</strong>.
        </ContentBanner>
        {/* STORE */}
        <div className="pb-44">
          <ContentBanner
            title="Creme Store"
            imageSrc={Store}
            imageAlt="Store"
            btnText="Conferir Loja"
            BtnIcon={HiShoppingBag}
            link="store"
          >
            Compre já nossos itens, camisetas, canecas e brinquedos do Creme de
            la Nage
            <br />
            com frete grátis para todo o Brasil!
          </ContentBanner>
        </div>
      </section>
    </div>
  );
}

export default Home;
