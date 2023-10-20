// React
import React from "react";

// Images
import Creme1 from "../../assets/About/creme1.jpeg";

function About() {

  const handleClickSecret = () => {
    const alertMessage = 'Use o código 8T22 no botão da aba "SEGREDOS"... se você for capaz de achar onde ela está escondida, é claro...';
    window.alert(alertMessage);
  };

  return (
    <div>
      <section className="header min-h-screen p-16 lg:p-28">
        <div className="xl:inline-flex flex-column justify-between w-full">
            <div className="flex-column max-w-4xl h-full justify-between">
                <h1 class="text-cdln-blue-100 text-4xl lg:text-8xl font-bold animate__animated animate__bounceInDown">
                    Sobre Nós
                </h1>
                <h2 class="mt-5 text-cdln-blue-50 text-lg lg:text-2xl animate__animated animate__fadeIn">  
                O Creme de la Nage é um grupo de amigos incríveis que se conheceram em 2014 e desde então cultivam uma amizade forte e duradoura. Essa turma especial é composta por indivíduos únicos, cada um trazendo sua personalidade e talentos para enriquecer o vínculo que os une. Eles compartilham momentos de risadas contagiantes, aventuras emocionantes e apoio incondicional, tornando-se uma fonte de força e conforto uns para os outros.
                </h2>
                <h2 class="mt-5 text-cdln-blue-50 text-lg lg:text-2xl animate__animated animate__fadeIn">Esses amigos têm uma conexão especial que transcende o tempo e a distância. Eles se encontram regularmente para celebrar aniversários, feriados e simplesmente para aproveitar a companhia uns dos outros. O Creme de la Nage valoriza o apoio mútuo, encorajando-se em seus <span onClick={handleClickSecret} style={{cursor: 'pointer'}}>sonhos</span> e proporcionando um ombro amigo nos momentos difíceis. A cada encontro, a amizade se fortalece e se renova, mostrando que, mesmo ao longo dos anos, o laço do Creme de la Nage permanece inquebrável.</h2>
            </div>
            <a href="https://www.youtube.com/watch?v=COSpT8Kp37k&list=FLm04vC3zTSn7QdjC_A_K-0g" target="_blank">
            <img src={Creme1} className="animate__animated animate__fadeIn mt-5 max-w-auto xl:max-w-lg border-sky-100 border-8 rounded-md"/>
            </a>
        </div>
      </section>
    </div>
  );
}

export default About;
