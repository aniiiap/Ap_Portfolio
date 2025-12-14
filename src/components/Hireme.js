import React, { useState } from "react";
import './Hireme.css';
import { useTheme } from '../context/ThemeContext';

const Hireme = () => {
    const { isDarkMode } = useTheme();
    const [expandedSection, setExpandedSection] = useState('frontend');

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className={`hireme-container ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="hireme-content-wrapper">
                <div className="hireme-left-section">
                    <div className="circular-graphic">
                        <div className="outer-circle"></div>
                        <div className="inner-circle"></div>
                        <svg className="hire-me-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <path id="circle-top" d="M 30,100 A 70,70 0 0,1 170,100" fill="none"/>
                                <path id="circle-bottom" d="M 170,100 A 70,70 0 0,1 30,100" fill="none"/>
                            </defs>
                            <text className="hire-text-top">
                                <textPath href="#circle-top" startOffset="15%">
                                    HIRE ME
                                </textPath>
                            </text>
                            <text className="hire-text-bottom">
                                <textPath href="#circle-bottom" startOffset="15%">
                                    HIRE ME
                                </textPath>
                            </text>
                        </svg>
                        <div className="arrow-diagonal">↗</div>
                    </div>
                    <div className="experiences-sidebar">
                        <span className="experiences-text">Experiences</span>
                    </div>
                </div>

                <div className="hireme-right-section">
                    <h1 className="hireme-title">Why I'm Right Person For You</h1>
                    
                    <div className="hireme-intro">
                        <p>Welcome to my portfolio I'm Anisha Patni, a passionate Web Developer dedicated to crafting impact experiences and solutions.</p>
                        <button className="learn-more-btn">Learn More</button>
                    </div>

                    <div className="experience-accordion">
                        <div className={`accordion-item ${expandedSection === 'frontend' ? 'expanded' : ''}`}>
                            <div className="accordion-header" onClick={() => toggleSection('frontend')}>
                                <h3>Frontend Developer</h3>
                                <span className="accordion-arrow">{expandedSection === 'frontend' ? '↑' : '↓'}</span>
                            </div>
                            {expandedSection === 'frontend' && (
                                <div className="accordion-content">
                                    <div className="accordion-divider"></div>
                                    <ul>
                                        <li>Expertise in HTML, CSS, JavaScript, and modern libraries/frameworks like React.</li>
                                        <li>Proven track record of building responsive and accessible user interfaces.</li>
                                        <li>Strong focus on performance optimization and cross-browser compatibility.</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className={`accordion-item ${expandedSection === 'backend' ? 'expanded' : ''}`}>
                            <div className="accordion-header" onClick={() => toggleSection('backend')}>
                                <h3>Backend Developer</h3>
                                <span className="accordion-arrow">{expandedSection === 'backend' ? '↑' : '↓'}</span>
                            </div>
                            {expandedSection === 'backend' && (
                                <div className="accordion-content">
                                    <div className="accordion-divider"></div>
                                    <ul>
                                        <li>Experience with server-side technologies and API development.</li>
                                        <li>Knowledge of database design and management.</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className={`accordion-item ${expandedSection === 'python' ? 'expanded' : ''}`}>
                            <div className="accordion-header" onClick={() => toggleSection('python')}>
                                <h3>Python Developer</h3>
                                <span className="accordion-arrow">{expandedSection === 'python' ? '↑' : '↓'}</span>
                            </div>
                            {expandedSection === 'python' && (
                                <div className="accordion-content">
                                    <div className="accordion-divider"></div>
                                    <ul>
                                        <li>Expertise in Python programming and frameworks like Django.</li>
                                        <li>Experience with web development and automation.</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hireme;
