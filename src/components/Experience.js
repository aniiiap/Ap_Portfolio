import React from 'react';
import './Experience.css';
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`experience-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="experience-content-wrapper">
        <div className="experience-right-section">
          <div className="section-header">
            <span className="section-icon">💼</span>
            <h2>Experience</h2>
          </div>
      <div className="timeline">
        <div className="timeline-item">
          <span className="timeline-date">Jul. 2024 - Sep. 2024</span>
          <div className="timeline-content">
            <h3 className="timeline-title">Full Stack Intern - Take 2 Technologies</h3>
            <p className="timeline-location">Bhilwara</p>
            <p className="timeline-description">
              Worked on developing an online proctoring dashboard, contributing to both frontend and backend development. 
              Gained hands-on experience with React.js, Node.js, and MongoDb.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-date">Jul. 2023 - Sep. 2023</span>
          <div className="timeline-content">
            <h3 className="timeline-title">Frontend Intern - Ready Bytes Software Labs Pvt Ltd</h3>
            <p className="timeline-location">Bhilwara</p>
            <p className="timeline-description">
              Interned at Ready Bytes Software Labs, mastered JavaScript, responsive web design, React and applying knowledge 
              gained during the internship.
            </p>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
