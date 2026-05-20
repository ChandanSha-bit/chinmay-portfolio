import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section 
      id="aboutus" 
      className="py-16 bg-transparent transition-colors duration-300"
    >
      <div className="mx-auto max-w-3xl px-6 md:px-8 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <Quote className="h-9 w-9 text-indigo-600/50 dark:text-violet-400/50 mb-4" />
          <h2 className="font-serif text-2xl md:text-4xl font-medium text-slate-800 dark:text-slate-200 leading-tight italic">
            "Code is like humor. When you have to explain it, it’s bad."
          </h2>
          <p className="mt-6 font-sans text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Driven by problem-solving and clean execution.
          </p>
          <div className="mt-3 h-1 w-16 bg-indigo-600 dark:bg-violet-500 rounded-full" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <p className="font-mono text-lg md:text-xl text-slate-650 dark:text-zinc-400 leading-relaxed mx-auto max-w-2xl">
            Want to see more of my work?{' '}
            <a 
              href="https://github.com/ChandanSha-bit" 
              target="_blank" 
              rel="noreferrer" 
              className="text-indigo-600 hover:text-indigo-750 dark:text-violet-400 dark:hover:text-violet-300 font-semibold hover:underline"
            >
              Visit my GitHub profile
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
};
