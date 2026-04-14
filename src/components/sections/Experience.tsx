import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const experience = [
  {
    title: "AI-ML Intern",
    company: "Ascendance Solutions",
    location: "Ahmedabad, India",
    date: "Jan 2026 – Present",
    description: [
      "Deployed ML and GenAI solutions improving automation by 30-40%.",
      "Built end-to-end n8n supply chain monitoring workflow integrated with Gemini AI agent 'ARIA'.",
      "Developed intelligent data pipelines for business intelligence."
    ],
    icon: <Briefcase className="text-primary" size={20} />
  },
  {
    title: "Microsoft Summer Intern – Data & AI + Azure Cloud",
    company: "Microsoft (Virtual)",
    location: "Remote",
    date: "July 2025",
    description: [
      "Completed 60 hours of hands-on Azure AI, NLP, and GenAI training on Azure ML.",
      "Built and deployed NLP solutions utilizing cloud infrastructure.",
      "Created interactive data visualizations and dashboards using Power BI."
    ],
    icon: <Briefcase className="text-secondary" size={20} />
  }
];

const education = [
  {
    degree: "BE in AI & ML",
    institution: "LDCE Ahmedabad / GTU",
    date: "2022 - 2026",
    score: "CPI: 7.56",
    icon: <GraduationCap className="text-primary" size={20} />
  },
  {
    degree: "HSC (12th)",
    institution: "G.G. Zadafiya Vidhyalaya / GSHEB",
    date: "2022",
    score: "82%",
    icon: <GraduationCap className="text-secondary" size={20} />
  },
  {
    degree: "SSC (10th)",
    institution: "G.G. Zadafiya Vidhyalaya / GSEB",
    date: "2020",
    score: "84.05%",
    icon: <GraduationCap className="text-muted-foreground" size={20} />
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Experience Timeline */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
                <span className="text-primary mr-4 text-2xl">03.</span>Experience
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent" />
            </motion.div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[1.15rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary/50 before:to-transparent">
              {experience.map((job, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="relative pl-12 md:pl-14"
                >
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-background border border-white/20 flex items-center justify-center shadow-[0_0_10px_rgba(0,229,255,0.2)] z-10">
                    {job.icon}
                  </div>
                  
                  <div className="glass-card p-6 rounded-xl glow-hover">
                    <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                    <div className="text-primary font-mono text-sm mb-2">{job.company}</div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 font-mono">
                      <span className="flex items-center gap-1"><Calendar size={14}/> {job.date}</span>
                      <span className="flex items-center gap-1"><MapPin size={14}/> {job.location}</span>
                    </div>
                    
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      {job.description.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
                <span className="text-secondary mr-4 text-2xl">04.</span>Education
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-secondary to-transparent" />
            </motion.div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[1.15rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-secondary before:via-primary/50 before:to-transparent">
              {education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="relative pl-12 md:pl-14"
                >
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-background border border-white/20 flex items-center justify-center shadow-[0_0_10px_rgba(124,58,237,0.2)] z-10">
                    {edu.icon}
                  </div>
                  
                  <div className="glass-card p-6 rounded-xl glow-hover-violet">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                      <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                      <span className="px-2 py-1 rounded bg-secondary/10 text-secondary text-xs font-mono font-bold border border-secondary/20">
                        {edu.score}
                      </span>
                    </div>
                    <div className="text-muted-foreground font-mono text-sm mb-2">{edu.institution}</div>
                    <div className="text-sm text-muted-foreground/70 font-mono flex items-center gap-1">
                      <Calendar size={14}/> {edu.date}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
