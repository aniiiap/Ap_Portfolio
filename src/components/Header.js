import React from 'react';
import './Header.css';
import logo from '../images/Asset 1 2.png';
import darkLogo from '../images/darklogo.png';
import bulb from '../images/light bulb.png';
import { useTheme } from '../context/ThemeContext';

function Header({ onBulbClick }) {
    const { isDarkMode } = useTheme();

    return (
        <header className={`header ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="logo-container">
                <img src={isDarkMode ? logo : darkLogo} alt="AP Logo" className="logo-img" />
            </div>
            <nav className="nav-menu">
                <a 
                    href="/" 
                    className="nav-link-home"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        window.history.pushState(null, '', '/');
                    }}
                >
                    Home
                    <div className="header-bulb-container" onClick={onBulbClick}>
                        <img 
                            src={bulb} 
                            alt="Theme Toggle" 
                            className={`header-bulb ${isDarkMode ? 'dark-bulb' : 'light-bulb'}`}
                        />
                    </div>
                </a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;
