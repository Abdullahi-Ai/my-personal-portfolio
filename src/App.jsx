import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Testimonials from './components/Testimonials';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

import WelcomeOverlay from './components/WelcomeOverlay';
import { AnimatePresence } from 'framer-motion';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState('', document.title, window.location.pathname);
    }
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Services />
      <Portfolio />
      <WhyWorkWithMe />
      <Testimonials />
      <TechStack />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
