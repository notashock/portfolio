// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          light: '#ffffff',   // White
          dark: '#18181B',    // Neutral black (no navy!)
        },
        text: {
          light: '#1e293b',   // Slate-800
          dark: '#f1f5f9',    // Slate-100
        },
        heading: {
          light: '#0f172a',   // Slate-900
          dark: '#f8fafc',    // Slate-50
        },
        primary: {
          light: '#16A34A',   // Emerald-600 (main green)
          dark: '#22C55E',    // Emerald-500 (bright green on dark)
        },
        secondary: {
          light: '#4ADE80',   // Emerald-400 (fresh accent green)
          dark: '#86EFAC',    // Emerald-300 (lighter for dark mode contrast)
        },
        accent: {
          light: '#10B981',   // Emerald-500 (green accent in light)
          dark: '#34D399',    // Emerald-400 (soft glowing green in dark)
        },
        muted: {
          light: '#e5e7eb',   // Gray-200 (subtle borders/light bg)
          dark: '#374151',    // Gray-700 (neutral muted dark bg)
        },
      },
    },
  },
  plugins: [],
};
