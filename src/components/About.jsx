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
    { label: 'Live Demos', value: '7', icon: Users },
    { label: 'AI / RAG Project', value: '1', icon: Lightbulb },
    { label: 'Education & Certifications', value: '2', icon: BarChart },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          

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
              className="relative rounded-3xl overflow-hidden glass-card border border-white/10 aspect-[4/5] max-w-md mx-auto shadow-[0_0_35px_rgba(16,185,129,0.2)]"
            >
              <img src={myImage} alt="Abdullahi Ibrahim" loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              More Than Just a <span className="text-gradient-primary">Developer</span>
            </h2>
            
            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed mb-8">
              <p>
                Hi, I'm <strong className="text-foreground">Abdullahi Ibrahim</strong>, also known as <strong className="text-foreground">Abdullahi-Ai</strong>. I'm a Software Developer and AI Developer specializing in building high-end, premium web experiences and AI-powered solutions for businesses, startups, and NGOs.
              </p>
              <p>
                Holding a Bachelor of Arts and Social Sciences from the <strong>University of Nairobi</strong>, with a <strong>Double Major in Sociology and Psychology</strong>, I have a versatile background that allows me to deeply understand human behavior and work effectively across diverse fields and industries.
              </p>
              <p>
                Coupled with a Software Development Certification from <strong>Moringa School</strong>, I bring high adaptability to my development work. My interests include software development, artificial intelligence, AI agents, agentic AI systems, and AI automation. Whether you need a stunning front-end web interface, a highly optimized marketing website, or an AI-powered application, I've got you covered. For complex, large-scale Full-Stack applications, I collaborate with a dedicated team of experts to ensure we deliver a robust and perfect solution tailored to your exact needs.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-10 pb-6 border-b border-white/10">
              <span className="text-xs uppercase tracking-wider text-foreground/50 font-semibold mr-2">Connect:</span>
              <a
                href="https://www.linkedin.com/in/osman-noor-08a297358"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:border-primary/50 text-foreground/90 hover:text-primary transition-all text-sm font-medium"
                aria-label="Connect with Abdullahi Ibrahim on LinkedIn"
              >
                <LinkedinIcon /> LinkedIn
              </a>
              <a
                href="https://instagram.com/osmanibrahim5181"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:border-primary/50 text-foreground/90 hover:text-primary transition-all text-sm font-medium"
                aria-label="Follow Abdullahi Ibrahim on Instagram"
              >
                <InstagramIcon /> @osmanibrahim5181
              </a>
              <a
                href="https://github.com/Abdullahi-Ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:border-primary/50 text-foreground/90 hover:text-primary transition-all text-sm font-medium"
                aria-label="View Abdullahi Ibrahim's GitHub"
              >
                <GithubIcon /> GitHub
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="glass-card p-4 rounded-xl hover:bg-white/5 transition-colors border border-white/5 flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <stat.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{stat.value}</h3>
                    <p className="text-xs text-foreground/60">{stat.label}</p>
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
