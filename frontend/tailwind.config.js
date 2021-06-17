const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ArchitectsDaughter: ["Architects Daughter"],
      },
    },
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
      secondarygreen: "#6A994E",
      lightgreen: "#6A994E",
      redcolor: "#BC4749",
      mainyellow: "#F2E8CF",
      hovercolor: "rgb(0, 0, 0, 0.6)",
      blue: colors.blue,
    },
    fontSize:{
      '50': '50px',

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
       icon: '6rem',
       border: '2px',
    },
    gridTemplateColumns: {
         'footer': '250px 50px 200px 300px 200px',
        }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
