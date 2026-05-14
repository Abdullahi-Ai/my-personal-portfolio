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
      className="fixed inset-0 z-[100] bg-[#004d33] flex flex-col p-8 overflow-y-auto"
    >
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#004d33] font-bold shadow-xl">
            <Code2 size={28} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl tracking-tight text-white leading-tight">
              Abdullahi
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-emerald-200/60 font-bold">
              Digital Architect
            </span>
          </div>
        </div>
        <button 
          onClick={() => handleAction('#')} 
          className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <X size={28} />
        </button>
      </div>

      <nav className="flex flex-col gap-10 mb-16">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleAction(link.href)}
            className="text-5xl font-bold text-white hover:text-emerald-300 transition-all text-left tracking-tight"
          >
            {link.name}
          </button>
        ))}
      </nav>

      <div className="mt-auto space-y-6">
        <button
          onClick={() => handleAction('#contact')}
          className="w-full py-5 rounded-full bg-[#eab308] text-[#004d33] font-black text-xl hover:bg-yellow-400 transition-all shadow-2xl uppercase tracking-wider"
        >
          LET'S TALK
        </button>
        
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleAction('#portfolio')}
            className="w-full py-4 rounded-full border-2 border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all"
          >
            VIEW MY WORK
          </button>
        </div>

        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-emerald-200/40 text-xs font-bold tracking-[0.3em] uppercase">
            Specializing in Premium Experiences
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeOverlay;
