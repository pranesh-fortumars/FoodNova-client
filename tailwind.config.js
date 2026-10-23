/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#211747',
          50: '#f0eef7',
          100: '#e1dcf0',
          200: '#c4b9e0',
          300: '#9d8bca',
          400: '#6f5aa8',
          500: '#4e3a7e',
          600: '#3d2d64',
          700: '#2f234f',
          800: '#211747',
          900: '#160f31',
        },
        mint: {
          DEFAULT: '#42DFA8',
          50: '#eafbff',
          100: '#d0f5e8',
          200: '#a3ebd2',
          300: '#6ee0b8',
          400: '#42DFA8',
          500: '#2bbf8e',
          600: '#1f9a72',
          700: '#1a7a5c',
          800: '#17624b',
          900: '#14513e',
        },
        ivory: '#FCFBF7',
        sage: '#EEF7F1',
        slate: {
          DEFAULT: '#343447',
          light: '#737783',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces"', 'Georgia', 'serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'scroll-bounce': 'scrollBounce 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
};
