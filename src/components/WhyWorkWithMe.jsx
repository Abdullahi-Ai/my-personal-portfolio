import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Layout, Search, Brain, MessageSquare } from 'lucide-react';

const WhyWorkWithMe = () => {
  const reasons = [
    { icon: Layout, title: 'Modern Premium UI', desc: 'Interfaces that feel luxurious, cutting-edge, and build immediate trust.' },
    { icon: Zap, title: 'Fast-Loading & Mobile Ready', desc: 'Optimized for lightning-fast performance across all devices and screen sizes.' },
    { icon: Search, title: 'SEO & Business Focused', desc: 'Built to rank higher, convert better, and achieve your business goals.' },
    { icon: Brain, title: 'Psychology-Driven Design', desc: 'Understanding user behavior to craft intuitive and engaging digital journeys.' },
    { icon: MessageSquare, title: 'Strong Communication', desc: 'Transparent, clear, and professional collaboration from start to finish.' },
    { icon: CheckCircle2, title: 'Human-Centered Experience', desc: 'Focusing on the people who will actually use your product.' },
  ];

  return (
    <section className="py-24 relative border-t border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Work <br/><span className="text-gradient-primary">With Me?</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
              I don't just write code. I solve business problems by creating digital environments that resonate with your target audience, leveraging my background in sociology and psychology.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-foreground font-medium transition-all hover:scale-105"
            >
              Start a Conversation
            </a>
          </motion.div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-4 p-6 glass-card rounded-2xl hover:bg-white/5 transition-colors group"
              >
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <reason.icon size={20} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{reason.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{reason.desc}</p>
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
