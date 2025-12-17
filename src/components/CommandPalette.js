import React, { useState, useEffect, useRef } from 'react';
import './CommandPalette.css';
import { useTheme } from '../context/ThemeContext';

const CommandPalette = () => {
    const { isDarkMode } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);
    const paletteRef = useRef(null);

    const commands = [
        { id: 'home', label: 'Go to Home', icon: '🏠', action: () => scrollToSection('main-section') },
        { id: 'about', label: 'Go to About', icon: '👤', action: () => scrollToSection('about') },
        { id: 'skills', label: 'Go to Skills', icon: '#', action: () => scrollToSection('skills') },
        { id: 'experience', label: 'Go to Experience', icon: '💼', action: () => scrollToSection('experience') },
        { id: 'portfolio', label: 'Go to Portfolio', icon: '💻', action: () => scrollToSection('portfolio') },
        { id: 'contact', label: 'Go to Contact', icon: '📧', action: () => scrollToSection('contact') },
        { id: 'education', label: 'Go to Education', icon: '🎓', action: () => scrollToSection('education') },
        { id: 'languages', label: 'Go to Languages', icon: '🌐', action: () => scrollToSection('languages') },
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsOpen(false);
            setSearchQuery('');
        }
    };

    const filteredCommands = commands.filter(command =>
        command.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Ctrl+K or Cmd+K to open
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(true);
            }
            // Escape to close
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
                setSearchQuery('');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex((prev) => 
                    prev < filteredCommands.length - 1 ? prev + 1 : 0
                );
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex((prev) => 
                    prev > 0 ? prev - 1 : filteredCommands.length - 1
                );
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filteredCommands[selectedIndex]) {
                    filteredCommands[selectedIndex].action();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, filteredCommands, selectedIndex]);

    useEffect(() => {
        setSelectedIndex(0);
    }, [searchQuery]);

    if (!isOpen) return null;

    return (
        <>
            <div 
                className="command-palette-overlay"
                onClick={() => setIsOpen(false)}
            />
            <div 
                ref={paletteRef}
                className={`command-palette ${isDarkMode ? 'dark' : 'light'}`}
            >
                <div className="command-palette-header">
                    <span className="command-palette-icon">⌘</span>
                    <input
                        ref={inputRef}
                        type="text"
                        className="command-palette-input"
                        placeholder="Type a command or search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="command-palette-list">
                    {filteredCommands.length > 0 ? (
                        filteredCommands.map((command, index) => (
                            <div
                                key={command.id}
                                className={`command-palette-item ${
                                    index === selectedIndex ? 'selected' : ''
                                }`}
                                onClick={() => command.action()}
                                onMouseEnter={() => setSelectedIndex(index)}
                            >
                                <span className="command-icon">{command.icon}</span>
                                <span className="command-label">{command.label}</span>
                                <span className="command-shortcut">Enter</span>
                            </div>
                        ))
                    ) : (
                        <div className="command-palette-empty">
                            <span>No commands found</span>
                        </div>
                    )}
                </div>
                <div className="command-palette-footer">
                    <div className="command-hint">
                        <span className="hint-key">↑↓</span>
                        <span>Navigate</span>
                    </div>
                    <div className="command-hint">
                        <span className="hint-key">↵</span>
                        <span>Select</span>
                    </div>
                    <div className="command-hint">
                        <span className="hint-key">Esc</span>
                        <span>Close</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommandPalette;

