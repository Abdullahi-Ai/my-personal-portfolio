import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const Portfolio = () => {
  const projects = [
    {
      title: 'Osman AI Shopping Assistant',
      category: 'AI Application',
      status: 'Prototype',
      desc: 'A RAG-powered e-commerce shopping assistant. A React storefront communicates with a FastAPI backend that retrieves store knowledge from ChromaDB using sentence-transformers embeddings and LangChain.',
      tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'React'],
      githubUrl: 'https://github.com/Abdullahi-Ai/osman-accessories-ai',
      image: '/osman-ai.png',
    },
    {
      title: 'SchoolPOS Pro',
      category: 'Point of Sale System',
      desc: 'A school management and Point of Sale (POS) application for handling tuition fee payments, automated receipt generation, student enrollment records, attendance, and staff payroll.',
      tech: ['React', 'JavaScript', 'PostgreSQL', 'Electron'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Health Psychology Hospital',
      category: 'Web Application',
      desc: 'A healthcare and psychology-focused hospital website with responsive medical layouts and a patient-centered user interface.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      liveUrl: 'https://abdullahi-ai.github.io/health-psychology-Hospital',
      githubUrl: 'https://github.com/Abdullahi-Ai/health-psychology-Hospital',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Mumtaaz Girls High School',
      category: 'School Website',
      desc: 'An academic institution website presenting admissions information, academic programs, and responsive layouts for students and parents.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://mumtaaz-girls-high-school.vercel.app/',
      githubUrl: 'https://github.com/Abdullahi-Ai/Mumtaaz-Girls-High-school-',
      image: '/mumtaaz.png',
    },
    {
      title: 'Al-Yaqin Education Centre',
      category: 'School Website',
      desc: 'An educational institution website focused on learning programs, school branding, and responsive presentation across mobile and desktop.',
      tech: ['React', 'Tailwind CSS'],
      liveUrl: 'https://al-yaqin-education-centre-ggvu.vercel.app/',
      githubUrl: 'https://github.com/Abdullahi-Ai/AL-yaqin-Education-center',
      image: 'https://images.unsplash.com/photo-1584697964400-2af6a2f6204c?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'LuqmanTech Portfolio',
      category: 'Business Website',
      desc: 'A modern technology portfolio website featuring smooth animations, responsive layouts, and clean frontend design.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://luqmantech.vercel.app/',
      githubUrl: 'https://github.com/Abdullahi-Ai/luqmantech',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Mambasa Group Agency',
      category: 'Business Website',
      desc: 'A digital agency and branding website built for marketing presentation and responsive online presence.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      liveUrl: 'https://mambsa-group-agency.vercel.app/',
      githubUrl: 'https://github.com/Abdullahi-Ai/Mambsa-Group-Agency',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'The Light of Peace Charity',
      category: 'NGO Website',
      desc: 'A humanitarian NGO platform focused on orphan support, community outreach, clean water projects, and community programs.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://the-light-of-peace.vercel.app/',
      githubUrl: 'https://github.com/Abdullahi-Ai/THE-LIGHT-OF-PEACE',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-24 relative bg-card/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="text-gradient-primary">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/70 max-w-2xl mx-auto text-sm sm:text-base"
          >
            Web applications, business and school websites, point-of-sale systems, and AI-powered applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
            >

              <div className="relative h-48 sm:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-90 z-10" />
              </div>


              <div className="p-5 sm:p-6 relative z-20 flex-1 flex flex-col -mt-10 sm:-mt-12">
                <div className="flex gap-2 flex-wrap mb-3 sm:mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-md rounded-full border border-white/5 text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-xs uppercase tracking-wider text-foreground/60 mb-3">
                  {[project.category, project.status].filter(Boolean).join(' · ')}
                </p>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-background font-medium transition-all text-sm"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        project.liveUrl ? 'p-2.5' : 'flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium'
                      } rounded-lg bg-white/5 hover:bg-white/10 text-foreground transition-all border border-white/5`}
                      title={`View ${project.title} source code on GitHub`}
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <GithubIcon />
                      {!project.liveUrl && <span>Source Code</span>}
                    </a>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <span className="text-xs text-foreground/50 py-2">Desktop / local deployment</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
