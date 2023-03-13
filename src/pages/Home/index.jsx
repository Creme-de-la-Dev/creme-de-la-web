// React
import React from "react";

// Icons
import { BsArrowDownCircleFill } from "react-icons/bs";

// Images
import Logo from "../../assets/ale-logo.png";

function Home() {
  return (
    <div className="bg-gradient-to-b from-[#265881] to-[#265881] h-screen">
      <section className="p-8 flex flex-row justify-between w-full items-center">
        <div className="p-20 flex flex-col gap-5">
          <h1 className="text-8xl text-cdln-blue-100 font-medium">
            Creme de la Web
          </h1>
          <h2 className="text-3xl text-slate-400 font-light">
            Todo conteúdo do Creme que você adora,
            <br />
            agora em um só lugar
          </h2>
          <div className="pt-5">
            <button className="bg-cdln-blue-50 hover:bg-cdln-blue-100 text-cdln-blue-800 font-bold py-4 px-6 border-2 border-cdln-blue-400 rounded-3xl shadow flex flex-row items-center gap-2 text-2xl">
              <BsArrowDownCircleFill />
              Explorar conteúdo
            </button>
          </div>
        </div>
        <div className="flex flex-col p-20">
            <img
                  className="h-45 w-45 rounded-full border-2 border-solid border-white "
                  src={Logo}
                  alt="Logo"
                />
        </div>
      </section>
    </div>
  );
}

export default Home;
