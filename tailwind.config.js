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
      fontSize: {
        h2: '48px',
      },
      lineHeight: {
        h2: '67.2px',
      },
      boxShadow: {
        'custom-shadow': '0px 4.4795050621032715px 70px 0px rgba(0, 0, 0, 0.10)',
      },
      colors: {
        primary: '#0192FE',
        accent: '#f0f6ff',
        background: '#fcfcfc',
        secondary: '#2E3135',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        h2: { fontSize: '48px', fontWeight: '700', lineHeight: '67.2px' },
        h3: { fontSize: '32px', fontWeight: '700', lineHeight: '40.32px' },
      });
    }),
  ],
};
