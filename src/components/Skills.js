import React from 'react';
import './Skills.css';
import { useTheme } from '../context/ThemeContext';
import { useFilter } from '../context/FilterContext';

const Skills = () => {
  const { isDarkMode } = useTheme();
  const { selectedSkill, setSelectedSkill } = useFilter();

  const handleSkillClick = (skill) => {
    if (selectedSkill === skill) {
      setSelectedSkill(null); // Deselect if already selected
    } else {
      setSelectedSkill(skill); // Select the skill
    }
    
    // Scroll to portfolio section
    setTimeout(() => {
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200);
  };

  return (
    <div id="skills" className={`skills-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="section-header">
        <span className="section-icon">#</span>
        <h2>Skills</h2>
      </div>
      <div className="skills-container">
        <div className="skills-category">
          <h3>Web Development</h3>
          <div className="skills-items">
            <span 
              className={`skill-item ${selectedSkill === 'HTML' ? 'selected' : ''}`}
              onClick={() => handleSkillClick('HTML')}
            >HTML</span>
            <span 
              className={`skill-item ${selectedSkill === 'CSS' ? 'selected' : ''}`}
              onClick={() => handleSkillClick('CSS')}
            >CSS</span>
            <span 
              className={`skill-item ${selectedSkill === 'JavaScript' ? 'selected' : ''}`}
              onClick={() => handleSkillClick('JavaScript')}
            >JavaScript</span>
            <span 
              className={`skill-item ${selectedSkill === 'Python' ? 'selected' : ''}`}
              onClick={() => handleSkillClick('Python')}
            >Python</span>
          </div>
        </div>
        <div className="skills-category">
          <h3>Frameworks</h3>
          <div className="skills-items">
            <span 
              className={`skill-item ${selectedSkill === 'React' ? 'selected' : ''}`}
              onClick={() => handleSkillClick('React')}
            >React</span>
            <span 
              className={`skill-item ${selectedSkill === 'Django' ? 'selected' : ''}`}
              onClick={() => handleSkillClick('Django')}
            >Django</span>
          </div>
        </div>
        <div className="skills-category">
          <h3>Database Management</h3>
          <div className="skills-items">
            <span 
              className={`skill-item ${selectedSkill === 'MongoDB' ? 'selected' : ''}`}
              onClick={() => handleSkillClick('MongoDB')}
            >Mongo Db</span>
            <span 
              className={`skill-item ${selectedSkill === 'MySQL' ? 'selected' : ''}`}
              onClick={() => handleSkillClick('MySQL')}
            >MySQL</span>
          </div>
        </div>
        <div className="skills-category">
          <h3>Version Control</h3>
          <div className="skills-items">
            <span className="skill-item non-clickable">Git</span>
            <span className="skill-item non-clickable">GitHub</span>
          </div>
        </div>
        <div className="skills-category">
          <h3>Package Managers</h3>
          <div className="skills-items">
            <span className="skill-item non-clickable">NPM</span>
            <span className="skill-item non-clickable">pip</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
