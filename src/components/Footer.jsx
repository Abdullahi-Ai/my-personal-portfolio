import React from 'react';
import { Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-background/50 backdrop-blur-xl relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-emerald-400 flex items-center justify-center text-background font-bold">
              <Code2 size={16} />
            </div>
            <span className="font-bold tracking-tight text-foreground">
              Abdullahi<span className="text-primary">.AI</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/60">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.replaceState('', document.title, window.location.pathname);
            }} className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          </div>

          <div className="text-sm text-foreground/40">
            © {new Date().getFullYear()} Abdullahi Ibrahim. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
