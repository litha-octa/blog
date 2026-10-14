import type { Config } from 'tailwindcss';

// "Ocean Royale" palette. Used flat only, never as gradients.
// Do not add colors outside this list.
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      navy: '#03045E',
      brand: '#023EBA',
      cyan: '#00B4D8',
      ice: '#CAF0F8',
      marigold: '#FBB02D',
      paper: '#F1FAFD',
      muted: '#3A4A7A',
      rule: '#B9E3EE',
      'navy-line': '#2A2E86',
      'art-tile': '#14177A',
      'art-muted': '#8FB6D6',
    },
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
};

export default config;
