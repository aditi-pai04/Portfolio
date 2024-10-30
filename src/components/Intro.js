import React from 'react';
import './Intro.css';
import profilePhoto from './image.jpg'; // Update with your actual photo path
import './index.css';

function Intro() {
    return (
      <div className="intro">
        <div className="intro-content">
          <div className="name-role">
            <h1>Aditi N Pai</h1>
            <span className="role">Student</span>
          </div>
          <img src={profilePhoto} alt="Profile" className="profile-photo" />
        </div>
      </div>
    );
  }
export default Intro;
