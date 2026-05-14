import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const journey = [
    {
      year: '2022 - 2026',
      title: 'Graduation from University of Nairobi',
      desc: 'Earned Bachelor of Arts and Social Sciences, specializing in Sociology & Psychology. Developed a deep understanding of human behavior and user psychology.',
      align: 'left',
    },
    {
      year: '2025',
      title: 'Moringa School Certification',
      desc: 'Intensive training in Software Development. Mastered Frontend and Full Stack development, transitioning into a professional digital creator.',
      align: 'right',
    },
    {
      year: '2024',
      title: 'Freelance & Modern Branding Growth',
      desc: 'Began freelance development, focusing on modern UI/UX, responsive layouts, and business-centric digital branding. Built projects like Health Psychology Hospital and Zamanijets.',
      align: 'left',
    },
    {
      year: 'Present',
      title: 'Professional Web Developer',
      desc: 'Specializing in premium business and NGO websites. Delivering high-end agency-level quality and human-centered web experiences for a global clientele.',
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
          <p className="text-foreground/70 max-w-2xl mx-auto">From understanding human behavior to building digital experiences that connect with them.</p>
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
