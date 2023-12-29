// React
import React from "react";

// Components
import Card from "../../components/Cards/Card";

// Images
import ShowsBG from "../../assets/BackgroundImages/ShowsBG.png";
import ShowsBGsm from "../../assets/BackgroundImages/ShowsBG-sm.png";
import ArrowDown from "../../assets/arrow-down.svg";
import LR from "../../assets/Shows/LR-PROMO.png";
import CDLNTV from "../../assets/Shows/CDLNTV-PROMO.png";
import TDV from "../../assets/Shows/TDV-PROMO.png";

function Shows() {
  return (
    <div>
      <section className="header h-screen">
        <div className="h-full w-full relative">
          <img
            src={ShowsBG}
            className="hidden lg:block w-full h-full object-cover absolute"
          />
          <img
            src={ShowsBGsm}
            className="lg:hidden w-full h-full object-cover absolute"
          />
          <div className="p-24 w-full h-full justify-center items-center">
            <h1 className="text-cdln-blue-50 text-8xl md:text-9xl font-bold text-center animate__animated animate__jackInTheBox">
              Séries do Creme
            </h1>
            <h2 className="text-cdln-blue-100 text-2xl md:text-5xl font-normal mt-5 text-center animate__animated animate__slideInUp">
              Prepare a pipoca!
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
              <Card
                image={LR}
                name="Luan's Revolution"
                type="show"
                url="/shows/lr"
                mobile={true}
              >
                No ano de 2015, Lord Frene começa lentamente sua invasão Frene no planeta terra, e Luan e seu irmão secreto se conhecem em um conflito e, após um incidente, Luan decide se juntar com uma equipe para erradicar os Frenes.
              </Card>
              <Card
                image={CDLNTV}
                name="Creme de la Nage TV"
                type="show"
                url="https://youtu.be/HEW9E0R1yn8?t=1"
                mobile={true}
              >
                Sua turma favorita, diretamente na TV! Creme de la Nage TV é um compilado de esquetes de piadas envolvendo toda turma com piadas da época. Episódios curtos e muito engraçados para maratonar em grupo, vamo rir!
              </Card>
              <Card
                image={TDV}
                name="Turma da Válvula"
                type="show"
                url="https://www.youtube.com/watch?v=ybdFFSfm6Dk"
                mobile={true}
                available={false}
              >
                No ano de 2020, uma pandêmia global resulta em um lockdown geral no mundo todo. Nessa situação, a turma do Creme finalmente realiza seu sonho da tão aclamada Casa do Creme e vão todos morar juntos, essa é a Turma da Válvula!
              </Card>
            </div>
            <h1 className="text-center font-semibold text-cdln-blue-50 text-2xl mb-5 lg:pb-0 md:text-5xl">
              Mais séries incríveis em breve!
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shows;
