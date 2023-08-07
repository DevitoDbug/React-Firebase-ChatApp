/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        C_LightBlue: "#E3F6FC",
        C_DarkBlue: "#6588DE",
        C_Green: "#46D362",
        C_TextWhite: "#FDFDFE",
        C_TextBlack: "#52585D",
      },
      animation :{
        
      },
      theme: {
      }
    },
  },
  plugins: [],
}

