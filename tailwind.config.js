/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
        'europe': ['Europe', 'sans-serif']
      },
      colors: {
        'orange': '#FF6600'
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
          'show': 'showIn .4s ease-in-out',
      },
      keyframes: {
        showIn: {
          '0%': {opacity: 0},
          '100%': {opacity: 1},
        }
      }
    },
  },
  plugins: [],
}

