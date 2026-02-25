import React from "react";
import { Moon, Sun, ChevronDown, Home, Code2, User } from "lucide-react";

interface NavigationProps {
  darkMode: boolean;
  toggleTheme: () => void;
  isNavbarScrolled: boolean;
  isProgramsOpen: boolean;
  setIsProgramsOpen: (open: boolean) => void;
  onHomeClick: () => void;
  onAboutClick: () => void;
  onProgramClick: (program: string) => void;
  programs: Array<{ name: string; href: string }>;
}

export const Navigation: React.FC<NavigationProps> = ({
  darkMode,
  toggleTheme,
  isNavbarScrolled,
  isProgramsOpen,
  setIsProgramsOpen,
  onHomeClick,
  onAboutClick,
  onProgramClick,
  programs,
}) => {
  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isNavbarScrolled
          ? "bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 shadow-sm"
          : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-bold text-brand-600 dark:text-brand-400 tracking-tight">
            DSA <span className="text-slate-900 dark:text-white">Hub</span>
          </h1>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={onHomeClick}
              className="flex items-center space-x-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              <Home size={18} />
              <span>Home</span>
            </button>

            <div className="relative programs-dropdown">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsProgramsOpen(!isProgramsOpen);
                }}
                className="flex items-center space-x-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                aria-expanded={isProgramsOpen}>
                <Code2 size={18} />
                <span>Programs</span>
                <ChevronDown
                  size={14}
                  className={`transform transition-transform duration-200 ${isProgramsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isProgramsOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-surface-depth rounded-card shadow-xl py-2 border border-slate-200 dark:border-slate-800 ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
                  {programs.map((program) => (
                    <button
                      key={program.href}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                      onClick={() => onProgramClick(program.name)}>
                      {program.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={onAboutClick}
              className="flex items-center space-x-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              <User size={18} />
              <span>About</span>
            </button>

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-2" />

            <button
              onClick={toggleTheme}
              className="p-2 rounded-button text-slate-500 hover:text-brand-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-90"
              aria-label="Toggle theme">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
