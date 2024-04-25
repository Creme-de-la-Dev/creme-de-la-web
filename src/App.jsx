// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from '../src/components/MainLayout'; 
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import LR from "./pages/Shows/LuansRevolution";
import Games from "./pages/Games";
import Store from "./pages/Store";
import About from "./pages/About";
import Secrets from "./pages/Secrets";
import NotFound from "./pages/Error/404";

function App() {
 return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/shows/lr" element={<LR />} />
          <Route path="/games" element={<Games />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="games/lorax-kart/index.html" />
          <Route path="/2209626308100203jodoboioxocoocofaiafbaabgoog" element={<Secrets />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
 );
}

export default App;
