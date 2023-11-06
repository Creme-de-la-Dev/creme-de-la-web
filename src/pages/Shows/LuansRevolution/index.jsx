// React
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

// Components
import EpisodesList from "../../../components/Episodes/EpisodesList";

// Images
import LRBG from "../../../assets/BackgroundImages/LRBG.png";
import ShowsBGsm from "../../../assets/BackgroundImages/ShowsBG-sm.png";
import ArrowDown from "../../../assets/arrow-down.svg";

function LR() {
  const [activeList, setActiveList] = useState("season1");

  // Video Lists
  const videoList = {
    season1: [
      {
        title: "Naul",
        url: "https://www.youtube.com/watch?v=yy8NwjEtEkQ&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=1&t=",
        date: "27/08/2015",
        description:
          "Luan acaba de descobrir que tem um irmão secreto, assim, o observa travando uma batalha com o poderoso Lord Frene e nem imagina como essa batalha irá acabar.",
        thumb: "https://i3.ytimg.com/vi/yy8NwjEtEkQ/hqdefault.jpg",
      },
      {
        title: "A Tale of Two Luans",
        url: "https://www.youtube.com/watch?v=xH2mYfhThqk&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=2",
        date: "30/08/2015",
        description:
          "Agulha ensina Luan como desinflar sua cabeça de frenes com a roupa laranja e conta a história por trás de Naul, seu irmão secreto.",
        thumb: "https://i3.ytimg.com/vi/xH2mYfhThqk/maxresdefault.jpg",
      },
      {
        title: "Did you forget about me?",
        url: "https://www.youtube.com/watch?v=lukhhs8figM&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=3",
        date: "30/08/2015",
        description:
          "Agulha e Luan pegam o carro e vão vasculhar a antiga casa de Naul, porém são interrompidos por um inimigo inesperado",
        thumb: "http://i3.ytimg.com/vi/lukhhs8figM/hqdefault.jpg",
      },
      {
        title: "'A Better Place",
        url: "https://www.youtube.com/watch?v=yy8NwjEtEkQ&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=4",
        date: "31/08/2015",
        description:
          "A gasolina do carro acaba e Luan testa a bola-kart, equipamento pego na casa de Naul. Entretanto, acabam chegando em Lugar Melhor e encontrando um velho amigo que, literalmente estava em Lugar Melhor",
        thumb: "",
      },
      {
        title: "First Blood",
        url: "https://www.youtube.com/watch?v=yy8NwjEtEkQ&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=5",
        date: "10/09/2015",
        description:
          "Agulha e Luan usam o rastreador de frenes e encontram sua primeira vítima num encontro de anime.",
        thumb: "",
      },
      {
        title: "The Modafokin' Ballas (Pt.1)",
        url: "https://www.youtube.com/watch?v=yy8NwjEtEkQ&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=6",
        date: "15/09/2015",
        description:
          "Agulha e Luan fazem uma pausa para um lanche e são interrompidos por um ser de um universo paralelo, CJ",
        thumb: "",
      },
      {
        title: "The Modafokin' Ballas (Pt.2)",
        url: "https://www.youtube.com/watch?v=yy8NwjEtEkQ&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=7",
        date: "26/09/2015",
        description:
          "CJ, Agulha e Luan usam o rastreador de frenes para localizar os Ballas e resgatar o elemento frene e assim, conseguindo abrir o portal roxo novamente.",
        thumb: "",
      },
      {
        title: "Time to REEE",
        url: "https://www.youtube.com/watch?v=yy8NwjEtEkQ&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=8",
        date: "13/10/2015",
        description:
          "Agulha e Luan localizam um frene com um enorme poder e vão até ele. Ao encontrá-lo, percebem que não conseguiriam deter o frene sozinhos e requisitam ajuda ao poderoso ancestral, Gigante de Pepe.",
        thumb: "",
      },
      {
        title: "Require Assistance",
        url: "https://www.youtube.com/watch?v=yy8NwjEtEkQ&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=9",
        date: "02/11/2015",
        description:
          "Agulha e Luan dão uma pausa na caça e compram uma casa por um bom preço, porém as condições do local não são boas e no meio da zona, Spike some.",
        thumb: "",
      },
      {
        title: "Green Horde (Pt.1)",
        url: "https://www.youtube.com/watch?v=yy8NwjEtEkQ&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=10",
        date: "05/11/2015",
        description:
          "Na noite de halloween, Agulha e Luan param em um cemitério para testar uma fórmula para ressucitar pessoas em Naul, porém Spike quebra o frasco e o líquido se espalha por todo o cemitério. ",
        thumb: "",
      },
      {
        title: "Green Horde (Pt.2)",
        url: "https://www.youtube.com/watch?v=yy8NwjEtEkQ&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=11",
        date: "20/11/2015",
        description:
          "Com toda a equipe de Luan pronta, o combate começa, porém não surte efeito e acabam chamando o todo poderoso Melvin para ajudá-los a deter o Minion. ",
        thumb: "",
      },
      {
        title: "The Betryal",
        url: "https://www.youtube.com/watch?v=yy8NwjEtEkQ&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=12",
        date: "08/12/2015",
        description:
          "O Grupo chega a casa de Naul e descobrem que ela foi destruida por um membro da equipe traidor.",
        thumb: "",
      },
    ],
    extras: [
      {
        title: "Teste",
        url: "https://www.youtube.com/watch?v=yy8NwjEtEkQ&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=1&t=",
        date: "27/08/2015",
        description:
          "Luan acaba de descobrir que tem um irmão secreto, assim, o observa travando uma batalha com o poderoso Lord Frene e nem imagina como essa batalha irá acabar.",
        thumb: "https://i3.ytimg.com/vi/yy8NwjEtEkQ/hqdefault.jpg",
      },
    ],
  };

  const toggleList = (listName) => {
    setActiveList(listName);
  };

  return (
    <div>
      <section className="header h-screen">
        <div className="h-full w-full relative">
          <img
            src={LRBG}
            className="hidden lg:block w-full h-full object-cover absolute"
          />
          <img
            // Mudar foto para uma versão responsiva depois
            src={LRBG}
            className="lg:hidden w-full h-full object-cover absolute"
          />
          <div className="p-24 w-full h-full justify-center items-center">
            <h1 className="text-cdln-blue-50 text-8xl md:text-9xl font-bold text-center animate__animated animate__jackInTheBox">
              Luan's Revolution
            </h1>
            <h2 className="text-cdln-blue-100 text-2xl md:text-5xl font-normal mt-5 text-center animate__animated animate__slideInUp">
              O combate aos frenes vai começar!
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
        <button onClick={() => toggleList('season1')}>Season 1</button>
        <button onClick={() => toggleList('extras')}>Season 2</button>
          <EpisodesList episodes={videoList[activeList]} />
        </div>
      </section>
    </div>
  );
}

export default LR;
