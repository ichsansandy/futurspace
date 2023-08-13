/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      web: '940px',
    },
    extend: {
      colors: {
        primary: '#0192FE',
        secondary: '#c6e4fb',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        h2: { fontSize: '48px', fontWeight: '700', lineHeight: '67.2px' },
        h3: { fontSize: '32px', fontWeight: '700', lineHeight: '40.32px' },
      });
    }),
  ],
};
