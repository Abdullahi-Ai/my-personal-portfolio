import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Brain } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-24 relative bg-card/20 border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Academic & <span className="text-gradient-primary">Professional Background</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/70 max-w-2xl mx-auto text-sm sm:text-base"
          >
            A solid foundation in both human behavior and modern technology.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 sm:p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <GraduationCap size={120} />
            </div>
            
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 sm:mb-8 border border-primary/30">
              <BookOpen size={28} className="text-primary" />
            </div>
            
            <span className="text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase mb-2 block">University Education</span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">University of Nairobi</h3>
            <p className="text-lg sm:text-xl text-foreground/90 mb-3 font-medium">Bachelor of Arts in Social Sciences</p>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Sociology &amp; Psychology
            </div>
            
            <div className="flex items-start sm:items-center gap-3 text-foreground/70 bg-black/20 p-4 rounded-xl border border-white/5 text-sm sm:text-base">
              <Brain size={20} className="text-primary shrink-0 mt-0.5 sm:mt-0" />
              <span>Specializing in <strong>Sociology and Psychology</strong></span>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 sm:p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <Award size={120} />
            </div>
            
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6 sm:mb-8 border border-emerald-500/30">
              <Award size={28} className="text-emerald-400" />
            </div>
            
            <span className="text-xs sm:text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-2 block">Professional Certification</span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Moringa School</h3>
            <p className="text-lg sm:text-xl text-foreground/90 mb-4 font-medium">Certificate in Software Development</p>
            
            <div className="flex items-start sm:items-center gap-3 text-foreground/70 bg-black/20 p-4 rounded-xl border border-white/5 text-sm sm:text-base">
              <Award size={20} className="text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
              <span>Full Stack Web Development &amp; UI/UX</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
