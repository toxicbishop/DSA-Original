import React from "react";
import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

export const Footer: React.FC = () => {
  const socialLinks = [
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              Learning Hub
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Empowering engineers through algorithmic excellence.
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-button bg-white dark:bg-surface-depth border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500/50 transition-all duration-200 shadow-sm">
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Pranav Arun
          </div>
        </div>
      </div>
    </footer>
  );
};
