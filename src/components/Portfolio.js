import React, { useMemo, useState, useEffect } from "react";
import './Portfolio.css';
import '../styles/animations.css';
import { useTheme } from '../context/ThemeContext';
import { useFilter } from '../context/FilterContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import projectImage1 from '../projects/ccdb911aae3789ac3d3d32b5f26d50a2ba43d893.png';
import projectImage2 from '../projects/image.png';
import projectImage3 from '../projects/Screenshot 2025-12-17 224450.png';
import projectImage4 from '../projects/Screenshot 2026-01-11 163034.png';

function Portfolio() {
    const { isDarkMode } = useTheme();
    const { selectedSkill } = useFilter();
    const [codeRef, codeVisible] = useScrollAnimation();
    const [projectsRef, projectsVisible] = useScrollAnimation();
    
    // Terminal animation states
    const [showPrompt, setShowPrompt] = useState(false);
    const [commandText, setCommandText] = useState('');
    const [showCode, setShowCode] = useState(false);
    const [codeLines, setCodeLines] = useState([]);
    const [showExecuting, setShowExecuting] = useState(false);
    const [showOutput, setShowOutput] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);

    const allProjects = [
        {
            id: 1,
            title: "SAG WebApp",
            description: "Discover a dynamic hub for student engagement! Explore diverse activities, join clubs, and ignite your passions. Join us in fostering a vibrant student community!",
            technologies: ["Python", "Django", "PostgreSQL", "Docker"],
            liveDemo: "https://sag.mlvti.ac.in/about",
            codeLink: "https://github.com/SAG-Web-Devs/sag-django-api",
            image: projectImage1
        },
        {
            id: 2,
            title: "Staffdox Webapp",
            description: "A comprehensive job portal and placement consultancy platform that connects job seekers with employers. Features include user authentication, job search with advanced filtering, application tracking, and an admin dashboard for job management.",
            technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"],
            liveDemo: "https://staffdox.co.in/",
            codeLink: "https://github.com/aniiiap/Staffdox_webapp",
            image: projectImage2
        },
        {
            id: 3,
            title: "M A K V & Associates",
            description: "A modern, responsive full-stack website for M A K V & Associates built with MERN stack. Features include service management system, contact form with backend integration, smooth animations with Framer Motion, and a fully responsive design optimized for performance.",
            technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
            liveDemo: "https://www.makv.in/",
            codeLink: "https://github.com/aniiiap/Makv_web",
            image: projectImage3
        },
        {
            id: 4,
            title: "Hetave Enterprises",
            description: " Developed a full-stack e-commerce platform for safety equipment with category-based product browsing and filtering.",
            technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
            liveDemo: "https://www.hetave.co.in/",
            codeLink: "https://github.com/aniiiap/Hetave_web",
            image: projectImage4
        }
    ];

    // Filter projects based on selected skill
    const projects = useMemo(() => {
        if (!selectedSkill) {
            return allProjects;
        }
        
        // Normalize skill names for better matching
        const skillMap = {
            'Mongo Db': ['MongoDB', 'Mongo Db', 'Mongo'],
            'Node.js': ['Node.js', 'Node', 'NodeJS'],
            'Express.js': ['Express.js', 'Express', 'ExpressJS'],
            'Tailwind CSS': ['Tailwind CSS', 'Tailwind', 'TailwindCSS'],
            'PostgreSQL': ['PostgreSQL', 'Postgres', 'PostgresQL']
        };
        
        const normalizedSkill = selectedSkill.toLowerCase();
        
        return allProjects.filter(project => 
            project.technologies.some(tech => {
                const normalizedTech = tech.toLowerCase();
                // Direct match
                if (normalizedTech === normalizedSkill) return true;
                // Check if skill is in the tech name or vice versa
                if (normalizedTech.includes(normalizedSkill) || normalizedSkill.includes(normalizedTech)) return true;
                // Check skill map for variations
                const variations = skillMap[selectedSkill] || [];
                return variations.some(variation => 
                    normalizedTech === variation.toLowerCase() || 
                    normalizedTech.includes(variation.toLowerCase())
                );
            })
        );
    }, [selectedSkill, allProjects]);

    // Terminal animation effect
    useEffect(() => {
        if (!codeVisible) {
            // Reset when not visible
            setShowPrompt(false);
            setCommandText('');
            setShowCode(false);
            setCodeLines([]);
            setShowExecuting(false);
            setShowOutput(false);
            setAnimationComplete(false);
            return;
        }

        const command = 'showcaseProjects()';
        const codeStructure = [
            { type: 'keyword', text: 'function' },
            { type: 'space', text: ' ' },
            { type: 'function', text: 'showcaseProjects' },
            { type: 'punctuation', text: ' ()' },
            { type: 'punctuation', text: ' {' },
        ];
        const codeStructure2 = [
            { type: 'indent', text: '  ' },
            { type: 'keyword', text: 'return' },
            { type: 'space', text: ' ' },
            { type: 'variable', text: 'projects' },
        ];
        const codeStructure3 = [
            { type: 'punctuation', text: '}' },
        ];

        // Start animation sequence
        const timer1 = setTimeout(() => {
            setShowPrompt(true);
        }, 300);

        // Type command
        let commandIndex = 0;
        const commandTimer = setInterval(() => {
            if (commandIndex < command.length) {
                setCommandText(command.slice(0, commandIndex + 1));
                commandIndex++;
            } else {
                clearInterval(commandTimer);
                // Show executing state
                setTimeout(() => {
                    setShowExecuting(true);
                }, 500);
                // Show code after a delay
                setTimeout(() => {
                    setShowCode(true);
                    setShowExecuting(false);
                    
                    // Type first line
                    let line1Index = 0;
                    const line1Timer = setInterval(() => {
                        if (line1Index < codeStructure.length) {
                            setCodeLines([codeStructure.slice(0, line1Index + 1)]);
                            line1Index++;
                        } else {
                            clearInterval(line1Timer);
                            
                            // Type second line after delay
                            setTimeout(() => {
                                let line2Index = 0;
                                const line2Timer = setInterval(() => {
                                    if (line2Index < codeStructure2.length) {
                                        setCodeLines([
                                            codeStructure,
                                            codeStructure2.slice(0, line2Index + 1)
                                        ]);
                                        line2Index++;
                                    } else {
                                        clearInterval(line2Timer);
                                        
                                        // Type third line after delay
                                        setTimeout(() => {
                                            setCodeLines([
                                                codeStructure,
                                                codeStructure2,
                                                codeStructure3
                                            ]);
                                            
                                            // Show output after code is complete
                                            setTimeout(() => {
                                                setShowOutput(true);
                                                setAnimationComplete(true);
                                            }, 600);
                                        }, 200);
                                    }
                                }, 50);
                            }, 300);
                        }
                    }, 50);
                }, 1200);
            }
        }, 100);

        return () => {
            clearTimeout(timer1);
            clearInterval(commandTimer);
        };
    }, [codeVisible]);

    return (
        <div id="portfolio" className={`portfolio-container ${isDarkMode ? 'dark' : 'light'}`}>
            <div 
                ref={codeRef}
                className={`portfolio-code-section fade-in-up ${codeVisible ? 'visible' : ''}`}
            >
                <div className={`code-window code-window-hover ${isDarkMode ? 'dark' : 'light'} ${(showExecuting || (showCode && !showOutput)) ? 'executing' : ''} ${animationComplete ? 'completed' : ''}`}>
                    <div className="window-controls">
                        <div className="circle red"></div>
                        <div className="circle yellow"></div>
                        <div className="circle green"></div>
                    </div>
                    <div className="code-text">
                        {showPrompt && (
                            <div className="terminal-prompt">
                                <span className="prompt-symbol">$ </span>
                                <span className="command-line">
                                    {commandText}
                                    {commandText.length < 19 && (
                                        <span className="cursor-blink">|</span>
                                    )}
                                </span>
                            </div>
                        )}
                        {showExecuting && (
                            <div className="executing-indicator">
                                <span className="executing-text">⏳ Executing...</span>
                                <span className="executing-dots">
                                    <span className="dot">.</span>
                                    <span className="dot">.</span>
                                    <span className="dot">.</span>
                                </span>
                            </div>
                        )}
                        {showCode && codeLines.length > 0 && (
                            <div className="code-output">
                                {codeLines.map((line, lineIndex) => (
                                    <div key={lineIndex} className="code-line">
                                        {line.map((token, tokenIndex) => {
                                            if (token.type === 'keyword') {
                                                return <span key={tokenIndex} className="code-keyword">{token.text}</span>;
                                            } else if (token.type === 'function') {
                                                return <span key={tokenIndex} className="code-function">{token.text}</span>;
                                            } else if (token.type === 'variable') {
                                                return <span key={tokenIndex} className="code-variable">{token.text}</span>;
                                            } else if (token.type === 'punctuation') {
                                                return <span key={tokenIndex} className="code-punctuation">{token.text}</span>;
                                            } else if (token.type === 'indent') {
                                                return <span key={tokenIndex} className="code-indent">{token.text}</span>;
                                            } else {
                                                return <span key={tokenIndex}>{token.text}</span>;
                                            }
                                        })}
                                        {lineIndex === codeLines.length - 1 && !showOutput && (
                                            <span className="cursor-blink">|</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        {showOutput && (
                            <div className="execution-output">
                                <div className="output-line">
                                    <span className="output-symbol">▶</span>
                                    <span className="output-text">Array({projects.length})</span>
                                </div>
                                <div className="output-success">
                                    <span className="success-icon">✓</span>
                                    <span className="success-text">Function executed successfully</span>
                                </div>
                            </div>
                        )}
                        {!showPrompt && !showCode && !showOutput && (
                            <>
                                <div className="code-line">
                                    <span className="code-keyword">function</span>{' '}
                                    <span className="code-function">showcaseProjects</span>
                                    <span className="code-punctuation"> ()</span>
                                    <span className="code-punctuation"> {'{'}</span>
                                </div>
                                <div className="code-line">
                                    <span className="code-indent">  </span>
                                    <span className="code-keyword">return</span>{' '}
                                    <span className="code-variable">projects</span>
                                </div>
                                <div className="code-line">
                                    <span className="code-punctuation">{'}'}</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div 
                ref={projectsRef}
                className={`portfolio-projects-section fade-in-up ${projectsVisible ? 'visible' : ''}`}
            >
                <h2 className="portfolio-subtitle">projects()</h2>
                <div className="projects-grid">
                {projects.length > 0 ? projects.map((project) => (
                    <div 
                        key={project.id} 
                        className={`project-card hover-lift ${isDarkMode ? 'dark' : 'light'}`}
                    >
                        <div className="project-image">
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="project-img" />
                            ) : (
                                <div className="project-placeholder">
                                    <span>Project Image</span>
                                </div>
                            )}
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-technologies">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link live-preview">
                                    <svg className="link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                    <span className="link-text">Live Preview</span>
                                </a>
                                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link view-code">
                                    <svg className="link-icon github-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    <span className="link-text">View Code</span>
                                </a>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="no-projects">
                        <p>No projects found for the selected skill.</p>
                    </div>
                )}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;

