import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import "./App.css";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const technologiesRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection}
        sections={{ heroRef, aboutRef, technologiesRef, experienceRef, projectsRef, contactsRef }}/>
      
      <div ref={heroRef}><Hero /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={technologiesRef}><Technologies /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={contactsRef}><Contacts /></div>
    </>
  );
}

export default App;