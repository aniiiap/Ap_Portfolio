import React, { useState } from "react";
import "./About.css";
import '../styles/animations.css';
import { useTheme } from '../context/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import avatar from '../avatar/e41b08e9-c9dd-4474-95c6-f873b820a2fc-removebg-preview.png';
import avatarHover from '../avatar/1927a395-80b8-4b87-be56-4bdbf4abf197-removebg-preview.png';

function About() {
    const { isDarkMode } = useTheme();
    const [leftRef, leftVisible] = useScrollAnimation();
    const [rightRef, rightVisible] = useScrollAnimation();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div id="about" className={`about-container ${isDarkMode ? 'dark' : 'light'}`}>
            <div 
                ref={leftRef}
                className={`about-left-section fade-in-up ${leftVisible ? 'visible' : ''}`}
            >
                <h1 className="about-title">aboutMe ()</h1>
                <div 
                    className="avatar-container"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <img 
                        src={isHovered ? avatarHover : avatar} 
                        alt="Anisha Patni" 
                        className="avatar-img" 
                    />
                </div>
            </div>
            <div 
                ref={rightRef}
                className={`about-content slide-in-right ${rightVisible ? 'visible' : ''}`}
            >
                <div className={`code-window code-window-hover ${isDarkMode ? 'dark' : 'light'}`}>
                    <div className="window-controls">
                        <div className="circle red"></div>
                        <div className="circle yellow"></div>
                        <div className="circle green"></div>
                    </div>
                    <div className="code-text">
                        <p className="greeting-text">Hello!</p>
                        <p>
                            My name is Anisha Patni and I specialize in web developement that
                            utilizes HTML, CSS, JS, TailwindCSS, and REACT, Python, Django etc.<br />
                            I am a highly motivated individual and eternal optimist dedicated to
                            writing clear, concise, robust code that works. Striving to never stop
                            learning and improving.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
