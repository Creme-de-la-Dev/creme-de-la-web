// React
import React from "react";

// Images
import Ale404 from "../../../assets/Errors/ale404.png";

// Icons
import { HiHome } from "react-icons/hi";

const NotFound = () => {
  return (
    <div>
      <section className="header min-h-screen w-full flex align-center">
        <div className="flex align-center flex-col mx-auto">
          <h2 className="text-center text-8xl mt-5 text-cdln-blue-100">
            404 Not Found
          </h2>
          <img
            src={Ale404}
            className="m-5 max-w-auto xl:max-w-4xl border-sky-100 border-8 rounded-md self-center"
          />
          <p className="text-center text-cdln-blue-100 text-4xl">
            Puts! Não foi possível encontrar a página que você estava
            procurando!
          </p>
          <a href="/home" className="self-center">
            <button className="m-5 bg-cdln-blue-50 hover:bg-cdln-blue-100 text-cdln-blue-800 font-bold py-4 px-6 border-2 border-cdln-blue-400 rounded-3xl shadow-lg self-center flex flex-row items-center gap-3 text-2xl max-w-xl">
              <HiHome />
              Retornar à Home
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
