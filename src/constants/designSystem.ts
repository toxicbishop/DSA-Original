export const designSystem = {
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    2xl: '3rem',
    3xl: '4rem',
  },

  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
  },

  colors: {
    primary: '#f97316',
    primaryHover: '#ea580c',

    text: {
      light: '#1f2937',
      lightSecondary: '#6b7280',
      dark: '#ffffff',
      darkSecondary: '#e5e7eb',
    },

    bg: {
      light: '#f9fafb',
      lightCard: '#ffffff',
      dark: '#111827',
      darkCard: '#1f2937',
    },

    border: {
      light: '#e5e7eb',
      dark: '#374151',
    },

    accent: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
    },
  },

  typography: {
    heading: {
      xl: { size: '2rem', weight: 700, lineHeight: 1.2 },
      lg: { size: '1.5rem', weight: 700, lineHeight: 1.2 },
      md: { size: '1.25rem', weight: 600, lineHeight: 1.3 },
      sm: { size: '1rem', weight: 600, lineHeight: 1.4 },
    },
    body: {
      lg: { size: '1.125rem', weight: 400, lineHeight: 1.6 },
      md: { size: '1rem', weight: 400, lineHeight: 1.6 },
      sm: { size: '0.875rem', weight: 400, lineHeight: 1.5 },
    },
    code: {
      size: '0.875rem',
      weight: 500,
      lineHeight: 1.6,
    },
  },

  transitions: {
    fast: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};
