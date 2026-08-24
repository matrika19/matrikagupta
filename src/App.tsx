import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Strengths } from './components/Strengths';
import { CareerObjective } from './components/CareerObjective';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero />
          <About />
          <Education />
          <Projects />
          <Skills />
          <Strengths />
          <CareerObjective />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </ThemeProvider>
  );
};

export default App;
