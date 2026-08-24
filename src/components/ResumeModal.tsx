import React from 'react';
import { personalInfo, educationData, projectsData, skillsData } from '../data/portfolioData';
import { X, Download, Mail, Phone, MapPin, CheckCircle2, FileText, Printer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadConfigured = () => {
    // Graceful trigger for configurable resume path
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = `Matrika_Gupta_Resume.pdf`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8"
        >
          {/* Modal Header */}
          <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-950/50">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                Curriculum Vitae / Resume Overview
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save</span>
              </button>
              <button
                onClick={handleDownloadConfigured}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Printable Resume Content */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200">
            
            {/* Header / Contact summary */}
            <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                {personalInfo.name}
              </h2>
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                {personalInfo.degree}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                {personalInfo.university} • Bangalore, India
              </p>

              <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  {personalInfo.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  +91 {personalInfo.phone}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                Career Objective
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                "To build a strong career in the technology industry by continuously developing my programming, AI, and data science skills while working on meaningful real-world projects."
              </p>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                Education
              </h4>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm">
                      {educationData.institution}
                    </h5>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                      {educationData.degree}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Specialization: {educationData.specialization}
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                    Currently Pursuing (2026)
                  </span>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                Technical Projects
              </h4>
              <div className="space-y-3">
                {projectsData.map(proj => (
                  <div key={proj.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                    <div className="flex justify-between items-center">
                      <h5 className="font-bold text-slate-900 dark:text-white text-sm">
                        {proj.title}
                      </h5>
                      <span className="text-[10px] font-mono text-slate-600 dark:text-slate-300">
                        {proj.tags.join(" • ")}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                      {proj.description}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {proj.features.map((feat, i) => (
                        <li key={i} className="text-[11px] text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-indigo-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Interests */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                Technical Focus & Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillsData.map(skill => (
                  <span key={skill.id} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="px-6 py-3.5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/50 flex items-center justify-between text-xs text-slate-500">
            <span>Verified Student Profile • REVA University</span>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
