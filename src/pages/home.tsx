import React from 'react';
import { Navbar } from '@/components/Navbar';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="dark min-h-[100dvh] bg-background text-foreground relative overflow-hidden font-sans selection:bg-primary/30 selection:text-primary">
      <ParticleBackground />
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
      </main>
      
      <Contact />
    </div>
  );
}
