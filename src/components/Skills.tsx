import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { DynamicIcon } from './DynamicIcon';
import { Binary } from 'lucide-react';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-indigo-200/70 dark:border-indigo-800/60">
            <Binary className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            Technical Interests
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-500 rounded-full mt-2" />
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 max-w-xl">
            Categorized dashboard reflecting academic disciplines, technological interests, and practical engineering focus areas.
          </p>
        </div>

        {/* Categorized Skills Dashboard Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => {
            const isHovered = activeCategory === category.id;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
                whileHover={{ y: -4 }}
                className={`relative p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? 'border-indigo-400 dark:border-indigo-600 bg-white dark:bg-slate-850 shadow-lg'
                    : 'border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 shadow-2xs'
                }`}
              >
                {/* Header Icon + Title */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center shadow-2xs">
                      <DynamicIcon name={category.iconName} className="w-5 h-5" />
                    </div>

                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded">
                      Domain 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1.5">
                    {category.name}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {category.description}
                  </p>
                </div>

                {/* Focus Areas Matrix Badges */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Key Focus Concepts
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                      >
                        <span className="w-1 h-1 rounded-full bg-indigo-500"></span>
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
