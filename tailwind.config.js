/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    screens: {
      web: '940px',
    },
    extend: {
      colors: {
        primary: '#0192FE',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        h3: { fontSize: '32px', fontWeight: '700', lineHeight: '40.32px' },
      });
    }),
  ],
};
