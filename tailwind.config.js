/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'purple': '#7e5bef',
      "pink": "#C14679",
      "btn-hover": "#c14679",
      'purple-light': '#efedfd',
      'cart-clr': '#f3f3f3',
      'white': '#fff',
      "black": '#000',
      "t-secondary": '#8C8C8C',
      "green": "#047857",
      "red": "#dc3545",
      "yellow": "#FACC15",
      "sky": "#38BDF8",
      "blue": "#2563EB",
      "color-border": "#7B756F",
      "twitter": "#1DA1F2",
      "facebook": "#3D5A98",
      "gray": "#F3F4F8",
      "error-clr": "#F87272"
    },
    letterSpacing:{
      normal: '0',
      wide: '.025em',
      wider: '.30rem',
      widest: '.50rem',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

