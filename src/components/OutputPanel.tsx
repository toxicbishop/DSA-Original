import React from "react";

interface OutputPanelProps {
  output: string;
  darkMode: boolean;
  minHeight?: string;
}

export const OutputPanel: React.FC<OutputPanelProps> = ({
  output,
  darkMode,
  minHeight = "min-h-[200px]",
}) => {
  return (
    <div
      className={`bg-slate-900 border border-slate-800 rounded-button p-6 relative group overflow-hidden ${minHeight}`}>
      <div className="absolute top-0 right-0 p-3 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-slate-700" />
        <div className="w-2 h-2 rounded-full bg-slate-700" />
        <div className="w-2 h-2 rounded-full bg-slate-700" />
      </div>
      <pre className="whitespace-pre-wrap font-mono text-sm text-brand-300 antialiased leading-relaxed">
        {output || "// Program output will appear here..."}
      </pre>
    </div>
  );
};
