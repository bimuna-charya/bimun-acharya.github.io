/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050816',
        night: '#080b1a',
        panel: 'rgba(12, 18, 40, 0.68)',
        line: 'rgba(148, 163, 184, 0.18)',
        neon: {
          blue: '#22d3ee',
          cyan: '#38bdf8',
          purple: '#a855f7',
          violet: '#7c3aed',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 45px rgba(34, 211, 238, 0.22)',
        purple: '0 0 45px rgba(168, 85, 247, 0.24)',
        card: '0 24px 90px rgba(0, 0, 0, 0.36)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at top left, rgba(34, 211, 238, 0.18), transparent 28%), radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.2), transparent 30%)',
        'cyber-line':
          'linear-gradient(90deg, rgba(34, 211, 238, 0.18), rgba(168, 85, 247, 0.18), rgba(56, 189, 248, 0.18))',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.35 },
          '50%': { opacity: 0.72 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatPanel: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.8s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        marquee: 'marquee 26s linear infinite',
        floatPanel: 'floatPanel 7s ease-in-out infinite',
        scan: 'scan 5s linear infinite',
      },
    },
  },
  plugins: [],
};
