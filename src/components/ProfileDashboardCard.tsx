import React, { useState, useEffect } from 'react';
import { personalInfo, dashboardStats } from '../data/portfolioData';
import { DynamicIcon } from './DynamicIcon';
import { MapPin, Building2, Clock, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProfileDashboardCard: React.FC = () => {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format Bangalore time (IST)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTimeStr(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-full max-w-md mx-auto"
    >
      {/* Subtle outer glow on dark mode */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-70 dark:opacity-40 group-hover:opacity-100 transition duration-1000"></div>

      <div className="relative rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-xl overflow-hidden">
        
        {/* Card Header Bar with Dashboard Controls */}
        <div className="px-5 py-3.5 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-950/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block"></span>
            <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 ml-1 font-medium">
              matrika.profile.sys
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-600 dark:text-slate-400 bg-slate-200/60 dark:bg-slate-800/60 px-2 py-0.5 rounded-md">
            <Clock className="w-3 h-3 text-indigo-500" />
            <span>{timeStr || 'IST'}</span>
          </div>
        </div>

        {/* Profile Main Body */}
        <div className="p-6">
          {/* Identity Header */}
          <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800/80">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {personalInfo.name}
                </h3>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active
                </span>
              </div>
              
              <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                B.Tech — CSE (AI & Data Science)
              </p>

              <div className="pt-2 flex flex-col gap-1 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{personalInfo.university}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Avatar / Monogram Badge */}
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 p-0.5 shadow-md flex items-center justify-center text-white font-bold text-xl">
                <div className="w-full h-full rounded-[14px] bg-slate-900/10 flex items-center justify-center backdrop-blur-xs">
                  MG
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              </div>
            </div>
          </div>

          {/* Quick Metrics / Statistics Cards */}
          <div className="mt-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 flex items-center gap-1">
                <Activity className="w-3 h-3 text-indigo-500" />
                Key Profile Highlights
              </span>
              <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400">
                Verified Info
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {dashboardStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800/80 hover:border-indigo-100 dark:hover:border-indigo-900/60 transition-all shadow-2xs"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="w-6 h-6 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                      <DynamicIcon name={stat.iconName} className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white font-mono">
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-600 dark:text-slate-300 truncate mt-0.5">
                    {stat.subtext}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer Badge / Hardware & AI Readiness */}
          <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              Specialization Focus
            </span>
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              AI • Data Science • IoT
            </span>
          </div>

        </div>
      </div>
    </motion.div>
  );
};
