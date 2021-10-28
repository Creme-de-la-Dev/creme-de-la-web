import './App.css';
import Headers from './Headers';
import Footer from './Footer';
import ale from './images/uale.png';

function App() {
  return (
    <div className="App">
      <Headers />
      <div className="container">
        <h1>Desenvolvendo u ale</h1>
        <img src={ale} alt="o ale." />
      </div>
    </div>
  );
}

export default App;
