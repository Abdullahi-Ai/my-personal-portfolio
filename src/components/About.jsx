import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, BarChart } from 'lucide-react';
import myImage from '../assets/image.png';

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '40+', icon: Code },
    { label: 'Happy Clients', value: '30+', icon: Users },
    { label: 'Technologies Used', value: '15+', icon: Lightbulb },
    { label: 'Years of Learning', value: '4+', icon: BarChart },
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
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl transform -rotate-6"></div>
            <div className="relative rounded-3xl overflow-hidden glass-card border border-white/10 aspect-[4/5] max-w-md mx-auto">
              <img src={myImage} alt="Abdullahi Ibrahim" className="w-full h-full object-cover" />
            </div>
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
            
            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed mb-10">
              <p>
                Hi, I'm <strong className="text-foreground">Abdullahi Ibrahim</strong>. I specialize in building high-end, premium web experiences tailored for businesses, startups, and NGOs.
              </p>
              <p>
                Holding a Bachelor of Arts and Social Sciences from the <strong>University of Nairobi</strong>, with courses in <strong>Sociology and Psychology</strong>, I have a versatile background that allows me to deeply understand human behavior and work effectively across diverse fields and industries.
              </p>
              <p>
                Coupled with a Software Development Certification from <strong>Moringa School</strong>, I bring high adaptability to my development work. Whether you need a stunning front-end web interface or a highly optimized marketing website, I've got you covered. For complex, large-scale Full-Stack applications, I collaborate with a dedicated team of experts to ensure we deliver a robust and perfect solution tailored to your exact needs.
              </p>
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
