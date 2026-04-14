import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Github, Linkedin, Mail } from 'lucide-react';

const roles = [
  "Building intelligent systems.",
  "Exploring Agentic AI.",
  "Architecting RAG pipelines.",
  "Automating workflows."
];

export function Hero() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 80;
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-primary font-mono mb-6"
          >
            <Terminal size={18} />
            <span className="text-sm tracking-wider uppercase">System Initialized</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
          >
            Shyam Gadhiya
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-8 h-[1.2em]"
          >
            AI & ML Engineer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground font-mono h-8 mb-10 flex items-center"
          >
            <span className="text-primary mr-2">&gt;</span> {text}
            <span className="animate-pulse w-3 h-8 bg-primary ml-1 inline-block"></span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            Final-year BE in AIML @ LDCE, Ahmedabad. Currently interning at Ascendance Solutions. 
            Passionate about bridging the gap between theoretical AI models and real-world 
            workflow automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6"
          >
            <button onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]">
              View Projects <ArrowRight size={18} />
            </button>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com/shyamgadhiya" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 glow-hover bg-white/5 backdrop-blur-sm transition-all">
                <Github size={22} />
              </a>
              <a href="https://linkedin.com/in/shyam-gadhiya" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary/50 glow-hover-violet bg-white/5 backdrop-blur-sm transition-all">
                <Linkedin size={22} />
              </a>
              <a href="mailto:shyamgadhiya502@gmail.com" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 glow-hover bg-white/5 backdrop-blur-sm transition-all">
                <Mail size={22} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 font-mono text-sm"
      >
        <span className="tracking-widest uppercase text-xs">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
