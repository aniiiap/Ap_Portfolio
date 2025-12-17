import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';
import { useTheme } from '../context/ThemeContext';

const ScrollProgress = () => {
    const { isDarkMode } = useTheme();
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollableHeight = documentHeight - windowHeight;
            const progress = (scrollTop / scrollableHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', updateScrollProgress);
        updateScrollProgress(); // Initial calculation

        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <div className={`scroll-progress ${isDarkMode ? 'dark' : 'light'}`}>
            <div 
                className="scroll-progress-bar" 
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;

