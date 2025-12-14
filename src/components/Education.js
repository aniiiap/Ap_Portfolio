import React from "react";
import './Education.css';
import { useTheme } from '../context/ThemeContext';

const Education = () => {
    const { isDarkMode } = useTheme();

    return (
        <div id="education" className={`education-section ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="section-header">
                <span className="section-icon">🎓</span>
                <h2>Education</h2>
            </div>
            <div className="timeline">
                <div className="timeline-item">
                    <span className="timeline-date">Nov 2021 - Jun 2025</span>
                    <div className="timeline-content">
                        <h3 className="timeline-title">B.Tech Computer Science & Engineering (Iot)</h3>
                        <p className="timeline-institute">M.L.V Textile & Engineering College - Bhilwara</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <span className="timeline-date">Mar 2020 - Mar 2021</span>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Senior Secondary</h3>
                        <p className="timeline-institute">Mahila Aashram PublicSchool - Bhilwara</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
