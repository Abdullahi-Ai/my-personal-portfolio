import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', invertOnDark: true },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invertOnDark: true },
  ];

  const additionalSkills = [
    'SQLAlchemy',
    'REST APIs',
    'Firebase',
    'MongoDB',
    'Figma',
    'LangChain',
    'ChromaDB',
    'Electron',
  ];

  return (
    <section className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16"
        >
          My <span className="text-gradient-primary">Tech Stack</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl glass-card flex items-center justify-center p-3.5 sm:p-4 group-hover:bg-white/10 group-hover:-translate-y-2 transition-all duration-300">
                <img
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  loading="lazy"
                  className={`w-full h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform ${
                    tech.invertOnDark ? 'invert brightness-200' : ''
                  }`}
                />
              </div>
              <span className="text-xs sm:text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">{tech.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-3xl mx-auto">
          {additionalSkills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full glass-card border border-white/10 text-xs sm:text-sm font-medium text-foreground/80 hover:border-primary/40 hover:text-primary transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
