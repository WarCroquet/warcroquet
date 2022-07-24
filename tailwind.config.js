/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'green': {
          900: '#00563E',
          1100: '#002219',
          1200: '#003B2B',
        },
        'yellow': {
          300: '#E3CA79',
          1100: '#EDD782',
          1200: '#BA9856',
        },
        'iconGrey': '#A5BFB8',
        
      },
      boxShadow: {
        'warCircle': '2px 4px 4px 0 rgba(0, 0, 0, 0.25)',
      },
    },
    fontFamily: {
      heading: ['Work Sans', 'sans-serif'],
    },
  },
  plugins: [],
}
