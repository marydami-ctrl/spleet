/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}", 
    "./layout/**/*.vue", 
    "./pages/**/*.vue", 
    "./app.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "serif"], // Add Merriweather
      },
    },
  },
  plugins: [],
};
