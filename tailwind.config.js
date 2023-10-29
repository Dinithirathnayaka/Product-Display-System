/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        customh1: "90vh",
        customh2: "200px",
        customh3: "100px",
      },
    },
  },
  plugins: [],
};
