import React from 'react';

interface ProgramInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder: string;
  isLoading?: boolean;
}

export const ProgramInput: React.FC<ProgramInputProps> = ({
  value,
  onChange,
  onSubmit,
  placeholder,
  isLoading = false,
}) => {
  return (
    <div className="flex space-x-4">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && onSubmit()}
        placeholder={placeholder}
        disabled={isLoading}
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
      />
      <button
        onClick={onSubmit}
        disabled={isLoading}
        className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors disabled:opacity-50"
      >
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
    </div>
  );
};
