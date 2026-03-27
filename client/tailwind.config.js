/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        // Premium Vibrant Light Theme
      colors: {
        // Premium Vibrant Light Theme
        background: '#fafbff', // softest blue-tinted white
        surface: '#ffffff',
        surfaceSubtle: '#f0f4ff', // subtle blue-tinted light gray for alternating sections
        surfaceHover: '#f5f7ff',
        primary: '#4f46e5',
        primaryHover: '#4338ca',
        accent: '#8b5cf6',
        border: 'rgba(0, 0, 0, 0.05)',
        textMain: '#0f172a', // deep slate for premium feel
        textMuted: '#64748b', // slate-500
        sectionBg: '#fafbff',
        cardBg: '#ffffff',
        cardBorder: 'rgba(79, 70, 229, 0.08)', // slight indigo tint to borders
        labelText: '#4f46e5',
      },
      animation: {
        'blob': 'blob 15s infinite alternate ease-in-out',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -60px) scale(1.1)' },
          '66%': { transform: 'translate(-30px, 40px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'card': '0 10px 40px -10px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 50px -12px rgba(0, 0, 0, 0.08)',
        'premium': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01)',
        'premium-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
      },
    },
  },
  plugins: [],
}
