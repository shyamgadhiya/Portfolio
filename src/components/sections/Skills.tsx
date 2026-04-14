import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming & Data Logic",
    skills: ["Python", "SQL", "REST APIs", "Webhooks", "JSON"],
    color: "from-primary to-blue-500"
  },
  {
    title: "AI Orchestration",
    skills: ["n8n", "LangChain", "RAG Architecture", "LLMs", "Agentic AI", "LangGraph"],
    color: "from-secondary to-purple-500"
  },
  {
    title: "ML & Cloud",
    skills: ["Scikit-learn", "TensorFlow", "HuggingFace", "NLTK", "OpenCV", "Azure ML", "MLflow", "Docker", "Power BI"],
    color: "from-green-400 to-emerald-600"
  },
  {
    title: "LLMs & Vector DBs",
    skills: ["Gemini", "Grok", "OpenAI Codex", "Pinecone", "Chroma", "FAISS", "Google Embeddings"],
    color: "from-pink-500 to-rose-400"
  },
  {
    title: "Web & UI",
    skills: ["Streamlit", "FastAPI", "BeautifulSoup", "React"],
    color: "from-orange-400 to-amber-500"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-background/50 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-primary mr-4 text-3xl">02.</span>Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl glow-hover group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity duration-500 rounded-full translate-x-1/2 -translate-y-1/2`} />
              
              <h3 className="text-xl font-bold mb-6 font-mono border-b border-white/10 pb-4 inline-block">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
