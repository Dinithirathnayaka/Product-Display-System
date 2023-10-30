/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        customh1: "300px",
      },
      width: {
        customw1: "280px",
        customw2: "290px",
      },
      zIndex: {
        negative: "-1",
        customz1: "999",
      },

      fontSize: {
        size1: "30px",
      },
      margin: {
        customm1: "5px",
      },
      padding: {
        customp1: "5px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-none": {
          /* Hide scrollbar */
          scrollbarWidth: "none" /* Firefox */,
          "-ms-overflow-style": "none" /* Internet Explorer 11 */,
          "&::-webkit-scrollbar": {
            width: "0.4em",
            display: "none" /* Hide scrollbar for Chrome, Safari, and Opera */,
          },
          "&::-webkit-scrollbar-thumb": {
            background: "transparent" /* Hide scrollbar thumb */,
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
