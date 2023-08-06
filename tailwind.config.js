/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        C_DPurple: '#5d5b8d',
        C_Button_LPurple: '#7b96ec',
        C_LPurple: '#a7bcff',
        C_white: '#FFF',
        C_Grape: '#3e3c61',
        C_DGrape: '#2f2d52',
        C_LGrape:"#ddddf7",
      },
      animation :{
        
      },
      theme: {
      }
    },
  },
  plugins: [],
}

