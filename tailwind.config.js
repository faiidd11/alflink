/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: { 
    screens: {
      sm: "1px",
      md: "765px",
      lg: '1023px',
    },
    fontFamily : {
    'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}