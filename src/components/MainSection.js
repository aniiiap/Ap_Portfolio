import React, { useState, useEffect } from "react";
import './MainSection.css';
import profile from '../images/ap-portfolio.png';
import { useTheme } from '../context/ThemeContext';

function MainSection() {
    const { isDarkMode } = useTheme();
    const roles = ['Frontend Developer', 'Backend Developer'];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [currentLetter, setCurrentLetter] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [showCursor, setShowCursor] = useState(true);

    const currentRole = roles[currentRoleIndex];
    const fullText = currentRole.substring(1); // Everything after first letter

    useEffect(() => {
        // Reset typing animation when role changes
        setCurrentLetter(currentRole[0]);
        setDisplayedText('');
        setIsTyping(true);
        setShowCursor(true);
    }, [currentRoleIndex, currentRole]);

    useEffect(() => {
        if (isTyping && displayedText.length < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(fullText.slice(0, displayedText.length + 1));
            }, 200);
            return () => clearTimeout(timeout);
        } else if (displayedText.length === fullText.length) {
            setIsTyping(false);
            // Hide cursor after a delay
            setTimeout(() => {
                setShowCursor(false);
            }, 500);
        }
    }, [displayedText, isTyping, fullText]);

    const handleRoleClick = () => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    };

    return (
        <main id="main-section" className={`main-section ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="intro">
                <p className="tag-text">&lt;h1&gt;</p>
                <h1 className="greeting">Hello World!, It's me</h1>
                <h1 className="name">Anisha Patni</h1>
                <h2 className="role" onClick={handleRoleClick} style={{ cursor: 'pointer' }}>
                    I'm a <span className="typing-letter">{currentLetter}</span>
                    <span className="dynamic-text">{displayedText}</span>
                    {showCursor && <span className="cursor">|</span>}
                </h2>
                <p className="tag-text">&lt;/h1&gt;</p>
                <p className="code-comment">// Byte-ing into innovation, one line at a time</p>
                <p className="code-comment">// Debugging the present, deploying the future</p>
                <p className="code-comment">// you can check it out my github</p>
                <p className="github-link">
                    <span className="code-keyword">const</span> <span className="code-variable">githubLink</span> <span className="code-operator">=</span> <a className="git-link" href="https://github.com/aniiiap" target="_blank" rel="noopener noreferrer">"https://github.com/aniiiap"</a>
                </p>
                <div className="buttons">
                    <button className="hire-me-btn">Hire Me</button>
                    <button className="connect-btn">Connect</button>
                </div>
            </div>

            <div className="image-container">
                <img 
                    className={`profile-photo ${isDarkMode ? 'dark-theme-img' : 'light-theme-img'}`} 
                    src={profile} 
                    alt="Anisha Patni"
                />
            </div>
        </main>
    );
}

export default MainSection;
