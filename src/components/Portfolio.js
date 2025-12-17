import React, { useMemo } from "react";
import './Portfolio.css';
import '../styles/animations.css';
import { useTheme } from '../context/ThemeContext';
import { useFilter } from '../context/FilterContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import projectImage1 from '../projects/ccdb911aae3789ac3d3d32b5f26d50a2ba43d893.png';
import projectImage2 from '../projects/image.png';
import projectImage3 from '../projects/Screenshot 2025-12-17 224450.png';

function Portfolio() {
    const { isDarkMode } = useTheme();
    const { selectedSkill } = useFilter();
    const [codeRef, codeVisible] = useScrollAnimation();
    const [projectsRef, projectsVisible] = useScrollAnimation();

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

    return (
        <div id="portfolio" className={`portfolio-container ${isDarkMode ? 'dark' : 'light'}`}>
            <div 
                ref={codeRef}
                className={`portfolio-code-section fade-in-up ${codeVisible ? 'visible' : ''}`}
            >
                <div className={`code-window code-window-hover ${isDarkMode ? 'dark' : 'light'}`}>
                    <div className="window-controls">
                        <div className="circle red"></div>
                        <div className="circle yellow"></div>
                        <div className="circle green"></div>
                    </div>
                    <div className="code-text">
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

