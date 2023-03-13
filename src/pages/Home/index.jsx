// React
import React from "react";

// Icons
import { BsArrowDownCircleFill } from "react-icons/bs";

// Images
import Logo from "../../assets/ale-logo.png";

function Home() {
  return (
    <div className="bg-gradient-to-b from-[#265881] to-[#265881] h-screen">
      <section className="sm:p-8 flex flex-col sm:flex-row justify-between w-full items-center">
        <div className="sm:p-20 p-10 flex flex-col gap-5">
          <h1 className="text-5xl w-full sm:text-8xl text-cdln-blue-100 font-medium text-center">
            Creme de la Web
          </h1>
          <h2 className="sm:text-3xl text-lg justify-center text-slate-400 font-light">
            Todo conteúdo do Creme que você adora,
            <br />
            agora em um só lugar
          </h2>
          <div className="pt-5 justify-center self-center sm:self-auto">
            <button className="bg-cdln-blue-50 hover:bg-cdln-blue-100 text-cdln-blue-800 font-bold py-4 px-6 border-2 border-cdln-blue-400 rounded-3xl shadow-lg flex flex-row items-center gap-2 text-2xl">
              <BsArrowDownCircleFill />
              Explorar conteúdo
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:p-20">
            <img
                  className="h-64 w-64 sm:h-full sm:w-full rounded-full border-2 border-solid border-white shadow-xl"
                  src={Logo}
                  alt="Logo"
                />
        </div>
      </section>
    </div>
  );
}

export default Home;
