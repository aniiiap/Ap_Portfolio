import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Education from './components/Education';
import Languages from './components/Languages';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Hireme from './components/Hireme';
import { useTheme } from './context/ThemeContext';

function App() {
    const { toggleTheme } = useTheme();

    useEffect(() => {
        if (window.location.hash === '#main-section' || window.location.hash === '') {
            window.history.replaceState(null, '', '/');
        }
    }, []);

    return (
        <div className="App">
            <Header onBulbClick={toggleTheme} />
            <MainSection />
            <About />
            <Portfolio />
            <Contact />
            <Hireme />
            <Education />
            <Languages />
            <Skills />
            <Experience />
        </div>
    );
}

export default App;
