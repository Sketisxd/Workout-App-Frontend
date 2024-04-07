/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'my-columns': '1fr 3fr'
      },
      colors: {
        'snow-white': '#F8F8FF',
        'black-slate': '#0C0C0C',
        'charcoal-black': '#3d3939',
        
      },
      spacing: {
        '105': '27rem',
      }
    },
  },
  plugins: [],
}