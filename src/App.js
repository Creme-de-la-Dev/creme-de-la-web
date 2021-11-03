import './App.css';
import 'animate.css';

import Headers from './Headers';
import Footer from './Footer';

import { Button } from 'reactstrap';
import { FaArrowCircleDown } from 'react-icons/fa';
import ale from './images/uale.png';

function App() {
  return (
    <div className="App">
      <Headers />
      <div className="container">
        <div className="home-header">
          <div className="title-and-btn">
            <div className="title"><h1 className="animate__animated animate__fadeInLeft">Todo conteúdo que você adora, agora em um só lugar.</h1></div>
            <div>
              <Button className="animate__animated animate__fadeInLeft">
                 <FaArrowCircleDown className="arrow-icon"/>  Explore a página
              </Button>
            </div>
          </div>
            <img src={ale} alt="o ale." className="ale-img animate__animated animate__fadeIn"/>
        </div>
      </div>
    </div>
  );
}

export default App;

  