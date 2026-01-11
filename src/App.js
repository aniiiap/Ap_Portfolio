import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ScrollProgress from './components/ScrollProgress';
import CommandPalette from './components/CommandPalette';
import BackToTop from './components/BackToTop';
import MainSection from './components/MainSection';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Education from './components/Education';
import Languages from './components/Languages';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Hireme from './components/Hireme';
import Footer from './components/Footer';
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
            <ScrollProgress />
            <CommandPalette />
            <BackToTop />
            <Header onBulbClick={toggleTheme} />
            <MainSection />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Portfolio />
            <Contact />
            <Hireme />
            {/* <Languages /> */}
            <Footer />
        </div>
    );
}

export default App;
