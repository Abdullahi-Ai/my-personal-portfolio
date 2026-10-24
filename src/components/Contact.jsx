import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24m-2.94 3.75c-.17 0-.45.06-.69.32c-.24.26-.92.89-.92 2.19s.95 2.55 1.08 2.73c.13.17 1.84 2.81 4.46 3.94c.63.27 1.11.43 1.5.55c.63.2 1.2.17 1.65.11c.51-.08 1.55-.63 1.77-1.25c.22-.62.22-1.15.16-1.26c-.06-.11-.22-.18-.47-.31c-.24-.12-1.44-.71-1.66-.79c-.22-.08-.38-.12-.55.13c-.16.25-.63.79-.77.95c-.14.16-.28.18-.53.06c-.24-.13-1.03-.38-1.96-1.21c-.72-.65-1.21-1.45-1.35-1.69c-.14-.25-.02-.38.11-.51c.11-.11.25-.3.37-.44c.12-.14.16-.24.24-.41c.08-.16.04-.31-.02-.43c-.06-.13-.56-1.34-.76-1.83c-.2-.48-.4-.42-.55-.43c-.14 0-.31 0-.47 0Z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Hello Abdullahi,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}`
    );
    window.location.href = `mailto:osmannoor75200@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Let’s Build Something <br className="hidden sm:inline"/><span className="text-gradient-primary">Together</span>
            </h2>
            <p className="text-foreground/70 text-base sm:text-lg mb-8 sm:mb-10">
              Based in Kenya — connect with Abdullahi Ibrahim (Osman) for web development, full-stack applications, or AI-powered projects.
            </p>

            <div className="space-y-4">
              <a href="mailto:osmannoor75200@gmail.com" className="flex items-center gap-4 group p-4 glass-card rounded-xl hover:border-primary/50 transition-all">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={22} />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs sm:text-sm text-foreground/60">Email</span>
                  <span className="font-medium text-base sm:text-lg break-all">osmannoor75200@gmail.com</span>
                </div>
              </a>

              <a
                href="tel:+254781764187"
                aria-label="Call Abdullahi Ibrahim (Osman) at 0781764187"
                className="flex items-center justify-between gap-4 group p-4 glass-card rounded-xl hover:border-primary/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors text-primary">
                    <Phone size={22} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs sm:text-sm text-foreground/60">Phone / Call</span>
                    <span className="font-medium text-base sm:text-lg break-all">0781764187</span>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background transition-all shrink-0">
                  Call Me
                </span>
              </a>

              <a href="https://github.com/Abdullahi-Ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 glass-card rounded-xl hover:border-primary/50 transition-all">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors text-primary">
                  <GithubIcon />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs sm:text-sm text-foreground/60">GitHub</span>
                  <span className="font-medium text-base sm:text-lg break-all">github.com/Abdullahi-Ai</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/osman-noor-08a297358" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 glass-card rounded-xl hover:border-primary/50 transition-all">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors text-primary">
                  <LinkedinIcon />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs sm:text-sm text-foreground/60">LinkedIn</span>
                  <span className="font-medium text-base sm:text-lg break-all">linkedin.com/in/osman-noor-08a297358</span>
                </div>
              </a>

              <a href="https://www.instagram.com/osmanibrahim5181/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 glass-card rounded-xl hover:border-primary/50 transition-all">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors text-primary">
                  <InstagramIcon />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs sm:text-sm text-foreground/60">Instagram</span>
                  <span className="font-medium text-base sm:text-lg break-all">@osmanibrahim5181</span>
                </div>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/254781764187"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Abdullahi Ibrahim on WhatsApp"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 font-semibold text-sm sm:text-base transition-all hover:scale-[1.02] shadow-lg shadow-emerald-500/10 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-background"
              >
                <WhatsAppIcon />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="flex gap-3">
                <a
                  href="tel:+254781764187"
                  aria-label="Call Abdullahi Ibrahim (Osman) at 0781764187"
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:text-primary transition-colors hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <Phone size={20} />
                </a>
                <a href="https://github.com/Abdullahi-Ai" target="_blank" rel="noopener noreferrer" aria-label="View Abdullahi Ibrahim (Osman)'s projects on GitHub" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:text-primary transition-colors hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary">
                  <GithubIcon />
                </a>
                <a href="https://www.linkedin.com/in/osman-noor-08a297358" target="_blank" rel="noopener noreferrer" aria-label="Connect with Abdullahi Ibrahim (Osman) on LinkedIn" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:text-primary transition-colors hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary">
                  <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/osmanibrahim5181/" target="_blank" rel="noopener noreferrer" aria-label="Follow Abdullahi Ibrahim (Osman) on Instagram" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:text-primary transition-colors hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8 md:p-10 rounded-3xl"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-foreground/70 mb-2">Name</label>
                  <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-base" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-foreground/70 mb-2">Email</label>
                  <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-base" placeholder="you@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-foreground/70 mb-2">Subject</label>
                <input id="contact-subject" type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-base" placeholder="Project Inquiry" />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-foreground/70 mb-2">Message</label>
                <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none text-base" placeholder="Tell me about your project..."></textarea>
              </div>

              <button type="submit" className="w-full py-3.5 sm:py-4 rounded-xl bg-primary text-background font-bold text-base sm:text-lg hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 hover:scale-[1.02]">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
