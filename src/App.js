import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Design from "./Components/Design";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Design" element={<Design />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
