/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        matteBlack: "#2f2f2f", // Custom matte black shade
      },
    },
  },
  plugins: [],
};
