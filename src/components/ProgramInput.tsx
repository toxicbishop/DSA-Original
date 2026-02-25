import React from "react";

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
    <div className="flex gap-3">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && onSubmit()}
        placeholder={placeholder}
        disabled={isLoading}
        className="input"
      />
      <button
        onClick={onSubmit}
        disabled={isLoading || !value.trim()}
        className="btn-primary min-w-[100px]">
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4 text-white"
              viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Wait...</span>
          </span>
        ) : (
          "Submit"
        )}
      </button>
    </div>
  );
};
