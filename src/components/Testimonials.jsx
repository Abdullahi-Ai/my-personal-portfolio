import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmed Luqman',
      role: 'Founder',
      company: 'LuqmanTech',
      text: 'Abdullahi transformed our digital presence. The attention to detail, smooth animations, and overall premium feel elevated our brand beyond our expectations.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Sarah Hassan',
      role: 'Director',
      company: 'Health Psychology Hospital',
      text: 'Working with Abdullahi was a seamless experience. He understood our need for a professional, patient-centered UI and delivered a website that truly represents our values.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Omar Jamal',
      role: 'Operations Manager',
      company: 'Zamanijets Airline',
      text: 'The booking platform he built is phenomenal. The glassmorphism UI and intuitive flow make our premium airline services accessible and visually stunning.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
    },
  ];

  return (
    <section className="py-24 relative bg-card/20 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Client <span className="text-gradient-primary">Testimonials</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-card p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-6 text-primary/20 w-12 h-12 rotate-180" />
              
              <div className="flex gap-1 text-gold mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-foreground/80 mb-8 relative z-10 italic">
                "{test.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={test.image} alt={test.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" />
                <div>
                  <h4 className="font-bold text-foreground">{test.name}</h4>
                  <p className="text-sm text-primary">{test.role}, {test.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
