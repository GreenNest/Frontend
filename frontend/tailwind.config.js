const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      maingreen: "#386641",
      lightgreen: "#6A994E",
      redcolor: "#BC4749",
      secondarygreen: "#6A994E",
      mainyellow: "#F2E8CF",
      hovercolor: "rgb(0, 0, 0, 0.6)",
      blue: colors.blue,
    },
    zIndex: {
      '200': '200',
      '100': '100',
    },
    inset: {
       '90': '90%',
       '50': '50%',
       '0': '0',
      },
      transitionDuration: {
         '0.5': '0.5s',
      },
    height: {
       im: '80vh',
       x: '200px',
    },
    gridTemplateColumns: {
         'footer': '250px 50px 200px 500px',
        }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
