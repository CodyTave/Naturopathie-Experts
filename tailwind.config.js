/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "leaf":["#457938","#66915B","#DFECDC"],
        "earth":["#9D6A52","#AC7962"],
        "dark":["#212221"],
        "light":["#F8FDF7"],
      },
      colors:{
        "leaf":["#457938","#66915B"],
        "earth":["#9D6A52","#AC7962"],
        "dark":["#212221"],
        "light":["#F8FDF7"],
      },
      fontFamily:{
        "sans":"poppins",
        "sec":"Natural"
      },
      screens:{
        "md":"855px",
        "lmd":"1162px"
      }
    },
  },
  plugins: [],
}