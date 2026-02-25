import React from 'react';
import { Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { Icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  ];

  return (
    <footer className="bg-white/5 backdrop-blur-sm py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-6">&copy; 2025 DSA Study Hub</p>
        <div className="flex justify-center space-x-6">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full hover:bg-orange-500/10 transition-all transform hover:scale-110"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
