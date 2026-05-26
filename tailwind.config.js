/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#ad8c45',
        'dark-blue': '#21314a',
        cream: '#f1f1e7',
        slate: {
          blue: '#5d6982',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(33, 49, 74, 0.08)',
        medium: '0 8px 30px -4px rgba(33, 49, 74, 0.12)',
        hover: '0 12px 40px -8px rgba(33, 49, 74, 0.18)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
