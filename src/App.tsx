import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import Videos from './components/Videos';
import Collaborations from './components/Collaborations';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div
      className={`transition-colors duration-300 ${
        darkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-110 transition-transform"
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero darkMode={darkMode} />
        <Collaborations darkMode={darkMode} />
        <Videos darkMode={darkMode} />
        <Instagram darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
