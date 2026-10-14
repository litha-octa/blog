/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        bg: '#0c0c0e',
        bg2: '#131316',
        bg3: '#1a1a1f',
        accent: '#c8f060',
        accent2: '#60d4f0',
        accent3: '#f060a0',
        muted: '#7a7870',
        border: 'rgba(255,255,255,0.07)',
        border2: 'rgba(255,255,255,0.12)',
      },
      animation: {
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fill-bar': 'fillBar 1s ease forwards',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        fadeUp: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fillBar: {
          to: { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
}
