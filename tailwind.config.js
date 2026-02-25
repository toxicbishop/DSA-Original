/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764",
        },
        accent: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        surface: {
          light: "#ffffff",
          dark: "#0c0a1a",
          depth: "#1a1530",
        },
      },
      borderRadius: {
        button: "0.5rem",
        card: "0.75rem",
      },
      spacing: {
        navbar: "4rem",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animation: {
        "subtle-lift": "lift 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
      keyframes: {
        lift: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-4px)" },
        },
      },
    },
  },
  plugins: [],
};
