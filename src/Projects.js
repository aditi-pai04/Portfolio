import React from 'react';
import './Projects.css'; // Importing the CSS file for styling

const Projects = () => {
  return (
    <div className="projects-container">
      <nav className="navbar">
        <div className="logo">YourLogo</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/path-to-your-resume.pdf" download>Download Resume</a></li>
        </ul>
      </nav>
        <div id="space"></div>
      <div className="content">
        <h1 className="projects-title">My Projects</h1>
        <div className="projects-list">
          <div className="project-item">
            <h2>Skin Disease Detection System</h2>
            <p>Developed a hybrid diagnostic system for skin diseases, leveraging Convolutional Neural Networks (CNNs) for image-based analysis and random forest classifiers for symptom-based diagnosis.</p>
          </div>
          <div className="project-item">
            <h2>Network Intrusion Detection System</h2>
            <p>Developed a novel ML model for Intrusion Detection System (IDS) using Genetic Algorithms for feature optimization, achieving an accuracy of 92% on NSL-KDD and IDS datasets.</p>
          </div>
          <div className="project-item">
            <h2>Bat Call Annotation Tool</h2>
            <p>Developed a web application for annotating bat calls, generating spectrograms, and classifying species for machine learning training.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
