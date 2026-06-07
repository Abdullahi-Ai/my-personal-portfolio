import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          My <span className="text-gradient-primary">Tech Stack</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center p-4 group-hover:bg-white/10 group-hover:-translate-y-2 transition-all duration-300">
                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm font-medium text-foreground/70 group-hover:text-primary transition-colors">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
