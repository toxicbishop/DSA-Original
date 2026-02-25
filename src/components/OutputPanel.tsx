import React from 'react';

interface OutputPanelProps {
  output: string;
  darkMode: boolean;
  minHeight?: string;
}

export const OutputPanel: React.FC<OutputPanelProps> = ({
  output,
  darkMode,
  minHeight = 'min-h-[200px]',
}) => {
  return (
    <div className={`bg-gray-100 dark:bg-gray-800 rounded-lg p-4 ${minHeight}`}>
      <pre className="whitespace-pre-wrap font-mono text-sm text-gray-900 dark:text-gray-100">
        {output}
      </pre>
    </div>
  );
};
