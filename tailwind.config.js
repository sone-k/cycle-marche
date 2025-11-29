/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "var(--dark-green)",
      },
      fontFamily: {
        h: "var(--h-font-family)",
      },
    },
  },
  plugins: [],
};
