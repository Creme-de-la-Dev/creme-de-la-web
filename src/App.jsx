// React
import React from "react";

// React Router
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import Games from "./pages/Games";
import Store from "./pages/Store";
import About from "./pages/About";
import Secrets from "./pages/Secrets";
import NotFound from "./pages/Error/404";

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/games" element={<Games />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/2209626308100203jodoboiox" element={<Secrets />} />

          {/* Route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
