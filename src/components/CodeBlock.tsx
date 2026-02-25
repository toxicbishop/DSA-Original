import React from 'react';

interface CodeBlockProps {
  code: string;
  darkMode: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, darkMode }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
      <pre className="whitespace-pre-wrap font-mono text-sm text-gray-900 dark:text-gray-100">
        {code}
      </pre>
    </div>
  );
};
