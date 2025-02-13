// import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero id="hero" />
      <About id="about" />
      <Technologies id="technologies" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Contacts id="contact" />
    </>
  );
}

export default App;
