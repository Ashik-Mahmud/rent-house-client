/** @type {import('tailwindcss').Config} */
module.exports ={
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    theme: {
      extend: {},
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
