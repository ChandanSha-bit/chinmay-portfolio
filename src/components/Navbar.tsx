import React, { useState } from 'react';
import { Sun, Moon, Home, Layers, Briefcase, Code, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon } from './Icons';
import avatarImg from '../assets/developer_avatar.jpg';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'Skills', href: '#skills', icon: Layers },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'About Us', href: '#aboutus', icon: User },
  ];

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center py-4 bg-transparent transition-colors duration-300">
      <div className="relative flex w-full max-w-5xl h-16 items-center justify-between px-4 sm:px-6 mx-2 sm:mx-4">
        
        {/* UserProfile: Avatar Logo (Visible on desktop and mobile) */}
        <a href="#hero" className="flex items-center group focus:outline-none ml-2 sm:ml-4" aria-label="Scroll to home">
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 overflow-hidden rounded-full border border-black dark:border-black group-hover:border-indigo-400 dark:group-hover:border-violet-500 transition-all duration-355 shadow-sm">
            <img 
              src={avatarImg} 
              alt="Profile Avatar" 
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-355"
            />
          </div>
        </a>

        {/* Center Pill Navigation Capsule (Desktop Only) */}
        <nav className="hidden sm:flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-1 rounded-full bg-zinc-950 border border-zinc-800/50 shadow-lg backdrop-blur-md">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              title={link.name}
              className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-800/60 hover:text-white transition-all"
            >
              <link.icon className="h-4.5 w-4.5" />
            </a>
          ))}
        </nav>

        {/* Right side: GitHub and Theme Switcher (Desktop Only) */}
        <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-full bg-zinc-950 border border-zinc-800/50 shadow-lg backdrop-blur-md mr-2 sm:mr-4">
          <a 
            href="https://github.com/ChandanSha-bit" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-800/60 hover:text-white transition-all"
          >
            <GithubIcon className="h-4.5 w-4.5" />
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-800/60 hover:text-white transition-all cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="h-4.5 w-4.5 text-amber-400" />
            ) : (
              <Moon className="h-4.5 w-4.5" />
            )}
          </button>
        </div>

        {/* Mobile controls group (Mobile Only) */}
        <div className="flex sm:hidden items-center gap-2 mr-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-950 border border-zinc-850/80 text-zinc-400 hover:text-white transition-all cursor-pointer shadow-md"
          >
            {theme === 'dark' ? (
              <Sun className="h-4.5 w-4.5 text-amber-400" />
            ) : (
              <Moon className="h-4.5 w-4.5" />
            )}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-950 border border-zinc-850/80 text-zinc-400 hover:text-white transition-all cursor-pointer shadow-md"
          >
            {isOpen ? (
              <X className="h-4.5 w-4.5" />
            ) : (
              <Menu className="h-4.5 w-4.5" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Drawer (Mobile Only) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute top-18 right-4 w-44 p-1 rounded-xl bg-zinc-950/95 border border-zinc-800/80 shadow-2xl backdrop-blur-lg flex flex-col gap-0.5 z-50 sm:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-900/60 hover:text-white transition-all text-xs font-medium"
                >
                  <link.icon className="h-4 w-4" />
                  {link.name}
                </a>
              ))}
              <a
                href="https://github.com/ChandanSha-bit"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-900/60 hover:text-white transition-all text-xs font-medium border-t border-zinc-900 mt-0.5 pt-1.5"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub Profile
              </a>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};
