import React from 'react';
import { motion } from 'framer-motion';

interface SkillItem {
  name: string;
  imageUrl?: string;
  isSvg?: boolean;
  svgIcon?: React.ReactNode;
  glowClass: string;
  darkInvert?: boolean;
}

export const Skills: React.FC = () => {
  const skillsList: SkillItem[] = [
    // 1. Programming Languages
    { 
      name: 'JavaScript', 
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      glowClass: 'hover:border-yellow-500/40 hover:shadow-yellow-500/5 hover:bg-yellow-500/[0.01]'
    },
    { 
      name: 'TypeScript', 
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      glowClass: 'hover:border-blue-500/40 hover:shadow-blue-500/5 hover:bg-blue-500/[0.01]'
    },
    { 
      name: 'Python', 
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      glowClass: 'hover:border-yellow-600/40 hover:shadow-yellow-600/5 hover:bg-yellow-600/[0.01]'
    },
    { 
      name: 'Java', 
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      glowClass: 'hover:border-red-500/40 hover:shadow-red-500/5 hover:bg-red-500/[0.01]'
    },
    { 
      name: 'C++', 
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      glowClass: 'hover:border-blue-600/40 hover:shadow-blue-600/5 hover:bg-blue-600/[0.01]'
    },
    { 
      name: 'DSA', 
      isSvg: true,
      svgIcon: (
        <svg className="h-4.5 w-4.5 text-rose-500 dark:text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2.5" fill="currentColor" />
          <circle cx="6" cy="19" r="2.5" fill="currentColor" />
          <circle cx="18" cy="19" r="2.5" fill="currentColor" />
          <path d="M12 7.5L6.5 16.5" />
          <path d="M12 7.5L17.5 16.5" />
        </svg>
      ),
      glowClass: 'hover:border-rose-500/40 hover:shadow-rose-500/5 hover:bg-rose-500/[0.01]'
    },

    // 2. Libraries & Frameworks
    { 
      name: 'React.js', 
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      glowClass: 'hover:border-cyan-400/40 hover:shadow-cyan-400/5 hover:bg-cyan-400/[0.01]'
    },
    { 
      name: 'Redux', 
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
      glowClass: 'hover:border-purple-500/40 hover:shadow-purple-500/5 hover:bg-purple-500/[0.01]'
    },
    { 
      name: 'Zustand', 
      isSvg: true,
      svgIcon: (
        <svg className="h-4.5 w-4.5 text-amber-700 dark:text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <circle cx="9" cy="9" r="1.5" fill="currentColor" />
          <circle cx="15" cy="9" r="1.5" fill="currentColor" />
        </svg>
      ),
      glowClass: 'hover:border-amber-600/40 hover:shadow-amber-600/5 hover:bg-amber-600/[0.01]'
    },
    { 
      name: 'Express.js', 
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      glowClass: 'hover:border-slate-400/40 hover:shadow-slate-400/5 hover:bg-slate-450/[0.01]',
      darkInvert: true
    },
    { 
      name: 'Tailwind CSS', 
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      glowClass: 'hover:border-cyan-500/40 hover:shadow-cyan-500/5 hover:bg-cyan-500/[0.01]'
    },

    // 3. Tools & Databases
    { 
      name: 'Node.js', 
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      glowClass: 'hover:border-green-500/40 hover:shadow-green-500/5 hover:bg-green-500/[0.01]'
    },
    { 
      name: 'MongoDB', 
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      glowClass: 'hover:border-emerald-500/40 hover:shadow-emerald-500/5 hover:bg-emerald-500/[0.01]'
    },
    { 
      name: 'PostgreSQL', 
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      glowClass: 'hover:border-indigo-500/40 hover:shadow-indigo-500/5 hover:bg-indigo-500/[0.01]'
    },
    { 
      name: 'MySQL', 
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      glowClass: 'hover:border-sky-650/40 hover:shadow-sky-650/5 hover:bg-sky-650/[0.01]'
    },
    { 
      name: 'Firebase', 
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg',
      glowClass: 'hover:border-orange-500/40 hover:shadow-orange-500/5 hover:bg-orange-500/[0.01]'
    },
    { 
      name: 'Supabase', 
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
      glowClass: 'hover:border-emerald-600/40 hover:shadow-emerald-600/5 hover:bg-emerald-600/[0.01]'
    },
    { 
      name: 'Git', 
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      glowClass: 'hover:border-orange-600/40 hover:shadow-orange-600/5 hover:bg-orange-600/[0.01]'
    },
    { 
      name: 'GitHub', 
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      glowClass: 'hover:border-zinc-500/40 hover:shadow-zinc-500/5 hover:bg-zinc-500/[0.01]',
      darkInvert: true
    },
    { 
      name: 'Docker', 
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      glowClass: 'hover:border-blue-400/40 hover:shadow-blue-400/5 hover:bg-blue-400/[0.01]'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-12 bg-transparent text-slate-800 dark:text-zinc-200 transition-colors duration-300"
    >
      <div className="mx-auto w-full max-w-4xl px-6 md:px-8 text-left">

        {/* Section Header */}
        <div className="text-left mb-8">
          <h2 className="font-sans text-xs font-semibold tracking-wider uppercase text-indigo-650 dark:text-violet-400">
            My Stack
          </h2>
          <p className="mt-1.5 font-sans text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills
          </p>
          <div className="mt-2.5 h-1 w-12 bg-indigo-600 dark:bg-violet-500 rounded-full" />
        </div>

        {/* Skill Cards Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5"
        >
          {skillsList.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl border-2 border-slate-200/80 bg-white/60 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/20 transition-all duration-300 cursor-default shadow-sm hover:shadow-md dark:shadow-none w-full h-[34px] sm:h-[36px] ${skill.glowClass}`}
            >
              <div className="flex items-center justify-center shrink-0 w-4.5 h-4.5">
                {skill.isSvg ? (
                  skill.svgIcon
                ) : (
                  <img 
                    src={skill.imageUrl} 
                    alt={skill.name} 
                    className={`w-4.5 h-4.5 object-contain ${skill.darkInvert ? 'dark:invert' : ''}`}
                    loading="lazy"
                  />
                )}
              </div>
              <span className="font-sans text-[11px] sm:text-xs font-medium text-slate-800 dark:text-zinc-200 tracking-normal truncate">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
