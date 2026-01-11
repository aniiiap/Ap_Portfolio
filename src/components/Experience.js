import React from 'react';
import './Experience.css';
import '../styles/animations.css';
import { useTheme } from '../context/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const { isDarkMode } = useTheme();
  const [sectionRef, sectionVisible] = useScrollAnimation();

  return (
    <div 
      id="experience"
      ref={sectionRef}
      className={`experience-section fade-in-up ${sectionVisible ? 'visible' : ''} ${isDarkMode ? 'dark' : 'light'}`}
    >
      <div className="experience-content-wrapper">
        <div className="experience-right-section">
          <div className="section-header">
            <span className="section-icon">💼</span>
            <h2>Experience</h2>
          </div>
      <div className="timeline">
        <div className="timeline-item">
          <span className="timeline-date">Sep. 2024 - Present</span>
          <div className="timeline-content">
            <h3 className="timeline-title">Full Stack Developer - Docfyle Advisory</h3>
            <p className="timeline-location">Bhilwara</p>
            <ul className="timeline-description">
              <li>Working as a Full Stack Developer on multiple production-grade web applications using the MERN stack</li>
              <li>Contributed to the development of Staffdox, a placement consultancy platform, implementing authentication, job management, and admin dashboard features</li>
              <li>Developed Hetave, a full-stack e-commerce platform for safety equipment with secure authentication, admin product management, and Cloudinary integration</li>
              <li>Built and maintained the MAKV & Associates website, focusing on responsive UI, backend APIs, and performance optimization</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-date">Oct. 2024 - Mar. 2025</span>
          <div className="timeline-content">
            <h3 className="timeline-title">Full Stack Intern - Digifluence</h3>
            <p className="timeline-location">Bhilwara</p>
            <ul className="timeline-description">
              <li>Working on developing and integrating an MLM (Multi-Level Marketing) plugin, focusing on backend logic and API integrations</li>
              <li>Contributed to a food delivery web application, implementing core features across both frontend and backend</li>
              <li>Collaborated on database design, RESTful API development, and secure data handling</li>
              <li>Gained hands-on experience with the MERN stack while working on real-world production projects</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-date">Jul. 2024 - Sep. 2024</span>
          <div className="timeline-content">
            <h3 className="timeline-title">Full Stack Intern - Take 2 Technologies</h3>
            <p className="timeline-location">Bhilwara</p>
            <ul className="timeline-description">
              <li>Worked on developing an online proctoring dashboard, contributing to both frontend and backend development</li>
              <li>Gained hands-on experience with React.js, Node.js, and MongoDB</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-date">Jul. 2023 - Sep. 2023</span>
          <div className="timeline-content">
            <h3 className="timeline-title">Frontend Intern - Ready Bytes Software Labs Pvt Ltd</h3>
            <p className="timeline-location">Bhilwara</p>
            <ul className="timeline-description">
              <li>Interned at Ready Bytes Software Labs, mastered JavaScript, responsive web design, and React</li>
              <li>Applied knowledge gained during the internship to real-world projects</li>
            </ul>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
