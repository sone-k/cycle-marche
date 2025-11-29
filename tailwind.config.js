/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  safelist: [
    "!bg-[#E79D34]",
    "!bg-[#34ACE7]",
    "!bg-[#04a89b]",
  ],
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
