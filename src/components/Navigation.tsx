import React from 'react';
import { Moon, Sun, ChevronDown, Home, Code2, User } from 'lucide-react';

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
        isNavbarScrolled ? 'bg-white/10 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-orange-500">DSA Study Hub</h1>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={onHomeClick}
              className="flex items-center space-x-1 hover:text-orange-500 transition-colors"
            >
              <Home size={18} />
              <span>Home</span>
            </button>

            <div className="relative programs-dropdown">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsProgramsOpen(!isProgramsOpen);
                }}
                className="flex items-center space-x-1 hover:text-orange-500 transition-colors"
              >
                <Code2 size={18} />
                <span>Programs</span>
                <ChevronDown
                  size={16}
                  className={`transform transition-transform ${isProgramsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isProgramsOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg py-2 border border-white/20">
                  {programs.map((program) => (
                    <button
                      key={program.href}
                      className="w-full text-left px-4 py-2 hover:bg-orange-500/10 transition-colors"
                      onClick={() => onProgramClick(program.name)}
                    >
                      {program.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={onAboutClick}
              className="flex items-center space-x-1 hover:text-orange-500 transition-colors"
            >
              <User size={18} />
              <span>About</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-orange-500/10 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
