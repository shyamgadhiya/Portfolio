import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('#home')}>
          <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-mono font-bold text-white shadow-[0_0_15px_rgba(0,229,255,0.5)]">
            SG
          </div>
          <span className="font-mono text-xl font-bold tracking-tight">Shyam<span className="text-primary">.ai</span></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider font-mono"
            >
              {link.name}
            </button>
          ))}
          <a
            href="/Shyam_Gadhiya_Resume.pdf"
            download="Shyam_Gadhiya_Resume.pdf"
            className="px-5 py-2 rounded-full border border-primary/50 text-primary font-mono text-sm hover:bg-primary/10 transition-colors glow-hover flex items-center gap-2"
          >
            <Download size={14} /> Resume
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2 uppercase tracking-wider font-mono"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex gap-4 pt-4 border-t border-white/5">
                <a href="https://github.com/shyamgadhiya" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary"><Github size={20} /></a>
                <a href="https://linkedin.com/in/shyam-gadhiya" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-secondary"><Linkedin size={20} /></a>
                <a href="mailto:shyamgadhiya502@gmail.com" className="text-muted-foreground hover:text-primary"><Mail size={20} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
