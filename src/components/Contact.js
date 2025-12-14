import React from "react";
import './Contact.css';
import { useTheme } from '../context/ThemeContext';

function Contact() {
    const { isDarkMode } = useTheme();

    return (
        <div id="contact" className={`contact-container ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="contact-content">
                <h2 className="contact-question">Are You Looking For</h2>
                <h1 className="contact-role">
                    <span className="code-brace">{'{'}</span>{' '}
                    <span className="code-text">Software Developer</span>{' '}
                    <span className="code-parentheses">(Mobile & App)</span>{' '}
                    <span className="code-brace">{'}'}</span>
                </h1>
                <h2 className="contact-action">Then Contact Me</h2>
            </div>
        </div>
    );
}

export default Contact;

