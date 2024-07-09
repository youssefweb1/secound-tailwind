/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue: {
        'daken' :   '#3A405A' , 
        'fateh' :   '#99B2DD' , 

        } ,

        wardifateh : '#FFF4EB' ,
      },
      container: {
        center: true,
        padding: "1rem",
      },
      opacity: {
        50: "0.6",
      },
      fontFamily: {
        'arabic' : `"Beiruti", sans-serif;`,
      },

      height: {
        '150' : '450px',
        '100' : '400px',
        '90' : '350px',
      },

      boxShadow: {
        'med': 'box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
      }


    },
  },
  plugins: [],
};
