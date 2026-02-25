import React from "react";

interface CodeBlockProps {
  code: string;
  darkMode: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, darkMode }) => {
  return (
    <div className="bg-slate-50 dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-button overflow-hidden">
      <div className="bg-slate-100 dark:bg-slate-900 px-4 py-2 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
          C Source Code
        </span>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
        </div>
      </div>
      <div className="p-4 md:p-6 overflow-x-auto">
        <pre className="font-mono text-sm text-slate-700 dark:text-slate-300 antialiased leading-relaxed">
          {code}
        </pre>
      </div>
    </div>
  );
};
