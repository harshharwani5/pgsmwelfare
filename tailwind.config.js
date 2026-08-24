/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velora: {
          black: '#000000',
          offwhite: '#F8F6F2',
          gold: '#C6A14A',
          'gold-light': '#D4B96A',
          'gold-dark': '#A8872E',
          gray: '#B7B7B7',
          'gray-dark': '#1A1A1A',
          'gray-medium': '#2A2A2A',
          'gray-light': '#E5E5E5',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'luxury': '16px',
        'luxury-sm': '12px',
        'luxury-lg': '20px',
      },
      boxShadow: {
        'luxury': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'luxury-lg': '0 16px 64px rgba(0, 0, 0, 0.2)',
        'luxury-gold': '0 4px 24px rgba(198, 161, 74, 0.25)',
        'glow': '0 0 40px rgba(198, 161, 74, 0.15)',
        'inner-glow': 'inset 0 0 30px rgba(198, 161, 74, 0.1)',
      },
      backdropBlur: {
        'luxury': '20px',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(198, 161, 74, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(198, 161, 74, 0.4)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(2rem, 5vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'heading': ['clamp(1.5rem, 3vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [],
}
