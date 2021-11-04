import './App.css';
import 'animate.css';

import Headers from './Headers';
import Footer from './Footer';

import { Button } from 'reactstrap';
import { FaArrowCircleDown, FaPlayCircle } from 'react-icons/fa';

import ale from './images/uale.png';
import series from './images/series-svg.svg';



function App() {
  return (
    <div className="App">
      <Headers />
      <div className="container">
        <div className="home-header">
          <div className="title-and-btn">
            <div className="title"><h1 className="animate__animated animate__fadeInLeft">Todo conteúdo que você adora, agora em um só lugar.</h1></div>
            <div>
              <Button className="orange-cta-btn animate__animated animate__fadeInLeft">
                 <FaArrowCircleDown className="arrow-icon"/>  Explore a página
              </Button>
            </div>
          </div>
            <img src={ale} alt="o ale." className="ale-img animate__animated animate__fadeIn"/>
        </div>
      </div>
      <section className="content">
        <div className="main">
          <div className="container-card">
            <img className="imag" src={series} alt="series" />
            <div className="text-container">
              <h1>Séries Aclamadas</h1>
              <p>
              Webshows do grupo Creme de la Nage já estão disponíveis na plataforma, sendo estes Luan’s Revolution (2015), Creme de la Nage TV (2016) e Turma da Válvula (2021).
              </p>
              <Button className="green-cta-btn">
                <FaPlayCircle className="play-icon" /> Assista Agora
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

  