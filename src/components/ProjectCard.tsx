import React, { useState } from 'react';
import type { Project } from '../types/portfolio';
import { CheckCircle2, ArrowRight, Radio, Eye, Volume2, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-800/80 transition-all duration-300 overflow-hidden"
    >
      {/* Top Banner & Number Badge */}
      <div className="p-6 pb-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60">
              PROJECT {project.number}
            </span>
            <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-md border border-emerald-200/60 dark:border-emerald-800/50 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {project.status}
            </span>
          </div>

          <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
            IoT & Hardware
          </span>
        </div>

        {/* Technical Visual Graphic Container */}
        <div className="relative w-full h-44 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/60 overflow-hidden flex items-center justify-center p-4">
          
          {/* Subtle Grid in Visual */}
          <div className="absolute inset-0 bg-tech-grid-light dark:bg-tech-grid-dark opacity-40 pointer-events-none" />

          {/* Render Customized Visual based on project */}
          {project.illustrationType === 'dustbin-iot' ? (
            /* BinWise IoT Illustration */
            <div className="relative w-full h-full flex items-center justify-around z-10">
              
              {/* Ultrasonic Waves Simulation */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-xs">
                  <Radio className={`w-4 h-4 ${isHovered ? 'animate-pulse text-indigo-500' : ''}`} />
                </div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">HC-SR04 Sensor</span>
                
                {/* Simulated Radar Wave Arcs */}
                <div className="flex gap-1 mt-1">
                  <span className={`w-1 h-3 rounded-full bg-indigo-400 ${isHovered ? 'animate-bounce' : 'opacity-60'}`} style={{ animationDelay: '0ms' }} />
                  <span className={`w-1 h-4 rounded-full bg-indigo-500 ${isHovered ? 'animate-bounce' : 'opacity-80'}`} style={{ animationDelay: '150ms' }} />
                  <span className={`w-1 h-3 rounded-full bg-indigo-400 ${isHovered ? 'animate-bounce' : 'opacity-60'}`} style={{ animationDelay: '300ms' }} />
                </div>
              </div>

              {/* Connecting Signal Arrow */}
              <div className="flex flex-col items-center">
                <span className="text-[9px] font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/80 px-1.5 py-0.5 rounded">
                  {isHovered ? 'Lid: OPEN 90°' : 'Proximity Scan'}
                </span>
                <div className="w-12 h-0.5 bg-indigo-400/50 my-1 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                </div>
              </div>

              {/* Smart Bin Graphic */}
              <div className="flex flex-col items-center">
                <div className={`w-14 h-16 rounded-xl border-2 ${isHovered ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/40' : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'} flex flex-col items-center justify-between p-1.5 shadow-sm transition-colors`}>
                  {/* Lid */}
                  <div className={`w-full h-2 rounded-t-md bg-indigo-600 dark:bg-indigo-500 transition-transform origin-left ${isHovered ? '-rotate-25' : ''}`} />
                  <Trash2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 my-auto" />
                  <div className="w-full flex justify-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-1">Smart Bin Unit</span>
              </div>

            </div>
          ) : (
            /* Noise Detector Wave Visual */
            <div className="relative w-full h-full flex flex-col items-center justify-center gap-2 z-10">
              
              <div className="w-full flex items-center justify-between px-2">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                  <Volume2 className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Acoustic Monitor</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200/50">
                  <span>Threshold: 65dB</span>
                </div>
              </div>

              {/* Dynamic Sound Waves */}
              <div className="w-full flex items-center justify-center gap-1.5 h-14 px-4 bg-white/60 dark:bg-slate-900/60 rounded-lg border border-slate-200/60 dark:border-slate-800">
                {[18, 32, 48, 26, 54, 40, 62, 35, 50, 22, 45, 28, 58, 30, 20].map((height, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: isHovered 
                        ? [height * 0.4, height, height * 0.6] 
                        : [height * 0.7, height * 0.9, height * 0.7]
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.05
                    }}
                    className={`w-1.5 rounded-full ${
                      i === 6 || i === 12 
                        ? 'bg-amber-500 dark:bg-amber-400' 
                        : 'bg-indigo-600 dark:bg-indigo-400'
                    }`}
                  />
                ))}
              </div>

              <div className="w-full flex justify-between items-center px-2 text-[10px] font-mono text-slate-400">
                <span>0 dB (Silence)</span>
                <span className="text-amber-500 font-medium">Alert Level</span>
                <span>100 dB (High)</span>
              </div>

            </div>
          )}

        </div>

        {/* Title and Tagline */}
        <div className="mt-5 space-y-1.5">
          <h3 className="text-xl font-bold text-slate-950 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            "{project.description}"
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="mt-4 space-y-1.5">
          {project.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Card Bottom: Tags & Action Button */}
      <div className="p-6 pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/30 flex flex-col gap-4">
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-2xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={() => onViewDetails(project)}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 text-white font-medium text-xs sm:text-sm transition-all duration-200 shadow-xs group/btn"
        >
          <Eye className="w-4 h-4 text-slate-400 group-hover/btn:text-white transition-colors" />
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>

      </div>
    </motion.div>
  );
};
