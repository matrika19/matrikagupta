import React from 'react';
import { careerObjectiveData } from '../data/portfolioData';
import { Target, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const CareerObjective: React.FC = () => {
  return (
    <section id="objective" className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Highlighted Professional Card with Subtle Animated Background Pattern */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative rounded-3xl border border-indigo-200/80 dark:border-indigo-900/60 bg-gradient-to-b from-indigo-50/70 via-white to-indigo-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-8 sm:p-12 shadow-xl overflow-hidden text-center"
        >
          {/* Subtle animated circuit/grid backdrop */}
          <div className="absolute inset-0 bg-tech-dots-light dark:bg-tech-dots-dark opacity-60 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-violet-500/10 dark:bg-violet-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-600/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider border border-indigo-200 dark:border-indigo-800">
              <Target className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>{careerObjectiveData.heading}</span>
            </div>

            {/* Main Statement Quote */}
            <div className="max-w-2xl mx-auto">
              <blockquote className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white leading-relaxed tracking-tight">
                "{careerObjectiveData.statement}"
              </blockquote>
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-indigo-100 dark:border-slate-800 text-left">
              {careerObjectiveData.corePillars.map((pillar, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/70 dark:bg-slate-850/70 border border-slate-200/60 dark:border-slate-800 backdrop-blur-xs"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
