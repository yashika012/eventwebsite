/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lalezar:'Lalezar',
        montserrat:'Montserrat',
        sans:'Open Sans'
      },
      colors:{
        sign:'#2B293D',
        border:'rgba(130,130,130,0.70)',
        eyes:'#A4A4A4',
        text:'#636363',
        para:'#2D2C3C',
        heading:'#FFE047',
        search:'#5A5A5A',
        button:"#F8F7FA"
      },
    },
  },
  plugins: [],
}

