/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0fb00c",
        secondary: {
          100: "#0fb00c",
          100: "#b1cfb0",
        }
      },
      fontFamily: {
        body: ['Nunito', ]
      }
    },
  },
  plugins: [],
};
