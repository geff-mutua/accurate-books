/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#0F2B87",
        "secondary":"#ff4700",
        "tartiary":"#6941C6",
        "dark":"#101828",
        "dark2":"#475467"
      },
      boxShadow:{
        '3xl':'0 10px 50px 0px rgba(0,0,0, 0.15)',
      }
    },
  },
  plugins: [],
}

