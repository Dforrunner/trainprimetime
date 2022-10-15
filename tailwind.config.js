/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'secondary': '0 0 5px #e84039',
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },
    colors: {
      primary: '#1e191a',
      secondary: '#e84039',
      third: '#2eaee4',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#fff',
      'black': '#000',
      'muted': 'rgba(255,255,255,0.5)'
    }
  },
  plugins: [],
}