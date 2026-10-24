import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Layout, Search, Brain, Bot } from 'lucide-react';

const WhyWorkWithMe = () => {
  const reasons = [
    { icon: Layout, title: 'Modern Premium UI', desc: 'Interfaces that feel clean, modern, and build immediate trust.' },
    { icon: Zap, title: 'Fast-Loading & Mobile Ready', desc: 'Optimized for responsive performance across mobile, tablet, and desktop screens.' },
    { icon: Bot, title: 'AI & Automation', desc: 'Building AI-powered applications and automation workflows that solve practical problems.' },
    { icon: Brain, title: 'User-Centered UI/UX', desc: 'Designing intuitive, accessible interfaces informed by usability and user behavior.' },
    { icon: Search, title: 'SEO & Web Standards', desc: 'Structured semantic HTML, metadata, and clean architecture built for discoverability.' },
    { icon: CheckCircle2, title: 'Full-Stack Execution', desc: 'Delivering frontend interfaces, backend APIs, and database integrations end to end.' },
  ];

  return (
    <section className="py-16 sm:py-24 relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-primary/5 rounded-full blur-[120px] sm:blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Why Work <br className="hidden sm:inline"/><span className="text-gradient-primary">With Me?</span>
            </h2>
            <p className="text-foreground/70 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              I focus on writing clean, maintainable code and building responsive web applications and AI-powered solutions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-foreground font-medium transition-all hover:scale-105 text-sm sm:text-base"
            >
              Start a Conversation
            </a>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex gap-4 p-5 sm:p-6 glass-card rounded-2xl hover:bg-white/5 transition-colors group"
              >
                <div className="shrink-0 mt-0.5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <reason.icon size={20} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2 text-foreground">{reason.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
