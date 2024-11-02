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
      <div id="intro" className='section'><Intro /></div>
      <div id="about-me" className='section'><AboutMe /></div>
      <div id="projects" className='section'><Projects /></div>
      <div id="skills" className='section'><Skills /></div>
      <div id="contact" className='section'><Contact /></div>
    </div>
  );
}

export default App;
