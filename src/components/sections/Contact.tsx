import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <footer id="contact" className="relative z-10 border-t border-white/10 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono text-gradient">
            Let's Build Something Intelligent
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Currently looking for new opportunities in AI/ML, Agentic AI architectures, and workflow automation. My inbox is always open.
          </p>
          <a 
            href="mailto:shyamgadhiya502@gmail.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-all glow-hover font-mono text-lg group"
          >
            Say Hello <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-6 glass-card rounded-xl text-center"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-bold mb-2">Email</h3>
            <a href="mailto:shyamgadhiya502@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              shyamgadhiya502@gmail.com
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center p-6 glass-card rounded-xl text-center"
          >
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-bold mb-2">Phone</h3>
            <a href="tel:+919662046363" className="text-muted-foreground hover:text-secondary transition-colors">
              +91 9662046363
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center p-6 glass-card rounded-xl text-center"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold mb-2">Location</h3>
            <span className="text-muted-foreground">
              Ahmedabad, India
            </span>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-mono font-bold text-white text-xs">
              SG
            </div>
            <span className="font-mono text-sm text-muted-foreground">© {new Date().getFullYear()} Shyam Gadhiya.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/shyamgadhiya" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/shyam-gadhiya" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
