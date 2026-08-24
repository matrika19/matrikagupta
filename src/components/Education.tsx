import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, MapPin, CheckCircle2, Calendar, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-indigo-200/70 dark:border-indigo-800/60">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            Education
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-500 rounded-full mt-2" />
        </div>

        {/* Professional Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden p-6 sm:p-8 lg:p-10"
        >
          {/* Subtle accent bar at top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-600" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: University & Specialization Info */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-100 dark:border-indigo-900/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 shadow-2xs">
                  <GraduationCap className="w-7 h-7" />
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                      {educationData.institution}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      {educationData.status}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                    {educationData.degree}
                  </h4>
                </div>
              </div>

              {/* Specialization Box */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-1">
                  Core Specialization:
                </span>
                <p className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  {educationData.specialization}
                </p>
              </div>

              {/* Location & Academic Timeline Badges */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-1.5 bg-slate-100/70 dark:bg-slate-800/70 px-3 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-700/60">
                  <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>📍 {educationData.location}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-100/70 dark:bg-slate-800/70 px-3 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-700/60">
                  <Calendar className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>{educationData.timeline}</span>
                </div>
              </div>

            </div>

            {/* Right Col: Academic Subject Highlights */}
            <div className="lg:col-span-5 p-5 sm:p-6 rounded-xl bg-slate-50/70 dark:bg-slate-800/30 border border-slate-200/80 dark:border-slate-800/80 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                <span>Foundational Curriculum Focus</span>
              </div>

              <div className="space-y-2">
                {educationData.keySubjects.map((subject, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 p-2 rounded-lg bg-white dark:bg-slate-850 border border-slate-100 dark:border-slate-800/60"
                  >
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span>{subject}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-600 dark:text-slate-300 italic pt-1">
                Combining computational engineering theory with hands-on AI & sensor lab implementations.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
