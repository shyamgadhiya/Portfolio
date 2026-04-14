import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Database, GitBranch } from 'lucide-react';
import agentImg from '@/assets/images/project-agent.png';
import cnnImg from '@/assets/images/project-cnn.png';
import chatbotImg from '@/assets/images/project-chatbot.png';
import logisticsImg from '@/assets/images/project-logistics.png';

const projects = [
  {
    id: 1,
    title: "Multi Agent Research Assistant",
    description: "Self-correcting retrieval system for citation-backed reports. Uses dual-retrieval data pipelines (Tavily for live web + FAISS for local docs) to reduce LLM hallucinations.",
    image: agentImg,
    tags: ["LangGraph", "RAG", "FAISS", "Tavily", "Gemini", "Streamlit"],
    icon: <GitBranch className="text-primary" size={24} />,
    links: { github: "https://github.com/shyamgadhiya/Multi-Agent-Research-Assistant-" }
  },
  {
    id: 2,
    title: "Pneumonia Detection using CNN",
    description: "Convolutional Neural Network for detecting pneumonia from chest X-ray images, achieving ~92% test accuracy with real-world clinical diagnostic support potential.",
    image: cnnImg,
    tags: ["CNN", "TensorFlow", "Computer Vision", "Python"],
    icon: <Database className="text-secondary" size={24} />,
    links: { github: "https://github.com/shyamgadhiya/Pneumonia-Detection-Using-CNN" }
  },
  {
    id: 3,
    title: "E-commerce Recommendation Chatbot",
    description: "Generative AI recommendation system for electronics products using RAG framework on Amazon Electronics Reviews dataset.",
    image: chatbotImg,
    tags: ["LangChain", "DistilGPT-2", "FAISS", "SentenceTransformers"],
    icon: <Code2 className="text-primary" size={24} />,
    links: { github: "https://github.com/shyamgadhiya/Ecommerce-PRChatbot" }
  },
  {
    id: 4,
    title: "AI-Powered Logistics Automation System",
    description: "End-to-end automated supply chain monitoring workflow using n8n that detects delayed shipments, triggers Gemini AI agent 'ARIA' to analyze root causes & evaluate alternative routes. Integrates OpenWeatherMap API for real-time intelligence, auto-generates mitigation reports, sends dynamic Gmail notifications, and logs every AI run to a Google Sheets audit trail with 22 structured fields.",
    image: logisticsImg,
    tags: ["n8n", "Gemini AI", "LangChain", "OpenWeatherMap", "Gmail API", "Google Sheets", "Python"],
    icon: <GitBranch className="text-secondary" size={24} />,
    links: { github: "#" }
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-primary mr-4 text-3xl">01.</span>Featured Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent" />
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-3/5 relative group perspective">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-xl overflow-hidden border border-white/10 glass-card aspect-video transform-gpu transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-y-2 group-hover:rotate-x-2">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                </div>
              </div>

              {/* Content Container */}
              <div className={`w-full lg:w-2/5 flex flex-col ${index % 2 !== 0 ? 'lg:items-start' : 'lg:items-end text-left lg:text-right'}`}>
                <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/10 w-fit inline-flex shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  {project.icon}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                
                <div className="glass-card p-6 rounded-xl mb-6 relative z-10 shadow-xl">
                  <p className="text-muted-foreground leading-relaxed text-left">
                    {project.description}
                  </p>
                </div>

                <ul className={`flex flex-wrap gap-2 mb-8 font-mono text-sm ${index % 2 !== 0 ? 'justify-start' : 'lg:justify-end justify-start'}`}>
                  {project.tags.map(tag => (
                    <li key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  {project.links.github && (
                    <a href={project.links.github} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                      <Github size={20} /> <span className="font-mono text-sm">Code</span>
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} className="text-muted-foreground hover:text-secondary transition-colors flex items-center gap-2">
                      <ExternalLink size={20} /> <span className="font-mono text-sm">Live</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
