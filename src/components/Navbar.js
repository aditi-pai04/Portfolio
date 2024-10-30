import React from 'react';
import './Navbar.css';
import './index.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
      <li><a href="#intro">Intro</a></li>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a href="/resume.pdf" download="Aditi_N_Pai_Resume.pdf">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
