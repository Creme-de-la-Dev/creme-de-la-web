import v101 from "../../assets/Blog/1.0.1.png";
import v110 from "../../assets/Blog/1.1.0.png";

export const posts = [
  {
    title: "Versão 1.1 lançada!",
    date: "03/05/2024",
    image: v101,
    content: (
      <>
        Nesta atualização:<br />
        - Lorax Kart portado 100% para dentro do site;<br />
        - Creme de la Nage TV portado 100% para dentro do site (sem susto dessa vez);<br />
        - Correção de bugs de usabilidade e layout;<br />
        - 8 novos produtos na loja;<br />
        - Adicionados 10 Easter Eggs secretos.
      </>
    ),
  },

  {
    title: "Versão 1.2 lançada!",
    date: "31/10/2025",
    image: v110,
    content: (
      <>
        FELIZ HALLOWEEN! <span onClick={() => alert('Use o código PENG no botão da aba "SEGREDOS"... se você for capaz de achar onde ela está escondida, é claro...')} style={{cursor: 'pointer'}}>🎃</span>👻<br /><br />
        Nesta atualização:<br />
        - Nova página para notícias do site! (Blog);<br />
        - Novo jogo FIVE NIGHTS AT CREME'S!;<br />
        - Correção de bugs de usabilidade e layout;<br />
      </>
    ),
  },
];