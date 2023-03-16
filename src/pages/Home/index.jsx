// React
import React from "react";

// Icons
import { BsArrowDownCircleFill } from "react-icons/bs";

// Images
import Logo from "../../assets/ale-logo.png";

// Animations
import "animate.css";

function Home() {
  return (
    <div>
      <section className="bg-gradient-to-b from-[#265881] to-[#2D679C] h-screen">
        <div className="md:p-8 xl:p-4 flex flex-col md:flex-row justify-between w-full items-center">
          <div className="md:p-20 p-10 flex flex-col gap-5">
            <h1 className="text-5xl w-full md:text-8xl text-cdln-blue-100 font-medium text-center animate__animated animate__fadeInLeft">
              Creme de la Web
            </h1>
            <h2 className="md:text-3xl text-lg justify-center text-slate-400 font-light animate__animated animate__fadeInLeft">
              Todo conteúdo do Creme que você adora,
              <br />
              agora em um só lugar
            </h2>
            <div className="pt-5 justify-center self-center md:self-auto animate__animated animate__fadeIn">
              <button className="bg-cdln-blue-50 hover:bg-cdln-blue-100 text-cdln-blue-800 font-bold py-4 px-6 border-2 border-cdln-blue-400 rounded-3xl shadow-lg flex flex-row items-center gap-2 text-2xl">
                <BsArrowDownCircleFill />
                Explorar conteúdo
              </button>
            </div>
          </div>
          <div className="flex flex-col md:p-20 mt-10 md:mt-0 animate__animated animate__pulse">
            <img
              className="h-64 w-64 md:h-full md:w-full rounded-full border-2 border-solid border-white shadow-xl"
              src={Logo}
              alt="Logo"
            />
          </div>
        </div>
      </section>
      <section class="bg-cdln-blue-900 h-screen">
        <div class="ocean">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
