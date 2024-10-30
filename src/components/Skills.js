import React from 'react';
import { FaPython, FaJava, FaJsSquare, FaLinux, FaGit, FaReact, FaDatabase, FaNodeJs } from 'react-icons/fa';
import { DiDart } from 'react-icons/di';
import { SiDjango, SiFlask, SiVisualstudio } from 'react-icons/si';
import './Skills.css'
import './index.css';

const Skills = () => {
  const languages = [
    { name: 'C', icon: <DiDart /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'SQL', icon: <FaDatabase /> },
  ];

  const frameworks = [
    { name: 'Linux', icon: <FaLinux /> },
    { name: 'Git', icon: <FaGit /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Flask', icon: <SiFlask /> },
    { name: 'Django', icon: <SiDjango /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Visual Studio Code', icon: <SiVisualstudio /> },
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skills-category">
          <h3>Languages</h3>
          <div className="skills-grid">
            {languages.map((skill, index) => (
              <div className="skill-item" key={index}>
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-category">
          <h3>Frameworks</h3>
          <div className="skills-grid">
            {frameworks.map((skill, index) => (
              <div className="skill-item" key={index}>
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
