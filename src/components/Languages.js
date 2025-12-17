import React from "react";
import './Languages.css';
import '../styles/animations.css';
import { useTheme } from '../context/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import languageIcon from '../images/language 1.png';

const Languages = () => {
    const { isDarkMode } = useTheme();
    const [sectionRef, sectionVisible] = useScrollAnimation();

    return (
        <div 
            ref={sectionRef}
            className={`languages-section fade-in-up ${sectionVisible ? 'visible' : ''} ${isDarkMode ? 'dark' : 'light'}`}
        >
            <div className="section-header">
                <img src={languageIcon} alt="Languages" className="section-icon" />
                <h2>Languages</h2>
            </div>
            <div className="languages-list">
                <div className="language-item">
                    <span className="language-name">English - </span>
                    <span className="language-proficiency">Professional Proficiency</span>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '90%' }}></div>
                    </div>
                </div>
                <div className="language-item">
                    <span className="language-name">Hindi - </span>
                    <span className="language-proficiency">Native</span>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '100%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Languages;
