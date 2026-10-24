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
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    const messageText = `Hello Abdullahi,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\nMessage:\n${formData.message}`;
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/254781764187?text=${encodedMessage}`;
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

            <div className="flex gap-4 mt-8 sm:mt-10">
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
              <p className="text-center text-xs text-foreground/60 mt-3">
                Opens WhatsApp with your message ready to send.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
