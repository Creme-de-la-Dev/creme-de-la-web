// React
import React from "react";

// Images
import SecretsBG from "../../assets/BackgroundImages/SecretsBG.png";
import ArrowDown from "../../assets/arrow-down.svg";

function Secrets() {
  return (
    <div>
      <section className="header h-screen">
        <div className="h-full w-full relative">
          <img
            src={SecretsBG}
            className="hidden lg:block w-full h-full object-cover absolute"
          />
          <img
            src={SecretsBG}
            className="lg:hidden w-full h-full object-cover absolute"
          />
          <div className="p-24 w-full h-full justify-center items-center">
            <h1 className="text-cdln-blue-50 text-8xl md:text-9xl font-bold text-center animate__animated animate__fadeIn">
              Ŝ̸̪̤̩͛̏̚E̸̤̋̇Ǵ̸̺̀͆͜͝R̸̠̬̿̍̏̃ͅͅE̷̮͂̆̂͝D̵̥͛͛̊̿Ȏ̵̪S̶͉̫̾̌̌
            </h1>
            <h2 className="text-cdln-blue-100 text-2xl md:text-5xl font-normal mt-5 text-center animate__animated animate__flash">
              Onde o filho chora e a mãe não vê.
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
        <div className="hero lg:min-h-screen bg-black">
          <h2 className="text-green-600 text-center m-10 text-6xl font-bold">
            1. Botão Mágico
          </h2>
          <h3 className="text-green-700 text-center text-4xl font-regular">
            Existem 20 combinações corretas. Após digitar, aperte o botão e teste sua sorte.
          </h3>
          <div className="flex flex-col justify-center w-full">
            <form className="form self-center w-full m-16">
                <div className="input-fields">
                    <input placeholder="" type="tel" maxlength="1"/>
                    <input placeholder="" type="tel" maxlength="1"/>
                    <input placeholder="" type="tel" maxlength="1"/>
                    <input placeholder="" type="tel" maxlength="1"/>
                </div>
            </form>
            <div className="flex justify-center items-center h-full">
                <button class="btn-class-name">
                <span class="back"></span>
                <span class="front"></span>
                </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Secrets;
