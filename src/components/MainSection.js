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
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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

    const handleConnectClick = () => {
        // Check if mobile (screen width <= 768px)
        if (window.innerWidth <= 768) {
            window.location.href = 'mailto:anishapatni912@gmail.com';
        } else {
            setIsContactModalOpen(true);
        }
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
                    <button 
                        className="hire-me-btn"
                        onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }}
                    >
                        Hire Me
                    </button>
                    <button
                        type="button"
                        className="connect-btn"
                        onClick={handleConnectClick}
                    >
                        Connect
                    </button>
                    {/* Download Resume button
                    <a
                        href="/resume.pdf"
                        download="Anisha_Patni_Resume.pdf"
                        className="download-resume-btn"
                    >
                        Download Resume
                    </a>
                    */}
                </div>
            </div>

            <div className="image-container">
                <img 
                    className={`profile-photo ${isDarkMode ? 'dark-theme-img' : 'light-theme-img'}`} 
                    src={profile} 
                    alt="Anisha Patni"
                />
            </div>

            {isContactModalOpen && (
                <div className="contact-modal-overlay" onClick={() => setIsContactModalOpen(false)}>
                    <div
                        className="contact-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="contact-modal-close"
                            onClick={() => setIsContactModalOpen(false)}
                            aria-label="Close contact modal"
                        >
                            ×
                        </button>
                        <h3 className="contact-modal-title">Let&apos;s Connect</h3>
                        <p className="contact-modal-text">
                            Feel free to reach out to me anytime. I&apos;ll get back to you as soon as possible.
                        </p>
                        <div className="contact-modal-email-block">
                            <span className="contact-modal-label">Email:</span>
                            <a
                                href="mailto:anishapatni912@gmail.com"
                                className="contact-modal-email"
                            >
                                anishapatni912@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default MainSection;
