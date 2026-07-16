import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const TypewriterText: React.FC = () => {
  const words = ["Full Stack Developer.", "Full Stack Problem Solver.", "Full Stack Gen AI Developer."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: any;
    const fullWord = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }
    };

    timer = setTimeout(handleTyping, isDeleting ? 45 : 85);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-violet-400 dark:via-purple-400 dark:to-pink-300">
        {currentText}
      </span>
      <span className="text-indigo-650 dark:text-violet-400 animate-pulse font-light ml-1">|</span>
    </>
  );
};

export const Hero: React.FC = () => {

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02, // Stagger character animations on load
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 8, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  const line1 = "Hey, it's ".split("");
  const line1Name = "Chinmayanand.".split("");
  const line2 = "A ".split("");

  return (
    <section
      id="hero"
      className="flex min-h-[60vh] items-center justify-center pt-20 pb-16 bg-transparent text-slate-800 dark:text-zinc-200 transition-colors duration-300"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-5xl px-6 md:px-8 text-left"
      >

        {/* Main Big Heading */}
        <div className="mb-4">
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1]"
          >
            {/* Line 1 */}
            <span className="block">
              {line1.map((char, index) => (
                <motion.span key={`l1-${index}`} variants={letterVariants} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              {line1Name.map((char, index) => (
                <motion.span key={`l1n-${index}`} variants={letterVariants} className="inline-block text-indigo-650 dark:text-violet-400">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>

            {/* Line 2 */}
            <span className="block mt-2">
              {line2.map((char, index) => (
                <motion.span key={`l2-${index}`} variants={letterVariants} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <TypewriterText />
            </span>
          </motion.h1>
        </div>

        {/* Small Intro Heading */}
        <motion.h2
          variants={itemVariants}
          className="mt-6 font-display text-lg md:text-xl font-semibold text-slate-800 dark:text-zinc-200 max-w-4xl leading-snug tracking-tight"
        >
          I build scalable, high-performance web applications and enterprise software solutions.
        </motion.h2>

        {/* Tagline Paragraph describing background based on resume */}
        <motion.p
          variants={itemVariants}
          className="mt-4 font-mono text-sm md:text-base leading-relaxed text-slate-600 dark:text-zinc-400 font-normal max-w-4xl"
        >
          A Full Stack Developer dedicated to translating algorithmic problem-solving into responsive, end-to-end web applications with the MERN stack.
        </motion.p>

        {/* Action CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-row gap-3 w-full sm:w-auto"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=csharswat9@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-indigo-600 text-white dark:bg-violet-600 dark:text-white px-3 sm:px-5.5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium tracking-wide hover:bg-indigo-750 dark:hover:bg-violet-700 transition-all cursor-pointer shadow-sm hover:shadow dark:shadow-none"
          >
            Work with me
            <ArrowRight className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://drive.google.com/file/d/1bgZGGNHPOq3dznQAIzrHKwLKyZFPZvSn/view"
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-slate-200/80 bg-white dark:border-zinc-750 dark:bg-zinc-900/30 text-slate-700 dark:text-zinc-200 px-3 sm:px-5.5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium tracking-wide hover:bg-slate-50 hover:border-indigo-600 hover:text-indigo-600 dark:hover:bg-zinc-900/60 dark:hover:border-violet-400 dark:hover:text-violet-400 transition-all cursor-pointer shadow-sm"
          >
            Download CV
            <Download className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
};
