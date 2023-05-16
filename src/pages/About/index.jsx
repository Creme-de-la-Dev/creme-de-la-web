// React
import React from "react";

// Tw Elements
import { Carousel, initTE } from "tw-elements";

// Images
import Creme1 from "../../assets/About/creme1.jpeg";

function About() {

  return (
    <div>
      <section className="header h-screen p-32">
        <div className="inline-flex justify-between w-full">
            <div className="flex-column max-w-4xl h-full justify-between">
                <h1 class="text-cdln-blue-100 text-7xl md:text-8xl font-bold animate__animated animate__pulse">
                    Sobre Nós
                </h1>
                <h2 class="text-cdln-blue-50 text-xl md:text-3xl animate__animated animate__fadeIn">  
                O Creme de la Nage é um grupo de amigos incríveis que se conheceram em 2014 e desde então cultivam uma amizade forte e duradoura. Essa turma especial é composta por indivíduos únicos, cada um trazendo sua personalidade e talentos para enriquecer o vínculo que os une. Eles compartilham momentos de risadas contagiantes, aventuras emocionantes e apoio incondicional, tornando-se uma fonte de força e conforto uns para os outros.
                </h2>
                <h2 class="mt-5 text-cdln-blue-50 text-xl md:text-3xl animate__animated animate__fadeIn">Esses amigos têm uma conexão especial que transcende o tempo e a distância. Eles se encontram regularmente para celebrar aniversários, feriados e simplesmente para aproveitar a companhia uns dos outros. O Creme de la Nage valoriza o apoio mútuo, encorajando-se em seus sonhos e proporcionando um ombro amigo nos momentos difíceis. A cada encontro, a amizade se fortalece e se renova, mostrando que, mesmo ao longo dos anos, o laço do Creme de la Nage permanece inquebrantável.</h2>
            </div>
            <img src={Creme1} className="animate__animated animate__fadeIn max-w-xl border-sky-100 border-8 rounded-md"/>
        </div>
      </section>
    </div>
  );
}

export default About;
