import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Calendar, Briefcase, Code } from 'lucide-react';

interface TimelineItem {
  year: string;
  role: string;
  company: string;
  url: string;
  desc: string | string[];
  type: 'work' | 'education' | 'achievement';
  logoGradient: string;
  logoIcon: React.ReactNode;
}
 
const ExperienceCard = ({ item, isEven }: { item: TimelineItem; isEven: boolean }) => {
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
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-[calc(100%-3rem)] ml-auto md:ml-0 md:w-[calc(50%-1.75rem)] rounded-2xl border border-slate-200/80 bg-white/60 backdrop-blur-md p-4 md:p-6 shadow-sm hover:shadow-lg dark:shadow-none dark:border-zinc-800/80 dark:bg-[#0c0d0e]/60 dark:backdrop-blur-md transition-all duration-300 text-left relative z-10 group overflow-hidden"
    >
      {/* Interactive Mouse Glow Background */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99,102,241,0.12), transparent 40%)`,
        }}
      />
      <div 
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(124,58,237,0.08), transparent 40%)`,
        }}
      />
 
      <div className="relative z-10">
        {/* Top Section: Logo, Title, Link */}
        <div className="flex items-start gap-2.5 md:gap-3">
          {/* Company Logo Icon */}
          <div className={`flex h-8 w-8 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${item.logoGradient} shadow-sm`}>
            {React.cloneElement(item.logoIcon as any, { className: 'h-4 w-4 md:h-4.5 md:w-4.5 text-white' })}
          </div>
 
          {/* Header Info */}
          <div>
            <h3 className="font-display text-base md:text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              {item.company}
            </h3>
            <p className="text-xs font-semibold text-slate-500 dark:text-zinc-400 mt-0.5">
              {item.role}
            </p>
            {item.url && !item.url.startsWith('CGPA') && !item.url.includes(',') && !item.url.includes('Remote') ? (
              <a 
                href={item.url} 
                target="_blank" 
                rel="noreferrer"
                className="inline-block text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline mt-0.5"
              >
                {item.url}
              </a>
            ) : (
              <span className="inline-block text-[11px] font-semibold text-slate-400 dark:text-zinc-500 mt-0.5">
                {item.url}
              </span>
            )}
          </div>
        </div>
 
        {/* Middle Section: Job Description */}
        {Array.isArray(item.desc) ? (
          <ul className="mt-2.5 md:mt-3.5 space-y-1 md:space-y-1.5 text-[11px] md:text-[13px] font-mono text-slate-650 dark:text-zinc-350 leading-relaxed font-normal list-disc list-inside">
            {item.desc.map((bullet, idx) => (
              <li key={idx} className="pl-0.5 text-left text-slate-600 dark:text-zinc-400 block">
                • {bullet}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2.5 md:mt-3.5 text-[11px] md:text-[13px] font-mono text-slate-650 dark:text-zinc-350 leading-relaxed font-normal">
            {item.desc}
          </p>
        )}
 
        {/* Bottom Section: Date */}
        <div className="flex justify-end mt-2.5 md:mt-3.5 pt-2 md:pt-2.5 border-t border-slate-100 dark:border-zinc-800/60">
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-zinc-400 bg-slate-100/80 dark:bg-zinc-900/60 px-2.5 py-1 rounded-full">
            <Calendar className="h-4 w-4 text-slate-750 dark:text-white" />
            {item.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
 
export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth the scroll input values using a spring physics configuration
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Map progress to translate Y percentage for the moving light orb
  const y = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  const timeline: TimelineItem[] = [
    {
      year: 'Nov 2025 - Feb 2026',
      role: 'Full Stack Developer Intern',
      company: 'Superso Saving guru imf private limited',
      url: 'Pune, Maharashtra',
      desc: "Developed a financial web application using the MERN stack, building responsive interfaces, backend APIs, and authentication systems. Utilized Generative AI to accelerate full-stack development workflows and optimize code.",
      type: 'work',
      logoGradient: 'from-blue-500 to-sky-400',
      logoIcon: <Briefcase className="h-5 w-5 text-white" />
    },
    {
      year: 'Jan 2025 - Feb 2025',
      role: 'Microsoft Power BI Intern',
      company: 'KasNet Technologies Pvt. Ltd',
      url: 'Pune, Maharashtra',
      desc: "Created interactive Power BI dashboards and designed detailed reports to analyze business performance. Performed data cleaning and transformation using Power Query to improve reporting accuracy.",
      type: 'work',
      logoGradient: 'from-rose-500 to-pink-400',
      logoIcon: <Code className="h-5 w-5 text-white" />
    }
  ];

  return (
    <section 
      id="experience" 
      className="py-16 bg-transparent transition-colors duration-300"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-10">
          <h2 className="font-sans text-xs font-semibold tracking-wider uppercase text-indigo-650 dark:text-violet-400">
            My Path
          </h2>
          <p className="mt-1.5 font-sans text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Experience
          </p>
          <div className="mt-2.5 h-1 w-12 bg-indigo-600 dark:bg-violet-500 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div ref={containerRef} className="relative w-full">
          
          {/* Central Line - Only visible on md and up */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-zinc-850 hidden md:block" />
          {/* Central Glowing Scroll Progress Line */}
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 dark:from-violet-500 dark:via-purple-500 dark:to-pink-400 hidden md:block"
          />
          {/* Central Moving Light Orb */}
          <motion.div 
            style={{ top: y }}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block w-3 h-3 rounded-full bg-indigo-500 dark:bg-violet-400 shadow-[0_0_12px_rgba(99,102,241,0.9)] dark:shadow-[0_0_12px_rgba(167,139,250,0.9)] border border-white dark:border-black z-30"
          />
          
          {/* Mobile Line - Only visible on small screens */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-zinc-850 md:hidden" />
          {/* Mobile Glowing Scroll Progress Line */}
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 dark:from-violet-500 dark:via-purple-500 dark:to-pink-400 md:hidden"
          />
          {/* Mobile Moving Light Orb */}
          <motion.div 
            style={{ top: y }}
            className="absolute left-6 -translate-x-1/2 -translate-y-1/2 md:hidden w-3 h-3 rounded-full bg-indigo-500 dark:bg-violet-400 shadow-[0_0_12px_rgba(99,102,241,0.9)] dark:shadow-[0_0_12px_rgba(167,139,250,0.9)] border border-white dark:border-black z-30"
          />

          {/* Cards List */}
          <div className="space-y-8 md:space-y-6 relative z-10">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div 
                  key={idx}
                  className={`flex flex-col md:flex-row items-center w-full relative ${
                    isEven ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Timeline Dot (Desktop) */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:flex h-5 w-5 items-center justify-center rounded-full bg-white dark:bg-black border-2 border-slate-300 dark:border-zinc-700 z-20">
                    <div className="h-2.5 w-2.5 rounded-full bg-indigo-650 dark:bg-violet-400" />
                  </div>

                  {/* Timeline Dot (Mobile) */}
                  <div className="absolute left-6 -translate-x-1/2 top-12 md:hidden flex h-5 w-5 items-center justify-center rounded-full bg-white dark:bg-black border-2 border-slate-300 dark:border-zinc-700 z-20">
                    <div className="h-2.5 w-2.5 rounded-full bg-indigo-650 dark:bg-violet-400" />
                  </div>

                  {/* Render the extracted ExperienceCard with Mouse Spotlight */}
                  <ExperienceCard item={item} isEven={isEven} />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
