import { motion } from 'framer-motion';

const Experience = () => {
  const journey = [
    {
      year: 'Software Training',
      title: 'Moringa School',
      desc: 'Certificate in Software Development covering frontend and full-stack web development and UI/UX.',
      align: 'left',
    },
    {
      year: 'University (Expected Dec 2026)',
      title: 'University of Nairobi',
      desc: 'Pursuing a Bachelor of Arts in Social Sciences, specializing in Sociology and Psychology.',
      align: 'right',
    },
    {
      year: 'Projects',
      title: 'Web & Application Development',
      desc: 'Built business and school websites, full-stack web applications, and a Point of Sale (POS) system.',
      align: 'left',
    },
    {
      year: 'Present',
      title: 'Software Developer in Kenya',
      desc: 'Focused on building modern web applications and AI-powered solutions, including a RAG-based shopping assistant.',
      align: 'right',
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 relative bg-card/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient-primary">Journey</span>
          </motion.h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-sm sm:text-base">Building modern web applications, full-stack software, and AI-powered solutions in Kenya.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">

          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-emerald-500 to-transparent hidden md:block rounded-full opacity-30" />

          <div className="space-y-6 sm:space-y-12">
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
                <div className={`w-full md:w-[45%] ${item.align === 'right' ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="glass-card p-5 sm:p-6 md:p-8 rounded-2xl hover:border-primary/50 transition-colors">
                    <span className="text-primary font-bold text-base sm:text-lg mb-1.5 sm:mb-2 block">{item.year}</span>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
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
