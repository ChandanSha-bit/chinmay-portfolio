import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundClouds: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none w-full h-full select-none">
      


      {/* Wave Line 1: Elegant flowing blue line */}
      <svg className="absolute inset-0 w-full h-full opacity-30 dark:opacity-30 transition-opacity duration-500" viewBox="0 0 1440 1080" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <motion.path
          stroke="url(#line-grad-1)"
          strokeWidth="2.5"
          fill="none"
          animate={{
            d: [
              "M0,350 Q360,150 720,350 T1440,350",
              "M0,350 Q360,550 720,350 T1440,350",
              "M0,350 Q360,150 720,350 T1440,350"
            ]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* Wave Line 2: Elegant flowing amber/rose line */}
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-20 transition-opacity duration-500" viewBox="0 0 1440 1080" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#f43f5e" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <motion.path
          stroke="url(#line-grad-2)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M0,450 Q360,600 720,400 T1440,450",
              "M0,450 Q360,250 720,500 T1440,450",
              "M0,450 Q360,600 720,400 T1440,450"
            ]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
      {/* Wave Line 3: Elegant flowing emerald/teal line */}
      <svg className="absolute inset-0 w-full h-full opacity-25 dark:opacity-25 transition-opacity duration-500" viewBox="0 0 1440 1080" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line-grad-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <motion.path
          stroke="url(#line-grad-3)"
          strokeWidth="2.5"
          fill="none"
          animate={{
            d: [
              "M0,650 Q360,800 720,600 T1440,650",
              "M0,650 Q360,450 720,700 T1440,650",
              "M0,650 Q360,800 720,600 T1440,650"
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* Wave Line 4: Elegant flowing purple/indigo line */}
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-20 transition-opacity duration-500" viewBox="0 0 1440 1080" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line-grad-4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <motion.path
          stroke="url(#line-grad-4)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M0,850 Q360,650 720,800 T1440,850",
              "M0,850 Q360,1050 720,850 T1440,850",
              "M0,850 Q360,650 720,800 T1440,850"
            ]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* Wave Line 5: Elegant flowing cyan/light blue line */}
      <svg className="absolute inset-0 w-full h-full opacity-25 dark:opacity-25 transition-opacity duration-500" viewBox="0 0 1440 1080" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line-grad-5" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <motion.path
          stroke="url(#line-grad-5)"
          strokeWidth="1.5"
          fill="none"
          animate={{
            d: [
              "M0,200 Q360,350 720,200 T1440,200",
              "M0,200 Q360,50 720,250 T1440,200",
              "M0,200 Q360,350 720,200 T1440,200"
            ]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
      {/* Wave Line 6: Elegant flowing pink/violet line */}
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-20 transition-opacity duration-500" viewBox="0 0 1440 1080" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line-grad-6" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#db2777" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#c026d3" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <motion.path
          stroke="url(#line-grad-6)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M0,950 Q360,1100 720,900 T1440,950",
              "M0,950 Q360,800 720,1050 T1440,950",
              "M0,950 Q360,1100 720,900 T1440,950"
            ]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* Wave Line 7: Elegant flowing yellow/orange line */}
      <svg className="absolute inset-0 w-full h-full opacity-25 dark:opacity-25 transition-opacity duration-500" viewBox="0 0 1440 1080" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line-grad-7" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#eab308" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#ea580c" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <motion.path
          stroke="url(#line-grad-7)"
          strokeWidth="1.5"
          fill="none"
          animate={{
            d: [
              "M0,750 Q360,600 720,850 T1440,750",
              "M0,750 Q360,950 720,650 T1440,750",
              "M0,750 Q360,600 720,850 T1440,750"
            ]
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* Wave Line 8: Elegant flowing indigo line */}
      <svg className="absolute inset-0 w-full h-full opacity-15 dark:opacity-15 transition-opacity duration-500" viewBox="0 0 1440 1080" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line-grad-8" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#4338ca" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3730a3" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <motion.path
          stroke="url(#line-grad-8)"
          strokeWidth="2.5"
          fill="none"
          animate={{
            d: [
              "M0,550 Q360,700 720,500 T1440,550",
              "M0,550 Q360,350 720,600 T1440,550",
              "M0,550 Q360,700 720,500 T1440,550"
            ]
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>

    </div>
  );
};
