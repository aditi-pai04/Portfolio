import React from 'react';
import profilePhoto from './image.jpg';

const Home = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">YourLogo</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/resume.pdf" download className="download-resume">Resume</a></li>
        </ul>
      </nav>
<div id="space"></div>
      <div className="content">
        <div className="left-container">
          <div className="intro-text">Hi, I'm Aditi N Pai!</div>
          <div className="button-container">
            <button className="about-button">About Me</button>
          </div>
        </div>
        <img src={profilePhoto} alt="Aditi N Pai" className="profile-photo" />
      </div>
    </div>
  );
};

export default Home;
