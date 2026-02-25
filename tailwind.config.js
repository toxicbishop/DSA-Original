/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae2fd",
          300: "#7ccbfd",
          400: "#38b0f8",
          500: "#0e94e9",
          600: "#0276c9",
          700: "#035ea1",
          800: "#075085",
          900: "#0c436f",
          950: "#082b49",
        },
        surface: {
          light: "#ffffff",
          dark: "#0f172a",
          depth: "#1e293b",
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
