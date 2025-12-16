import React from 'react';
import './Footer.css';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const { isDarkMode } = useTheme();

    return (
        <footer className={`footer ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="footer-content">
                <div className="footer-option9">
                    <p className="footer-quote">"Let's build something amazing together"</p>
                    <div className="footer-contact-info">
                        <a 
                            href="mailto:anishapatni912@gmail.com" 
                            className="footer-contact-link"
                            aria-label="Email: anishapatni912@gmail.com"
                        >
                            <svg className="footer-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <span className="footer-link-text">anishapatni912@gmail.com</span>
                        </a>
                        <span className="footer-contact-separator">•</span>
                        <a 
                            href="https://github.com/aniiiap" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="footer-contact-link"
                            aria-label="GitHub: github.com/aniiiap"
                        >
                            <svg className="footer-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            <span className="footer-link-text">github.com/aniiiap</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

