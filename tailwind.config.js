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
        bangla: ['Hind Siliguri', 'sans-serif']
      },
    },
    plugins: [require("daisyui")], 
    daisyui: {
        styled: true,
        themes: [ "emerald", "night", "winter"],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "light",
      },
  }
