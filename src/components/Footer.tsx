import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-slate-800 dark:text-zinc-200 transition-colors duration-300">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-8">
        <div className="flex justify-center items-center gap-6 border-t border-slate-200/60 dark:border-zinc-800/60 pt-8">
          {/* Gmail */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=csharswat9@gmail.com" 
            target="_blank" 
            rel="noreferrer"
            aria-label="Gmail Link"
            className="p-2.5 rounded-xl text-black hover:bg-slate-100 dark:text-white dark:hover:bg-zinc-900 transition-all duration-200"
          >
            <Mail className="h-6 w-6 stroke-[1.8]" />
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/ChandanSha-bit" 
            target="_blank" 
            rel="noreferrer"
            aria-label="GitHub Link"
            className="p-2.5 rounded-xl text-black hover:bg-slate-100 dark:text-white dark:hover:bg-zinc-900 transition-all duration-200"
          >
            <GithubIcon size={24} className="stroke-[1.8]" />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/chinmayanand-saraswat" 
            target="_blank" 
            rel="noreferrer"
            aria-label="LinkedIn Link"
            className="p-2.5 rounded-xl text-black hover:bg-slate-100 dark:text-white dark:hover:bg-zinc-900 transition-all duration-200"
          >
            <LinkedinIcon size={24} className="stroke-[1.8]" />
          </a>

          {/* LeetCode */}
          <a 
            href="https://leetcode.com/u/ChandanSharswat/" 
            target="_blank" 
            rel="noreferrer"
            aria-label="LeetCode Link"
            className="p-2.5 rounded-xl text-black hover:bg-slate-100 dark:text-white dark:hover:bg-zinc-900 transition-all duration-200"
          >
            <LeetcodeIcon size={24} className="stroke-[1.8]" />
          </a>
        </div>
      </div>
    </footer>
  );
};
