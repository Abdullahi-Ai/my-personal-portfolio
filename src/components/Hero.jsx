import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import NeuralBackground from './NeuralBackground';
import AgentLiveTerminal from './AgentLiveTerminal';

const Hero = () => {
  const roles = [
    'Software Developer',
    'Web Application Developer',
    'AI & Automation Enthusiast',
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 sm:pb-24 overflow-hidden">
      <NeuralBackground />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/20 rounded-full blur-[120px] sm:blur-[140px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-600/10 rounded-full blur-[100px] sm:blur-[120px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs sm:text-sm font-medium mb-6 sm:mb-8 text-primary shadow-[0_0_15px_rgba(16,185,129,0.15)]"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            Hi, I'm <span className="text-gradient-primary">Abdullahi Ibrahim (Osman)</span>
            <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 text-foreground/90 min-h-[1.5em] flex items-center justify-center overflow-hidden px-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ y: 28, opacity: 0, filter: 'blur(4px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -28, opacity: 0, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-primary to-teal-200 drop-shadow-[0_0_25px_rgba(16,185,129,0.4)]"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-foreground/70 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2"
          >
            Abdullahi Ibrahim (Osman) is a software developer based in Kenya who builds web applications and AI-powered solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="#portfolio"
              className="relative overflow-hidden group w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-primary text-background font-semibold text-base sm:text-lg hover:bg-emerald-400 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.35)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full glass-card hover:bg-white/10 transition-all hover:scale-105 text-base sm:text-lg font-medium flex items-center justify-center border border-white/10"
            >
              Hire Me
            </a>
          </motion.div>

          <AgentLiveTerminal />


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/5 flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-3 text-xs sm:text-sm text-foreground/60"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-primary shrink-0" /> Web Development
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-primary shrink-0" /> AI & Automation
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-primary shrink-0" /> Software Engineering
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <a href="#about" aria-label="Scroll to About section" className="text-foreground/50 hover:text-primary transition-colors p-2 inline-block">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
