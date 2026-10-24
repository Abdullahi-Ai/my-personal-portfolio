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

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-foreground/60">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.replaceState('', document.title, window.location.pathname);
            }} className="hover:text-primary transition-colors py-1">Home</a>
            <a href="#about" className="hover:text-primary transition-colors py-1">About</a>
            <a href="#education" className="hover:text-primary transition-colors py-1">Education</a>
            <a href="#services" className="hover:text-primary transition-colors py-1">Services</a>
            <a href="#portfolio" className="hover:text-primary transition-colors py-1">Portfolio</a>
            <a href="#experience" className="hover:text-primary transition-colors py-1">Experience</a>
            <a href="#contact" className="hover:text-primary transition-colors py-1">Contact</a>
          </div>

          <div className="flex items-center gap-4 text-sm text-foreground/60">
            <a
              href="https://github.com/Abdullahi-Ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/osman-noor-08a297358/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/osmanibrahim5181/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Instagram
            </a>
          </div>

          <div className="text-xs sm:text-sm text-foreground/50 text-center">
            © {new Date().getFullYear()} Abdullahi Ibrahim (Osman). All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
