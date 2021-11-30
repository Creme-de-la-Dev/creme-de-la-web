// React
import { useEffect, useState } from 'react';

// Components
import Headers from './Headers';
import Footer from './Footer';

// Images
import ale from '../images/uale.png';
import alhe from '../images/Alhe2.png';
import shows from '../images/series-svg.svg';
import games from '../images/games-svg.svg';
import merch from '../images/merch-svg.svg';

// ReactStrap
import { Button } from 'reactstrap';

// Icons
import { FaArrowCircleDown, FaPlayCircle, FaGamepad, FaShoppingCart } from 'react-icons/fa';

// Animations
import AOS from 'aos';
import 'aos/dist/aos.css';


function Main() {
  
  useEffect(() => {
    AOS.init();
  });

  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="App">
      <Headers />
      <div className="container">
        <div className="home-header">
          <div className="title-and-btn">
            <div className="title">
              <h1 className="animate__animated animate__fadeInLeft title-class">
                Todo conteúdo que você adora, agora em um só lugar.
              </h1>
            </div>
          <div>
              <Button className="orange-cta-btn animate__animated animate__fadeInLeft" href="#main-section">
                 <FaArrowCircleDown className="arrow-icon"/>  Explore a página
              </Button>
            </div>
          </div>
            <img src={clickCount >= 3 ? alhe : ale} onClick={() => setClickCount(clickCount + 1)} alt="o ale." className="ale-img animate__animated animate__fadeIn" id="ale"/>
        </div>
      </div>
      <section className="content" id="main-section">
        <div className="main">
          <div className="cards">
            <div className="container-card company aos-init aos-animate" data-aos="fade-up">
              <img className="imag" src={shows} alt="shows" />
              <div className="text-container">
                <h1>Séries Aclamadas</h1>
                <p>
                  Webshows do grupo Creme de la Nage já estão disponíveis na plataforma, sendo estes Luan’s Revolution (2015), Creme de la Nage TV (2016) e Turma da Válvula (2021).
                </p>
                <Button className="green-cta-btn">
                  <FaPlayCircle className="play-icon" size = '10x'/> Assista Agora
                </Button>
              </div>
            </div>
            <div className="container-card company aos-init aos-animate" data-aos="fade-up">
              <img className="imag" src={games} alt="games" />
              <div className="text-container">
                <h1>Jogos Divertidos</h1>
                <p>
                  Jogos de navegador criados pela equipe Creme de la Nage estão disponíveis, sendo estes Flappy Catito, Lorax Kart e futuramente, Cremeball.
                </p>
                <Button className="green-cta-btn">
                  <FaGamepad className="game-icon" /> Jogar Agora
                </Button>
              </div>
            </div>
            <div className="container-card company aos-init aos-animate" data-aos="fade-up">
              <img className="imag" src={merch} alt="merch" />
              <div className="text-container">
                <h1>Brinquedos e acessórios</h1>
                <p>
                  Novidade! Agora o Creme de la Nage tem sua própria loja! Compre nossos itens, camisetas, canecas e brinquedos com frete grátis para todo o Brasil!
                </p>
                <Button className="green-cta-btn">
                  <FaShoppingCart className="merch-icon"/> Comprar Agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      < Footer />
    </div>
  );
}

export default Main;

  