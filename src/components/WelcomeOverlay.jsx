import React from 'react';
import { motion } from 'framer-motion';
import { X, Code2, ArrowRight } from 'lucide-react';

const WelcomeOverlay = ({ onEnter }) => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
  ];

  const handleAction = (href) => {
    onEnter();
    if (href !== '#') {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center p-6 overflow-y-auto"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-2xl flex flex-col relative z-10">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-emerald-400 flex items-center justify-center text-background font-bold shadow-lg shadow-primary/20">
              <Code2 size={28} />
            </div>
            <span className="font-bold text-2xl tracking-tight text-foreground ml-2">
              Abdullahi<span className="text-primary">.AI</span>
            </span>
          </div>
          <button 
            onClick={() => handleAction('#')} 
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground/50 hover:text-foreground hover:bg-white/10 transition-all"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleAction(link.href)}
              className="px-6 py-4 rounded-2xl glass-card text-xl font-bold text-foreground/90 hover:text-primary hover:border-primary/50 transition-all text-left flex items-center justify-between group"
            >
              {link.name}
              <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
            </button>
          ))}
        </nav>

        <div className="space-y-4">
          <button
            onClick={() => handleAction('#contact')}
            className="w-full py-5 rounded-2xl bg-primary text-background font-black text-xl hover:bg-emerald-400 transition-all shadow-xl shadow-primary/20 hover:scale-[1.01]"
          >
            LET'S TALK
          </button>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => handleAction('#portfolio')}
              className="py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
            >
              View My Work
            </button>
            <button
              onClick={() => handleAction('#contact')}
              className="py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground font-bold text-lg hover:bg-white/10 transition-all"
            >
              Hire Me
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-foreground/30 mt-16 pb-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02]">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            PREMIUM UI/UX
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02]">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            FULL STACK DEV
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02]">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            BUSINESS FOCUSED
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeOverlay;
