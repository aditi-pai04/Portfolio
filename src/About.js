import React from 'react';
import './About.css'; // Make sure to create this CSS file

const About = () => {
  return (
    <div className="about-container">
      <nav className="navbar">
        <div className="logo">YourLogo</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/resume.pdf" download className="download-resume">Download Resume</a></li>
        </ul>
      </nav>
      <div id="space"></div>
      <div className="info-section">
        <h1 className="info-title">About Me</h1>
        <p className="info-text">
          Hello there! I'm Aditi, a self-proclaimed code ninja with a passion for turning coffee into code. I love solving puzzles and turning complex problems into elegant solutions. 
          When I'm not deep in code, you can find me exploring the latest tech trends or binge-watching sci-fi series. 
          I'm all about creativity, collaboration, and occasionally cracking a joke or two (though I might leave the stand-up comedy to the professionals!).
        </p>
        <p className="info-text">
          I believe that learning should be fun! Whether it’s tackling a new programming language or experimenting with the latest frameworks, I'm always up for a challenge. 
          My mantra? "Code, eat, sleep, repeat!" If you're looking for a dedicated tech enthusiast who loves to innovate and inspire, you're in the right place!
        </p>
        <div className="skills-container">
          <h2 className="skills-title">Skills</h2>
          <ul className="skills-list">
            <li>C</li>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>React</li>
            <li>Flask</li>
            <li>Django</li>
          </ul>
        </div>
        <div className="links-container">
        <h2>Let's Connect!</h2>
        <div className="social-links">
          <a href="https://github.com/aditi-pai04" target="_blank" rel="noopener noreferrer" className="github-link">
            <span>🌟 GitHub</span>
          </a>
          <a href="https://leetcode.com/aditi2003pai/" target="_blank" rel="noopener noreferrer" className="leetcode-link">
            <span>💻 LeetCode</span>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
