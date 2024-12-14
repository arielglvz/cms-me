/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#091a2f",
        secondary: "#F97316",
        tertiary: "#54D6BB",
      },
    },
    screens: {
      'sm': { max: '1000px'},
      // 'md': '768px',
      'lg': { max: '2023px'},
      // 'xl': '1280px',
      // '2xl': '1536px',
    }
  },
  plugins: [],
};
