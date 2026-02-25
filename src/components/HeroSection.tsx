import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-40 pb-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.1]"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
          Master Data Structures <br className="hidden md:block" />
          <span
            className="text-brand-600 dark:text-brand-400"
            style={{ textShadow: "0 2px 10px rgba(14,148,233,0.4)" }}>
            & Algorithms
          </span>
        </h2>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A comprehensive laboratory hub for exploring, understanding, and
          implementing core computer science fundamentals through interactive
          demonstrations.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="btn-primary px-8 py-3">Explore Programs</button>
          <button className="btn-secondary px-8 py-3">Learn More</button>
        </div>
      </div>
    </section>
  );
};
