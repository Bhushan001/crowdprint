/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f3',
          100: '#ffe4e8',
          200: '#fecdd5',
          300: '#fda4b4',
          400: '#fb718d',
          500: '#f43f68',
          600: '#e11d52',
          700: '#be1244',
          800: '#9f1240',
          900: '#88133c',
        },
        secondary: {
          50: '#eefbf4',
          100: '#d6f5e3',
          200: '#b0eacb',
          300: '#7dd9ad',
          400: '#48c189',
          500: '#25a66d',
          600: '#188557',
          700: '#156b48',
          800: '#14553b',
          900: '#124632',
        },
        accent: {
          50: '#fef3e2',
          100: '#fce4bd',
          200: '#fad394',
          300: '#f7bd5f',
          400: '#f5a623',
          500: '#e8920e',
          600: '#cc7009',
          700: '#a84f0b',
          800: '#893f10',
          900: '#713510',
        },
        brand: {
          pink: '#f43f68',
          orange: '#f5a623',
          green: '#25a66d',
          purple: '#8b5cf6',
          blue: '#3b82f6',
        },
        'text-gray': '#6e7a84',
        'border-gray': 'rgba(0,0,0,0.25)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Bellota Text', 'cursive'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
        'gradient': 'gradient 6s ease infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 2px rgba(244, 63, 104, .5)' },
          '100%': { transform: 'scale(1.2)', boxShadow: '0 0 50px transparent' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-vibrant': 'linear-gradient(-45deg, #f43f68, #f5a623, #25a66d, #8b5cf6)',
      },
    },
  },
  plugins: [],
}
