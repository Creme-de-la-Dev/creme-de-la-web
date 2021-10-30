import './App.css';

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
            <div className="title"><h1>Todo conteúdo que você adora, agora em um só lugar.</h1></div>
            <div>
              <Button>
                 <FaArrowCircleDown className="arrow-icon"/>  Explore a página
              </Button>
            </div>
          </div>
          <img src={ale} alt="o ale." className="ale-img"/>
        </div>
      </div>
    </div>
  );
}

export default App;

  