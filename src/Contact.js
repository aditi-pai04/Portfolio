import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'; // Import the corresponding CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <div id="space"></div>
      <nav className="navbar">
        <div className="logo">YourLogo</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a href="/path/to/your/resume.pdf" download>Download Resume</a></li>
        </ul>
      </nav>

      <div className="contact-content">
        <h1 className="contact-title">Get in Touch!</h1>
        <p className="contact-description">
          I’d love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out through any of the platforms below.
        </p>

        <div className="concontact-methods">
          <div className="contact-item">
            <h2>Email</h2>
            <p>aditi2003pai@gmail.com</p>
          </div>
          <div className="contact-item">
            <h2>Phone</h2>
            <p>+91 9110249817</p>
          </div>
          <div className="contact-item">
            <h2>Connect with me on:</h2>
            <div className="social-links">
              <a
                href="https://github.com/yourgithubusername"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub
              </a>
              <a
                href="https://leetcode.com/yourleetcodeusername"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LeetCode
              </a>
              <a
                href="https://www.linkedin.com/in/yourlink"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Aditi N Pai. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
