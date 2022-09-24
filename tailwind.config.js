/** @type {import('tailwindcss').Config} */
module.exports ={
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
   
    theme: {
      extend: {},
      fontFamily: {
        open: ['Open Sans', 'sans-serif'],
        poppins: ['poppins', 'sans-serif'],
      },
    },
    plugins: [require("daisyui")], 
    daisyui: {
        styled: true,
        themes: ["winter", "night"],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "light",
      },
  }
