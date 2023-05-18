/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '31': 'repeat(31, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
        '21': 'repeat(21, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-20': 'span 20 / span 20',
      },
      gridTemplateRows: {
        '48': 'repeat(48, minmax(0, 1fr))',
        
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-10': 'span 10 / span 10',
        'span-18': 'span 18 / span 18',
        'span-33': 'span 33 / span 33',
        'span-38': 'span 38 / span 38',
      },
      width: {
        '46/48': 'calc(46/48 * 100%)',
        '47/48': 'calc(47/48 * 100%)',
        '48/48': 'calc(48/48 * 100%)',
      },
      
    },
  },
  plugins: [],
}