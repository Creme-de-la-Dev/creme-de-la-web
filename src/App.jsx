// React
import React from "react";

// React Router
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RenderEpisode from "../src/components/Episodes/RenderEpisode";
import videoList from "./pages/Shows/LuansRevolution/videoData";

// Pages:
// Home
import Home from "./pages/Home";

// Shows
import Shows from "./pages/Shows";
import LR from "./pages/Shows/LuansRevolution";

// Games
import Games from "./pages/Games";

// Store
import Store from "./pages/Store";

// About
import About from "./pages/About";

// Secrets
import Secrets from "./pages/Secrets";

// Errors
import NotFound from "./pages/Error/404";
import LoraxKart from "./pages/Games/lorax-kart/LoraxKart";

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/shows/lr" element={<LR />} />
          <Route path="/games" element={<Games />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/games/lorax-kart" element={<LoraxKart />} />
          <Route path="/2209626308100203jodoboioxocoocofaiafbaabgoog" element={<Secrets />} />
          <Route
            path="/watch/:episodeId"
            element={<RenderEpisode episodes={videoList.reduce((acc, curr) => acc.concat(curr.videos), [])} />}
          />

          {/* Route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  ); 
}

export default App;
