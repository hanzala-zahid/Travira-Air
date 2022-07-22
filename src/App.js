import React from "react";
import Fleet from "./components/fleet/Fleet";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Safety from "./components/safety/Safety";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Services />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Safety />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Fleet />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Testimonial />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
    </Router>
  );
};

export default App;
