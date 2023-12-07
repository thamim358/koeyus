/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Sulphur Point','sans serif'],
        'mono': ['wire-frame', 'sans-serif'],
        'Achi': ['Achi', 'sans-serif'],
      },
      spacing: {
        '3px': '60px',
        '4px': '80px',
        '5px': '100px',
      },
    },
  },
 
}

