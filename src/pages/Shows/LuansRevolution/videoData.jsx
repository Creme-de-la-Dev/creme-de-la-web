const videoList = [
  {
    title: "Temporada 1",
    videos: [
      {
        title: "Naul",
        id: "lr1",
        url: "https://www.youtube.com/watch?v=yy8NwjEtEkQ&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=1&t=",
        date: "27/08/2015",
        description:
          "Luan acaba de descobrir que tem um irmão secreto, assim, o observa travando uma batalha com o poderoso Lord Frene e nem imagina como essa batalha irá acabar.",
        thumb: "https://i.postimg.cc/L4rrvv3C/image-26.png",
      },
      {
        title: "A Tale of Two Luans",
        id: "lr2",
        url: "https://www.youtube.com/watch?v=xH2mYfhThqk&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=2",
        date: "30/08/2015",
        description:
          "Agulha ensina Luan como desinflar sua cabeça de frenes com a roupa laranja e conta a história por trás de Naul, seu irmão secreto.",
        thumb: "https://i.postimg.cc/qq1rBBMv/KRAFTPUNK.png",
      },
      {
        title: "Did you forget about me?",
        id: "lr3",
        url: "https://www.youtube.com/watch?v=lukhhs8figM&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=3",
        date: "30/08/2015",
        description:
          "Agulha e Luan pegam o carro e vão vasculhar a antiga casa de Naul, porém são interrompidos por um inimigo inesperado.",
        thumb: "https://i.postimg.cc/mgSJL4fJ/image-28.png",
      },
      {
        title: "A Better Place",
        id: "lr4",
        url: "https://www.youtube.com/watch?v=IADuIRkydPo&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=4&t",
        date: "31/08/2015",
        description:
          "A dupla acaba chegando em Lugar Melhor e encontrando um velho amigo que, literalmente estava em Lugar Melhor.",
        thumb: "https://i.postimg.cc/V6V2kzSY/abetterplace.png",
      },
      {
        title: "First Blood",
        id: "lr5",
        url: "https://www.youtube.com/watch?v=ItTswQ1gZP8&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=5",
        date: "10/09/2015",
        description:
          "Agulha e Luan usam o rastreador de frenes e encontram sua primeira vítima num encontro de anime.",
        thumb: "https://i.postimg.cc/GphN9fb2/image-30.png",
      },
      {
        title: "The Modafokin' Ballas (Pt.1)",
        id: "lr6",
        url: "https://www.youtube.com/watch?v=85ZvHMR8E-0&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=6",
        date: "15/09/2015",
        description:
          "Agulha e Luan fazem uma pausa para um lanche e são interrompidos por um ser de um universo paralelo, CJ.",
        thumb: "https://i.postimg.cc/kGckxWGy/thumbcrossover.png",
      },
      {
        title: "The Modafokin' Ballas (Pt.2)",
        id: "lr7",
        url: "https://www.youtube.com/watch?v=y09iqBQisF8&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=7&t=2s",
        date: "26/09/2015",
        description:
          "CJ, Agulha e Luan usam o rastreador de frenes para localizar os Ballas e resgatar o elemento frene e assim, conseguindo abrir o portal roxo novamente.",
        thumb: "https://i.postimg.cc/fyXq6nfH/image-32.png",
      },
      {
        title: "Time to REEE",
        id: "lr8",
        url: "https://www.youtube.com/watch?v=q9HxyTi5Yjs&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=8",
        date: "13/10/2015",
        description:
          "Agulha e Luan localizam um frene com um enorme poder e vão até ele. Ao encontrá-lo, percebem que não conseguiriam deter o frene sozinhos e requisitam ajuda ao poderoso ancestral, Gigante de Pepe.",
        thumb: "https://i.postimg.cc/cHP594wg/image-33.png",
      },
      {
        title: "Require Assistance",
        id: "lr9",
        url: "https://www.youtube.com/watch?v=tuv-MZnfrMw&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=9",
        date: "02/11/2015",
        description:
          "Agulha e Luan dão uma pausa na caça e compram uma casa por um bom preço, porém as condições do local não são boas e no meio da zona, Spike some.",
        thumb: "https://i.postimg.cc/ZRWMxyBz/image-34.png",
      },
      {
        title: "Green Horde (Pt.1)",
        id: "lr10",
        url: "https://www.youtube.com/watch?v=6l3u6Dr9N8U&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=10",
        date: "05/11/2015",
        description:
          "Na noite de halloween, Agulha e Luan param em um cemitério para testar uma fórmula para ressucitar pessoas em Naul, porém Spike quebra o frasco e o líquido se espalha por todo o cemitério. ",
        thumb: "https://i.postimg.cc/BZ1z8Hfx/image-35.png",
      },
      {
        title: "Green Horde (Pt.2)",
        id: "lr11",
        url: "https://www.youtube.com/watch?v=p-0971bGAY4&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=11",
        date: "20/11/2015",
        description:
          "Com toda a equipe de Luan pronta, o combate começa, porém não surte efeito e acabam chamando o todo poderoso Melvin para ajudá-los a deter o Minion. ",
        thumb: "https://i.postimg.cc/28RKnyCg/image-36.png",
      },
      {
        title: "The Betryal",
        id: "lr12",
        url: "https://www.youtube.com/watch?v=uMn0vo0hVvA&list=PLKUvYpigX9RnaJRyHqpf7whz6cjeSbNTE&index=12",
        date: "08/12/2015",
        description:
          "O Grupo chega a casa de Naul e descobrem que ela foi destruida por um membro da equipe traidor.",
        thumb: "https://i.postimg.cc/4N6FPGdy/image-37.png",
      },
    ],
  },
  {
    title: "Extras",
    videos: [
      {
        title: "[TRAILER] LR: 'The Modafukin' Ballas'",
        id:"lrex1",
        url: "https://www.youtube.com/watch?v=2KR4yHC8vKA&list=PLKUvYpigX9RlqWlMGRNTaagA51QQHcXXy&index=2",
        date: "02/09/2015",
        description:
          "Trailer do crossover da série de LegoMaster464 (As aventuras de CJ) e de Luan's Revolution (SB Studios). ",
        thumb: "https://i.postimg.cc/pVF4Qhpv/ballas.png",
      },
      {
        title: "[TEASER] ♫''Luan's Revolution hj a noite''♫",
        id:"lrex2",
        url: "https://www.youtube.com/watch?v=pM-I4_dsqSo&list=PLKUvYpigX9RlqWlMGRNTaagA51QQHcXXy&index=5",
        date: "10/09/2015",
        description: "LUANS RE-VO-LU-TION-HJ-EI-NOITE",
        thumb: "https://i.postimg.cc/bY4TT34V/teaser.png",
      },
      {
        title: "[TEASER] LR : ''Green Horde''",
        id:"lrex3",
        url: "https://www.youtube.com/watch?v=aR_EDAqr-LQ&list=PLKUvYpigX9RlqWlMGRNTaagA51QQHcXXy&index=3",
        date: "16/09/2015",
        description:
          "Teaser do tão aguardado episódio especial de halloween ''Green Horde''",
        thumb: "https://i.postimg.cc/brfZGDFg/greenhorde.png",
      },
      {
        title: "[Beta Gameplay] : Luan's Revolution : The Game",
        id:"lrex4",
        url: "https://www.youtube.com/watch?v=chUpEg7ID1M&list=PLKUvYpigX9RlqWlMGRNTaagA51QQHcXXy&index=2",
        date: "30/09/2015",
        description: "Jogo do Luan's Revolution.",
        thumb: "https://i.postimg.cc/fbHyvqqV/lrgame.png",
      },
      {
        title: "[TRAILER] ''Luan's Revolution : Aftermath''",
        id:"lrex5",
        url: "https://www.youtube.com/watch?v=p75Cs49PaYY&list=PLKUvYpigX9RlqWlMGRNTaagA51QQHcXXy&index=4",
        date: "02/02/2017",
        description:
          "Trailer de uma série spin-off de LR, um final alternativo ao final da 2ªtemporada de LR.",
        thumb: "https://i.postimg.cc/BQMv3VsM/aftermath.png",
      },
    ],
  },
];

export default videoList;
