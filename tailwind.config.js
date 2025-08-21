/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        healthiq: {
          primary: '#779482',         // Salbeigrün - rgba(119,148,130,255)
          secondary: '#f1ebd7',       // Natural Hessian - rgba(241,235,215,255)
          background: '#f4f1de',      // Creme
          text: '#3b4e3a',            // dunkles Salbei für Schrift
          light: '#eff0e9',           // optionaler Soft-Ton
          // Legacy support - wird schrittweise ersetzt
          sage: '#779482',
          hessian: '#f1ebd7',
          cream: '#f4f1de',
          'sage-dark': '#3b4e3a',
          'sage-light': '#6b8a72',
        }
      }
    },
  },
  plugins: [],
};
