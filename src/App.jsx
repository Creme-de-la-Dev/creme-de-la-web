// React
import React from 'react';

// React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import Shows from './pages/Shows';
import Games from './pages/Games';
import Store from './pages/Store';
import About from './pages/About';

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router> 
    </>
   
  )
}

export default App
