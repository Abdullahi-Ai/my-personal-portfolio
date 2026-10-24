import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleMobileLinkClick = (e, href) => {
    setIsMobileMenuOpen(false);
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState('', document.title, window.location.pathname);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled && !isMobileMenuOpen ? 'bg-background/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.replaceState('', document.title, window.location.pathname);
          }}
          className="flex items-center gap-2 group relative z-[60]"
          aria-label="Abdullahi Ibrahim Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-emerald-400 flex items-center justify-center text-background font-bold text-xl group-hover:scale-105 transition-transform">
            <Code2 size={24} />
          </div>
          <span className="font-bold text-lg sm:text-xl tracking-tight text-foreground">
            Abdullahi<span className="text-primary">.AI</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.name === 'Home') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  window.history.replaceState('', document.title, window.location.pathname);
                }
              }}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-all hover:scale-105"
          >
            Let's Talk
          </a>
        </nav>

        <button
          className="lg:hidden text-foreground p-2.5 relative z-[60] rounded-xl hover:bg-white/5 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-background flex flex-col px-6 py-8 sm:p-8 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-4 sm:gap-6 mt-16">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleMobileLinkClick(e, link.href)}
                  className="text-xl sm:text-2xl font-bold text-foreground/90 hover:text-primary border-b border-white/5 pb-3 sm:pb-4 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-8 sm:mt-12">
              <a
                href="#portfolio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3.5 sm:py-4 rounded-2xl bg-primary text-background font-bold text-base sm:text-lg text-center flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all"
              >
                View My Work
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3.5 sm:py-4 rounded-2xl glass-card text-foreground font-bold text-base sm:text-lg text-center border border-white/10 hover:bg-white/10 transition-all"
              >
                Contact Me
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-foreground/50 mt-auto pt-8 pb-4">
              <div className="flex flex-col items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mb-1" />
                Web Development
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mb-1" />
                AI & Automation
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mb-1" />
                Software Engineering
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
