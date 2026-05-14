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
      className="fixed inset-0 z-[100] bg-background flex flex-col p-6 overflow-y-auto"
    >

      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-emerald-400 flex items-center justify-center text-background font-bold">
            <Code2 size={24} />
          </div>
        </div>
        <button onClick={() => handleAction('#')} className="text-foreground/50 hover:text-foreground">
          <X size={24} />
        </button>
      </div>


      <nav className="flex flex-col gap-6 mb-12">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleAction(link.href)}
            className="text-2xl font-bold text-foreground/90 hover:text-primary text-left border-b border-white/5 pb-4 transition-colors"
          >
            {link.name}
          </button>
        ))}
      </nav>


      <div className="flex flex-col gap-4 mb-12">
        <button
          onClick={() => handleAction('#contact')}
          className="w-full py-4 rounded-2xl bg-primary text-background font-bold text-lg hover:bg-emerald-400 transition-all"
        >
          Let's Talk
        </button>
        
        <div className="flex flex-col gap-3 mt-8">
          <button
            onClick={() => handleAction('#portfolio')}
            className="w-full py-4 rounded-2xl bg-emerald-500 text-background font-bold text-lg flex items-center justify-center gap-2"
          >
            View My Work <ArrowRight size={20} />
          </button>
          <button
            onClick={() => handleAction('#contact')}
            className="w-full py-4 rounded-2xl glass-card text-foreground font-bold text-lg border border-white/10"
          >
            Hire Me
          </button>
        </div>
      </div>


      <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/40 mt-auto pb-8">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          Premium UI/UX
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          Full Stack Dev
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          Business Focused
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeOverlay;
