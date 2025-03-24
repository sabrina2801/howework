/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./imports/ui/**/*.{js,jsx,ts,tsx}",
    "./client/*.html",
  ],
  theme: {
    extend: {
      screens: {
        'custom-xl': '400px', 
      }
    },
  },
  plugins: [],
}
