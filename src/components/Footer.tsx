import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Degree Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 dark:text-white text-base tracking-tight">
                {personalInfo.name}
              </span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                {personalInfo.degree}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 italic">
              "{personalInfo.tagline}"
            </p>
          </div>

          {/* Copyright & University */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-1">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              © 2026 {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-400 dark:text-slate-500">
              REVA University • Bangalore, Karnataka, India
            </p>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-900 transition-all shadow-2xs hover:scale-105 focus:outline-none"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>
      </div>
    </footer>
  );
};
