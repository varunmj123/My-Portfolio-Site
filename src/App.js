// src/App.js
import React from "react";
import About from "./components/About";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Education from "./components/education"
import ParticleBackground from "./ParticleBackground";
import Particles from 'react-particles-js';




export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About className= "fill-window" />
      <Projects className= "fill-window" />
      <Skills className= "fill-window"/>
      <Education className= "fill-window"/>
      <Contact className= "fill-window"/>
      <ParticleBackground className= "fill-window"/>
    </main>
  );
}


