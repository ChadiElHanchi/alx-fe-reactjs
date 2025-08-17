/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",          // required by checker
    "./src/**/*.{js,jsx,ts,tsx}"   // include all React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
