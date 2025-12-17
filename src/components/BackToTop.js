import React, { useState, useEffect } from 'react';
import './BackToTop.css';
import { useTheme } from '../context/ThemeContext';

const BackToTop = () => {
    const { isDarkMode } = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!isVisible) return null;

    return (
        <button
            className={`back-to-top ${isDarkMode ? 'dark' : 'light'}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <span className="back-to-top-icon">↑</span>
            <span className="back-to-top-text">top()</span>
        </button>
    );
};

export default BackToTop;

