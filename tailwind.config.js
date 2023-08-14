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
        secondary: '#2E3135',
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        h3: { fontSize: '32px', fontWeight: '700', lineHeight: '40.32px' },
      });
    }),
  ],
};
