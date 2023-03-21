// React
import React from "react";

// Images
import GamesBG from "../../assets/GamesBG.png";

function Games() {
  return (
    <div className="app h-screen">
      <div className="h-full w-full relative">
        <img
          src={GamesBG}
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="p-24 w-full h-full justify-center items-center">
          <h1 className="text-cdln-blue-400 text-9xl font-bold text-center">
            Jogos online do Creme
          </h1>
          <h2 className="text-blue-300 text-5xl font-light mt-5 text-center">
            Diversão Garantida!
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Games;
