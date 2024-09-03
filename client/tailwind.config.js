/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/components/**/*.{js,jsx,ts,tsx}',
            './src/*.{js,jsx,ts,tsx}',
            './src/components/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens:{
        'cmd':'846px',
        'cxs':'640px'
      }
    },
  },
  plugins: [],
}

