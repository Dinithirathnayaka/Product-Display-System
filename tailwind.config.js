/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        customh1: "55vh",
        customh2: "200px",
        customh3: "100px",
        customh4: "100vh",
      },
      width: {
        customw1: "60vw",
        customw2: "180px",
        customw3: "170px",
        customw4: "185px",
      },
      zIndex: {
        negative: "-1",
        customz1: "999",
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
