import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, BarChart } from 'lucide-react';
import myImage from '../assets/image.png';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const About = () => {
  // Figures below are counted from the Featured Projects section and the Education section.
  const stats = [
    { label: 'Featured Projects', value: '8', icon: Code },
    { label: 'Live Demos', value: '6', icon: Users },
    { label: 'AI / RAG Project', value: '1', icon: Lightbulb },
    { label: 'Education & Certifications', value: '2', icon: BarChart },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/25 rounded-3xl blur-2xl transform -rotate-6 animate-pulse"></div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="relative rounded-3xl overflow-hidden glass-card border border-white/10 aspect-[4/5] max-w-xs sm:max-w-md mx-auto shadow-[0_0_35px_rgba(16,185,129,0.2)]"
            >
              <img src={myImage} alt="Abdullahi Ibrahim (Osman), Software Developer in Kenya" loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient-primary">Abdullahi Ibrahim (Osman)</span>
            </h2>
            
            <div className="space-y-4 text-foreground/80 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                <strong className="text-foreground">Abdullahi Ibrahim (Osman)</strong>, also known as <strong className="text-foreground">Abdullahi-Ai</strong>, is a software developer based in Kenya who builds web applications and AI-powered solutions.
              </p>
              <p>
                He trained in software development at <strong>Moringa School</strong> (Full Stack Web Development &amp; UI/UX) and is pursuing a <strong>Bachelor of Arts in Social Sciences</strong> specializing in <strong>Sociology and Psychology</strong> at the <strong>University of Nairobi</strong> (expected graduation December 2026). Explore his <a href="#portfolio" className="text-primary hover:underline">projects</a>, <a href="#education" className="text-primary hover:underline">education</a>, or <a href="#contact" className="text-primary hover:underline">get in touch</a>.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8 sm:mb-10 pb-6 border-b border-white/10">
              <span className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mr-1">Connect:</span>
              <a
                href="https://github.com/Abdullahi-Ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass-card hover:border-primary/50 text-foreground/90 hover:text-primary transition-all text-sm font-medium"
                aria-label="View Abdullahi Ibrahim (Osman)'s GitHub"
              >
                <GithubIcon /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/osman-noor-08a297358"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass-card hover:border-primary/50 text-foreground/90 hover:text-primary transition-all text-sm font-medium"
                aria-label="Connect with Abdullahi Ibrahim (Osman) on LinkedIn"
              >
                <LinkedinIcon /> LinkedIn
              </a>
              <a
                href="https://www.instagram.com/osmanibrahim5181/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass-card hover:border-primary/50 text-foreground/90 hover:text-primary transition-all text-sm font-medium"
                aria-label="Follow Abdullahi Ibrahim (Osman) on Instagram"
              >
                <InstagramIcon /> @osmanibrahim5181
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="glass-card p-3.5 sm:p-4 rounded-xl hover:bg-white/5 transition-colors border border-white/5 flex items-center gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <stat.icon size={20} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">{stat.value}</h3>
                    <p className="text-xs text-foreground/70 truncate">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
