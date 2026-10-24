import { motion } from 'framer-motion';

const Experience = () => {
  const journey = [
    {
      year: 'Academic',
      title: 'University of Nairobi: Sociology and Psychology',
      desc: 'Double major in Sociology and Psychology, building an understanding of human behavior, cognition, and social dynamics that informs user-centred software.',
      align: 'left',
    },
    {
      year: '2025',
      title: 'Moringa School Certification',
      desc: 'Intensive training in software development, covering frontend and full-stack web development and UI/UX.',
      align: 'right',
    },
    {
      year: '2024 - 2025',
      title: 'Freelance & Modern Branding Growth',
      desc: 'Began freelance development, focusing on modern UI/UX, responsive layouts, and business-centric digital branding. Built projects like Health Psychology Hospital.',
      align: 'left',
    },
    {
      year: 'Present',
      title: 'Software Developer',
      desc: 'Building web applications and exploring AI agents, automation, and AI-powered applications, including a RAG-based shopping assistant prototype.',
      align: 'right',
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-card/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient-primary">Journey</span>
          </motion.h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">From studying human behavior to building web applications and exploring AI.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">

          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-emerald-500 to-transparent hidden md:block rounded-full opacity-30" />

          <div className="space-y-12">
            {journey.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center justify-between ${
                  item.align === 'right' ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`w-full md:w-[45%] ${item.align === 'right' ? 'md:text-left' : 'md:text-right'} mb-6 md:mb-0`}>
                  <div className="glass-card p-6 md:p-8 rounded-2xl hover:border-primary/50 transition-colors">
                    <span className="text-primary font-bold text-lg mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-foreground/70 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>


                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary items-center justify-center z-10 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                </div>

                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
