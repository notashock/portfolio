// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          light: '#ffffff',     // Light background
          dark: '#0f172a',       // Dark background
        },
        text: {
          light: '#1e293b',     // Slate-800
          dark: '#f1f5f9',       // Slate-100
        },
        heading: {
          light: '#0f172a',     // Slate-900
          dark: '#f8fafc',       // Slate-50
        },
        primary: {
          light: '#6366f1',     // Indigo-500
          dark: '#818cf8',       // Indigo-400
        },
        secondary: {
          light: '#14b8a6',     // Teal-500
          dark: '#5eead4',       // Teal-300
        },
        accent: {
          light: '#f59e0b',     // Amber-500
          dark: '#facc15',       // Amber-400
        },
        muted: {
          light: '#e2e8f0',     // Gray-200
          dark: '#334155',       // Gray-700
        },
      },
    },
  },
  plugins: [],
};
