import { useEffect, Suspense, lazy } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const WhyWorkWithMe = lazy(() => import('./components/WhyWorkWithMe'));
const TechStack = lazy(() => import('./components/TechStack'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState('', document.title, window.location.pathname);
    }
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground font-sans overflow-x-hidden">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 via-primary to-teal-200 origin-left z-[100] shadow-[0_0_12px_rgba(16,185,129,0.8)]"
      />
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-20 flex items-center justify-center"><div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
        <About />
        <TechStack />
        <Education />
        <Services />
        <Portfolio />
        <WhyWorkWithMe />
        <Experience />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
