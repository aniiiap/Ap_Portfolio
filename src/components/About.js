import React from "react";
import "./About.css";
import { useTheme } from '../context/ThemeContext';
import avatar from '../avatar/e41b08e9-c9dd-4474-95c6-f873b820a2fc-removebg-preview.png';

function About() {
    const { isDarkMode } = useTheme();

    return (
        <div id="about" className={`about-container ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="about-left-section">
                <h1 className="about-title">aboutMe ()</h1>
                <div className="avatar-container">
                    <img src={avatar} alt="Anisha Patni" className="avatar-img" />
                </div>
            </div>
            <div className="about-content">
                <div className={`code-window ${isDarkMode ? 'dark' : 'light'}`}>
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
