/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "jost-bold": ["jost-bold"],
        "jost-medium": ["jost-medium"],
        "jost-light": ["jost-light"],
        "seoge-ui": ["seoge-UI"],
        'gilroy' :["Gilroy"],
        'twitterchirp': ["twitterchirp"],
        'poppins-bold': ["poppins-bold"],
        'poppins-regular': ["poppins-regular"],
        'poppins-medium': ["poppins-medium"],
      },
    },
  },
  plugins: [],
};

