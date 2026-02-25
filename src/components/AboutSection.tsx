import React from "react";
import { Briefcase, GraduationCap, MapPin, Mail } from "lucide-react";

interface AboutSectionProps {
  darkMode: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  const skills = [
    "Data Structures",
    "Algorithms",
    "Problem Solving",
    "C++",
    "Java",
    "Python",
    "System Design",
  ];

  const philosophyPoints = [
    {
      title: "Learn by Doing",
      description:
        "Hands-on practice with real coding challenges and interactive examples.",
    },
    {
      title: "Visual Learning",
      description:
        "Complex concepts explained through intuitive visualizations and diagrams.",
    },
    {
      title: "Progressive Learning",
      description:
        "Structured curriculum that builds from fundamentals to advanced topics.",
    },
  ];

  return (
    <section className="pt-40 pb-24 px-4 bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="card p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <img
              src="/assets/Profile.jpg"
              alt="Pranav Arun"
              className="w-40 h-40 rounded-card shadow-lg object-cover ring-4 ring-white dark:ring-slate-800"
            />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Pranav Arun
              </h2>
              <p className="text-lg text-brand-600 dark:text-brand-400 font-medium mb-4">
                Computer Science Researcher & Educator
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <MapPin size={16} />
                  <span>Bengaluru, India</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail size={16} />
                  <span>pranavarun19@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Professional Background
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Dedicated to bridging the gap between theoretical computer
                science and practical software implementation. My focus lies in
                developing efficient algorithms and making complex data
                structures intuitive for the next generation of engineers.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Currently pursuing specialized research in Computer Science and
                Business Systems, focusing on the intersection of algorithmic
                efficiency and enterprise scalability.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 rounded-button text-xs font-semibold uppercase tracking-wider border border-slate-200 dark:border-slate-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Core Principles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {philosophyPoints.map((point) => (
                <div
                  key={point.title}
                  className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-card border border-transparent hover:border-brand-500/20 transition-all duration-300">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                    {point.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
