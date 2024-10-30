import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="intro"><Intro /></div>
      <div id="about-me"><AboutMe /></div>
      <div id="projects"><Projects /></div>
      <div id="skills"><Skills /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
