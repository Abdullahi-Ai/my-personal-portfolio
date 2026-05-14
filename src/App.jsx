import React, { useEffect, useState, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const WhyWorkWithMe = lazy(() => import('./components/WhyWorkWithMe'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const TechStack = lazy(() => import('./components/TechStack'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

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
      <Suspense fallback={<div className="h-20 flex items-center justify-center"><div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
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
      </Suspense>
    </div>
  );
}

export default App;
