import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Globe, Smartphone, Palette, Code2, ShoppingCart, HeartHandshake, PenTool } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: Globe, title: 'Business Websites', desc: 'Premium, high-converting websites that establish brand authority and drive growth.' },
    { icon: HeartHandshake, title: 'NGO & Charity Websites', desc: 'Trust-building platforms for organizations to showcase impact and receive donations.' },
    { icon: Layout, title: 'Landing Pages', desc: 'Focused, conversion-optimized landing pages for marketing campaigns and product launches.' },
    { icon: ShoppingCart, title: 'E-commerce Solutions', desc: 'Modern online stores with seamless shopping experiences and secure checkout flows.' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Human-centered, psychologically driven interface designs that users love.' },
    { icon: Code2, title: 'Full Stack Development', desc: 'Robust, scalable, and secure web applications built with modern technologies.' },
    { icon: Smartphone, title: 'Responsive Design', desc: 'Flawless experiences across all devices, from mobile phones to large desktop screens.' },
    { icon: PenTool, title: 'Website Redesign', desc: 'Transforming outdated websites into modern, premium digital experiences.' },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Premium <span className="text-gradient-primary">Digital Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            Comprehensive web solutions tailored for modern businesses, organizations, and brands.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-primary/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-12 h-12 rounded-xl bg-card border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors relative z-10">
                <service.icon size={24} className="text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground relative z-10">{service.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed relative z-10">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
