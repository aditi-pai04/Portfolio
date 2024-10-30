import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Brand icons
import './Contact.css'; // Import the CSS file for styling
import './index.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-info">
        <p>
          <a href="mailto:aditi2003pai@gmail.com" className="contact-link">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
        </p>
        <p>
          <a href="https://leetcode.com/aditi2003pai/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FontAwesomeIcon icon={faCode} className="icon" />
          </a>
        </p>
        <p>
          <a href="https://github.com/aditi-pai04" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/aditi-n-pai-1b122b226/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
