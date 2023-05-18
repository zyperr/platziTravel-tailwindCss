/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./build/*.html","./build/*.js"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#CC2D4A",
      secondary: "#8FA206",
      terciary: "#61AEC9",
    }),
    textColor: (colors) => ({
      ...colors("colors"),
      primary: "#CC2D4A",
      secondary: "#8FA206",
      terciary: "#61AEC9",
    }),
	fontFamily: {
		Montserrat: ['"Montserrat"', "sans-serif"]
	},
    extend: {
      backgroundImage: {
        sanFrancisco: "url('../assets/img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../assets/img/sanFranciscoDesktop.jpg')",
        yosemite: "url('../assets/img/yosemite.jpg')",
        LA: "url('../assets/img/LA.jpg')",
        seattle: "url('../assets/img/seattle.jpg')",
        new_york: "url('../assets/img/new_york.jpg')",
        norway: "url('../assets/img/norway.jpg')",
        sydney: "url('../assets/img/sydney.jpg')",
        miami: "url('../assets/img/miami.jpg')",
        switzerland: "url('../assets/img/switzerland.jpg')",
        bali: "url('../assets/img/bali.jpg')",
        chicago: "url('../assets/img/chicago.jpg')",
        europe: "url('../assets/img/europe.jpg')",
        iceland: "url('../assets/img/iceland.jpg')",
        camboya: "url('https://content.skyscnr.com/m/0d04713c0776acbd/original/GettyImages-154291114_doc.jpg')",
        iguazu: "url('https://content.skyscnr.com/m/6cd9ada5314c53a9/original/GettyImages-467310275.jpg?resize=1800px:1800px&quality=100')",
        greece:"url('https://content.skyscnr.com/m/1cc336eac65d4364/original/h2-santorini-greece.jpg?resize=800px:600px&quality=100')",
        peru:"url('https://content.skyscnr.com/m/6e3cd168391dd764/original/GettyImages-526212233.jpg?resize=1800px:1800px&quality=100')",
        japan:"url('https://content.skyscnr.com/m/32ff7d25bdf290cc/original/kioto-arashiyama-bosque-bambu-editorial-use-only-viajeros-callejeros.jpg?resize=1800px:1800px&quality=100')"
      },
    },
  },
  plugins: [],
};
