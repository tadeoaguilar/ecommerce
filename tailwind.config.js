module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    
    screens: {
      'mobile': '375px',
      
      'tablet': '768px',
      
      'laptop': '1280px',
      

      'desktop': '1920px',
      
    },


    extend: {
      fontFamily:{
        'rubik': ['Rubik'],

      },
      colors:{
        'accent': '#e63946',
        'accent-100': '#FECACE',
        'primary-100': '#f1faee',
        'primary-200': '#a8dadc',
        'primary-300': '#457b9d',
        'primary-400': '#1d3557',
  
      },
    },
  },
  plugins: [],
}