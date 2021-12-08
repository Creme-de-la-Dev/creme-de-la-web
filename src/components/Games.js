// React
import { useEffect, useState } from 'react';

// Components
import Headers from './Headers';
import Footer from './Footer';

// Images
import aleGame from '../images/Ale-gaming.png';

// Reactstrap
import { Button } from 'reactstrap';

// Icons
import { FaGamepad } from 'react-icons/fa';

// Animations
import AOS from 'aos';
import 'aos/dist/aos.css';

function Games() {
  
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="App">
      <Headers />
      <div class="container">
        <div className="home-header">
            <div className="title-and-btn">
              <div className="title">
                <h1 className="animate__animated animate__fadeInLeft title-class">
                  Jogos online do Creme: Diversão Garantida!
                </h1>
              </div>
            <div>
                <Button className="orange-cta-btn animate__animated animate__fadeInLeft" href="#game-section">
                  <FaGamepad className="arrow-icon"/>  Explorar Jogos
                </Button>
              </div>
            </div>
              <img src={aleGame} alt="o ale." className="ale-game-img animate__animated animate__fadeIn" id="ale"/>
          </div>
        </div>
        <Footer />
      </div>
  )
}

export default Games;
