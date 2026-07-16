import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

interface Project {
  title: string;
  category: 'realtime' | 'ecommerce' | 'devtools' | 'ai' | 'web3';
  desc: string;
  tech: string[];
  github: string;
  demo: string;
  demoDisplay: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Atlas | AI-Driven SaaS Platform',
    category: 'ai',
    desc: 'A modular full-stack app featuring an AI chat interface using Groq SDK (Llama 3) and OpenAI DALL-E 3 image generation, with optimized API costs and latency.',
    tech: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Zustand', 'TypeScript'],
    github: 'https://github.com/ChandanSha-bit/Atlas',
    demo: 'https://atlas-swart-eight.vercel.app/',
    demoDisplay: 'github.com/Atlas',
    image: '/Atlas.png'
  },
  {
    title: 'Nexora | Chat Application',
    category: 'realtime',
    desc: 'A real-time chat system using Socket.io reducing latency by 75%. Optimized with Vite for faster rendering and integrated Cloudinary for media storage.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'Tailwind CSS'],
    github: 'https://github.com/ChandanSha-bit/Nexora',
    demo: 'https://nexora-chat-nine.vercel.app/',
    demoDisplay: 'nexora-chat-nine.vercel.app',
    image: '/Nexora.png'
  },
  {
    title: 'Atoxen | AI-Powered Ingredient Safety Analyzer',
    category: 'ai',
    desc: 'An AI product analysis pipeline using Gemini 1.5 Flash Vision for label parsing. Features a deterministic scoring engine to classify ingredients across 16+ categories.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Tesseract.js', 'Zustand'],
    github: 'https://github.com/ChandanSha-bit/Atoxen',
    demo: 'https://github.com/ChandanSha-bit/Atoxen',
    demoDisplay: 'github.com/Atoxen',
    image: '/Atoxen.png'
  },
  {
    title: 'Nova | Secure Hidden Private Vault Extension',
    category: 'devtools',
    desc: 'A secure private vault extension to store secret notes and files inside the browser. Implemented a calculator disguise mode with PIN-based access.',
    tech: ['JavaScript', 'Chrome Extension API', 'Local Storage'],
    github: 'https://github.com/ChandanSha-bit/Nova',
    demo: 'https://github.com/ChandanSha-bit/Nova',
    demoDisplay: 'github.com/Nova',
    image: '/Nova.png'
  }
];

const BentoCard = ({ project, index }: { project: Project; index: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative overflow-hidden flex flex-col rounded-[1.5rem] border border-slate-200/60 bg-[#fafafa]/80 backdrop-blur-sm dark:border-zinc-800/60 dark:bg-[#0a0a0a]/80 shadow-lg hover:shadow-xl dark:shadow-none transition-all duration-500 group`}
    >
      {/* Interactive Mouse Glow Background */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[1.5rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139,92,246,0.12), transparent 40%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-[1.5rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99,102,241,0.08), transparent 40%)`,
        }}
      />

      <div className="relative z-10 flex h-full flex-col">

        {/* Image Container */}
        <div className="relative overflow-hidden bg-slate-200 dark:bg-zinc-900 flex-shrink-0 w-full h-36 sm:h-44">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-grow p-4 md:p-6">
          <div className="flex justify-between items-start mb-2 md:mb-2.5 gap-4">
            <h3 className="font-sans text-base md:text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              {project.title}
            </h3>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-666 dark:text-zinc-300 transition-colors shrink-0"
            >
              <GithubIcon className="h-4.5 w-4.5" />
            </a>
          </div>

          <p className="font-mono text-[11px] sm:text-sm text-slate-600 dark:text-zinc-400 mb-3.5 leading-relaxed">
            {project.desc}
          </p>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-sm text-indigo-600 hover:text-indigo-777 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors mb-4 group/link w-max"
          >
            {project.demoDisplay}
            <ArrowUpRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>

          <div className="mt-auto" />

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-sans text-[11px] font-semibold px-2.5 py-1 rounded-full border border-slate-300/80 bg-white/50 text-slate-700 dark:border-zinc-700/80 dark:bg-zinc-900/50 dark:text-zinc-300 backdrop-blur-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-transparent transition-colors duration-300 relative z-10"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8">

        {/* Section Header */}
        <div className="text-left mb-10">
          <h2 className="font-sans text-xs font-semibold tracking-wider uppercase text-indigo-650 dark:text-violet-400">
            Selected Work
          </h2>
          <p className="mt-1.5 font-sans text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Projects
          </p>
          <div className="mt-2.5 h-1 w-12 bg-indigo-600 dark:bg-violet-500 rounded-full" />
          <p className="mt-3 font-mono text-slate-650 dark:text-zinc-400 text-sm md:text-base w-full leading-relaxed">
            A selection of my recent full-stack development projects, ranging from feature-rich frontend applications to scalable backend systems. To explore more of my work, source code, and open-source contributions, feel free to check out my <a href="https://github.com/ChandanSha-bit" target="_blank" rel="noreferrer" className="font-semibold text-indigo-650 dark:text-violet-400 hover:underline">GitHub</a> profile.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 mt-10">
          {projects.map((project, idx) => (
            <BentoCard key={project.title} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};
