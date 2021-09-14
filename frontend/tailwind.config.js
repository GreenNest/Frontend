const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ArchitectsDaughter: ["Architects Daughter"],
      },
       boxShadow:{
      'card': '20px 20px 50px #6A994E'
    },
    height: {
       im: '80vh',
       x: '200px',
       icon: '6rem',
       border: '2px',
       card:'400px'
    },
    fontSize:{
      '50': '50px',
      '20':'20px',
      '30':'30px',
      '6' : '3vw',
      '2': '2vw',
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
  
    gridTemplateColumns: {
         'footer': '25% 20% 23% 20%',
         'smallfooter': 'repeat(2, minmax(0, 1fr))',
         'feature': 'repeat(4, minmax(0, 1fr))',
         'feature2': 'repeat(2, minmax(0, 1fr))',
         'sidebar-colums': '0.8fr 3fr',
         'sidebar-rows': 'auto',
         'dashboard': '40% 40%',
         'cart':'25% 15% 7% 15% 8% 15% 15% '
    },
    screens: {
      xxxsm: "280px",
      xxsm: "400px",
    },
    
    
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      green: colors.green,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      maingreen: "#386641",
      hovergreen: '#5ba86a',
      secondarygreen: "#6A994E",
      lightgreen: "#A7C957",
      redcolor: "#BC4749",
      secondarygreen: "#6A994E",
      mainyellow: "#F2E8CF",
      darkyellow: "#eddeb7",
      hovercolor: "rgb(0, 0, 0, 0.6)",
      blue: colors.blue,
      lightred: "#ff3333",
    },
    
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
