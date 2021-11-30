// React
import { useEffect, useState } from 'react';

// Style
import './App.css';
import 'animate.css';

// Components
import Router from './Router.js'

// Animations
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  
  useEffect(() => {
    AOS.init();
  });

  return (
    <Router/>
  );
}

export default App;

  